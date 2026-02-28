/**
 * Ray intersection math for hitscan. Ray: O + t*D, t >= 0.
 * Used server-side for Head (sphere) and Body (vertical capsule) hit detection.
 */
/**
 * Ray-sphere intersection. Returns smallest t >= 0 where ray hits sphere, or null.
 */
export declare function raySphereIntersection(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, cx: number, cy: number, cz: number, r: number): number | null;
/**
 * Ray-capsule intersection. Capsule is vertical segment (cx, cy+bottom, cz) to (cx, cy+top, cz)
 * with radius r. Returns smallest t >= 0 where ray hits capsule, or null.
 */
export declare function rayCapsuleIntersection(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, cx: number, cy: number, cz: number, bottom: number, top: number, r: number): number | null;
//# sourceMappingURL=rayIntersection.d.ts.map