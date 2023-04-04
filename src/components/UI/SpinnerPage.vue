<template>
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
name: "spinner-page"
}
</script>

<style lang="scss" scoped>
.spinner {
  display: inline-block;
  position: relative;
  width: 48px;
  height: 48px;
}

.spinner div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  margin: 4px;
  border: 4px solid $secondary-color;
  border-radius: 50%;
  animation: lds-spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $secondary-color transparent transparent transparent;
}

.spinner div:nth-child(1) {
  animation-delay: -0.45s;
}

.spinner div:nth-child(2) {
  animation-delay: -0.3s;
}

.spinner div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>