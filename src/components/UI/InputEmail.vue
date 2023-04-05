<template>
  <div class="input-wrapper">
    <input type="email" id="email" class="input-wrapper__field" name="email" :value="modelValue" @input="updateInput"
      placeholder="Email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
    <span></span>
    <label for="email" class="input-wrapper__label">
      Email
    </label>
  </div>
</template>

<script>
export default {
  name: "input-email",
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
  outline-color: $input-border !important;
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

input:invalid {
  border: 1px solid red;
  background-color: $background-main;
}

input:valid {
  background-color: $background-main;
}

input:invalid+span::after {
  display: inline-block;
  content: "Must be a valid e-mail address";
  color: red;
  position: absolute;
  top: 40px;
  left: 0;
  padding: 10px;
  font-size: 12px;
}
</style>