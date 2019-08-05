import Vue from 'vue';

import 'aframe';
import 'networked-aframe';
import 'aframe-input-mapping-component';
// import 'aframe-teleport-controls';
// import 'aframe-extras';
// import 'aframe-sun-sky';
// import 'aframe-forcegraph-component';
// import 'nipplejs';
// import '../components/xr/components/aframe/play-gaze.js';
// import '../components/xr/components/aframe/dynamic-autoplay.js';
// import '../components/xr/components/aframe/avatar-rig';
import '../components/xr/components/aframe/ionicon';
// import '../components/xr/components/aframe/mapbox-terrain.js';
import '../components/xr/components/aframe/diorama.js';
import '../components/xr/components/aframe/woodenfloor.js';
// import '../components/xr/components/hubs/virtual-gamepad-controls.js';
// import '../components/xr/components/hubs/character-controller.js';
// import '../components/xr/components/hubs/pitch-yaw-rotator.js';
// import '../components/xr/components/hubs/look-on-mobile.js';
// import '../components/xr/components/aframe/sun-sky-position.js';
import {mappings, inputActions} from '../components/xr/controls/input-mappings.js';

AFRAME.registerInputActions(inputActions, 'default');
AFRAME.registerInputMappings(mappings);

Vue.config.ignoredElements = ['a-scene', 'a-assets', 'a-gltf-model', 'a-entity', 'a-sphere', 'a-animation', 'a-sky', 'a-mapbox-terrain', 'a-ionicon', 'a-wooden-floor', 'a-diorama', 'a-sun-sky', 'a-rail', 'a-diorama-text', 'a-diorama-object'];