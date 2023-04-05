<template>
  <div class="input-wrapper">
    <input 
      type="text" 
      id="input" 
      class="input-wrapper__field" 
      name="input" 
      placeholder="Your name" 
      :value="modelValue"
      @input="updateInput"
      pattern="^[a-zA-Z\s]+$"
      minLength="2"
      maxLength="60"
    >
    <label for="input" class="input-wrapper__label">
      Your name
    </label>
  </div>
</template>

<script>
export default {
  name: "input-text",
  props: {
    modelValue: String,
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
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
    display: none;
    transition: 0.2s;
  }

  &__field {
    display: block;
    width: 100%;
    height: 100%;
    background-color: $background-main;
    padding: 14px 16px;
    border: 1px solid $input-border;
    border-radius: 4px;
  }
}

input:focus,
input:valid {
  background-color: $background-main;
   outline-color: $input-border!important;
}

input:focus~label,
input:not(:placeholder-shown)~label {
  position: relative;
  display: inline-block;
  top: -66px;
  right: -10px;
  font-size: 14px;
  background-color: $background-main;
}
</style>