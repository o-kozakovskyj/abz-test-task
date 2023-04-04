<template>
  <div class="user">
    <div class="user__photo-container">
      <img :src="user.photo" alt={{user.name}} class="user__photo">
    </div>
    <div class="user__info">
      <span class="user__name">{{ user.name }}</span>
      <span class="user__position">{{ user.position }}</span>
      <span class="user__e-mail">{{ user.email }}</span>
      <span class="user__phone">{{ user.phone }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },

  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: 254px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  @include onTablet {
    width: 344px;
  }
  @include onDesktop {
    width: 282px;
  }
  @include onWide {
    width: 370px;
  }

  &__photo-container {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__photo {
    width: 100%;
    height: 100%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    line-height: 26px;
  }

  &__info span {
    display: inline;
    max-width: 288px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__name {
    display: block;
    font-size: 16px;
    line-height: 26px;
    margin: 20px 0;
  }
}
</style>