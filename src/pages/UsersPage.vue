<template>
  <div class="users">
    <h1 class="users__title">Working with GET request</h1>
    <div class="users__container">
      <div v-if="isLoading">
      <spinner-page/>
      </div>
      <div class="users__list" v-for="user in users" :key="user.id" v-else>
        <user-card :user="user" />
      </div>
    </div>
    <button-primary @click="nextPage" class="users__btn">Show more</button-primary>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import useUsers from "@/hooks/useUsers";
import usePage from "@/hooks/usePage";
export default {
  components: {
    UserCard
  },
  
  setup() {
    const{page, nextPage} = usePage();
    const count = 6;
    const { users, totalPages, isLoading } = useUsers(count, page);
    return {
      users,
      totalPages,
      isLoading,
      page,
      nextPage
    }
  },
}
</script>

<style lang="scss" scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  background-color: #E5E5E5;
  padding: 80px 16px 16px 16px;
  

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

  &__container {
    max-width: 360px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @include onTablet {
      max-width: 800px;
      gap: 16px;
    }

    @include onDesktop {
      gap: 29px;
      max-width: 1200px;
    }
  }
  &__btn {
    margin-top: 50px;
  }
}
</style>