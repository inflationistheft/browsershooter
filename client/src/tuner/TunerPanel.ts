/**
 * Viewmodel tuner control panel (dat.GUI). Weapon, POV, Camera, Copy button.
 */

import { GUI } from "dat.gui";
import { clientConfig } from "../config/index.js";
import { FPSCamera } from "../systems/camera/FPSCamera.js";
import {
  tunerPovDefault,
  tunerPovOffsets,
  ANIMATION_CLIP_IDS_ARRAY,
  type PovOffset,
} from "./TunerState.js";
import type { AnimationClipId } from "shared";

export interface TunerPanel {
  getSelectedClipId(): AnimationClipId;
}

function addSpinnerButtons(
  controller: unknown,
  step: number,
  min: number,
  max: number
): void {
  const c = controller as { domElement: HTMLElement; object: Record<string, number>; property: string; updateDisplay: () => void };
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

export function createTunerPanel(cameraSystem: FPSCamera): TunerPanel {
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

  const gui = new GUI({ name: "Viewmodel Tuner" });
  gui.domElement.style.fontSize = "15px";

  let selectedClipId: AnimationClipId = "idle";

  const weaponFolder = gui.addFolder("Weapon (nur Waffe, unabhängig von POV)");
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponOffset, "x", -3, 3, 0.01).name("offset.x"),
    0.01, -3, 3
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponOffset, "y", -3, 3, 0.01).name("offset.y"),
    0.01, -3, 3
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponOffset, "z", -3, 3, 0.01).name("offset.z"),
    0.01, -3, 3
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponPovOffset, "x", -2, 2, 0.01).name("povOffset.x"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponPovOffset, "y", -2, 2, 0.01).name("povOffset.y"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponPovOffset, "z", -2, 2, 0.01).name("povOffset.z"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponGripOffset, "x", -2, 2, 0.01).name("gripOffset.x"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponGripOffset, "y", -2, 2, 0.01).name("gripOffset.y"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig.viewmodelWeaponGripOffset, "z", -2, 2, 0.01).name("gripOffset.z"),
    0.01, -2, 2
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig, "viewmodelWeaponScale", 0.1, 200, 0.5).name("scale"),
    0.5, 0.1, 200
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig, "viewmodelWeaponRotationX", -Math.PI, Math.PI, 0.01).name("rotationX (rad)"),
    0.01, -Math.PI, Math.PI
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig, "viewmodelWeaponRotationY", -Math.PI * 2, Math.PI * 2, 0.01).name("rotationY (rad)"),
    0.01, -Math.PI * 2, Math.PI * 2
  );
  addSpinnerButtons(
    weaponFolder.add(clientConfig, "viewmodelWeaponRotationZ", -Math.PI * 2, Math.PI * 2, 0.01).name("rotationZ (rad)"),
    0.01, -Math.PI * 2, Math.PI * 2
  );

  const povDefaultFolder = gui.addFolder("POV (nur Arme, unabhängig von Weapon)");
  addSpinnerButtons(povDefaultFolder.add(tunerPovDefault, "x", -5, 5, 0.01).name("x"), 0.01, -5, 5);
  addSpinnerButtons(povDefaultFolder.add(tunerPovDefault, "y", -10, 5, 0.01).name("y"), 0.01, -10, 5);
  addSpinnerButtons(povDefaultFolder.add(tunerPovDefault, "z", -5, 5, 0.01).name("z"), 0.01, -5, 5);
  addSpinnerButtons(
    povDefaultFolder.add(tunerPovDefault, "rotX", -Math.PI * 2, Math.PI * 2, 0.01).name("rotX (rad)"),
    0.01, -Math.PI * 2, Math.PI * 2
  );
  addSpinnerButtons(
    povDefaultFolder.add(tunerPovDefault, "rotY", -Math.PI * 2, Math.PI * 2, 0.01).name("rotY (rad)"),
    0.01, -Math.PI * 2, Math.PI * 2
  );
  addSpinnerButtons(
    povDefaultFolder.add(tunerPovDefault, "rotZ", -Math.PI * 2, Math.PI * 2, 0.01).name("rotZ (rad)"),
    0.01, -Math.PI * 2, Math.PI * 2
  );
  addSpinnerButtons(povDefaultFolder.add(tunerPovDefault, "scale", 0.5, 5, 0.01).name("scale"), 0.01, 0.5, 5);

  const povAnimFolder = gui.addFolder("POV per Animation");
  const animChoice: { clipId: AnimationClipId } = { clipId: "idle" };
  povAnimFolder
    .add(animChoice, "clipId", ANIMATION_CLIP_IDS_ARRAY)
    .name("Animation")
    .onChange((val: AnimationClipId) => {
      selectedClipId = val;
      updatePovAnimControllers();
    });

  const povAnimEdit: PovOffset = { ...tunerPovDefault };
  const povAnimControllers: ReturnType<GUI["add"]>[] = [];

  function updatePovAnimControllers(): void {
    const cfg = tunerPovOffsets[selectedClipId] ?? tunerPovDefault;
    povAnimEdit.x = cfg.x;
    povAnimEdit.y = cfg.y;
    povAnimEdit.z = cfg.z;
    povAnimEdit.rotX = cfg.rotX;
    povAnimEdit.rotY = cfg.rotY;
    povAnimEdit.rotZ = cfg.rotZ;
    povAnimEdit.scale = cfg.scale;

    for (const c of povAnimControllers) {
      c.remove();
    }
    povAnimControllers.length = 0;

    const onChange = (): void => {
      const entry = (tunerPovOffsets[selectedClipId] ??= { ...tunerPovDefault });
      entry.x = povAnimEdit.x;
      entry.y = povAnimEdit.y;
      entry.z = povAnimEdit.z;
      entry.rotX = povAnimEdit.rotX;
      entry.rotY = povAnimEdit.rotY;
      entry.rotZ = povAnimEdit.rotZ;
      entry.scale = povAnimEdit.scale;
    };

    const addPovAnim = (ctrl: ReturnType<GUI["add"]>, step: number, min: number, max: number) => {
      ctrl.onChange(onChange);
      addSpinnerButtons(ctrl, step, min, max);
      povAnimControllers.push(ctrl);
    };
    addPovAnim(povAnimFolder.add(povAnimEdit, "x", -5, 5, 0.01).name("x"), 0.01, -5, 5);
    addPovAnim(povAnimFolder.add(povAnimEdit, "y", -10, 5, 0.01).name("y"), 0.01, -10, 5);
    addPovAnim(povAnimFolder.add(povAnimEdit, "z", -5, 5, 0.01).name("z"), 0.01, -5, 5);
    addPovAnim(
      povAnimFolder.add(povAnimEdit, "rotX", -Math.PI * 2, Math.PI * 2, 0.01).name("rotX (rad)"),
      0.01, -Math.PI * 2, Math.PI * 2
    );
    addPovAnim(
      povAnimFolder.add(povAnimEdit, "rotY", -Math.PI * 2, Math.PI * 2, 0.01).name("rotY (rad)"),
      0.01, -Math.PI * 2, Math.PI * 2
    );
    addPovAnim(
      povAnimFolder.add(povAnimEdit, "rotZ", -Math.PI * 2, Math.PI * 2, 0.01).name("rotZ (rad)"),
      0.01, -Math.PI * 2, Math.PI * 2
    );
    addPovAnim(povAnimFolder.add(povAnimEdit, "scale", 0.5, 5, 0.01).name("scale"), 0.01, 0.5, 5);
  }
  updatePovAnimControllers();

  const cameraFolder = gui.addFolder("Camera");
  const cam = cameraSystem.getCamera();
  addSpinnerButtons(
    cameraFolder.add(cam, "fov", 50, 120, 1).name("FOV").onChange(() => cam.updateProjectionMatrix()),
    1, 50, 120
  );

  const formatRot = (r: number): string => {
    if (Math.abs(r - Math.PI) < 0.001) return "Math.PI";
    if (Math.abs(r + Math.PI) < 0.001) return "-Math.PI";
    return r.toFixed(4);
  };

  const copyActions = {
    copyWeapon: () => {
      const lines = [
        "// === client/src/config/index.ts (nur Weapon) ===",
        `viewmodelWeaponOffset: { x: ${clientConfig.viewmodelWeaponOffset.x}, y: ${clientConfig.viewmodelWeaponOffset.y}, z: ${clientConfig.viewmodelWeaponOffset.z} },`,
        `viewmodelWeaponPovOffset: { x: ${clientConfig.viewmodelWeaponPovOffset.x}, y: ${clientConfig.viewmodelWeaponPovOffset.y}, z: ${clientConfig.viewmodelWeaponPovOffset.z} },`,
        `viewmodelWeaponGripOffset: { x: ${clientConfig.viewmodelWeaponGripOffset.x}, y: ${clientConfig.viewmodelWeaponGripOffset.y}, z: ${clientConfig.viewmodelWeaponGripOffset.z} },`,
        `viewmodelWeaponScale: ${clientConfig.viewmodelWeaponScale},`,
        `viewmodelWeaponRotationX: ${clientConfig.viewmodelWeaponRotationX},`,
        `viewmodelWeaponRotationY: ${clientConfig.viewmodelWeaponRotationY},`,
        `viewmodelWeaponRotationZ: ${clientConfig.viewmodelWeaponRotationZ},`,
      ];
      navigator.clipboard.writeText(lines.join("\n")).then(() => console.info("[Tuner] Copied Weapon"));
    },
    copyPov: () => {
      const lines = [
        "// === client/src/main.ts POV_DEFAULT + POV_OFFSETS ===",
        `const POV_DEFAULT = { x: ${tunerPovDefault.x}, y: ${tunerPovDefault.y}, z: ${tunerPovDefault.z}, rotX: ${formatRot(tunerPovDefault.rotX)}, rotY: ${formatRot(tunerPovDefault.rotY)}, rotZ: ${formatRot(tunerPovDefault.rotZ)}, scale: ${tunerPovDefault.scale} };`,
        "const POV_OFFSETS: Partial<Record<AnimationClipId, { x: number; y: number; z: number; rotX: number; rotY: number; rotZ: number; scale: number }>> = {",
        ...Object.entries(tunerPovOffsets)
          .filter(([, cfg]) => cfg)
          .map(
            ([id, cfg]) =>
              `  ${id}: { x: ${cfg!.x}, y: ${cfg!.y}, z: ${cfg!.z}, rotX: ${formatRot(cfg!.rotX)}, rotY: ${formatRot(cfg!.rotY)}, rotZ: ${formatRot(cfg!.rotZ)}, scale: ${cfg!.scale} },`
          ),
        "};",
      ];
      navigator.clipboard.writeText(lines.join("\n")).then(() => console.info("[Tuner] Copied POV"));
    },
  };

  gui.add(copyActions, "copyWeapon").name("Copy Weapon");
  gui.add(copyActions, "copyPov").name("Copy POV");

  return {
    getSelectedClipId(): AnimationClipId {
      return selectedClipId;
    },
  };
}
