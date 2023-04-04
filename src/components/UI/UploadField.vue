<template>
  <div class="upload-wrapper">
    <label for="files" class="upload-wrapper__label">
      <button class="upload-wrapper__btn">Upload</button>
      <span class="upload-wrapper__placeholder" >Upload your photo</span>
      
      <input type="file" id="files" accept="image/png, image/jpg, image/gif, image/jpeg" name="avatar">


    </label>
  </div>
</template> 

<script>
export default {
  name: "upload-field",
}
</script>

<style lang="scss" scoped>
.upload-wrapper {
  display: flex;
  &__label {
    display: flex;
    align-items:center;
    width: 328px;
    height: 54px;
    color: $input-placeholder;
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    background-color: $background-color;
  }
  &__placeholder {
  margin-left: 16px;
  }
  &__btn {
    padding: 14px 15px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 4px 0px 0px 4px;
    background-color: $background-color;
    font-size: 16px;
    line-height: 26px;
  }
}
input {
  display: none;
}
</style>