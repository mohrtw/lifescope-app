<template>
  <div class="content padded">
    <div class="flexbox flex-end">
      <i class="close-button fa fa-times-circle" v-on:click="$emit('close')"></i>
    </div>

    <div class="body flexbox flex-column flex-x-center">
      <div class="paragraph flexbox flex-column flex-x-center" style="margin-bottom: 15px;">
        <h3 >Delete Tracked Locations?</h3>
        <div class="instructions">
          <p>Are you sure you want to delete all locations traked on LifeScope pages?</p>
        </div>
      </div>

      <div class="flexbox flex-x-center">
        <button style="margin-right: 2em" v-on:click="$emit('close')">No, Cancel</button>
        <span class="flex-grow"></span>
        <button class="danger confirm" v-on:click="deleteTrackedLocations">Yes, Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
  import trackedLocationsRemoveMany from '../../apollo/mutations/tracked-locations-remove-many.gql'

  export default {
    methods: {
      deleteTrackedLocations: async function() {
        await this.$apollo.mutate({
          mutation: trackedLocationsRemoveMany
        });

        this.$emit('close');
      }
    }
  }
</script>
