<template>
  <v-card
    class="d-flex align-center justify-center rounded-0 bg"
    width="100vw"
    min-height="100vh"
    height="wrap-content"
  >
    <v-card
      class="pa-10 d-flex flex-column align-center justify-space-between rounded-xl"
      style="background-color: rgba(255, 255, 255, 0.6)"
      width="400px"
      height="auto"
    >
      <h3>{{ isLogin ? $t("logIn") : $t("register") }}</h3>
      <div style="width: 100%">
        <v-text-field
          name="input-10-2"
          :label="this.$t('name')"
          value=""
          class="input-group--focused"
          v-show="!isLogin"
        />

        <v-text-field
          name="input-10-2"
          label="Email"
          value=""
          class="input-group--focused"
        />

        <v-text-field
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show3 ? 'text' : 'password'"
          name="input-10-2"
          :label="this.$t('password')"
          :hint="this.$t('hintPasswordField')"
          value=""
          v-model="userInput.userPassword"
          class="input-group--focused"
          @click:append="show3 = !show3"
        />

        <a
          href="/ForgotPassword"
          v-show="isLogin"
          style="color: #9f8e8e"
          class="mb-5"
          @click="isForwardPassword = true"
          >Change password</a
        >

        <v-text-field
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min, rules.passwordMatch]"
          :type="show3 ? 'text' : 'password'"
          name="input-10-2"
          :label="this.$t('retype')"
          :hint="this.$t('hintPasswordField')"
          value=""
          class="input-group--focused"
          @click:append="show3 = !show3"
          v-show="!isLogin"
        />

        <v-checkbox
          :v-checkbox="checkbox"
          v-show="!isLogin"
          color="green"
          class="mb-5"
          light
          :label="'Agree to the all policy of DVT'"
        />
      </div>

      <g-recaptcha
        data-sitekey="6LcEqtQlAAAAAGHpVRo-Yb6sVo0o_3fa9jT2qhoP"
        class="input-group--focused width-100 d-flex justify-center"
        style="width: 100%"
        :data-validate="validate"
        :data-callback="callback"
      >
        <v-btn
          elevation="2"
          min-width="150px"
          :loading="loading"
          :disabled="loading"
          @click="loader = 'loading'"
          class="mb-3 width-100"
          >{{ isLogin ? $t("logIn") : $t("register") }}</v-btn
        >
      </g-recaptcha>
      <a class="switchTabMsg" @click="isLogin = !isLogin">{{
        isLogin ? $t("switchTabRegister") : $t("switchTabLogin")
      }}</a>
    </v-card>
  </v-card>
</template>

<script>
import gRecaptcha from "@finpo/vue2-recaptcha-invisible";
export default {
  components: {
    gRecaptcha,
  },
  data() {
    return {
      userInput: {
        userName: "",
        userEmail: "",
        userPassword: "",
        userNewPassword: "",
      },
      isLogin: true,
      show3: false,
      checkbox: false,
      loading: false,
      loader: null,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
  computed: {
    rules() {
      return {
        required: (value) => !!value || this.$t("required"),
        min: (v) => v.length >= 8 || this.$t("hintPasswordField"),
        emailMatch: () => this.$t("emailMatch"),
        passwordMatch: (v) =>
          this.userPassword === v || this.$t("passwordMatch"),
      };
    },
  },
  methods: {
    goToHomeview() {
      this.loader = "loading";
    },
    validate() {
      console.log("validate");
      return true;
    },
    callback(token) {
      if (token) {
        console.log("passed");
        this.$router.push("/service-request");
      } else {
        alert("Please check you are not robot!!!");
      }
    },
  },
};
</script>

<style scoped>
.width-100 {
  width: 100%;
}
.button-submit {
  width: 200%;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  background-color: transparent;
  color: #7cc242;
  border-radius: 2em;
  border-width: 2px;
  background: 0 0;
  font-weight: bold;
  margin-top: 10px;
}

.bg {
  background-color: #c9e9ae;
  background-size: cover;
}

.hidden {
  display: none !important;
}

a:hover {
  font-weight: bolder;
}

.switchTabMsg {
  text-align: center;
  width: fit-content;
  color: black !important;
  text-decoration: underline;
}

.passwordRules {
  margin-top: -25px;
  margin-left: 15px;
  font-size: small;
  opacity: 0.6;
}
</style>
