/**
 * Bone names for hitbox anchoring (Mixamo rig).
 * Central config so model swap only requires changes here.
 * mixamorig: (with colon) tried first; mixamorig (no colon) as fallback for some GLB exports.
 */
/** Head bone – sphere center. */
export declare const BONE_HEAD = "mixamorig:Head";
export declare const BONE_HEAD_ALT = "mixamorigHead";
export declare const BONE_HEAD_ALT2 = "Head";
/** HeadTop_End – crown of head (Mixamo). Use midpoint with Head for sphere center. */
export declare const BONE_HEAD_TOP = "mixamorig:HeadTop_End";
export declare const BONE_HEAD_TOP_ALT = "mixamorigHeadTop_End";
export declare const BONE_HEAD_TOP_ALT2 = "HeadTop_End";
/** Spine/chest – body capsule center. */
export declare const BONE_SPINE = "mixamorig:Spine2";
export declare const BONE_SPINE_FALLBACK = "mixamorig:Spine1";
export declare const BONE_SPINE_ALT2 = "mixamorig:Spine";
export declare const BONE_SPINE_ALT = "mixamorigSpine2";
export declare const BONE_SPINE_ALT3 = "mixamorigSpine1";
export declare const BONE_SPINE_ALT4 = "mixamorigSpine";
export declare const BONE_SPINE_ALT5 = "Spine2";
export declare const BONE_SPINE_ALT6 = "Spine1";
export declare const BONE_SPINE_ALT7 = "Spine";
/** Pelvis – lower body / legs. */
export declare const BONE_HIPS = "mixamorig:Hips";
export declare const BONE_HIPS_ALT = "mixamorigHips";
export declare const BONE_HIPS_ALT2 = "Hips";
/** Feet – bottom of legs capsule (average of both feet). */
export declare const BONE_LEFT_FOOT = "mixamorig:LeftFoot";
export declare const BONE_LEFT_FOOT_ALT = "mixamorigLeftFoot";
export declare const BONE_LEFT_FOOT_ALT2 = "LeftFoot";
export declare const BONE_RIGHT_FOOT = "mixamorig:RightFoot";
export declare const BONE_RIGHT_FOOT_ALT = "mixamorigRightFoot";
export declare const BONE_RIGHT_FOOT_ALT2 = "RightFoot";
//# sourceMappingURL=boneNames.d.ts.map