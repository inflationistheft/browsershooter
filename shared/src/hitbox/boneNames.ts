/**
 * Bone names for hitbox anchoring (Mixamo rig).
 * Central config so model swap only requires changes here.
 * mixamorig: (with colon) tried first; mixamorig (no colon) as fallback for some GLB exports.
 */

/** Head bone – sphere center. */
export const BONE_HEAD = "mixamorig:Head";
export const BONE_HEAD_ALT = "mixamorigHead";
export const BONE_HEAD_ALT2 = "Head";
/** HeadTop_End – crown of head (Mixamo). Use midpoint with Head for sphere center. */
export const BONE_HEAD_TOP = "mixamorig:HeadTop_End";
export const BONE_HEAD_TOP_ALT = "mixamorigHeadTop_End";
export const BONE_HEAD_TOP_ALT2 = "HeadTop_End";

/** Spine/chest – body capsule center. */
export const BONE_SPINE = "mixamorig:Spine2";
export const BONE_SPINE_FALLBACK = "mixamorig:Spine1";
export const BONE_SPINE_ALT2 = "mixamorig:Spine";
export const BONE_SPINE_ALT = "mixamorigSpine2";
export const BONE_SPINE_ALT3 = "mixamorigSpine1";
export const BONE_SPINE_ALT4 = "mixamorigSpine";
export const BONE_SPINE_ALT5 = "Spine2";
export const BONE_SPINE_ALT6 = "Spine1";
export const BONE_SPINE_ALT7 = "Spine";

/** Pelvis – lower body / legs. */
export const BONE_HIPS = "mixamorig:Hips";
export const BONE_HIPS_ALT = "mixamorigHips";
export const BONE_HIPS_ALT2 = "Hips";

/** Feet – bottom of legs capsule (average of both feet). */
export const BONE_LEFT_FOOT = "mixamorig:LeftFoot";
export const BONE_LEFT_FOOT_ALT = "mixamorigLeftFoot";
export const BONE_LEFT_FOOT_ALT2 = "LeftFoot";
export const BONE_RIGHT_FOOT = "mixamorig:RightFoot";
export const BONE_RIGHT_FOOT_ALT = "mixamorigRightFoot";
export const BONE_RIGHT_FOOT_ALT2 = "RightFoot";
