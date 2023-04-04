<template>
  <div class="user">
    <div class="user__photo-container">
      <img src="photo.svg" alt="avatar">
    </div>
    <span class="user__name">Salvador Stewart Flynn Thomas...</span>
    <span class="user__role-contacts">
      Leading specialist of the department o...
      JeromeKlarkaJeromeKlarka19233623...
      +38 (098) 278 76 24
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  
  &__name {
    display: block;
    font-size: 16px;
    line-height: 26px;
    margin-top: 20px;
  }

  &__role-contacts {
    display: block;
    margin-top: 20px;
    font-size: 16px;
    line-height: 26px;
  }
}
</style>