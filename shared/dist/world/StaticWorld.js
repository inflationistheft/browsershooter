function placementToAabb(placement, def, rampMinYOverride) {
    if (def.collision !== "box" && def.collision !== "ramp")
        return null;
    const [sx, sy, sz] = def.size;
    const [cx, cy, cz] = placement.position.map(Number);
    const rot = ((Number(placement.rotation) % 360) + 360) % 360;
    const rot90 = rot === 90 || rot === 270;
    const halfX = (rot90 ? sz : sx) / 2;
    const halfZ = (rot90 ? sx : sz) / 2;
    const minX = cx - halfX;
    const maxX = cx + halfX;
    const minZ = cz - halfZ;
    const maxZ = cz + halfZ;
    let minY = cy - sy / 2;
    const maxY = cy + sy / 2;
    if (def.collision === "ramp") {
        minY =
            rampMinYOverride !== undefined
                ? rampMinYOverride
                : cy - sy / 2 + RAMP_BASE_HEIGHT;
    }
    const block = { minX, maxX, minY, maxY, minZ, maxZ };
    if (def.collision === "ramp") {
        block.rampAxis = rot90 ? "x" : "z";
        block.rampInverted = rot === 270 || rot === 180;
    }
    if (def.walkableTopOnly) {
        block.walkableTopOnly = true;
    }
    return block;
}
/** Fallback def for ramp_1x4 so it always gets a walkable block. walkableTopOnly: nur von der tiefen Seite hochlaufen. */
const RAMP_1X4_FALLBACK = {
    collision: "ramp",
    size: [4, 1.2, 2],
    walkableTopOnly: true,
};
const RAMP_ID = "ramp_1x4";
const ADJACENT_EPS = 0.05;
/** Group ramp placements into runs: same rotation, same row (perpendicular to slope), consecutive along slope axis (step = depth). */
function getRampRuns(placements, rampId, rampDepth) {
    const ramps = placements.filter((p) => p.id === rampId);
    if (ramps.length === 0)
        return [];
    const runs = [];
    const byRot = new Map();
    for (const p of ramps) {
        const rot = ((Number(p.rotation) % 360) + 360) % 360;
        if (!byRot.has(rot))
            byRot.set(rot, []);
        byRot.get(rot).push(p);
    }
    for (const [, list] of byRot) {
        const rotNorm = ((Number(list[0].rotation) % 360) + 360) % 360;
        const slopeAxisZ = rotNorm === 0 || rotNorm === 180;
        const slopePositive = rotNorm === 0 || rotNorm === 90;
        list.sort((a, b) => {
            const ax = a.position[0];
            const az = a.position[2];
            const bx = b.position[0];
            const bz = b.position[2];
            if (slopeAxisZ) {
                const diff = az - bz;
                return slopePositive ? diff : -diff;
            }
            const diff = ax - bx;
            return slopePositive ? diff : -diff;
        });
        const rowKey = (p) => slopeAxisZ ? `${Number(p.position[0]).toFixed(2)}` : `${Number(p.position[2]).toFixed(2)}`;
        const step = (p) => slopeAxisZ ? Number(p.position[2]) : Number(p.position[0]);
        const byRow = new Map();
        for (const p of list) {
            const key = rowKey(p);
            if (!byRow.has(key))
                byRow.set(key, []);
            byRow.get(key).push(p);
        }
        for (const row of byRow.values()) {
            row.sort((a, b) => (slopePositive ? step(a) - step(b) : step(b) - step(a)));
            let run = [row[0]];
            for (let i = 1; i < row.length; i++) {
                const prev = row[i - 1];
                const cur = row[i];
                const prevStep = step(prev);
                const curStep = step(cur);
                const gap = Math.abs(curStep - prevStep - (slopePositive ? rampDepth : -rampDepth));
                if (gap <= ADJACENT_EPS) {
                    run.push(cur);
                }
                else {
                    if (run.length > 0)
                        runs.push(run);
                    run = [cur];
                }
            }
            if (run.length > 0)
                runs.push(run);
        }
    }
    return runs;
}
/** Build AABB from placement position, rotation and size (no collision type). Used for kill_volume. */
function placementToAabbRaw(placement, size) {
    const [sx, sy, sz] = size;
    const [cx, cy, cz] = placement.position.map(Number);
    const rot = ((Number(placement.rotation) % 360) + 360) % 360;
    const rot90 = rot === 90 || rot === 270;
    const halfX = (rot90 ? sz : sx) / 2;
    const halfZ = (rot90 ? sx : sz) / 2;
    return {
        minX: cx - halfX,
        maxX: cx + halfX,
        minY: cy - sy / 2,
        maxY: cy + sy / 2,
        minZ: cz - halfZ,
        maxZ: cz + halfZ,
    };
}
/** Build list of kill-volume AABBs from map (prefabs with id "kill_volume"). Rotation applied like other prefabs. */
export function buildKillVolumesFromMap(map, prefabDefs) {
    const volumes = [];
    for (const placement of map.prefabs) {
        if (placement.id !== "kill_volume")
            continue;
        const def = prefabDefs[placement.id];
        if (!def || !def.size)
            continue;
        volumes.push(placementToAabbRaw(placement, def.size));
    }
    return volumes;
}
export function isPointInsideAabb(px, py, pz, b) {
    return (px >= b.minX &&
        px <= b.maxX &&
        py >= b.minY &&
        py <= b.maxY &&
        pz >= b.minZ &&
        pz <= b.maxZ);
}
export function buildStaticWorldFromMap(map, prefabDefs) {
    const blocks = [];
    const rampDef = prefabDefs[RAMP_ID] ?? RAMP_1X4_FALLBACK;
    const rampDepth = rampDef.size[2];
    for (const placement of map.prefabs) {
        let def = prefabDefs[placement.id];
        if (placement.id === RAMP_ID && !def)
            def = RAMP_1X4_FALLBACK;
        if (!def || def.collision === "none")
            continue;
        if (def.collision === "ramp")
            continue;
        const aabb = placementToAabb(placement, def);
        if (aabb)
            blocks.push(aabb);
    }
    const rampRuns = getRampRuns(map.prefabs, RAMP_ID, rampDepth);
    for (const run of rampRuns) {
        let prevMaxY;
        for (const placement of run) {
            const def = prefabDefs[placement.id] ?? RAMP_1X4_FALLBACK;
            const aabb = placementToAabb(placement, def, prevMaxY);
            if (aabb) {
                blocks.push(aabb);
                prevMaxY = aabb.maxY;
            }
        }
    }
    return { blocks };
}
/** Floor thickness used for ramp flat base so ramp sits flush with floor. */
const RAMP_BASE_HEIGHT = 0.2;
/** Y of ramp surface at (px, pz) for a ramp block; for non-ramp returns b.maxY.
 * Linear slope from minY (axis start) to maxY (axis end) so adjacent ramp segments match at boundaries (no flat zone = no Hobel/step). */
function getBlockTopYAt(b, px, pz) {
    if (!b.rampAxis)
        return b.maxY;
    const axisMin = b.rampAxis === "z" ? b.minZ : b.minX;
    const axisMax = b.rampAxis === "z" ? b.maxZ : b.maxX;
    const p = b.rampAxis === "z" ? pz : px;
    const span = axisMax - axisMin;
    const t = span > 1e-6 ? Math.max(0, Math.min(1, (p - axisMin) / span)) : 0;
    const tEff = b.rampInverted ? 1 - t : t;
    const blockH = b.maxY - b.minY;
    return b.minY + tEff * blockH;
}
/** Max step-up when py is provided: only consider surfaces at or below py + this (ramp continuity – no snap to overlapping higher ramp). */
const RAMP_CONTINUITY_TOLERANCE = 0.15;
/** For ramps: only consider block if (px,pz) is within slope axis span (with small seam overlap). Stops adjacent segment from "reaching" into this segment via AABB margin and clamping to edge Y (which caused step-down feel when descending). */
const RAMP_AXIS_SEAM = 0.01;
function isInsideRampAxis(b, px, pz) {
    if (!b.rampAxis)
        return true;
    const axisMin = b.rampAxis === "z" ? b.minZ : b.minX;
    const axisMax = b.rampAxis === "z" ? b.maxZ : b.maxX;
    const p = b.rampAxis === "z" ? pz : px;
    return p >= axisMin - RAMP_AXIS_SEAM && p <= axisMax + RAMP_AXIS_SEAM;
}
/** Epsilon to merge nearly identical surface heights (avoids overlapping/duplicate surfaces from ramps and tiles). */
const SURFACE_DEDUP_EPS = 0.02;
/** All horizontal surface heights at (px, pz): top and bottom of each block. Solid from both sides – no falling through, no jumping through.
 * Ramps: included over full XZ footprint (no axis seam skip) so we never fall through at ramp edges. */
export function getSurfaceHeightsAt(px, pz, world, margin = 0) {
    const out = [];
    for (const b of world.blocks) {
        if (px < b.minX - margin ||
            px > b.maxX + margin ||
            pz < b.minZ - margin ||
            pz > b.maxZ + margin)
            continue;
        out.push(b.minY);
        out.push(getBlockTopYAt(b, px, pz));
    }
    if (out.length <= 1)
        return out;
    out.sort((a, b) => a - b);
    const deduped = [out[0]];
    for (let i = 1; i < out.length; i++) {
        const v = out[i];
        if (v - deduped[deduped.length - 1] > SURFACE_DEDUP_EPS)
            deduped.push(v);
    }
    return deduped;
}
/** Surface height hit when moving from yFrom to yTo, or null if none crossed. Solid from both sides.
 * Excludes the surface we start on: when going up only surfaces strictly above yFrom; when going down only strictly below yFrom. */
export function getSurfaceHit(yFrom, yTo, surfaces) {
    if (surfaces.length === 0)
        return null;
    if (yTo < yFrom) {
        const between = surfaces.filter((s) => s >= yTo && s < yFrom);
        if (between.length === 0)
            return null;
        return Math.max(...between);
    }
    if (yTo > yFrom) {
        const between = surfaces.filter((s) => s > yFrom && s <= yTo);
        if (between.length === 0)
            return null;
        return Math.min(...between);
    }
    return null;
}
/** Highest surface at or below y (for "floor under feet" when correcting small penetration). */
export function getHighestSurfaceAtOrBelow(y, surfaces) {
    const atOrBelow = surfaces.filter((s) => s <= y);
    if (atOrBelow.length === 0)
        return null;
    return Math.max(...atOrBelow);
}
/** Top Y of the highest block that contains (px, pz) in XZ. Same logic for floor (box) and ramp (slope): if (px,pz) is inside the block's XZ bounds, return the surface Y there. Returns -Infinity if no block.
 * When only one block contains (px,pz): return its topY (so adjacent ramp segments never yield -Infinity at the seam).
 * When multiple blocks overlap: only consider surfaces with topY <= py + RAMP_CONTINUITY_TOLERANCE so we don't snap up to a higher overlapping ramp.
 * For ramps, a block is only considered if (px,pz) is within its slope axis span (plus RAMP_AXIS_SEAM) so descending along the ramp stays smooth. */
export function getGroundYAt(px, pz, world, margin = 0, py) {
    const candidates = [];
    for (const b of world.blocks) {
        if (px < b.minX - margin ||
            px > b.maxX + margin ||
            pz < b.minZ - margin ||
            pz > b.maxZ + margin)
            continue;
        if (b.rampAxis && !isInsideRampAxis(b, px, pz))
            continue;
        // walkableTopOnly for boxes only: skip when below block. Ramps (rampAxis) are never filtered – treat as simple sloped floor so landing never fails.
        if (b.walkableTopOnly && !b.rampAxis && py !== undefined) {
            if (py < b.minY - margin)
                continue;
        }
        const topY = getBlockTopYAt(b, px, pz);
        candidates.push(topY);
    }
    if (candidates.length === 0)
        return -Infinity;
    if (candidates.length === 1)
        return candidates[0];
    const filtered = py !== undefined
        ? candidates.filter((topY) => topY <= py + RAMP_CONTINUITY_TOLERANCE)
        : candidates;
    if (filtered.length === 0)
        return -Infinity;
    return Math.max(...filtered);
}
/** True if the ground at (px, pz) is the top surface of a ramp (slope). Same inclusion rules as getGroundYAt. */
export function isOnRamp(px, pz, world, margin = 0, py) {
    const pairs = [];
    for (const b of world.blocks) {
        if (px < b.minX - margin ||
            px > b.maxX + margin ||
            pz < b.minZ - margin ||
            pz > b.maxZ + margin)
            continue;
        if (b.rampAxis && !isInsideRampAxis(b, px, pz))
            continue;
        if (b.walkableTopOnly && !b.rampAxis && py !== undefined) {
            if (py < b.minY - margin)
                continue;
        }
        const topY = getBlockTopYAt(b, px, pz);
        pairs.push({ b, topY });
    }
    if (pairs.length === 0)
        return false;
    const filtered = pairs.length > 1 && py !== undefined
        ? pairs.filter(({ topY }) => topY <= py + RAMP_CONTINUITY_TOLERANCE)
        : pairs;
    if (filtered.length === 0)
        return false;
    const best = filtered.reduce((a, c) => (c.topY > a.topY ? c : a));
    return best.b.rampAxis != null;
}
export function resolveStaticWorldXZ(px, py, pz, radius, world) {
    let x = px;
    let z = pz;
    let normalX;
    let normalZ;
    const r = radius + 0.001;
    for (const b of world.blocks) {
        const withinY = py >= b.minY - r && py <= b.maxY + r;
        if (!withinY)
            continue;
        // Standing on top of this block: allow XZ inside footprint (don't push out). For ramps, "top" is the slope at (x,z).
        const blockTopY = getBlockTopYAt(b, x, z);
        if (py >= blockTopY - r)
            continue;
        if (x >= b.minX - r &&
            x <= b.maxX + r &&
            z >= b.minZ - r &&
            z <= b.maxZ + r) {
            const dxMin = Math.abs(x - (b.minX - r));
            const dxMax = Math.abs((b.maxX + r) - x);
            const dzMin = Math.abs(z - (b.minZ - r));
            const dzMax = Math.abs((b.maxZ + r) - z);
            const minDelta = Math.min(dxMin, dxMax, dzMin, dzMax);
            if (minDelta === dxMin) {
                x = b.minX - r;
                normalX = 1;
            }
            else if (minDelta === dxMax) {
                x = b.maxX + r;
                normalX = -1;
            }
            else if (minDelta === dzMin) {
                z = b.minZ - r;
                normalZ = 1;
            }
            else {
                z = b.maxZ + r;
                normalZ = -1;
            }
        }
    }
    return { x, z, normalX, normalZ };
}
function rayBoxIntersection(ox, oy, oz, dx, dy, dz, b, maxT) {
    const { minX, maxX, minY, maxY, minZ, maxZ } = b;
    const eps = 1e-10;
    const t1 = Math.abs(dx) < eps
        ? ox >= minX && ox <= maxX
            ? -Infinity
            : Infinity
        : (minX - ox) / dx;
    const t2 = Math.abs(dx) < eps
        ? ox >= minX && ox <= maxX
            ? Infinity
            : -Infinity
        : (maxX - ox) / dx;
    const t3 = Math.abs(dy) < eps
        ? oy >= minY && oy <= maxY
            ? -Infinity
            : Infinity
        : (minY - oy) / dy;
    const t4 = Math.abs(dy) < eps
        ? oy >= minY && oy <= maxY
            ? Infinity
            : -Infinity
        : (maxY - oy) / dy;
    const t5 = Math.abs(dz) < eps
        ? oz >= minZ && oz <= maxZ
            ? -Infinity
            : Infinity
        : (minZ - oz) / dz;
    const t6 = Math.abs(dz) < eps
        ? oz >= minZ && oz <= maxZ
            ? Infinity
            : -Infinity
        : (maxZ - oz) / dz;
    const tMinX = Math.min(t1, t2);
    const tMaxX = Math.max(t1, t2);
    const tMinY = Math.min(t3, t4);
    const tMaxY = Math.max(t3, t4);
    const tMinZ = Math.min(t5, t6);
    const tMaxZ = Math.max(t5, t6);
    const tEnter = Math.max(tMinX, tMinY, tMinZ);
    const tExit = Math.min(tMaxX, tMaxY, tMaxZ);
    if (tEnter > tExit || tExit < 0)
        return null;
    const t = tEnter >= 0 ? tEnter : tExit;
    if (t <= 0 || t > maxT)
        return null;
    return t;
}
export function rayStaticWorldIntersection(ox, oy, oz, dx, dy, dz, maxT, world) {
    let bestT = null;
    for (const b of world.blocks) {
        const t = rayBoxIntersection(ox, oy, oz, dx, dy, dz, b, maxT);
        if (t !== null && (bestT === null || t < bestT))
            bestT = t;
    }
    return bestT !== null ? { hit: true, t: bestT } : { hit: false };
}
