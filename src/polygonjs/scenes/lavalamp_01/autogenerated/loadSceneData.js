import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1660476688903",
  root: "1660476688903",
  nodes: {
    lavalamp: "1660476688903",
    cameras: "1660476688903",
    "cameras/cameraControls1": "1660476688903",
    lights: "1660476688903",
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
