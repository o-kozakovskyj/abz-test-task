<template>
  <div class="users-list">
    <h1 class="users-list__title">Working with GET request</h1>
    <user-card class="users-list__item"></user-card>
    <user-card class="users-list__item"></user-card>
    <user-card class="users-list__item"></user-card>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
export default {
  components: {
    UserCard
  },
  setup() {

  },
}
</script>

<style lang="scss" scoped>
.users-list {
  margin-top: 60px;
  background-color: #E5E5E5;
  padding: 80px 16px 0 16px;

  &__title {
    text-align: center;
    width: 320px;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
  }
  &__item {
    margin-top: 20px;
    
  }
  &:first-child {
      margin-top: 50px;
    }
}
</style>