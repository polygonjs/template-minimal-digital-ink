// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";

export const requiredImports_lavalamp_01 = {
  nodes: [
    CameraOrbitControlsEventNode,
    GeoObjNode,
    CameraControlsSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SphereSopNode,
    SpotLightSopNode,
  ],
  operations: [],
};
