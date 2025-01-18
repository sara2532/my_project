<template>
  <div class="comp_login">
    <section class="contacta" id="contacta">
      <div class="row">
        <form @submit.prevent="savedata">
          <label id="label">Company Name</label>
          <input
            type="text"
            placeholder="name"
            class="box"
            v-model="company.company_name"
          />
          <br />
          <label id="label">Company contactas</label>
          <input
            type="email"
            placeholder="email"
            class="box"
            v-model="company.email_Account"
          />
          <input
            type="text"
            placeholder="facebook"
            class="box"
            v-model="company.faceBook_Account"
          />
          <input
            type="text"
            placeholder="instagram"
            class="box"
            v-model="company.instagram_Account"
          />
          <input
            type="text"
            placeholder="watsapp"
            class="box"
            v-model="company.whatsUp_Account"
          />
          <input
            type="text"
            placeholder="linkedin"
            class="box"
            v-model="company.LinkedIn_Account"
            name="LinkedIn_Account"
          />
          <br />
          <label id="label">Product Image</label>
          <input
            type="file"
            @change="onFileSelected"
            accept=".jpg, .jpeg, .png"
          />
          <br />
          <label id="label">Company password</label>
          <input
            type="password"
            placeholder="password"
            class="box"
            v-model="company.password"
          />
          <br />

          <input type="submit" value="Login" class="btn" />
        </form>
        <div class="image">
          <img src="5.png" />
        </div>
      </div>
    </section>
    <FooterHome />
  </div>
</template>

<script>
import FooterHome from "@/components/FooterHome.vue";
import axios from "axios";
export default {
  name: "LoginComp",
  components: {
    FooterHome,
  },
  data: function () {
    return {
      pageName: "Login Company",
      company: {
        company_name: "",
        password: "",
        image: "",
        faceBook_Account: "",
        instagram_Account: "",
        email_Account: "",
        whatsUp_Account: "",
        LinkedIn_Account: "",
      },
    };
  },
  methods: {
    savedata() {
      const formData = new FormData();
      formData.append("company_name", this.company.company_name);
      formData.append("password", this.company.password);
      formData.append("faceBook_Account", this.company.faceBook_Account);
      formData.append("instagram_Account", this.company.instagram_Account);
      formData.append("email_Account", this.company.email_Account);
      formData.append("whatsUp_Account", this.company.whatsUp_Account);
      formData.append("LinkedIn_Account", this.company.LinkedIn_Account);
      formData.append("image", this.company.image); // Corrected line
      axios
        .post("http://127.0.0.1:8000/api/auth/company_register", formData)
        .then((res) => console.log(res));
    },
    onFileSelected(event) {
      this.company.image = event.target.files[0]; // Corrected line
    },
  },
};
</script>

<style>
.comp_login {
  align-items: center;
  display: inline;
  text-align: center;
  left: 50%;
  border-radius: 30px;
}
.contacta {
  background-image: url(./../../assets/Panel-1.png);
  background-repeat: no-repeat;
  background-size: cover;
  left: 50%;
  text-align: center;
  height: 1050px;
  margin: 100pxpx;
  padding: 0px;
  font-family: verdana, Geneva, "Poppins", sans-serif;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.2s linear;
  border-radius: 30px;
  left: 30%;
}
.contacta {
  font-size: 62.5%;
  overflow-x: hidden;
  text-align: center;
  border-radius: 30px;
}
.row {
  position: relative;
  display: inline-block;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-radius: 30px;
  left: 40%;
}
.row form {
  text-align: center;
  flex: 1 1 40rem;
  padding: 2rem 2.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 1);
  border: 0.1rem solid rgba(0, 0, 0, 1);
  background: #fff;
  border-radius: 30px;
  width: 50%;
}
.row form .box:focus {
  border-color: #70e679;
}

.row form .box {
  padding: 1rem;
  font-size: 1.7rem;
  color: #333;
  text-transform: none;
  border: 0.1rem solid rgba(0, 0, 0, 1);
  margin: 0.7rem 0;
  border-radius: 30px;
  width: 100%;
}
.row form .btn {
  text-align: center;
}
.row .image {
  flex: 1 1 40rem;
}
.row .image img {
  width: 100%;
}
.heading {
  text-align: center;
  font-size: 4rem;
  color: #333;
  padding: 1rem;
  margin: 2rem 0;
  background: rgba(255, 51, 153, 0.05);
}
#label {
  font-size: 1.5rem;
  text-align: center;
  padding: 10px;
  position: relative;
}
.btn {
  display: inline-block;
  font-size: 1.7rem;
  background: #333;
  border-radius: 5rem;
  margin-top: 1rem;
  padding: 0.9rem 3.5rem;
  color: #fff;
  cursor: pointer;
}
.btn:hover {
  background-color: #70e679;
}
.heading span {
  color: #70e679;
}
</style>
