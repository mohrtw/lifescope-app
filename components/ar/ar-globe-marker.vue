<template>

<a-scene embedded arjs="debugUIEnabled: false;">

      <a-marker type="pattern" url="https://static.lifescope.io/assets/lifescope-letter-marker-960-marker.patt">
        <a-entity position="0 0.5 0" scale="0.3 0.3 0.3" color="#000000" gltf-model="url(https://s3.amazonaws.com/lifescope-static/static/xr/logo/logo.gltf)"></a-entity>
      </a-marker>
      
      <a-entity camera>
      </a-entity>

      <a-box position='0 0.5 0' material='opacity: 0.5; side:double; color:red;'>
      </a-box>
    </a-scene>

</template>

<script>

//import './aframe-ar.js';


export default {
    
    mounted () {
        console.log("mounted ar");
    }
}

</script>