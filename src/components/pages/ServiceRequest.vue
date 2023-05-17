<template>
  <v-card id="top-page">
    <v-card
      class="d-flex align-center justify-end rounded-0 bg"
      width="100vw"
      min-height="100vh"
      height="wrap-content"
    >
      <v-card
        class="pa-10 d-flex flex-column align-center justify-space-between rounded-xl"
        style="background-color: rgba(255, 255, 255, 0.8)"
        width="400px"
        height="auto"
      >
        <h2>Service Request</h2>
        <div style="width: 100%">
          <v-text-field
            name="input-10-2"
            :label="'Name ' + '*'"
            value=""
            light
            class="input-group--focused"
          />

          <v-text-field
            name="input-10-2"
            :label="'Email ' + '*'"
            value=""
            class="input-group--focused"
          />

          <v-text-field
            name="input-10-2"
            :label="'Phone ' + '*'"
            value=""
            class="input-group--focused"
          />

          <v-text-field
            name="input-10-2"
            :label="'Company name ' + '*'"
            value=""
            class="input-group--focused"
          />

          <v-text-field
            name="input-10-2"
            :label="'Equipment Serial Number ' + '*'"
            value=""
            class="input-group--focused"
          />

          <v-text-field
            name="input-10-2"
            :label="'Equipment Location ' + '*'"
            value=""
            class="input-group--focused"
          />

          <v-text-field
            name="input-10-2"
            :label="'Equipment Location ' + '*'"
            value=""
            class="input-group--focused"
          />
          <g-recaptcha
            data-sitekey="6LcEqtQlAAAAAGHpVRo-Yb6sVo0o_3fa9jT2qhoP"
            class="input-group--focused"
            style="width: 100%"
            :data-validate="validate"
            :data-callback="callback"
          >
            <v-btn
              elevation="2"
              min-width="150px"
              :loading="loading"
              :disabled="loading"
              @click="goToHomeview"
              class="mb-3 button-submit input-group--focused"
              style="color: #7cc242"
              >Submit Request</v-btn
            >
          </g-recaptcha>
        </div>
      </v-card>
    </v-card>
    <div
      class="container"
      id="requestlist"
      style="margin-top: 50px; min-height: 100vh"
    >
      <h2 style="color: #7cc141">Request List</h2>
      <h3 style="font-weight: bold">Search:</h3>
      <input
        class="form-control border input-search"
        id="myInput"
        type="text"
        v-model="search1"
      />
      <br />
      <table class="table table-bordered table-striped table-custom">
        <thead>
          <tr>
            <th>JOB NUMBER</th>
            <th>LOCATION</th>
            <th>APPT TIME</th>
            <th>JOB DESCRIPTION</th>
            <th>JOB TYPE</th>
            <th>SVC LINE</th>
          </tr>
        </thead>
        <tbody id="myTable">
          <tr v-for="item in requestListFiltered" :key="item">
            <td>{{ item.JobNum }}</td>
            <td>{{ item.Location }}</td>
            <td>{{ item.APPTTime }}</td>
            <td>{{ item.JobDescription }}</td>
            <td>{{ item.JobType }}</td>
            <td>{{ item.SVCLine }}</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-5 mb-20">
        Showing 1 to {{ requestListFiltered.length }} of
        {{ requestListFiltered.length }} entries.
      </p>
    </div>
  </v-card>
</template>

<script>
import gRecaptcha from "@finpo/vue2-recaptcha-invisible";
export default {
  components: {
    gRecaptcha,
  },
  mounted() {
    window.scrollTo({
      top: document.getElementById("top-page").offsetTop,
      left: 0,
      behavior: "auto",
    });
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
      requestList: [
        {
          type: 1,
          JobNum: "00001",
          Location: "HCM",
          APPTTime: "17:00 22-03-2023",
          JobDescription: "Service Job",
          JobType: "SRV",
          SVCLine: "SvcLine",
        },
      ],
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 2000);

      this.loader = null;
    },
  },
  computed: {
    requestListFiltered() {
      if (this.search1 == "") return this.requestList;
      else {
        return this.requestList.filter((el) => {
          return (
            el.JobNum.indexOf(this.search1) > -1 ||
            el.Location.indexOf(this.search1) > -1
          );
        });
      }
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
        // this.$router.push("/service-request#requestlist")

        window.scrollTo({
          top: document.getElementById("requestlist").offsetTop,
          left: 0,
          behavior: "smooth",
        });
      } else {
        alert("Please check you are not robot!!!");
      }
    },
  },
};
</script>

<style scoped>
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
  background: url("https://www.datavtech.com/wp-content/uploads/2022/11/Contact-us.png?id=468")
    no-repeat center center;
  background-size: cover;
}

.hidden {
  display: none !important;
}

a:hover {
  font-weight: bolder;
}

.mb-20 {
  margin-bottom: 50px;
}
.table-custom {
  width: 100%;
  margin-top: 20px;
}
tr:nth-child(even) {
  background-color: #e8e6e6;
}
table,
th,
td {
  border: 1px solid #ddd;
  height: 50px;
  border-collapse: collapse;
}
th {
  border-bottom: 2px solid black;
}
td {
  text-align: center;
}
.input-search {
  margin-top: 5px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: #ddd;
}
</style>
