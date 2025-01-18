<template>
  <div class="sss">
    <section class="sc">
      <!-- partial:index.partial.html -->
      <div id="signup-form-wrap">
        <form id="signup-form">
          <h2 class="textsignup" style="font-size: 40px"></h2>
          <p>
            <input
              type="text"
              v-model="name"
              id="rname"
              name="name"
              placeholder="accountname/companyname"
              required
            /><i class="validation"><span></span><span></span></i>
          </p>
          <p>
            <input
              type="password"
              v-model="password"
              id="password"
              name="password"
              placeholder="password"
              required
            /><i class="validation"><span></span><span></span></i>
          </p>
          <!-- <p v-show="!isChecked">
            <input
              type="submit"
              id="signup"
              value="signup"
              @click="savedata1"
            />
          </p> -->
          <!-- <input type="checkbox" v-model="isChecked" class="custom-checkbox" />
          <div class="createcompanyaccount">create company account</div> -->
          <!-- <div v-if="isChecked"> -->
          <label id="label1">Company Description</label>
          <input
            type="text"
            placeholder="description"
            class="box"
            v-model="description"
            style="margin-top: 40px"
          />
          <br />
          <label id="label1">Company contactas</label>
          <input
            type="email"
            placeholder="email"
            class="box"
            v-model="email_Account"
            style="background-color: white; border: none"
          />
          <input
            type="text"
            placeholder="facebook"
            class="box"
            v-model="faceBook_Account"
          />
          <input
            type="text"
            placeholder="instagram"
            class="box"
            v-model="instagram_Account"
          />
          <input
            type="text"
            placeholder="watsapp"
            class="box"
            v-model="whatsUp_Account"
          />
          <input
            type="text"
            placeholder="linkedin"
            class="box"
            v-model="LinkedIn_Account"
            name="LinkedIn_Account"
          />
          <br />
          <label id="label1">Company Image</label>
          <input
            type="file"
            @change="onFileSelected"
            accept=".jpg, .jpeg, .png"
          />
          <br />
          <!--<label id="label">Company password</label>
            <input
              type="password"
              placeholder="password"
              class="box"
              v-model="company.password"
            />-->
          <br />

          <input type="submit" value="Update" class="btn" @click="savedata2" />
          <!-- </div> -->
        </form>
      </div>
    </section>
    <h1>{{ result.chartName }}</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      result: {},
      pageName: "signup us",
      isChecked: false,
      emptyFields: true,
      name: "",
      password: "",
      image: "",
      description: "",
      faceBook_Account: "",
      instagram_Account: "",
      email_Account: "",
      whatsUp_Account: "",
      LinkedIn_Account: "",
    };
  },
  mounted() {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (!token) {
      // Redirect to login page if token is not available
      this.$router.push("/");
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // Send token in the headers for authenticated requests
      // axios
      //   .get("http://127.0.0.1:8000/api/token", {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     // Handle 401 Unauthorized error
      //     console.error("Error fetching token:", error);
      //     // Redirect to login page if token is invalid or expired
      //   });
    }
    axios.get(`http://127.0.0.1:8000/api/myInformation`).then((res) => {
      this.info = res.data.data;
      //console.log(this.info);
    });
  },
  methods: {
    savedata1() {
      const formData = new FormData();
      formData.append("visitor_name", this.name);
      formData.append("password", this.password);
      axios.post("http://127.0.0.1:8000/api/auth/visitor_register", formData);
      this.$router.push("/");
    },
    savedata2() {
      const formData = new FormData();
      formData.append("company_name", this.name);
      formData.append("password", this.password);
      formData.append("description", this.description);
      formData.append("faceBook_Account", this.faceBook_Account);
      formData.append("instagram_Account", this.instagram_Account);
      formData.append("email_Account", this.email_Account);
      formData.append("whatsUp_Account", this.whatsUp_Account);
      formData.append("LinkedIn_Account", this.LinkedIn_Account);
      formData.append("image", this.image); // Corrected line
      axios.post(
        "http://127.0.0.1:8000/api/updateCompanyInformation",
        formData
      );
      this.$router.push("/");
    },
    onFileSelected(event) {
      this.image = event.target.files[0]; // Corrected line
    },
  },
};
</script>
