<template>
  <v-app style="border-radius: 0; height: 70px">
    <!-- justify-center align-center margin-->
    <v-card class="d-flex wrapper" color="transparent" elevation="0">
      <v-list class="logoHeader d-flex" color="transparent">
        <v-img
          src="https://www.datavtech.com/wp-content/uploads/2022/11/DataVtech_PocketV_small_112022-No-Slogan-350px.png"
          alt=""
        />
      </v-list>
      <v-list class="nav d-flex flex-md-grow-1" color="transparent">
        <v-btn
          style="font-size: 18px; background-color: transparent; color: black"
          elevation="0"
          class="nav-item mr-3"
          :to="getNavLink.record"
          >Job Infomation</v-btn
        >

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="transparent"
              dark
              elevation="0"
              v-bind="attrs"
              v-on="on"
              style="font-size: 18px"
              class="nav-item mr-3"
            >
              {{ $t("POST MANAGEMENT") }}
              <v-icon color="black">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list style="background-color: #626884">
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              style="color: black; border-bottom: solid 1px #494d5f"
            >
              <router-link
                :to="item.link"
                style="text-decoration: none; color: black; width: 100%"
              >
                <v-list-item-title style="cursor: pointer; font-size: 20px">
                  {{ $t(item.title) }}</v-list-item-title
                ></router-link
              >
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          style="font-size: 18px; background-color: transparent; color: black"
          elevation="0"
          class="nav-item"
          :to="getNavLink.userManagement"
          >{{ $t("USER MANAGEMENT") }}</v-btn
        >
      </v-list>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="transparent"
            dark
            elevation="0"
            v-bind="attrs"
            v-on="on"
            style="font-size: 20px"
            class="accountBtn ml-8"
          >
            <v-icon class="accountIcon" style="font-size: 28px; color: black"
              >mdi-account</v-icon
            >
          </v-btn>
        </template>
        <v-list style="background-color: #626884; width: 100%">
          <v-list-item
            v-for="(itemAC, index) in account"
            :key="index"
            style="color: black; width: 100%"
          >
            <a
              :href="getNavLink.home"
              style="text-decoration: none; color: black; width: 100%"
            >
              <v-list-item-title
                style="
                  cursor: pointer;
                  font-size: 20px;
                  color: black;
                  width: 100%;
                "
              >
                {{ $t("LOG OUT") }}</v-list-item-title
              >
            </a>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    account: [{}],
    items: [
      { title: "POSTS WAITING TO BE APPROVED", link: "" },
      { title: "POSTS APPROVED", link: "" },
    ],
  }),
  computed: {
    ...mapGetters("headerStore", ["getNavLink"]),
  },
  mounted() {
    this.items[0].link = this.getNavLink.postWTBApproved;
    this.items[1].link = this.getNavLink.postApproved;
  },
};
</script>

<style scoped>
.wrapper {
  justify-content: space-between;
  width: 100%;
}
.logoHeader {
  width: 20%;
}
.accountBtn {
  width: 20%;
  font-size: 20px;
  color: black;
  margin: 13px 0 0 0;
}
.nav {
  width: 80%;
}
.nav-item {
  width: 33.33%;
  margin-top: 5px;
}
</style>
