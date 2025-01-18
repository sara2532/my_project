<template class="allViews">
  <nav class="navbar navbar-expand-xl navbar-light bg-blue desktop">
    <div class="container-fluid">
      <img :src="info.image" class="img11dash" />
      <div class="text-wrapper-666out">
        <a class="navbar-brand" href="#">{{ info.company_name }}</a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <img :src="info.image" class="img11dash" />
        <div class="text-wrapper-666">
          <a class="navbar-brand" href="#">{{ info.company_name }}</a>
        </div>
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="text-wrapper-222 nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><RouterLink
                :to="{
                  name: 'SolarprovideView',
                  //params: { id: id },
                }"
                >Solar panel</RouterLink
              ></a
            >
          </li>
          <li class="text-wrapper-222 nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link
                :to="{
                  name: 'BatteryprovideView',
                  //params: { id: id },
                }"
                >Battery</router-link
              ></a
            >
          </li>
          <li class="text-wrapper-222 nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <RouterLink
                :to="{
                  name: 'InverterprovideView',
                  //params: { id: id },
                }"
                >Inverter</RouterLink
              ></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--
  <div class="desktop">
    <div class="overlap-22">
      <div class="text-wrapper-222">
        <RouterLink
          :to="{
            name: 'SolarprovideView',
            //params: { id: id },
          }"
          >Solar panel</RouterLink
        >
      </div>
      <div class="text-wrapper-333">
        <router-link
          :to="{
            name: 'BatteryprovideView',
            //params: { id: id },
          }"
          >Battery</router-link
        >
      </div>
      <div class="text-wrapper-444">
        <RouterLink
          :to="{
            name: 'InverterprovideView',
            //params: { id: id },
          }"
          >Inverter</RouterLink
        >
      </div>
    </div>
  </div>-->
  <div class="cen">
    <div class="provides" v-for="c in posts" :key="c.id">
      <div class="element">
        <div class="elementPhoto">
          <img :src="c.image" />
        </div>
        <div class="proName">{{ c.product_name }}</div>
        <div class="proDesc">{{ c.description }}</div>
        <!--<div>{{ c.id }}</div>-->
        <form>
          <input
            type="number"
            placeholder="price"
            class="price"
            name="price"
            v-model="p"
            required
          />
          <input
            type="button"
            class="router"
            value="provide"
            @click="provide(c.id)"
          />
        </form>
        <form>
          <input
            type="string"
            placeholder="tag"
            class="tag"
            name="tag"
            v-model="tag"
            required
          />
          <div class="product-pricee">
            <p>
              <span
                ><RouterLink
                  class="rrr"
                  :to="{
                    name: 'BatteryProductDetails',
                    params: { id: c.id },
                  }"
                  style="color: white"
                  >More Details</RouterLink
                ></span
              >
            </p>
          </div>
          <!-- <input
            type="button"
            class="router-tag"
            value="provid tag"
            @click="provideTag(c.id)"
          /> -->
        </form>
      </div>
    </div>
  </div>
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
import axios from "axios";
//import FooterCompany from "@/components/FooterCompany.vue";

export default {
  name: "provideView",
  mounted() {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (!token) {
      // Redirect to login page if token is not available
      this.$router.push("/");
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    axios.get("http://127.0.0.1:8000/api/batteriesNotProvided").then((res) => {
      this.posts = res.data.data;
      console.log(this.posts);
    });
    axios.get(`http://127.0.0.1:8000/api/myInformation`).then((res) => {
      this.info = res.data.data;
      //console.log(this.info);
    });
  },
  data() {
    return {
      CompanyId: "",
      CompanyDesc: "",
      posts: "",
      product: { id: "", price: "" },
      p: "",
      info: "",
      tag: "",
    };
  },
  methods: {
    provide(i) {
      axios
        .post("http://127.0.0.1:8000/api/provideBattery", {
          battery_id: i,
          price: this.p,
          options: this.tag,
        })
        .then((r) => console.log(r));
      axios
        .get("http://127.0.0.1:8000/api/batteriesNotProvided")
        .then((res) => {
          this.posts = res.data.data;
          console.log(this.posts);
        });
    },
    provideTag(i) {
      axios
        .post("http://127.0.0.1:8000/api/provideProduct", {
          product_id: i,
          price: this.p,
          options: this.tag,
        })
        .then((r) => console.log(r));
    },
  },
};
</script>
<style>
@media screen and (min-width: 1300px) and (max-width: 7800px) {
  .rrr {
    text-decoration: none;
    display: flex;
    position: absolute;
    top: 450px;
    width: 200px;
    height: 60px;
    border-radius: 40px;
    background-color: #3e849d;
    box-shadow: inset;
    border-color: #fff;
    font-size: x-large;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
    left: 210px;
  }
  .rrr :hover {
    background-color: #0c4d8f;
  }
  .element {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
  }
  .cen {
    text-align: center;
    display: block;
    height: auto;
    background-color: #fff;
    position: relative;
  }
  .fff {
    position: relative;
    display: block;
    top: 1000px;
  }
  .provides {
    width: 800px;
    height: 520px;
    position: relative;
    background-color: rgb(195, 208, 215);
    border-radius: 20px;
    display: inline-flex;
    text-align: left;
    margin: 4%;
  }
  .elementPhoto img {
    width: 300px;
    height: 300px;
    margin: 20px;
    border-radius: 20px;
  }
  .proName {
    margin: 20px;
    position: absolute;
    top: 0px;
    margin-left: 5px;
    display: inline-flex;
    left: 50%;
    color: #111111;
    width: 50%;
    height: 50px;
    font-size: 40px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .proDesc {
    margin: 20px;
    position: absolute;
    margin: 40px;
    display: inline-flex;
    color: #111111;
    width: 45%;
    height: 50px;
    font-size: 20px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .router {
    display: flex;
    position: absolute;
    top: 350px;
    right: 50px;
    width: 200px;
    height: 60px;
    border-radius: 40px;
    background-color: #3e849d;
    box-shadow: inset;
    border-color: #fff;
    font-size: x-large;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .router a {
    text-decoration: none;
    color: #fff;
    width: 200px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .price {
    width: 300px;
    background-color: #ffffff;
    position: absolute;
    top: 360px;
    left: 40px;
    display: flex;
    border: none;
    font-size: large;
    font-family: "Roboto-Regular", Helvetica;
    text-align: center;
    color: #000;
  }
  input[type="submit"] {
    font-family: "Roboto-Regular", Helvetica;
  }
  .router-tag {
    display: flex;
    position: absolute;
    top: 210px;
    left: 50px;
    width: 200px;
    height: 60px;
    border-radius: 40px;
    background-color: #3e849d;
    box-shadow: inset;
    border-color: #fff;
    font-size: x-large;
    color: #000000;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .router-tag a {
    text-decoration: none;
    color: #000000;
    width: 200px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .tag {
    width: 300px;
    background-color: #ffffff;
    position: absolute;
    top: 440px;
    left: 40px;
    display: flex;
    border: none;
    font-size: large;
    font-family: "Roboto-Regular", Helvetica;
    text-align: center;
  }
  .allViews {
    background-color: #fff;
  }
}
@media screen and (min-width: 350px) and (max-width: 1301px) {
  .rrr {
    text-decoration: none;
    display: flex;
    position: absolute;
    top: 440px;
    left: 15px;
    width: 200px;
    height: 60px;
    border-radius: 40px;
    background-color: #3e849d;
    box-shadow: inset;
    border-color: #fff;
    font-size: x-large;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .rrr :hover {
    background-color: #0c4d8f;
  }
  .element {
    display: flex;
  }
  .cen {
    text-align: center;
  }
  .provides {
    width: 92%;
    height: 520px;
    position: relative;
    background-color: rgb(195, 208, 215);
    border-radius: 10px;
    display: block;
    text-align: left;
    margin: 4%;
    display: flex;
  }
  .elementPhoto img {
    width: 300px;
    height: 300px;
    margin: 10px;
    border-radius: 10px;
  }
  .proName {
    margin: 20px;
    position: absolute;
    top: 0px;
    margin: 5px;
    display: inline-flex;
    left: 50%;
    color: #111111;
    width: 50%;
    height: 50px;
    font-size: 40px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .proDesc {
    margin: 20px;
    position: absolute;
    top: 15%;
    display: inline-flex;
    left: 52%;
    color: #111111;
    width: 45%;
    height: 50px;
    font-size: 20px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .router {
    display: flex;
    position: absolute;
    top: 350px;
    left: 330px;
    width: 200px;
    height: 60px;
    border-radius: 40px;
    background-color: #3e849d;
    box-shadow: inset;
    border-color: #fff;
    font-size: x-large;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .router a {
    text-decoration: none;
    color: #000000;
    width: 200px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .price {
    width: 200px;
    background-color: #ffffff;
    position: absolute;
    top: 350px;
    left: 100px;
    display: flex;
    border: none;
    font-size: large;
    font-family: "Roboto-Regular", Helvetica;
    color: #000000;
    height: 60px;
    border-radius: 40px;
    text-align: center;
  }
  input[type="submit"] {
    font-family: "Roboto-Regular", Helvetica;
  }
  .router-tag {
    display: flex;
    position: absolute;
    top: 430px;
    left: 330px;
    width: 200px;
    height: 60px;
    border-radius: 40px;
    background-color: #3e849d;
    box-shadow: inset;
    border-color: #fff;
    font-size: x-large;
    color: #000000;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .router-tag a {
    text-decoration: none;
    color: #fff;
    width: 200px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .tag {
    width: 200px;
    background-color: #ffffff;
    position: absolute;
    top: 430px;
    left: 100px;
    display: flex;
    border: none;
    font-size: large;
    font-family: "Roboto-Regular", Helvetica;
    color: #000000;
    height: 60px;
    border-radius: 40px;
    text-align: center;
  }
}
</style>
