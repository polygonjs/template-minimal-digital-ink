// actor
import { OnTickActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick";
import { PlaneActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Plane";
import { RayFromCursorActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayFromCursor";
import { RayIntersectPlaneActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayIntersectPlane";
import { SetMaterialUniformActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetMaterialUniform";
// anim
import { DurationAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Duration";
import { EasingAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Easing";
import { NullAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Null";
import { PlayAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Play";
import { PropertyNameAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/PropertyName";
import { PropertyValueAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/PropertyValue";
import { TargetAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Target";
// cop
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { AnimationEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/Animation";
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
import { SceneEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/Scene";
// mat
import { RayMarchingBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/RayMarchingBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { AnimationsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AnimationsNetwork";
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CopNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CopNetwork";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
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
    DurationAnimNode,
    EasingAnimNode,
    NullAnimNode,
    PlayAnimNode,
    PropertyNameAnimNode,
    PropertyValueAnimNode,
    TargetAnimNode,
    ImageEXRCopNode,
    AnimationEventNode,
    CameraOrbitControlsEventNode,
    SceneEventNode,
    RayMarchingBuilderMatNode,
    GeoObjNode,
    ActorSopNode,
    AnimationsNetworkSopNode,
    BoxSopNode,
    CameraControlsSopNode,
    CopNetworkSopNode,
    EventsNetworkSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SpotLightSopNode,
  ],
  operations: [],
};
