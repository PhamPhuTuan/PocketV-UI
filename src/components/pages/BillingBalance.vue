<template>
  <div class="container" id="top-page">
    <h2 style="color: #7cc141">Billing Balance</h2>
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
        <tr v-for="item in todayJobListFiltered" :key="item">
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
      Showing 1 to {{ todayJobListFiltered.length }} of
      {{ todayJobListFiltered.length }} entries.
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    window.scrollTo({
      top: document.getElementById("top-page").offsetTop,
      left: 0,
      behavior: "auto",
    });
  },
  data() {
    return {
      todayJobList: [
        {
          type: 1,
          JobNum: "00001",
          Location: "HCM",
          APPTTime: "17:00 22-03-2023",
          JobDescription: "Service Job",
          JobType: "SRV",
          SVCLine: "SvcLine",
        },
        {
          type: 1,
          JobNum: "02301",
          Location: "HCM",
          APPTTime: "17:00 22-03-2023",
          JobDescription: "Service Job",
          JobType: "SRV",
          SVCLine: "SvcLine",
        },
        {
          type: 1,
          JobNum: "00241",
          Location: "HCM",
          APPTTime: "17:00 22-03-2023",
          JobDescription: "Service Job",
          JobType: "SRV",
          SVCLine: "SvcLine",
        },
      ],
      upcomingJobList: [
        {
          type: 1,
          JobNum: "00001",
          Location: "HCM",
          APPTTime: "17:00 22-03-2023",
          JobDescription: "Service Job",
          JobType: "SRV",
          SVCLine: "SvcLine",
        },
        {
          type: 1,
          JobNum: "00001",
          Location: "HCM",
          APPTTime: "17:00 22-03-2023",
          JobDescription: "Service Job",
          JobType: "SRV",
          SVCLine: "SvcLine",
        },
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
      recentlyCompletedJobList: [
        {
          type: 1,
          JobNum: "00001",
          Location: "HCM",
          APPTTime: "17:00 22-03-2023",
          JobDescription: "Service Job",
          JobType: "SRV",
          SVCLine: "SvcLine",
        },
        {
          type: 1,
          JobNum: "00001",
          Location: "HCM",
          APPTTime: "17:00 22-03-2023",
          JobDescription: "Service Job",
          JobType: "SRV",
          SVCLine: "SvcLine",
        },
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
      search1: "",
      search2: "",
      search3: "",
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
    todayJobListFiltered() {
      if (this.search1 == "") return this.todayJobList;
      else {
        return this.todayJobList.filter((el) => {
          return (
            el.JobNum.indexOf(this.search1) > -1 ||
            el.Location.indexOf(this.search1) > -1
          );
        });
      }
    },
    upcomingJobListFiltered() {
      if (this.search2 == "") return this.upcomingJobList;
      else {
        return this.upcomingJobList.filter((el) => {
          return (
            el.JobNum.indexOf(this.search2) > -1 ||
            el.Location.indexOf(this.search2) > -1
          );
        });
      }
    },
    recentlyCompletedJobListFiltered() {
      if (this.search2 == "") return this.recentlyCompletedJobList;
      else {
        return this.recentlyCompletedJobList.filter((el) => {
          return (
            el.JobNum.indexOf(this.search3) > -1 ||
            el.Location.indexOf(this.search3) > -1
          );
        });
      }
    },
  },
  methods: {},
};
</script>

<style scoped>
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
