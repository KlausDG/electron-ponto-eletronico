<template>
  <button @click="onClick" class="btn" :style="{width: width, height: height}">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  @include box_shadow(1);
  width: 115px;
  padding: 10px;
  margin: 0 auto;
  border: none;
  border-radius: 3px;
  background-color: $color-primary;
  color: $color-white;
  text-transform: uppercase;
  font-weight: 700;

  transition: all 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: darken($color-primary, 15);
  }

  &:active {
    width: 100px;
  }
}
</style>