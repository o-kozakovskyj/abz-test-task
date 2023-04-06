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
