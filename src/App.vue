<template>
  <header-bar />
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@700&family=Nunito:wght@400;500;600&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
