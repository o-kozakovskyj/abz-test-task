<template>
  <div class="input-wrapper">
    <input type="text" id="input" class="input-wrapper__field" name="input">
    <label for="input" class="input-wrapper__label">
      <slot></slot>
    </label>
    <span class="input-wrapper__helper">
      insert <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "input-field",
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 328px;
  height: 54px;
  color: $input-placeholder;
  position: relative;
  font-size: 16px;
  line-height: 26px;
  

  &__label {
    position: absolute;
    top: 14px;
    left: 10px;
    padding: 0 7px;
    transition: 0.3s;
  }

  &__field {
    display: block;
    width: 100%;
    height: 100%;
    background-color: $background-color;
    padding: 14px 16px;
    border: 1px solid #D0CFCF;
  border-radius: 4px;
  }

  &__helper {
    display: block;
    position: absolute;
    bottom: -16px;
    left: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
}

input:focus~label {
  top: -10px;
  font-size: 14px;
  z-index: 2;
  background-color: #fff;
}

</style>