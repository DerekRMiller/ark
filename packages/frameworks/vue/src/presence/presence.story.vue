<script setup lang="ts">
import { ref } from 'vue'
import { Presence } from './'
import './presence.css'

const isPresent = ref(false)
</script>

<template>
  <Story title="Presence">
    <Variant title="Basic">
      <div>
        <button @click="isPresent = !isPresent">Toggle</button>
        <Presence :present="isPresent">
          <div class="box">Hidden and Hidden</div>
        </Presence>
      </div>
    </Variant>
    <Variant title="LazyMount">
      <div>
        <button @click="isPresent = !isPresent">Toggle</button>
        <Presence :present="isPresent" lazyMount>
          <div class="box">Hidden and Hidden</div>
        </Presence>
      </div>
    </Variant>
    <Variant title="UnmountOnExit">
      <div>
        <button @click="isPresent = !isPresent">Toggle</button>
        <Presence :present="isPresent" unmountOnExit>
          <div class="box">Hidden and Unmounted on Exit</div>
        </Presence>
      </div>
    </Variant>
    <Variant title="LazyMountAndUnmountOnExit">
      <div>
        <button @click="isPresent = !isPresent">Toggle</button>
        <Presence :present="isPresent" lazyMount unmountOnExit>
          <div class="box">Lazy Mount and Unmounted on Exit</div>
        </Presence>
      </div>
    </Variant>
  </Story>
</template>
