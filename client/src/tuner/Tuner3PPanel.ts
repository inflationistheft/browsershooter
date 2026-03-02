/**
 * Third-person weapon tuner control panel (dat.GUI).
 * Animation selector, weapon offset/rotation/scale, per-animation overrides, Copy button.
 */

import { GUI } from "dat.gui";
import {
  tuner3pWeaponDefault,
  tuner3pWeaponGripOffset,
  tuner3pWeaponOffsets,
  ANIMATION_CLIP_IDS_ARRAY_3P,
  type WeaponOffset,
} from "./Tuner3PState.js";
import type { AnimationClipId } from "shared";

export interface Tuner3PPanel {
  getSelectedClipId(): AnimationClipId;
}

function addSpinnerButtons(
  controller: unknown,
  step: number,
  min: number,
  max: number
): void {
  const c = controller as {
    domElement: HTMLElement;
    object: Record<string, number>;
    property: string;
    updateDisplay: () => void;
  };
  const input = c.domElement.querySelector("input");
  if (!input) return;

  const getVal = () => Number(c.object[c.property]);
  const setVal = (v: number) => {
    c.object[c.property] = Math.max(min, Math.min(max, v));
    c.updateDisplay();
  };

  const spinWrap = document.createElement("div");
  spinWrap.style.cssText =
    "display:flex;align-items:center;gap:2px;flex:1;min-width:0;";
  const upBtn = document.createElement("button");
  upBtn.textContent = "▲";
  upBtn.title = "+" + step;
  upBtn.style.cssText =
    "flex-shrink:0;width:22px;height:20px;padding:0;font-size:11px;line-height:1;cursor:pointer;border:1px solid #555;background:#333;color:#eee;border-radius:2px;";
  const downBtn = document.createElement("button");
  downBtn.textContent = "▼";
  downBtn.title = "-" + step;
  downBtn.style.cssText = upBtn.style.cssText;
  upBtn.onclick = (e) => {
    e.stopPropagation();
    setVal(getVal() + step);
  };
  downBtn.onclick = (e) => {
    e.stopPropagation();
    setVal(getVal() - step);
  };

  const parent = input.parentNode;
  if (parent) {
    parent.insertBefore(spinWrap, input);
    spinWrap.appendChild(input);
    spinWrap.appendChild(upBtn);
    spinWrap.appendChild(downBtn);
  }
}

export function createTuner3PPanel(onClipChange?: (clipId: AnimationClipId) => void): Tuner3PPanel {
  const style = document.createElement("style");
  style.textContent = `
    .dg.ac { z-index: 10000 !important; font-size: 15px !important; }
    .dg.main { max-height: 85vh !important; overflow-y: auto !important; }
    .dg .c .slider { min-width: 120px !important; }
    .dg .cr.number { min-height: 22px !important; }
    .dg .c input[type=text], .dg .c input[type=number] { font-size: 14px !important; padding: 3px 6px !important; }
    .dg .title { font-size: 16px !important; padding: 6px 10px !important; }
    .dg .c .property-name { font-size: 14px !important; min-width: 100px !important; }
    .dg li.folder .title { cursor: pointer !important; }
  `;
  document.head.appendChild(style);

  const gui = new GUI({ name: "3P Weapon Tuner" });
  gui.domElement.style.fontSize = "15px";

  let selectedClipId: AnimationClipId = "idle";

  const animFolder = gui.addFolder("Animation");
  const animChoice: { clipId: AnimationClipId } = { clipId: "idle" };
  animFolder
    .add(animChoice, "clipId", ANIMATION_CLIP_IDS_ARRAY_3P)
    .name("Clip")
    .onChange((val: AnimationClipId) => {
      selectedClipId = val;
      onClipChange?.(val);
      updateWeaponAnimControllers();
    });

  const weaponFolder = gui.addFolder("Weapon (Basis)");
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponDefault, "x", -3, 3, 0.01).name("offset.x"),
    0.01, -3, 3
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponDefault, "y", -3, 3, 0.01).name("offset.y"),
    0.01, -3, 3
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponDefault, "z", -3, 3, 0.01).name("offset.z"),
    0.01, -3, 3
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponGripOffset, "x", -2, 2, 0.01).name("gripOffset.x"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponGripOffset, "y", -2, 2, 0.01).name("gripOffset.y"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponGripOffset, "z", -2, 2, 0.01).name("gripOffset.z"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponDefault, "scale", 0.01, 20, 0.1).name("scale"),
    0.1, 0.01, 20
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponDefault, "rotX", -Math.PI, Math.PI, 0.01).name("rotX (rad)"),
    0.01, -Math.PI, Math.PI
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponDefault, "rotY", -Math.PI * 2, Math.PI * 2, 0.01).name("rotY (rad)"),
    0.01, -Math.PI * 2, Math.PI * 2
  );
  addSpinnerButtons(
    weaponFolder.add(tuner3pWeaponDefault, "rotZ", -Math.PI * 2, Math.PI * 2, 0.01).name("rotZ (rad)"),
    0.01, -Math.PI * 2, Math.PI * 2
  );

  const weaponAnimFolder = gui.addFolder("Weapon per Animation");
  const weaponAnimEdit: WeaponOffset = { ...tuner3pWeaponDefault };
  const weaponAnimControllers: ReturnType<GUI["add"]>[] = [];

  function updateWeaponAnimControllers(): void {
    const cfg = tuner3pWeaponOffsets[selectedClipId] ?? tuner3pWeaponDefault;
    weaponAnimEdit.x = cfg.x;
    weaponAnimEdit.y = cfg.y;
    weaponAnimEdit.z = cfg.z;
    weaponAnimEdit.rotX = cfg.rotX;
    weaponAnimEdit.rotY = cfg.rotY;
    weaponAnimEdit.rotZ = cfg.rotZ;
    weaponAnimEdit.scale = cfg.scale;

    for (const c of weaponAnimControllers) {
      c.remove();
    }
    weaponAnimControllers.length = 0;

    const onChange = (): void => {
      const entry = (tuner3pWeaponOffsets[selectedClipId] ??= { ...tuner3pWeaponDefault });
      entry.x = weaponAnimEdit.x;
      entry.y = weaponAnimEdit.y;
      entry.z = weaponAnimEdit.z;
      entry.rotX = weaponAnimEdit.rotX;
      entry.rotY = weaponAnimEdit.rotY;
      entry.rotZ = weaponAnimEdit.rotZ;
      entry.scale = weaponAnimEdit.scale;
    };

    const addWeaponAnim = (
      ctrl: ReturnType<GUI["add"]>,
      step: number,
      min: number,
      max: number
    ) => {
      ctrl.onChange(onChange);
      addSpinnerButtons(ctrl, step, min, max);
      weaponAnimControllers.push(ctrl);
    };
    addWeaponAnim(
      weaponAnimFolder.add(weaponAnimEdit, "x", -3, 3, 0.01).name("x"),
      0.01, -3, 3
    );
    addWeaponAnim(
      weaponAnimFolder.add(weaponAnimEdit, "y", -3, 3, 0.01).name("y"),
      0.01, -3, 3
    );
    addWeaponAnim(
      weaponAnimFolder.add(weaponAnimEdit, "z", -3, 3, 0.01).name("z"),
      0.01, -3, 3
    );
    addWeaponAnim(
      weaponAnimFolder.add(weaponAnimEdit, "rotX", -Math.PI, Math.PI, 0.01).name("rotX (rad)"),
      0.01, -Math.PI, Math.PI
    );
    addWeaponAnim(
      weaponAnimFolder.add(weaponAnimEdit, "rotY", -Math.PI * 2, Math.PI * 2, 0.01).name("rotY (rad)"),
      0.01, -Math.PI * 2, Math.PI * 2
    );
    addWeaponAnim(
      weaponAnimFolder.add(weaponAnimEdit, "rotZ", -Math.PI * 2, Math.PI * 2, 0.01).name("rotZ (rad)"),
      0.01, -Math.PI * 2, Math.PI * 2
    );
    addWeaponAnim(
      weaponAnimFolder.add(weaponAnimEdit, "scale", 0.01, 20, 0.1).name("scale"),
      0.1, 0.01, 20
    );
  }
  updateWeaponAnimControllers();

  const formatRot = (r: number): string => {
    if (Math.abs(r - Math.PI) < 0.001) return "Math.PI";
    if (Math.abs(r + Math.PI) < 0.001) return "-Math.PI";
    return r.toFixed(4);
  };

  const copyAction = () => {
    const lines = [
      "// === client/src/config/index.ts (thirdPersonWeapon) ===",
      `thirdPersonWeaponOffset: { x: ${tuner3pWeaponDefault.x}, y: ${tuner3pWeaponDefault.y}, z: ${tuner3pWeaponDefault.z} },`,
      `thirdPersonWeaponGripOffset: { x: ${tuner3pWeaponGripOffset.x}, y: ${tuner3pWeaponGripOffset.y}, z: ${tuner3pWeaponGripOffset.z} },`,
      `thirdPersonWeaponScale: ${tuner3pWeaponDefault.scale},`,
      `thirdPersonWeaponRotationX: ${formatRot(tuner3pWeaponDefault.rotX)},`,
      `thirdPersonWeaponRotationY: ${formatRot(tuner3pWeaponDefault.rotY)},`,
      `thirdPersonWeaponRotationZ: ${formatRot(tuner3pWeaponDefault.rotZ)},`,
      "thirdPersonWeaponOffsets: {",
      ...Object.entries(tuner3pWeaponOffsets)
        .filter(([, cfg]) => cfg)
        .map(
          ([id, cfg]) =>
            `  ${id}: { x: ${cfg!.x}, y: ${cfg!.y}, z: ${cfg!.z}, rotX: ${formatRot(cfg!.rotX)}, rotY: ${formatRot(cfg!.rotY)}, rotZ: ${formatRot(cfg!.rotZ)}, scale: ${cfg!.scale} },`
        ),
      "},",
    ];
    navigator.clipboard.writeText(lines.join("\n")).then(() =>
      console.info("[Tuner3P] Copied config")
    );
  };

  gui.add({ copy: copyAction }, "copy").name("Copy Config");

  return {
    getSelectedClipId(): AnimationClipId {
      return selectedClipId;
    },
  };
}
