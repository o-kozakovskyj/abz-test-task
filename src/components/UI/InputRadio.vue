<template>
  <div class="radio">
    <h3 class="radio__title">Select your position</h3>

    <div class="radio__item">
      <input type="radio" name="position" id="one" value="one">
      <label for="one">Frontend developer</label>
    </div>
    <div class="radio__item">
      <input type="radio" name="position" id="two" value="two">
      <label for="two">Backend developer</label>
    </div>
    <div class="radio__item">
      <input type="radio" name="position" id="three" value="three">
      <label for="two">Designer</label>
    </div>
    <div class="radio__item">
      <input type="radio" name="position" id="four" value="four">
      <label for="two">QA</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-radio",
}
</script>

<style lang="scss" scoped>
.radio {
  width: 328px;
  height: 54px;
  &__item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  &__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 12px;
  }
}

label {
  margin-left: 20px;
  font-size: 16px;
  line-height: 16px;
}

[type="radio"] {
  visibility: hidden;
}

[type="radio"]::before {
  border: 1px solid gray;
  height: 1em;
  width: 1em;
  border-radius: 50%;
  display: block;
  content: " ";
  cursor: pointer;
  visibility: visible;
}

[type="radio"]:checked::before {
  border: 1px solid $secondary-color;
  background: radial-gradient($secondary-color 36%, transparent 38%);
}
</style>