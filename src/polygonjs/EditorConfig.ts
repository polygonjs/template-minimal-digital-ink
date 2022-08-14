import {
  EditorApiOptions,
  ConfigureEditor,
} from "polygonjs-editor/public/editor/api";
// import {ProgressBarTop} from '@polygonjs/polygonjs/src/engine/viewers/progressBars/Top';

export const configureEditor: ConfigureEditor = (options: EditorApiOptions) => {
  // configure the editor
  options.api.setProjectName("template-minimal-lavalamp");
  options.api.html.head.setTitle(options.sceneName);
  options.api.html.head.setDescription(
    "a WebGL experience created with @polygonjs"
  );
  options.api.html.head.setSiteUrl("https://polygonjs.com");
  options.api.html.head.setTwitter("@polygonjs");

  //
  // Add custom javascript
  //
  // options.api.html.head.addScript({
  // 	id: 'my-script',
  // 	content: `alert('this is running my custom script')`,
  // });

  //
  // Update the progress bar used in the export
  //
  // options.api.html.viewer.setProgressBar(new ProgressBarTop());

  //
  // Add a custom viewer html
  //
  // 	options.api.panel.viewer.setData({
  // 		html: `
  // <div id='my-viewer'></div>
  // <div id=color-bars>
  // 	<div class='color-bar red'></div>
  // 	<div class='color-bar green'></div>
  // 	<div class='color-bar blue'></div>
  // </div>
  // <style>
  // #my-viewer {
  //   height: 100%;
  // }
  // #color-bars {
  // 	position: absolute;
  // 	top: 0px;
  // 	left: 0px;
  // 	width: 100%;
  // 	height: 20px;
  // }
  // .color-bar {
  // 	width: 32%;
  // 	height: 100%;
  // 	display: inline-block;
  // }
  // .color-bar.red { background-color: red; }
  // .color-bar.green { background-color: green; }
  // .color-bar.blue { background-color: blue; }

  // </style>`,
  // 	viewerId: 'my-viewer',
  // 	inShadowRoot: true
  // 	});

  // options.api.panel.viewer.setData({
  // 	html: `
  //   <div id="main-container">
  //   <div id="my-viewer"></div>
  //   <div id="scroll-container">
  //     <div class="checkpoint-padding orange">padding 1</div>
  //     <div id="checkpoint red">#checkpoint1</div>
  //     <div class="checkpoint-padding green">padding 2</div>
  //     <div id="checkpoint green">#checkpoint2</div>
  //     <div class="checkpoint-padding purple">padding 3</div>
  //     <div id="checkpoint teal">#checkpoint3</div>
  //     <div class="checkpoint-padding yellow">padding 4</div>
  //     <div id="checkpoint4 lightgreen">#checkpoint4</div>
  //     <div class="checkpoint-padding red">padding 5</div>
  //   </div>
  // </div>
  // <style>
  // #main-container{
  //   position: relative;
  //   height: 100%;
  //   background-color: rgb(0, 255, 0);
  // }
  // #my-viewer {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  // }
  // #scroll-container {
  //   pointer-events: none;
  //   position: relative;
  //   height: 100%;
  //   overflow-y: scroll;
  // }
  // .checkpoint-padding {
  //   pointer-events: none;
  //   height: 120vh;
  //   color: orange;
  //   border: 4px solid transparent;
  // }
  // .checkpoint {
  //   pointer-events: none;
  //   height: 120vh;
  //   color: white;
  //   border: 4px solid transparent;
  // }
  // .orange { border-color: orange; }
  // .red { border-color: red; }
  // .green { border-color: green; }
  // .blue { border-color: blue; }
  // .purple { border-color: purple; }
  // .teal { border-color: teal; }
  // .yellow { border-color: yellow; }
  // .lightgreen { border-color: lightgreen; }

  // </style>
  //   `,
  // viewerId: 'my-viewer',
  // inShadowRoot: false
  // });
};
