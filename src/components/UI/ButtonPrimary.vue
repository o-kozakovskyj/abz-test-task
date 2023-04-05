<template>
 <button class="btn">
  <slot></slot>
 </button>
</template>

<script>
  export default {
    name: "button-primary",
  }
</script>

<style lang="scss" scoped>
.btn {
  width: 100px;
  height: 34px;
  border-radius: 80px;
  font-size: 16px;
  font-family: inherit;
  background-color: $primary-color;
  border: none;
  &:hover {
    background-color: $hover;
    cursor: pointer;
  }
  &:disabled {
    background-color: $disabled;
    color: #fff;
  }
}
</style>