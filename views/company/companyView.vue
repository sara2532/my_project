<template>
  <HeaderO />
  <div class="company">
    <!--<div class="overlap-company">
      <img src="./../../assets/ss.jpg" class="imgcompany" />
      <div class="rectangle-10company"></div>
      <div class="text-wrapper-2company">
        <RouterLink to="/SolarView">Solar panel</RouterLink>
      </div>
      <div class="text-wrapper-3company">
        <router-link to="/BatteryView">Battery</router-link>
      </div>
      <div class="text-wrapper-4company">
        <RouterLink to="/InverterView">Inverter</RouterLink>
      </div>
      <div class="text-wrapper-5company">
        <RouterLink to="/about">about us</RouterLink>
      </div>
      <div class="text-wrapper-10company">
        <RouterLink to="/companiesView">company</RouterLink>
      </div>
      <div class="text-wrapper-6company">
        <a href="/companyView">{{ title }}</a>
      </div>

      <div class="companyName">{{ title }}</div>
      <div class="rectangle-12"></div>
      <p class="p">{{ title }}</p>
    </div>-->
    <!--<div class="desktopcomp">
      <div class="overlap-22">
        <img src="./../../assets/pp.jpg" class="img11" />
        <div class="rectangle-100"></div>
        <div class="text-wrapper-222">
          <RouterLink to="/SolarView">Solar Panel</RouterLink>
        </div>
        <div class="text-wrapper-333">
          <router-link to="/BatteryView">Battery</router-link>
        </div>
        <div class="text-wrapper-444">
          <RouterLink to="/InverterView">Inverter</RouterLink>
        </div>
        <div class="text-wrapper-555">
          <RouterLink to="/about">About us</RouterLink>
        </div>
        <div class="text-wrapper-1010">
          <RouterLink to="/companiesView">Company</RouterLink>
        </div>
        <div class="text-wrapper-666"><a href="/">SolarEco Tech</a></div>
        <div class="rectangle-1111"></div>
        <div class="text-wrapper-777">
          <RouterLink to="/">login</RouterLink>
          <ul class="sub-sub-menuh">
            <li><RouterLink to="/signup">signup</RouterLink></li>
            <li><RouterLink to="/">login</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>-->
    <div class="companyImage">
      <img :src="info.image" />
      <div class="theCompanyName">{{ info.company_name }}</div>
      <div class="theCompanyDescription">{{ info.description }}</div>
    </div>
    <div class="productOfCompany">
      <div class="productViews" v-for="c in posts" :key="c.id">
        <div class="product">
          <div class="body">
            <div class="wrapper">
              <div class="product-img">
                <img :src="c.image" height="420" width="327" />
              </div>
              <div class="product-info">
                <div class="product-text">
                  <h1>{{ c.product_name }}</h1>
                  <h2></h2>
                  <!-- <p>
                    {{ c.description }}
                  </p> -->
                </div>
                <div class="product-price-btn">
                  <p class="p1">
                    <span>{{ c.price }}</span>
                  </p>
                  <p class="p2">{{ c.options }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container-fluid py-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <h4 class="text-white">Info</h4>
          <ul class="list-unstyled">
            <li><a href="../about" class="text-white">About Us</a></li>
            <li><a href="../companiesView" class="text-white">companies</a></li>
            <li><a href="../" class="text-white">Login</a></li>
            <li><a href="#" class="text-white">Our Company</a></li>
          </ul>
        </div>

        <div class="col">
          <h4 class="text-white">Explore companies</h4>
          <ul class="list-unstyled">
            <li>
              <a href="../companiesView" class="text-white">Our Partners</a>
            </li>
            <li>
              <a href="../LoginComp" class="text-white">Sign Up as company</a>
            </li>
          </ul>
        </div>

        <div class="col">
          <h4 class="text-white">Products</h4>
          <ul class="list-unstyled">
            <li><a href="../BatteryView" class="text-white">Battery</a></li>
            <li><a href="../InverterView" class="text-white">Inverter</a></li>
            <li><a href="../SolarView" class="text-white">Solar Panel</a></li>
          </ul>
        </div>

        <div class="col">
          <h4 class="text-white">News</h4>
          <p class="text-white">
            Subscribe to our website for a weekly dose of news, updates, tips,
            and exclusive offers.
          </p>
          <ul class="list-unstyled">
            <li><a href="../signup" class="text-white">Sign Up</a></li>
          </ul>
          <div class="d-flex align-items-center">
            <i class="fa-brands fa-facebook-f text-white me-3">
              {{ info.faceBook_Account }}
            </i>
            <i class="fa-brands fa-twitter text-white me-3">
              {{ info.instagram_Account }}
            </i>
            <i class="fa-brands fa-linkedin text-white me-3">
              {{ info.whatsUp_Account }}
            </i>
            <i class="fa-brands fa-github text-white">
              {{ info.email_Account }}
            </i>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <section class="footer">
    <div class="footer-row">
      <div class="footer-col">
        <h4>Info</h4>
        <ul class="links">
          <li><a href="../about">About Us</a></li>
          <li><a href="../companiesView">companies</a></li>
          <li><a href="#">Our Company</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Explore companies</h4>
        <ul class="links">
          <li><a href="../companiesView">Our Companies</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Products</h4>
        <ul class="links">
          <li><a href="../BatteryView">Battery</a></li>
          <li><a href="../InverterView">Inverter</a></li>
          <li><a href="../SolarView">Solar Panel</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <div class="icons">
          <i class="fa-brands fa-facebook-f">{{ info.faceBook_Account }}</i>
          <i class="fa-brands fa-twitter">{{ info.instagram_Account }}</i>
          <i class="fa-brands fa-linkedin">{{ info.whatsUp_Account }}</i>
          <i class="fa-brands fa-github">{{ info.email_Account }}</i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useRoute } from "vue-router";
import HeaderO from "@/components/HeaderO.vue";
import axios from "axios";
export default {
  props: ["id", "title"],
  name: "companyView",
  mounted() {
    const route = useRoute();
    this.CompanyId = route.params.id;
    console.log("route", this.CompanyId);
    axios
      .get(`http://127.0.0.1:8000/api/companyProducts/${this.CompanyId}`)
      .then((res) => {
        this.posts = res.data.data;
        // console.log(this.posts);
      });
    axios
      .get(`http://127.0.0.1:8000/api/companyInfo/${this.CompanyId}`)
      .then((res) => {
        this.info = res.data.data;
        console.log(this.info);
      });
  },
  data() {
    return {
      CompanyId: "",
      CompanyDesc: "",
      posts: "",
      info: "",
    };
  },
  components: {
    HeaderO,
  },
};
</script>
<style>
@media screen and (min-width: 1300px) and (max-width: 7800px) {
  .productOfCompany {
    position: relative;
    height: 1500px;
    display: block;
  }
  .productViews {
    display: block;
    position: relative;
    height: auto;
  }
  .company {
    height: auto;
    background-color: #f0f6fa;
    margin-bottom: 0%;
    display: block;
    position: relative;
  }
  .overlap-company {
    border-radius: 30px;
    background-image: url(./../../assets/Panel-1.png);
    background-position: 100% 50%;
    background-size: cover;
    height: 1772px;
    position: relative;
    top: 0;
    width: 100%;
  }
  .rectangle-10company {
    border: 4px solid;
    border-color: #ffffff;
    border-radius: 30px;
    height: 968px;
    left: 2%;
    position: absolute;
    top: 41px;
    width: 95%;
  }
  .company .text-wrapper-2company a {
    text-decoration: none;
    list-style: none;
    color: #040404;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 503px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 77px;
    width: 219px;
  }
  .company .text-wrapper-3company a {
    text-decoration: none;
    list-style: none;
    color: #000000;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 712px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 78px;
    width: 150px;
  }

  .company .text-wrapper-4company a {
    text-decoration: none;
    list-style: none;
    color: #080808;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 862px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 78px;
    width: 150px;
  }

  .company .text-wrapper-5company a {
    text-decoration: none;
    list-style: none;
    color: #080808;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 1018px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 78px;
    width: 150px;
  }

  .company .text-wrapper-10company a {
    text-decoration: none;
    list-style: none;
    color: #080808;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 1180px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 78px;
    width: 150px;
  }
  .company .text-wrapper-6company a {
    text-decoration: none;
    list-style: none;
    color: #080808;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 36px;
    font-weight: 400;
    left: 180px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 80px;
    width: 200px;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .text-wrapper-77company a {
    text-decoration: none;
    list-style: none;
  }
  .company .text-wrapper-77company {
    color: #000000;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 103rem;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 91px;
    width: 10rem;
    text-align: center;
  }
  .company .text-wrapper-77company li {
    text-decoration: none;
    text-align: center;
  }
  .company .text-wrapper-77company .sub-sub-menucompany {
    text-align: center;
    display: none;
    list-style: none;
    text-decoration: none;
    color: #000000;
    background-color: #ffffff;
    border-radius: 30px;
    position: relative;
    top: 15px;
  }
  .company .text-wrapper-77company .sub-sub-menucompany li {
    text-align: center;
    list-style: none;
    text-decoration: none;
    position: absolute;
    color: #000000;
    position: relative;
    left: -18px;
  }
  .company .text-wrapper-77company .sub-sub-menucompany {
    list-style: none;
    text-decoration: none;
    color: #000000;
    text-align: center;
  }
  .text-wrapper-77company:hover .sub-sub-menucompany {
    text-align: center;
    display: block;
  }
  .company .rectangle-11 {
    box-shadow: 10px 10px 20px rgb(33, 32, 32);
    background-color: #ffffff;
    border-radius: 30px;
    height: 67px;
    left: 103rem;
    position: absolute;
    top: 72px;
    width: 10rem;
  }
  .company .imgcompany {
    box-shadow: 10px 10px 20px rgb(33, 32, 32);
    left: 100px;
    position: absolute;
    top: 70px;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
  .company .companyName {
    position: absolute;
    font-size: 50px;
    font-weight: 500;
    top: 350px;
    left: 40%;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .company .rectangle-12 {
    background-color: #236c83;
    border-radius: 0px 0px 30px 30px;
    height: 200px;
    left: 38px;
    position: absolute;
    top: 820px;
    width: 1086px;
    box-shadow: 10px 10px 20px rgb(33, 32, 32);
  }

  .company .p {
    color: #ffffff;
    font-family: "Roboto-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 94px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 854px;
    width: 773px;
  }
  .addNewProductButton {
    position: absolute;
    top: 100px;
    width: 250px;
    height: 100px;
    left: 95rem;
    font-size: 30px;
    background-color: #ffffff;
    border-radius: 30px;
    border: #ffffff;
  }
  .body {
    border-radius: 30px;
    background-color: #d1dff1;
    border-radius: 10px;
  }
  .product {
    border-radius: 10px;
    margin-left: 40px;
  }
  .wrapper {
    display: contents;
    height: 420px;
    margin: 20px;
    width: 550px;
    border-radius: 10px;
  }

  .product-img {
    box-shadow: 10px 10px 10px rgb(217, 214, 214);
    margin: 15px;
    margin-right: 0px;
    float: left;
    height: 420px;
    width: 270px;
    border-radius: 30px;
  }

  .product-img img {
    border-radius: 30px;
  }

  .product-info {
    float: left;
    height: 420px;
    width: 280px;
    border-radius: 30px;
    background-color: #ffffff;
    margin: 15px;
    margin-left: 0px;
    color: rgb(254, 255, 255);
  }

  .product-text {
    height: 300px;
    width: 327px;
  }

  .product-text h1 {
    margin: 0 0 0 10px;
    padding-top: 30px;
    font-size: 25px;
    color: #000000;
  }

  .product-text h1,
  .product-price-btn p {
    font-family: "Bentham", serif;
  }

  .product-text h2 {
    margin: 20px 0px 47px 0px;
    font-size: 13px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #08386c;
    letter-spacing: 0.2em;
  }

  .product-text p {
    height: 125px;
    margin: 0 0 0 38px;
    font-family: "Playfair Display", serif;
    color: #8d8d8d;
    line-height: 1.7em;
    font-size: 15px;
    font-weight: lighter;
    overflow: hidden;
    width: 200px;
  }

  .product-price-btn {
    height: 60px;
    width: 127px;
    margin-top: 17px;
    position: relative;
  }

  .product-price-btn .p1 {
    display: inline-block;
    position: absolute;
    top: -13px;
    height: 50px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 38px;
    font-size: 28px;
    font-weight: lighter;
    color: #fff7f7;
    left: 100px;
    background-color: #236c83;
    border-radius: 10px;
    width: 120px;
    text-align: center;
  }
  .product-price-btn .p2 {
    display: inline-block;
    position: absolute;
    top: 40px;
    height: 50px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 15px;
    font-size: 28px;
    font-weight: lighter;
    color: #fff7f7;
    left: 0px;
    background-color: #3ba0be;
    border-radius: 30px;
    width: 250px;
    text-align: center;
  }

  span {
    display: inline-block;
    height: 50px;
    font-family: "Suranna", serif;
    font-size: 34px;
  }

  .product-price-btn button {
    display: inline-block;
    height: 50px;
    width: 176px;
    margin: 0 40px 0 16px;
    box-sizing: border-box;
    border: transparent;
    border-radius: 60px;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #ffffff;
    background-color: #a2c0d6;
    cursor: pointer;
    outline: none;
  }

  .product-price-btn button:hover {
    background-color: #0c4d8f;
  }
  .desktopcomp .overlap-22 {
    background-color: #3e849d;
    background-position: 100% 50%;
    background-size: cover;
    height: 70px;
    position: relative;
    top: 0;
    width: 100%;
    border-radius: 5px;
  }

  .desktopcomp .img11 {
    left: 10px;
    position: absolute;
    top: 10px;
    height: 3rem;
    width: 3rem;
    border-radius: 30px;
    box-shadow: 10px 10px 20px rgb(33, 32, 32);
  }
  /*
.desktop .rectangle-100 {
  border: 4px solid;
  border-color: #ffffff;
  border-radius: 30px;
  height: 130px;
  left: 2%;
  position: absolute;
  top: 41px;
  width: 95%;
}*/

  .desktopcomp .text-wrapper-222 a {
    text-decoration: none;
    list-style: none;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 25px;
    font-weight: 400;
    left: 55%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 15px;
    width: 219px;
  }

  .desktopcomp .text-wrapper-333 a {
    text-decoration: none;
    list-style: none;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 25px;
    font-weight: 400;
    left: 64%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 15px;
    width: 150px;
  }
  .desktopcomp .text-wrapper-444 a {
    text-decoration: none;
    list-style: none;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 25px;
    font-weight: 400;
    left: 71%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 15px;
    width: 150px;
  }

  .desktopcomp .text-wrapper-555 a {
    text-decoration: none;
    list-style: none;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 25px;
    font-weight: 400;
    left: 78%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 15px;
    width: 150px;
  }

  .desktopcomp .text-wrapper-666 a {
    text-decoration: none;
    list-style: none;
    color: #fafafa;
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    left: 80px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 15px;
    width: 4;
    font-family: Georgia, "Times New Roman", Times, serif;
  }

  .desktopcomp .text-wrapper-1010 a {
    text-decoration: none;
    list-style: none;
    color: #ffffff;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 85%;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 20px;
    width: 150px;
  }
  .desktopcomp .rectangle-1111 {
    text-align: center;
    background-color: #ffffff;
    border-radius: 25px;
    height: 60px;
    left: 93%;
    position: absolute;
    top: 5px;
    width: 120px;
  }
  .text-wrapper-777 a {
    text-decoration: none;
    list-style: none;
    border-radius: 30px;
  }
  .desktopcomp .text-wrapper-777 {
    color: #000000;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 92%;
    letter-spacing: 0;
    position: absolute;
    text-align: center;
    top: 20px;
    width: 150px;
    border-radius: 30px;
  }
  .companyImage {
    width: 100%;
    height: 400px;
    background-image: linear-gradient(
      to right,
      rgb(82, 166, 185),
      rgb(179, 217, 235)
    );
  }
  .companyImage img {
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    border-radius: 50%;
    top: 30px;
    left: 40px;
    box-shadow: 2px 2px 2px 2px #434647;
    border: 3px #236c83 solid;
  }
  .theCompanyName {
    position: absolute;
    display: flex;
    color: #333131;
    top: 100px;
    left: 400px;
    font-size: 60px;
  }
  .theCompanyDescription {
    position: absolute;
    display: flex;
    color: #333131;
    top: 190px;
    left: 440px;
    font-size: 30px;
    width: 1200px;
    height: auto;
    overflow: hidden;
  }
}
@media screen and (min-width: 50px) and (max-width: 1301px) {
  .companyImage {
    width: 100%;
    height: 400px;
    background-image: linear-gradient(
      to right,
      rgb(82, 166, 185),
      rgb(179, 217, 235)
    );
  }
  .companyImage img {
    width: 150px;
    height: 150px;
    position: relative;
    display: flex;
    border-radius: 50%;
    top: 30px;
    left: 40px;
    box-shadow: 2px 2px 2px 2px #434647;
    border: 3px #236c83 solid;
  }
  .theCompanyName {
    position: relative;
    display: flex;
    color: #333131;
    top: -130px;
    left: 240px;
    font-size: 60px;
  }
  .theCompanyDescription {
    position: relative;
    display: flex;
    color: #333131;
    top: -130px;
    left: 280px;
    font-size: 25px;
    width: 350px;
    height: 260px;
    overflow: hidden;
  }
  .body {
    border-radius: 30px;
    background-color: #d1dff1;
    border-radius: 10px;
  }
  .wrapper {
    display: contents;
    height: 420px;
    margin: 20px;
    width: 550px;
    border-radius: 10px;
  }
  .product {
    border-radius: 10px;
    margin-left: 40px;
  }
  .product-img {
    box-shadow: 10px 10px 10px rgb(217, 214, 214);
    margin: 15px;
    margin-right: 0px;
    float: left;
    height: 420px;
    width: 270px;
    border-radius: 30px;
  }

  .product-img img {
    border-radius: 30px;
  }

  .product-info {
    float: left;
    height: 420px;
    width: 280px;
    border-radius: 30px;
    background-color: #ffffff;
    margin: 15px;
    margin-left: 0px;
    color: rgb(254, 255, 255);
  }

  .product-text {
    height: 300px;
    width: 327px;
  }

  .product-text h1 {
    margin: 0 0 0 10px;
    padding-top: 30px;
    font-size: 25px;
    color: #000000;
  }

  .product-text h1,
  .product-price-btn p {
    font-family: "Bentham", serif;
  }

  .product-text h2 {
    margin: 20px 0px 47px 0px;
    font-size: 13px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: #08386c;
    letter-spacing: 0.2em;
  }

  .product-text p {
    height: 125px;
    margin: 0 0 0 38px;
    font-family: "Playfair Display", serif;
    color: #8d8d8d;
    line-height: 1.7em;
    font-size: 15px;
    font-weight: lighter;
    overflow: hidden;
    width: 200px;
  }

  .product-price-btn {
    height: 103px;
    width: 327px;
    margin-top: 17px;
    position: relative;
  }

  .product-price-btn p {
    display: inline-block;
    position: absolute;
    top: -13px;
    height: 50px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 38px;
    font-size: 28px;
    font-weight: lighter;
    color: #fff7f7;
    left: 100px;
    background-color: #236c83;
    border-radius: 10px;
    width: 300px;
    text-align: center;
  }
  .product-price-btn {
    height: 60px;
    width: 127px;
    margin-top: 17px;
    position: relative;
  }

  .product-price-btn .p1 {
    display: inline-block;
    position: absolute;
    top: -13px;
    height: 50px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 38px;
    font-size: 28px;
    font-weight: lighter;
    color: #fff7f7;
    left: 100px;
    background-color: #236c83;
    border-radius: 10px;
    width: 120px;
    text-align: center;
  }
  .product-price-btn .p2 {
    display: inline-block;
    position: absolute;
    top: 40px;
    height: 50px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 15px;
    font-size: 28px;
    font-weight: lighter;
    color: #fff7f7;
    left: 0px;
    background-color: #3ba0be;
    border-radius: 30px;
    width: 250px;
    text-align: center;
  }
  span {
    display: inline-block;
    height: 50px;
    font-family: "Suranna", serif;
    font-size: 34px;
  }

  .product-price-btn button {
    display: inline-block;
    height: 50px;
    width: 176px;
    margin: 0 40px 0 16px;
    box-sizing: border-box;
    border: transparent;
    border-radius: 60px;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #ffffff;
    background-color: #a2c0d6;
    cursor: pointer;
    outline: none;
  }

  .product-price-btn button:hover {
    background-color: #0c4d8f;
  }
  .productOfCompany {
    position: relative;
    margin-bottom: 20px;
    display: block;
    height: auto;
  }
  .company {
    height: 4000px;
    background-color: #f0f6fa;
  }
}
</style>
