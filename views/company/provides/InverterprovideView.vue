<template>
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
    <div class="overlap-22dash">
      <img :src="info.image" class="img11" />
      <div class="comp-dash-name">{{ info.company_name }}</div>
      <div class="text-wrapper-444dash">
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
          <!-- <input
            type="button"
            class="router-tag"
            value="provid tag"
            @click="provideTag(c.id)"
          />-->
          <div class="product-pricee">
            <p>
              <span
                ><RouterLink
                  class="rrr"
                  :to="{
                    name: 'InverterProductDetails',
                    params: { id: c.id },
                  }"
                  style="color: white"
                  >More Details</RouterLink
                ></span
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--<FooterCompany />-->
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
    axios.get("http://127.0.0.1:8000/api/invertersNotProvided").then((res) => {
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
      // product: { id: "", price: "" },
      p: "",
      info: "",
      options: "",
      tag: "",
    };
  },
  methods: {
    provide(i) {
      axios
        .post("http://127.0.0.1:8000/api/provideInverter", {
          inverter_id: i,
          price: this.p,
          options: this.tag,
        })
        .then((r) => console.log(r));
      axios
        .get("http://127.0.0.1:8000/api/invertersNotProvided")
        .then((res) => {
          this.posts = res.data.data;
          console.log(this.posts);
        });
    },
  },
};
</script>
<style>
.desktop .overlap-22dash {
  background-color: #3e849d;
  background-position: 100% 50%;
  background-size: cover;
  height: 80px;
  position: relative;
  top: 0;
  width: 100%;
  border-radius: 5px;
}
.desktop .text-wrapper-444dash a {
  text-decoration: none;
  list-style: none;
  color: #000000;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  left: 55%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 15px;
  width: 150px;
}
.comp-dash-name {
  left: 90px;
  font-size: xx-large;
  position: relative;
  top: 10px;
  color: #000000;
}
.img11dash {
  left: 10px;
  position: absolute;
  top: 0.1rem;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

.footer {
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  bottom: 0px;
  display: block;
}

.footer {
  position: relative;
  display: block;
  left: 0%;
  width: 100%;
  background: #3e849d;
  border-radius: 10px;
}

.footer .footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 60px;
}

.footer-row .footer-col h4 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
}

.footer-col .links {
  margin-top: 20px;
}

.footer-col .links li {
  list-style: none;
  margin-bottom: 10px;
}

.footer-col .links li a {
  text-decoration: none;
  color: #bfbfbf;
}

.footer-col .links li a:hover {
  color: #fff;
}

.footer-col p {
  margin: 20px 0;
  color: #bfbfbf;
  max-width: 300px;
}

.footer-col form {
  display: flex;
  gap: 5px;
}

.footer-col input {
  height: 40px;
  border-radius: 6px;
  background: none;
  width: 100%;
  outline: none;
  border: 1px solid #041b22;
  caret-color: #fff;
  color: #fff;
  padding-left: 10px;
}

.footer-col input::placeholder {
  color: #ccc;
}

.footer-col form button {
  background: #fff;
  outline: none;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s ease;
}

.footer-col form button:hover {
  background: #cecccc;
}

.footer-col .icons {
  display: flex;
  margin-top: 30px;
  gap: 30px;
  cursor: pointer;
}

.footer-col .icons i {
  color: #afb6c7;
}

.footer-col .icons i:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .footer {
    position: relative;
    bottom: 0;
    left: 0;
    transform: none;
    width: 100%;
    border-radius: 0;
    display: block;
  }

  .footer .footer-row {
    padding: 20px;
    gap: 1rem;
  }

  .footer-col form {
    display: block;
  }

  .footer-col form :where(input, button) {
    width: 100%;
  }

  .footer-col form button {
    margin: 10px 0 0 0;
  }
}
</style>
