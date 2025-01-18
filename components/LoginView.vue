<template>
  <div class="ssslogin">
    <section class="c">
      <div id="login-form-wrap">
        <h2>Login As Company</h2>
        <form id="login-form" @submit.prevent="loginUser">
          <p>
            <input
              type="text"
              id="accountname"
              name="account_name"
              placeholder="accountname"
              required
              v-model="user.account_name"
            />
          </p>
          <p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              v-model="user.password"
            />
          </p>
          <p>
            <input
              type="submit"
              id="login"
              value="Login"
              style="color: #232323"
            />
          </p>
        </form>
        <div id="create-account-wrap">
          <p>
            Not a member? <RouterLink to="signup">Create Account</RouterLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: { account_name: "", password: "" },
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/auth/login",
          this.user
        );
        const token = response.data.data.token;
        console.log(token);
        if (token) {
          sessionStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          this.$router.push("/dashbordView/");
        } else {
          console.error("Token not received");
        }
      } catch (error) {
        console.error("Login error: ", error);
      }
    },
  },
};
</script>
<style>
.ssslogin {
  align-items: center;
  display: block;
  text-align: center;
  left: 500px;
  border-radius: 0px;
  top: 200px;
  /* background-color: #f0f6fa; */
}
h2 {
  font-weight: 300;
  text-align: center;
  color: #2c2d2c;
}

p {
  position: relative;
}

a,
a:link,
a:visited,
a:active {
  color: #3a3f40;
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
  color: #030303;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

@media screen and (min-width: 540px) and (max-width: 680px) {
  #login-form-wrap {
    position: relative;
    /*background-color: RGB(244, 245, 246, 0.4);*/
    width: 60%;
    top: 100px;
    left: 20%;
    text-align: center;
    padding: 15px 0 0 0;
    border-radius: 30px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
    display: block;
  }
}
@media screen and (min-width: 681px) and (max-width: 7800px) {
  #login-form-wrap {
    position: relative;
    /* background-color: RGB(244, 245, 246, 0.4); */
    width: 35%;
    top: 80px;
    left: 34%;
    text-align: center;
    padding: 20px 0 0 0;
    border-radius: 30px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
    display: block;
  }
}

#login-form {
  padding: 0 60px;
  border-radius: 30px;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  height: 60px;
  line-height: 60px;
  border-radius: 30px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0 0 0 10px;
  margin: 0;
  color: #000000;
  border: 1px solid #f9f9f9;
  font-style: normal;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  display: inline-block;
  background-color: #f9f9f9;
}
input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #c7cacb;
}
input[type="text"]:focus:invalid,
input[type="password"]:focus:invalid {
  color: #cc1e2b;
  border-color: #cc1e2b;
}
input[type="text"]:valid ~ .validation,
input[type="password"]:valid ~ .validation {
  display: block;
  border-color: #0c0;
}
input[type="text"]:valid ~ .validation span,
input[type="password"]:valid ~ .validation span {
  background: #0c0;
  position: absolute;
  border-radius: 30px;
}
input[type="text"]:valid ~ .validation span:first-child,
input[type="password"]:valid ~ .validation span:first-child {
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
  background-color: #83cce5;
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
}
input[type="submit"]:hover {
  background-color: #78b3c6;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

#create-account-wraphome {
  background-color: #eeedf1;
  color: #4084de;
  font-size: 14px;
  width: 100%;
  padding: 10px 0;
  border-radius: 30px;
}
</style>
