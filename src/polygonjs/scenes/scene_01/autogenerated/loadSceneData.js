import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1660512272506",
  root: "1660512272506",
  nodes: {
    cameras: "1660512272506",
    "cameras/cameraControls1": "1660512272506",
    lights: "1660512272506",
    ink: "1660512272506",
    "ink/MAT": "1660512272506",
    "ink/MAT/rayMarchingBuilder1": "1660512272506",
    "ink/COP": "1660512272506",
    "ink/actor1": "1660512272506",
  },
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};