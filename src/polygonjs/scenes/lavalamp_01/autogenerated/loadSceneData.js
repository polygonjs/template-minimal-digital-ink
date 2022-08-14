import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1660510690501",
  root: "1660510690501",
  nodes: {
    lavalamp: "1660510690501",
    "lavalamp/MAT": "1660510690501",
    "lavalamp/MAT/rayMarchingBuilder1": "1660510690501",
    "lavalamp/COP": "1660510690501",
    "lavalamp/actor1": "1660510690501",
    cameras: "1660510690501",
    "cameras/cameraControls1": "1660510690501",
    lights: "1660510690501",
  },
};

export const loadSceneData_lavalamp_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "lavalamp_01",
    urlPrefix: sceneDataRoot + "/lavalamp_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
