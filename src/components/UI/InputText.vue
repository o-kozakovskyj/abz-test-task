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
