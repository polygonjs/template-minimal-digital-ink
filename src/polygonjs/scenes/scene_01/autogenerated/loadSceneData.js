import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1663712858886",
  root: "1661022424938",
  nodes: {
    cameras: "1661022424938",
    "cameras/cameraControls1": "1661022424938",
    lights: "1661022424938",
    ink: "1661022424938",
    "ink/MAT": "1661022424938",
    "ink/MAT/rayMarchingBuilder1": "1663712858886",
    "ink/COP": "1661022424938",
    "ink/actor1": "1663712858886",
    "ink/ANIM": "1663712858886",
    "ink/eventsNetwork1": "1663712858886",
  },
  shaders: {
    "/ink/MAT/rayMarchingBuilder1": {
      vertex: "1663712858886",
      fragment: "1663712858886",
    },
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
