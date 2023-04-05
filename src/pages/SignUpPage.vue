<template>
  <div class="sign-up">
    <h1 class="sign-up__title">
      Working with POST request
    </h1>
    <form 
      class="sign-up__form" 
      @submit.prevent="onSubmit" 
      v-if="!isUserCreated"
    >
      <input-text 
        class="sign-up__text" 
        v-model="user.name" 
        placeholder="Your name"
      >
      </input-text>
      <input-email class="sign-up__email" v-model="user.email">
      </input-email>
      <input-phone class="sign-up__phone" v-model="user.phone">
      </input-phone>
      <input-radio 
        class="sign-up__input-radio" 
        v-model:position="user.position" 
        v-model:position_id="user.position_id"
      >
        Select your position
      </input-radio>
      <upload-field class="sign-up__input-upload" v-model="user.photo">
        Upload your photo
      </upload-field>
      <button-primary 
        class="sign-up__btn" 
        type="submit" 
        :disabled="disabled"
      >
        Sign up
      </button-primary>
    </form>
    <div class="sign-up__success" v-else>
      <img 
        src="success-image.svg" 
        alt="success" 
        class="sign-up__success-image"
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        position: "",
        photo: null,
        registration_timestamp: "",
        position_id: "",
      },
      isUserCreated: false,
    }
  },
  methods: {
    onSubmit() {
      const formData = new FormData();
      formData.append("position_id", this.user.position_id);
      formData.append("name", this.user.name);
      formData.append("email", this.user.email);
      formData.append("phone", this.user.phone);
      formData.append("photo", this.user.photo);
      this.postUser(formData);
    },
    async postUser(formData) {
      const token = process.env.VUE_APP_TOKEN;
      const url = "https://frontend-test-assignment-api.abz.agency/api/v1/users";
      try {
        const response = await axios.post(url, formData, {
          headers: {
            "Token": token,
          }
        });
        if (response.status === 201) {
          this.isUserCreated = true;
        }
      } catch (error) {
        console.log(error);
      }finally {
        this.$forceUpdate();
      }
    },
  },
  computed: {
    disabled() {
      return this.user.name === "" ||
        this.user.email === "" ||
        this.user.phone === "" ||
        this.user.position === "" ||
        this.user.photo === null;
    }
  }
} 
</script>

<style lang="scss" scoped>
.sign-up {
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  background-color: $background-main;
  padding: 80px 16px 100px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input-radio {
    margin-top: 43px;
    margin-left: 10px;
  }

  &__phone,
  &__email {
    margin-top: 50px;
  }

  &__input-upload {
    margin-top: 50px;
  }

  &__btn {
    margin-top: 50px;
  }
}
</style>