<template>
  <div class="upload-wrapper">
    <label for="files" class="upload-wrapper__label">
      <button class="upload-wrapper__btn">
        Upload
      </button>
      <span class="upload-wrapper__placeholder" v-show="!isValidFileName">
        upload your photo
      </span>
      <input type="file" id="files" name="avatar" @change="updateInput($event)">
      <span class="upload-wrapper__file-name">{{ fileName }}</span>
      <img id="output" class="upload-wrapper__image" />
      <span v-show="!isErrorMessage" class="upload-wrapper__helper">
        You can use only jpeg or jpg extensions
      </span>
      <span class="upload-wrapper__error" v-show="isErrorMessage">
        Wrong file extension use jpeg or jpg only
      </span>
    </label>
  </div>
</template> 

<script>
export default {
  name: "upload-field",
  data() {
    return {
      fileName: "",
      isValidFileName: false,
      isErrorMessage: false,
    }
  },
  props: ["modelValue"],
  methods: {
    updateInput(event) {
      const image = document.getElementById('output');
      const fileExtension = event.target.files[0].name.split('.').pop();
      if (fileExtension === 'jpg' || fileExtension === 'jpeg') {
        this.fileName = event.target.files[0].name;
        image.src = URL.createObjectURL(event.target.files[0]);
        this.$emit("update:modelValue", event.target.files[0]);
        this.isValidFileName = true;
        this.isErrorMessage = false;
      } else {
        this.isErrorMessage = true;
        this.fileName = "";
        this.isValidFileName = false;
        image.src = "";
        return;
      }

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
    position: relative;
    justify-content: space-between;
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

  &__file-name {
    display: inline-block;
    padding: 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 10px;
    flex: 1 1;
    color: #000;
  }

  &__error {
    display: inline-block;
    color: red;
    font-size: 10px;
    position: absolute;
    top: 44px;
    left: 0;
    padding: 10px;
  }
  &__helper {
    display: inline-block;
    font-size: 10px;
    position: absolute;
    top: 44px;
    left: 0;
    padding: 10px;
  }
}

input {
  display: none;
  background-color: $background-main;
}

#output {
  height: 54px;
  margin-left: 34px;
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