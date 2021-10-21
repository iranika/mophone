<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-bar dense class="text-white bg-grey">
        <q-icon :name="fasSignal" />
        <div>momoco</div>
        <q-icon name="mail" />
        <q-space />
        <div class="gt-xs">100%</div>
        <q-icon name="battery_full" />
      </q-bar>
  
    </q-header>

    <q-page-container class="q-page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fasSignal, fasWifi, fasBatteryFull } from '@quasar/extras/fontawesome-v5'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    
    return {
      fasWifi,
      fasBatteryFull,
      fasSignal,
    }
  }
})
</script>
<style scoped>

</style>