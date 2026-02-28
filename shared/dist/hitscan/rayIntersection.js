/**
 * Ray intersection math for hitscan. Ray: O + t*D, t >= 0.
 * Used server-side for Head (sphere) and Body (vertical capsule) hit detection.
 */
/**
 * Ray-sphere intersection. Returns smallest t >= 0 where ray hits sphere, or null.
 */
export function raySphereIntersection(ox, oy, oz, dx, dy, dz, cx, cy, cz, r) {
    const lx = ox - cx;
    const ly = oy - cy;
    const lz = oz - cz;
    const lDotD = lx * dx + ly * dy + lz * dz;
    const lSq = lx * lx + ly * ly + lz * lz;
    const r2 = r * r;
    const disc = lDotD * lDotD - (lSq - r2);
    if (disc < 0)
        return null;
    const sqrtDisc = Math.sqrt(disc);
    const t = -lDotD - sqrtDisc;
    if (t <= 0)
        return null;
    return t;
}
/**
 * Ray-capsule intersection. Capsule is vertical segment (cx, cy+bottom, cz) to (cx, cy+top, cz)
 * with radius r. Returns smallest t >= 0 where ray hits capsule, or null.
 */
export function rayCapsuleIntersection(ox, oy, oz, dx, dy, dz, cx, cy, cz, bottom, top, r) {
    const ax = cx;
    const ay = cy + bottom;
    const az = cz;
    const bx = cx;
    const by = cy + top;
    const bz = cz;
    const bax = bx - ax;
    const bay = by - ay;
    const baz = bz - az;
    const baLenSq = bax * bax + bay * bay + baz * baz;
    if (baLenSq < 1e-10) {
        return raySphereIntersection(ox, oy, oz, dx, dy, dz, ax, ay, az, r);
    }
    const oax = ox - ax;
    const oay = oy - ay;
    const oaz = oz - az;
    const oaDotBa = oax * bax + oay * bay + oaz * baz;
    const dDotBa = dx * bax + dy * bay + dz * baz;
    let bestT = null;
    for (const s of [0, 1]) {
        const qx = ax + s * bax;
        const qy = ay + s * bay;
        const qz = az + s * baz;
        const t = raySphereIntersection(ox, oy, oz, dx, dy, dz, qx, qy, qz, r);
        if (t !== null && (bestT === null || t < bestT))
            bestT = t;
    }
    const tCyl = intersectRayCylinder(ox, oy, oz, dx, dy, dz, ax, ay, az, bax, bay, baz, baLenSq, oaDotBa, dDotBa, r);
    if (tCyl !== null && (bestT === null || tCyl < bestT))
        bestT = tCyl;
    return bestT;
}
function intersectRayCylinder(ox, oy, oz, dx, dy, dz, ax, ay, az, bax, bay, baz, baLenSq, oaDotBa, dDotBa, r) {
    const oax = ox - ax;
    const oay = oy - ay;
    const oaz = oz - az;
    const pa = oax - (oaDotBa / baLenSq) * bax;
    const pb = oay - (oaDotBa / baLenSq) * bay;
    const pc = oaz - (oaDotBa / baLenSq) * baz;
    const da = dx - (dDotBa / baLenSq) * bax;
    const db = dy - (dDotBa / baLenSq) * bay;
    const dc = dz - (dDotBa / baLenSq) * baz;
    const a = da * da + db * db + dc * dc;
    const b = 2 * (pa * da + pb * db + pc * dc);
    const c = pa * pa + pb * pb + pc * pc - r * r;
    const disc = b * b - 4 * a * c;
    if (disc < 0 || Math.abs(a) < 1e-10)
        return null;
    const sqrtDisc = Math.sqrt(disc);
    const t1 = (-b - sqrtDisc) / (2 * a);
    const t2 = (-b + sqrtDisc) / (2 * a);
    let t = null;
    if (t1 > 0) {
        const s = (oaDotBa + t1 * dDotBa) / baLenSq;
        if (s >= 0 && s <= 1)
            t = t1;
    }
    if (t2 > 0 && (t === null || t2 < t)) {
        const s = (oaDotBa + t2 * dDotBa) / baLenSq;
        if (s >= 0 && s <= 1)
            t = t === null ? t2 : Math.min(t, t2);
    }
    return t;
}
