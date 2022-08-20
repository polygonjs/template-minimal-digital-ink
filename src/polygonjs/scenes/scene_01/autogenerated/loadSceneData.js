import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1661022424938",
  root: "1661022424938",
  nodes: {
    cameras: "1661022424938",
    "cameras/cameraControls1": "1661022424938",
    lights: "1661022424938",
    ink: "1661022424938",
    "ink/MAT": "1661022424938",
    "ink/MAT/rayMarchingBuilder1": "1661022424938",
    "ink/COP": "1661022424938",
    "ink/actor1": "1661022424938",
    "ink/ANIM": "1661022424938",
    "ink/eventsNetwork1": "1661022424938",
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
