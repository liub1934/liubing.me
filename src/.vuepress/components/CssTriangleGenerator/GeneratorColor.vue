<template>
  <div class="generator-color">
    <div class="title text-24 font-600">颜色</div>
    <n-color-picker
      v-model:value="modelColor"
      :show-preview="true"
      :show-alpha="false"
    />
  </div>
</template>

<script lang="ts" setup>
const modelColor = defineModel<string>('color', { required: true })
</script>

<style lang="scss" scoped></style>
