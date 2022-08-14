// actor
import { OnTickActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick";
import { PlaneActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Plane";
import { RayFromCursorActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayFromCursor";
import { RayIntersectPlaneActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayIntersectPlane";
import { SetMaterialUniformActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetMaterialUniform";
// cop
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { RayMarchingBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/RayMarchingBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CopNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CopNetwork";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";

export const requiredImports_scene_01 = {
  nodes: [
    OnTickActorNode,
    PlaneActorNode,
    RayFromCursorActorNode,
    RayIntersectPlaneActorNode,
    SetMaterialUniformActorNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    RayMarchingBuilderMatNode,
    GeoObjNode,
    ActorSopNode,
    BoxSopNode,
    CameraControlsSopNode,
    CopNetworkSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SpotLightSopNode,
  ],
  operations: [],
};
