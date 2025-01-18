<template>
  <div>{{ this.CompanyId }}</div>
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
            // params: { id: id },
          }"
          >Battery</router-link
        >
      </div>
      <div class="text-wrapper-444">
        <RouterLink
          :to="{
            name: 'InverterprovideView',
            // params: { id: id },
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
            id="price"
            v-model="p"
            required
          />
          <input
            type="button"
            class="router"
            value="provide"
            @click="provide(c.id)"
          />
          <div class="product-pricee">
            <p>
              <span
                ><RouterLink
                  class="rrr"
                  :to="{
                    name: 'ProductDetails',
                    params: { id: c.id },
                  }"
                  style="color: white"
                  >More Details</RouterLink
                ></span
              >
            </p>
          </div>
        </form>
        <form>
          <input
            type="string"
            placeholder="tag"
            class="tag"
            name="tag"
            v-model="tag"
            required
            id="tag"
          />
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
    axios
      .get("http://127.0.0.1:8000/api/solarPannelNotProvided")
      .then((res) => {
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
        .post("http://127.0.0.1:8000/api/provideSolar", {
          solarpanel_id: i,
          price: this.p,
          options: this.tag,
        })
        .then((r) => console.log(r));
      axios
        .get("http://127.0.0.1:8000/api/solarPannelNotProvided")
        .then((res) => {
          this.posts = res.data.data;
          console.log(this.posts);
        });
    },
  },
};
</script>
