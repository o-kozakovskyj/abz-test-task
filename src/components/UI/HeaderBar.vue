<template>
  <div class="header">
    <img 
      src="logo.svg" 
      alt="logo" 
      @click="$router.push('/')"
      class="header__logo"
    >
    <div class="header__nav">
      <button-primary class="header__nav-item" @click="$router.push('/users')">
        Users
      </button-primary>
      <button-primary class="header__nav-item" @click="$router.push('/signup')">
        Sign up
      </button-primary>
    </div>

  </div>
</template>

<script>
export default {
  name: "header-bar",
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  height: 60px;
  background-color: #fff;
  padding: 0 17px;
  z-index: 3;
  &__nav {
    display: flex;
    align-items: center;
  }
  &__nav-item {
    margin-left: 10px;
  }
  &__logo {
    cursor: pointer;
  }
}
</style>