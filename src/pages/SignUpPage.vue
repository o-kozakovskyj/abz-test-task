<template>
  <div class="sign-up">
    <h1 class="sign-up__title">
      Working with POST request
    </h1>
    <form class="sign-up__form">
      <input-field class="sign-up__input">Your name</input-field>
      <input-field class="sign-up__input">E-mail</input-field>
      <input-field class="sign-up__input">Phone</input-field>
      <input-radio class="sign-up__input-radio">Select your position</input-radio>
      <upload-field class="sign-up__input-upload">Upload your photo</upload-field>
      <button-primary class="sign-up__input">Sign up</button-primary>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sign-up {
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  background-color: #E5E5E5;
  padding: 80px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    width: 320px;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 50px;

    @include onTablet {
      width: 800px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input {
    margin-top: 50px;
  }

  &__input-radio {
    margin-top: 43px;
  }

  &__input-upload {
    margin-top: 87px;
  }
}

</style>