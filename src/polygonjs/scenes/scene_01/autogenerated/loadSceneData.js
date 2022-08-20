import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1660954428962",
  root: "1660954428962",
  nodes: {
    cameras: "1660954428962",
    "cameras/cameraControls1": "1660954428962",
    lights: "1660954428962",
    ink: "1660954428962",
    "ink/MAT": "1660954428962",
    "ink/MAT/rayMarchingBuilder1": "1660954428962",
    "ink/COP": "1660954428962",
    "ink/actor1": "1660954428962",
    "ink/ANIM": "1660954428962",
    "ink/eventsNetwork1": "1660954428962",
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
