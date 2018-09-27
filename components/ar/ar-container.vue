<template>
  <a-scene embedded artoolkit='sourceType: webcam;'>

    <a-assets class="aframe-assets">
      <img id="earth" src="../../static/earth/Albedo.jpg">
      <a-gltf-model id="logo" src="https://s3.amazonaws.com/lifescope-static/static/xr/logo/logo.gltf" crossorigin="anonymous"></a-gltf-model>
    </a-assets>

    <gallery />

    <a-sky src="#sky" rotation="90 0 90">
    </a-sky>

  </a-scene>
</template>