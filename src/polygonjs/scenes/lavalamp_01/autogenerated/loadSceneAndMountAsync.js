import { loadSceneAsync_lavalamp_01 } from "./loadSceneAsync.js";

export const loadSceneAndMountAsync_lavalamp_01 = async function (
  options = {}
) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadSceneAsync_lavalamp_01(options);
};
