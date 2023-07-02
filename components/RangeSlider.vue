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
import 'vue-simple-range-slider/css'

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
const range = ref([0, 100])

watch(range, (newVal) => {
  emit('range', newVal)
})

</script>

<style scoped>
.simple-range-slider-popover {
    display: none;
}
</style>
