<template>
  <div class="input-wrapper">
    <input 
      type="text" 
      id="phone" 
      class="input-wrapper__field" 
      name="phone" 
      pattern="^[\+]{0,1}380([0-9]{9})$"
      :value="modelValue" 
      @input="updateInput" 
      placeholder="Phone"
    >
    <span></span>
    <label for="phone" class="input-wrapper__label">
      Phone
    </label>
  </div>
</template>

<script>
export default {
  name: "input-phone",
  data() {
    return {
      phone: "",
    }
  },
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

input:invalid {
  border: 1px solid red;
  background-color: $background-main;
}

input:valid {
  background-color: $background-main;
}

input:valid+span::after {
  display: inline-block;
  content: "+38 (XXX) XXX-XX-XX";
  position: absolute;
  top: 40px;
  left: 0;
  padding: 10px;
  font-size: 12px;

}

input:invalid+span::after {
  display: inline-block;
  content: "Must be a valid phone number";
  color: red;
  position: absolute;
  top: 40px;
  left: 0;
  padding: 10px;
  font-size: 12px;
}
</style>