<template>
  <div class="home">
    <div class="home__text-container">
      <h3 class="home__title">
        Test assignment for front-end developer
      </h3>
      <p class="home__text">
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
        understanding
        of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be
        excited to learn, as the world of Front-End Development keeps evolving.
      </p>
    </div>
    <button-primary class="home__btn" @click="$router.push('/signup')">
      Sign up
    </button-primary>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  margin-top: 60px;
  background-image: url("../../public/main.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px 16px;
  width: 100%;
  height: calc(100vh - 60px);

  &__text-container {
    width: 328px;
    color: #FFFFFF;
    margin: 0 auto;

    @include onTablet {
      margin-top: 89px;
      width: 380px;
    }

    @include onDesktop {
      margin-top: 164px;
    }
  }

  &__title {
    font-size: 40px;
    line-height: 40px;
    font-weight: 400;
    width: 100%;
  }

  &__text {
    width: 100%;
    font-size: 16px;
    line-height: 26px;
    margin-top: 21px;
  }

  &__btn {
    margin-top: 32px;
  }
}
</style>