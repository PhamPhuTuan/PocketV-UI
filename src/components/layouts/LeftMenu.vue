<template>
  <v-app>
    <v-main>
      <aside
        :class="is_expanded ? 'is-expanded' : ''"
        style="position: fixed; z-index: 99"
      >
        <div class="logo">
          <img
            src="https://www.datavtech.com/wp-content/uploads/2022/11/DataVtech_PocketV_small_112022-No-Slogan-350px.png"
            alt="Vue"
          />
        </div>

        <div class="menu-toggle-wrap">
          <button class="menu-toggle" @click="ToggleMenu">
            <i class="color-black mb-2 fa fa-arrow-right"></i>
          </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
          <router-link
            to="/service-request"
            class="button d-flex justify-around"
          >
            <span @click="changeExpand"
              ><i class="fa fa-home color-black"></i
            ></span>
            <span
              @click="changeExpand"
              class="text width-100 d-flex justify-center"
              >Request</span
            >
          </router-link>
          <router-link to="/jobs" class="button d-flex justify-around">
            <span @click="changeExpand"
              ><i class="color-black fa fa-user"></i
            ></span>
            <span
              @click="changeExpand"
              class="text width-100 d-flex justify-center"
              >Jobs Information</span
            >
          </router-link>
          <router-link to="/asset-equip" class="button d-flex justify-around">
            <span @click="changeExpand"
              ><i class="color-black fa fa-info" style="margin-left: 4px"></i
            ></span>
            <span
              @click="changeExpand"
              class="text width-100 d-flex justify-center"
              >Asset & Equipments</span
            >
          </router-link>
          <router-link
            to="/historical-details"
            class="button d-flex justify-around"
          >
            <span @click="changeExpand"
              ><i class="color-black fa fa-history"></i
            ></span>
            <span
              @click="changeExpand"
              class="text width-100 d-flex justify-center"
              >Historical details</span
            >
          </router-link>
          <router-link
            to="/billing-balance"
            class="button d-flex justify-around"
          >
            <span @click="changeExpand"
              ><i class="color-black fa fa-money"></i
            ></span>
            <span
              @click="changeExpand"
              class="text width-100 d-flex justify-center"
              >Billing balance</span
            >
          </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
          <router-link to="/" class="button d-flex justify-around">
            <span @click="changeExpand"
              ><i class="color-black fa fa-gear"></i
            ></span>
            <span
              @click="changeExpand"
              class="text width-100 d-flex justify-center"
              >Log Out</span
            >
          </router-link>
        </div>
      </aside>
      <router-view style="padding-left: calc(2rem + 20px)"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      is_expanded: false,
    };
  },
  methods: {
    changeExpand() {
      this.is_expanded = false;
    },
    ToggleMenu() {
      this.is_expanded = !this.is_expanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.color-black {
  color: black;
}
.width-100 {
  width: 100%;
  height: 100%;
}
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");

aside {
  display: flex;
  flex-direction: column;

  background-color: white;
  color: black;

  width: calc(2rem + 20px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;

      .material-icons {
        font-size: 2rem;
        color: black;
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: black;
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    margin-left: 5px;
  }

  h3 {
    color: gray;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: black;
        transition: 0.2s ease-in-out;
      }

      .text {
        color: black;
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: burlywood;

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: burlywood;
        border-right: 5px solid var(--primary);

        .material-icons,
        .text {
          color: black;
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: greenyellow;
    }
  }

  &.is-expanded {
    width: 30%;
    .logo {
      margin-bottom: 1rem;

      img {
        width: 6rem;
      }
    }

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
