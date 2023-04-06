<template>
  <div class="upload-wrapper">
    <label for="files" class="upload-wrapper__label">
      <button class="upload-wrapper__btn">
        Upload
      </button>
      <span class="upload-wrapper__placeholder">
        <slot></slot>
      </span>
      <input 
        type="file" 
        id="files" 
        accept="image/jpg, image/jpeg" 
        name="avatar" 
        @change="updateInput($event)"
        
      >
      <img id="output"/>	
    </label>
  </div>
</template> 

<script>
export default {
  name: "upload-field",
  data() {
    return {
      file: "",
    }
  },
  props: ["modelValue"],
  methods: {
    updateInput(event) {
      const image = document.getElementById('output');
      image.src = URL.createObjectURL(event.target.files[0]);
      this.$emit("update:modelValue", event.target.files[0]);
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-wrapper {
  display: flex;

  &__label {
    display: flex;
    align-items: center;
    width: 328px;
    height: 54px;
    color: $input-placeholder;
    border: 1px solid #D0CFCF;
    border-radius: 4px;
  }

  &__placeholder {
    margin-left: 16px;
  }

  &__btn {
    padding: 14px 15px;
    background-color: $background-main;
    border: 1px solid #000;
    border-radius: 4px 0px 0px 4px;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
    font-family: inherit;
  }
}

input {
  display: none;
  background-color: $background-main;
}
#output {  
  height: 56px;
  margin-left: 34px;
}
</style>