<template>
  <div class="sss">
    <section class="sc">
      <!-- partial:index.partial.html -->
      <div id="signup-form-wrap">
        <form id="signup-form">
          <h2 class="textsignup" style="font-size: 40px">signup</h2>
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
          <p v-show="!isChecked">
            <input
              type="submit"
              id="signup"
              value="signup"
              @click="savedata1"
            />
          </p>
          <input type="checkbox" v-model="isChecked" class="custom-checkbox" />
          <div class="createcompanyaccount">create company account</div>
          <div v-if="isChecked">
            <label id="label1">Company Description</label>
            <input
              type="text"
              placeholder="description"
              class="box"
              v-model="description"
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

            <input
              type="submit"
              value="SIGNUP"
              class="btn"
              @click="savedata2"
            />
          </div>
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
      axios.post("http://127.0.0.1:8000/api/auth/company_register", formData);
      this.$router.push("/");
    },
    onFileSelected(event) {
      this.image = event.target.files[0]; // Corrected line
    },
  },
};
</script>
<style>
.sss {
  align-items: center;
  display: block;
  text-align: center;
  left: 500px;
  border-radius: 0px;
  top: 200px;
  background-image: url(./../assets/back/c.jpg);
  background-position: 100% 50%;
  background-size: cover;
  /* background-color: #f0f6fa; */
}
.sc {
  /* background-color: #cadee4; */
  left: 500px;
  text-align: center;
  height: 1450px;
  margin: 100pxpx;
  padding: 0px;
  font-family: verdana, Geneva, "Poppins", sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  outline: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.2s linear;
  border-radius: 30px;
  top: 200px;
}
h2 .textsignup {
  font-weight: 50px;
  text-align: center;
  font-size: 50px;
  top: 200px;
  background-color: #ffffff;
}

p {
  position: relative;
}

a,
a:link,
a:visited,
a:active {
  color: #6dbbd4;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
a:focus,
a:hover,
a:link:focus,
a:link:hover,
a:visited:focus,
a:visited:hover,
a:active:focus,
a:active:hover {
  color: #373a3c;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
@media screen and (min-width: 540px) and (max-width: 680px) {
  #signup-form-wrap {
    position: relative;
    background-color: #d4e4e6;
    width: 60%;
    top: 100px;
    left: 20%;
    text-align: center;
    padding: 15px 0 0 0;
    border-radius: 30px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
    display: block;
    border-radius: 30px;
  }
  .createcompanyaccount {
    display: flex;
    position: absolute;
    left: 25%;
    top: 90%;
    color: #387386;
    text-decoration: underline;
  }
}
@media screen and (min-width: 681px) and (max-width: 7800px) {
  #signup-form-wrap {
    position: relative;
    background-color: #d4e4e6;
    width: 35%;
    top: 80px;
    left: 34%;
    text-align: center;
    padding: 20px 0 0 0;
    border-radius: 30px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
    display: block;
    color: #1a1919;
    border-radius: 30px;
  }
  .createcompanyaccount {
    display: flex;
    position: absolute;
    left: 15%;
    top: 92%;
    color: #387386;
    text-decoration: underline;
  }
}
/* #signup-form-wrap {
  position: relative;
  top: 200px;
  display: inline-block;
  border-radius: 30px;
  background-color: #ffffff;
  width: 35%;
  text-align: center;
  padding: 20px 0 0 0;
  box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
} */

#signup-form {
  padding: 0 60px;
  top: 200px;
  background-color: #d4e4e6;
  border-radius: 30px;
}

input {
  display: inline;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  height: 60px;
  line-height: 60px;
  border-radius: 30px;
  color: #000;
  border: none;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 0 0 0 10px;
  margin: 0;
  color: #000000;
  border: 1px solid #100f0f;
  font-style: normal;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  display: inline-block;
  background: none;
}
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
  border-color: #636768;
}
input[type="text"]:focus:invalid,
input[type="password"]:focus:invalid,
input[type="email"]:focus:invalid {
  color: #cc1e2b;
  border-color: #cc1e2b;
}
input[type="text"]:valid ~ .validation,
input[type="password"]:valid ~ .validation {
  display: block;
  border-color: #0c0;
}
input[type="text"]:valid ~ .validation span,
input[type="password"]:valid ~ .validation span,
input[type="email"]:valid ~ .validation span {
  background: #0c0;
  position: absolute;
  border-radius: 30px;
}
input[type="text"]:valid ~ .validation span:first-child,
input[type="password"]:valid ~ .validation span:first-child,
input[type="email"]:valid ~ .validation span:first-child {
  top: 30px;
  left: 14px;
  width: 20px;
  height: 3px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
input[type="text"]:valid ~ .validation span:last-child,
input[type="password"]:valid ~ .validation span:last-child {
  top: 35px;
  left: 8px;
  width: 11px;
  height: 3px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.validation {
  display: none;
  position: absolute;
  content: " ";
  height: 60px;
  width: 30px;
  right: 15px;
  top: 0px;
}

input[type="submit"] {
  border: none;
  display: block;
  background-color: #7cb3c5;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-size: 18px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
input[type="submit"]:hover {
  background-color: #7ab7cb;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
input[type="checkbox"] {
  font-size: smaller;
}
.custom-checkbox {
  /* Hide the default checkbox */
  width: 30px;
}

/* Custom checkbox style */
.custom-checkbox {
  position: relative;
  display: flex;
  cursor: pointer;
  left: 0%;
}

/* Custom checkbox visual appearance */
.custom-checkbox ::before {
  content: "";
  position: absolute;
  left: 80px;
  top: -20%;
  width: 20px; /* Size of the custom checkbox */
  height: 20px; /* Size of the custom checkbox */
  border: 2px solid #333; /* Border color */
  background-color: #6dbbd4; /* Background color */
}

/* Custom checkbox checked state */
.custom-checkbox:checked ::before {
  background-color: #007bff; /* Change background color when checked */
}

/* Custom checkbox checkmark */
.custom-checkbox ::after {
  content: "";
  position: absolute;
  left: 6px; /* Position of the checkmark */
  top: 3px; /* Position of the checkmark */
  width: 6px; /* Size of the checkmark */
  height: 12px; /* Size of the checkmark */
  border: solid #333; /* Checkmark color */
  border-width: 0 2px 2px 0; /* Checkmark design */
  transform: rotate(45deg); /* Rotate the checkmark */
  display: none;
}

/* Show checkmark when checkbox is checked */
.custom-checkbox:checked ::after {
  display: block;
}
#label1 {
  font-size: 1rem;
  text-align: left;
  padding: 10px;
  position: relative;
  display: flex;
}
</style>
