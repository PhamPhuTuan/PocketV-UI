<template>
  <v-card
    class="d-flex align-center justify-center rounded-0 bg pa-3"
    width="100vw"
    min-height="100vh"
  >
    <v-stepper
      v-model="e1"
      width="400px"
      height="100vh"
      max-height="600px"
      class="rounded-xl pa-5 d-flex align-center justify-center"
      style="background-color: rgba(255, 255, 255, 0.2)"
      dark
    >
      <v-stepper-items class="main-item">
        <!-- <v-stepper-content step="1">
          <p style="color: black">Please check OTP in your email:</p>
          <div class="ma-auto" style="max-width: 260px">
            <v-otp-input
              v-model="otp"
              type="number"
              length="5"
              style="color: black"
              light
            ></v-otp-input>
          </div>

          <v-btn color="black" @click="e1 = 3">{{ $t("continue") }}</v-btn>

          <v-btn text @click="e1 = 1">{{ $t("cancel") }}</v-btn>
        </v-stepper-content> -->

        <v-stepper-content step="1">
          <p style="color: black">Please enter new password:</p>
          <v-text-field
            :rules="[rules.required, rules.min]"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            :label="this.$t('password')"
            :hint="this.$t('hintPasswordField')"
            value=""
            v-model="userPassword"
            class="input-group--focused"
            @click:append="show3 = !show3"
            light
          />

          <v-text-field
            :rules="[rules.required, rules.min, rules.passwordMatch]"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            :label="this.$t('retype')"
            :hint="this.$t('hintPasswordField')"
            value=""
            class="input-group--focused"
            @click:append="show3 = !show3"
            v-show="!isLogin"
            light
          />

          <v-btn color="black" @click="e1 = 2"> {{ $t("continue") }} </v-btn>

          <v-btn text @click="GotoLogin" color="black">{{
            $t("cancel")
          }}</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <p style="color: black">Are you sure to change your password?</p>

          <v-btn color="black" @click="SaveGotoLogin" class="text-center"
            >Yes and Log in again</v-btn
          >
          <v-btn text @click="e1 = 1" color="black">{{ $t("cancel") }}</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      isForwardPassword: false,
      e1: 1,
      show3: false,
      otp: "",
      userPassword: "",
    };
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
    GotoLogin() {
      this.$router.push("/Login");
    },
    SaveGotoLogin() {
      this.$router.push("/Login");
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: #c9e9ae;
  background-size: cover;
}
.hidden {
  display: none !important;
}
.main-item {
  width: 100%;
}
</style>
