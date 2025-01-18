<template>
  <div class="comp">
    <div class="comp1">
      <div class="comp_img"><img /></div>
      <div class="comp_text">
        <h1 class="companyName">{{ id }}</h1>
        <p class="inoOfCompany">{{ company_name }}</p>
        <div class="account">
          <div class="account1">
            <img src="../assets/account/facebook-icon-512x512-seb542ju.png" />
            <p>{{ facebook_Account }}</p>
          </div>
          <div class="account1">
            <img
              src="../assets/account/gmail-logo-0B5D69FF48-seeklogo.com.png"
            />
            <p>{{ email_Account }}</p>
          </div>
          <div class="account1">
            <img src="../assets/account/lin.png" />
            <p>{{ LinkedIn_Account }}</p>
          </div>
          <div class="account1">
            <img src="../assets/account/wats.png" />
            <p>{{ whatsUp_Account }}</p>
          </div>
          <div class="account1">
            <img src="../assets/account/sara.jpg" />
            <p>{{ instagram_Account }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["company_name", "id"],
  data: function () {
    return {
      blogData: {
        company_name: null,
        image: null,
        companyDescription: null,
        facebook_Account: null,
        instagram_Account: null,
        email_Account: null,
        watsUp_Account: null,
        LinkedIn_Account: null,
      },
    };
  },
  name: "CompanyView",
  mounted() {
    console.log("mounted() called.......");
  },
};
</script>
<style>
.account1 {
  position: relative;
  width: 60px;
  height: 60px;
  top: 90px;
  margin: 50px;
}
.account1 img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.account {
  display: flex;
}
.comp {
  position: relative;
  left: 10%;
  text-align: left;
  margin: 50px;
}
.comp1 {
  background-color: aliceblue;
  padding: 30px;
  width: 80%;
  height: 300px;
  border-radius: 30px;
  background-color: #236c83;
  box-shadow: 20px 20px 40px 20px rgb(110, 157, 189);
}
.comp_img {
  display: inline-flex;
  left: 0px;
  width: 300px;
  height: 300px;
  margin: 8px;
  background-color: #a1ac9d;
  border-radius: 30px;
  position: relative;
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
}
.comp_text {
  display: inline-flex;
  left: 400px;
  top: 20px;
  position: absolute;
  color: #fff;
}
.inoOfCompany {
  margin: 20px;
  position: relative;
  top: 20px;
  display: inline-blockk;
  left: 20px;
  color: #fff;
  max-width: 500px;
  height: 50px;
}
.comp_text {
  display: inline;
}
.visitButton {
  display: inline;
  position: relative;
  top: 100px;
  left: 800px;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: #1baf4f;
  box-shadow: inset;
  border-color: #fff;
  font-size: x-large;
  color: #fff;
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
}
</style>
