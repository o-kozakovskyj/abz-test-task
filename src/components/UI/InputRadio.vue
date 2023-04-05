<template>
  <div class="radio">
    <h3 class="radio__title">Select your position</h3>
    <label 
      v-for="position in positions" 
      :key="position.id" 
      class="radio__label"
    >
      <input 
        type="radio" 
        :value="position" 
        :id="position.id" 
        v-model="picked" 
        class="radio__input"
      >
      <span class="radio__position">
        {{ position.name }}
      </span>
    </label>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "input-radio",
  data() {
    return {
      picked: {
        id: '',
        name: '',
      },
      positions: [],
    };
  },
  methods: {
    async getPositions() {
      const response = await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      );
      this.positions = response.data.positions;
    },
  },
  mounted() {
    this.getPositions();
  },
  watch: {
    picked() {
      this.$emit("update:position", this.picked.name);
      this.$emit("update:position_id", this.picked.id);
    },
  },
}
</script>

<style lang="scss" scoped>
.radio {
  align-self: flex-start;

  &__label {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__input {
    margin-right: 10px;
  }

  &__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 12px;
  }
}

/* label {
  margin-left: 20px;
  font-size: 16px;
  line-height: 16px;
} */

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