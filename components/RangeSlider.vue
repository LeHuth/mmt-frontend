<template>
  <div>
    <VueSimpleRangeSlider
      v-model="range"
      :exponential="false"
      :max="props.max"
      :min="props.min"
      :popover-content-editable="false"
      class="block"
      style="width: 100%"
    />
  </div>
</template>
<script lang="ts" setup>
import VueSimpleRangeSlider from 'vue-simple-range-slider'

defineComponent({
  name: 'RangeSlider',
  components: {
    VueSimpleRangeSlider
  },
  props: {
    max: {
      type: Number,
      required: true,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    exponential: {
      type: Boolean,
      default: false
    }
  }
})
const props = defineProps({
  max: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 0
  },
  exponential: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['range'])
const range = ref([0, props.max])

watch(range, (newVal) => {
  emit('range', newVal)
})

</script>

<style>
.simple-range-slider-popover, .simple-range-slider-popover-arrow {
    display: none;
}

.simple-range-slider-bg-bar {
    margin: 10px !important;
}

.simple-range-slider-anchor {
    box-shadow: none !important;
    border: 1px solid black !important;
}

.simple-range-slider-bg-bar {
    border-radius: 0px !important;
    height: 2px !important;
}

.simple-range-slider-bar {
    border-radius: 0px !important;
    background: black !important;
    height: 3px !important;
}
</style>
