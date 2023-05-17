<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto rounded-lg"
      width="140px"
      height="210px"
      elevation="20"
    >
      <v-img
        src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSqrFnysEWW5Xih02AbGD3PR3-zvZm5_AE8dCdWTFtGNT3LJxv6TFWvqk6BEBMv"
        position="center center"
      >
        <v-expand-transition>
          <v-container
            v-if="hover"
            class="pa-3 transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"
            style="height: 100%"
          >
            <p>Contact me:</p>
            <v-btn
              class="mt-1"
              v-for="(item, index) in userContactNameIcons"
              :key="index"
              ><v-icon>{{ item }}</v-icon></v-btn
            >
          </v-container>
        </v-expand-transition>
      </v-img>
      <div class="text-center"><p>Trịnh Gia Huy</p></div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data() {
    return {
      userContactNameIcons: [
        "mdi-facebook",
        "mdi-cellphone-basic",
        "mdi-email",
      ],
    };
  },
};
</script>

<style scope>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
