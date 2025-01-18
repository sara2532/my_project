<template>
  <div class="dashbord">
    <div class="dashHeader">
      <img :src="info.image" class="comppImg" />
      <div class="companyNamedash">{{ info.company_name }}</div>
      <div class="compDescriptiondash">{{ info.description }}</div>
      <div class="text-wrappe" @click="logout">Logout</div>
      <div class="setting">
        <RouterLink
          :to="{
            name: 'settingView',
            //params: { id: id },
          }"
          style="color: white"
          >setting
        </RouterLink>
      </div>
      <div class="text-wrappesolar">
        <RouterLink
          :to="{
            name: 'dashbordView',
            //params: { id: id },
          }"
          style="color: white"
          >panels
        </RouterLink>
      </div>
      <div class="text-wrappebattery">
        <RouterLink
          :to="{
            name: 'dashBatteries',
            //params: { id: id },
          }"
          style="color: white"
          >Batteries
        </RouterLink>
      </div>
      <div class="text-wrappeinverter">
        <RouterLink
          :to="{
            name: 'dashBatteries',
            //params: { id: id },
          }"
          style="color: white"
          >Inverters
        </RouterLink>
      </div>
      <div class="provideProduct">
        <RouterLink to="/SolarprovideView" class="provideProduct">
          Provide
        </RouterLink>
      </div>
    </div>
    <div class="dis">
      <div class="productOfCompany">
        <div class="productViews" v-for="c in posts" :key="c.id">
          <div class="product">
            <div class="body">
              <div class="wrapper">
                <div class="product-imgdash">
                  <img :src="c.image" height="420" width="327" />
                </div>
                <div class="product-infoo">
                  <div class="product-text">
                    <h1>{{ c.product_name }}</h1>
                    <h2></h2>
                    <p>
                      {{ c.description }}
                    </p>
                  </div>
                  <div class="product-price-btnd">
                    <span
                      ><button @click="deleteItem(c.id)" class="delete">
                        <img src="../../assets/icons8-remove-24.png" />
                      </button>
                    </span>
                    <div class="options">
                      <input
                        type="text"
                        v-model="c.options"
                        class="options"
                        name="options"
                      />
                    </div>
                    <input
                      type="number"
                      v-model="c.price"
                      class="inn"
                      name="price"
                    />
                    <span
                      ><button
                        @click="update(c.id, c.price, c.options)"
                        class="update"
                      >
                        <img src="../../assets/icons8-done-26.png" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default {
  name: "dashbordView",
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

    axios.get(`http://127.0.0.1:8000/api/mySolarPanels`).then((res) => {
      this.posts = res.data.data;
      //console.log(this.posts);
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
      info: "",
    };
  },
  methods: {
    update(i, p, o) {
      try {
        axios
          .post("http://127.0.0.1:8000/api/updateProviededSolar", {
            solarpanel_id: i,
            price: p,
            options: o,
          })
          .then((r) => console.log(r));
      } finally {
        // window.location.reload();
        // axios.get(`http://127.0.0.1:8000/api/mySolarPanels`).then((res) => {
        //   this.posts = res.data.data;
        //   //console.log(this.posts);
        // });
      }
    },
    deleteItem(i) {
      axios
        .post(`http://127.0.0.1:8000/api/unprovideSolar/${i}`)
        .then((r) => console.log(r));
      axios.get(`http://127.0.0.1:8000/api/mySolarPanels`).then((res) => {
        this.posts = res.data.data;
        //console.log(this.posts);
      });
    },
    logout() {
      axios.post(`http://127.0.0.1:8000/api/auth/logout`);
      this.$router.push("/");
    },
    getSolar() {
      axios.get(`http://127.0.0.1:8000/api/mySolarPanels`).then((res) => {
        this.posts = res.data.data;
        //console.log(this.posts);
      });
    },
    getBattery() {
      axios.get(`http://127.0.0.1:8000/api/myBatteries`).then((res) => {
        this.posts = res.data.data;
        //console.log(this.posts);
      });
    },
    getInverter() {
      axios.get(`http://127.0.0.1:8000/api/myInverters`).then((res) => {
        this.posts = res.data.data;
        //console.log(this.posts);
      });
    },
  },
};
</script>
<style>
.sdolar {
  position: relative;
  display: inline;
  font-size: 30px;
  left: 40px;
}
@media screen and (min-width: 1300px) and (max-width: 7800px) {
  .dashHeader {
    width: 100%;
    height: 200px;
    background-image: linear-gradient(
      to right,
      rgb(82, 166, 185),
      rgb(179, 217, 235)
    );
  }
  .inn {
    width: 170px;
    left: 100px;
    position: relative;
    display: inline-block;
    background-color: #236c83;
    border: none;
    color: #f8f4f4;
    font-size: 30px;
    text-align: center;
  }
  .product-price-btnd .update {
    display: flex;
    position: absolute;
    top: 130px;
    height: 55px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 0px;
    font-size: 20px;
    font-weight: lighter;
    color: #fff7f7;
    left: 10px;
    background-color: #236c83;
    border-radius: 30px;
    width: 80px;
    justify-content: center;
    align-items: center;
  }
  .product-price-btnd .update:hover {
    background-color: rgb(32, 159, 91);
  }
  .product-price-btnd .delete {
    display: flex;
    position: absolute;
    top: -300px;
    height: 55px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 0px;
    font-size: 20px;
    font-weight: lighter;
    color: #fff7f7;
    left: 220px;
    background-color: #236c83;
    border-radius: 20px;
    width: 50px;
    justify-content: center;
    align-items: center;
  }
  .product-price-btnd .delete:hover {
    background-color: rgb(206, 40, 38);
  }
  .productOfCompany {
    position: relative;
    margin: 0px;
  }
  .dashbord {
    display: inline;
    width: 100%;
    height: 1500px;
    background-color: #a7c9d3;
  }
  .comppImg {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 10px;
    margin-top: 0px;
    border-color: rgb(11, 26, 75);
    border-style: solid;
    display: inline;
  }
  .companyNamedash {
    position: absolute;
    color: #010101;
    top: 1%;
    left: 250px;
    font-size: 70px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .compDescriptiondash {
    position: absolute;
    color: #333131;
    top: 12%;
    left: 440px;
    font-size: 20px;
    font-family: "Roboto-Regular", Helvetica;
    width: 550px;
  }
  .provideProduct a {
    position: absolute;
    top: 1rem;
    width: 160px;
    height: 60px;
    right: 12rem;
    font-size: 30px;
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dis {
    border-radius: 5px;
    background-color: rgb(248, 248, 249);
    background-position: 100% 100%;
    background-size: cover;
    height: 1500px;
    position: relative;
    top: 25%;
    width: 100%;
    left: 0px;
    margin: 0px;
  }
  .product-price-btnd {
    height: 103px;
    width: 327px;
    margin-top: 17px;
    position: relative;
  }

  .product-price-btnd p {
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
    background-color: #82b8c9;
    border-radius: 10px;
    width: 100px;
    text-align: center;
  }
  .product-price-btnd button {
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
    background-color: #5f9eb1;
    cursor: pointer;
  }

  .product-price-btnd button:hover {
    background-color: #236c83;
  }
  .text-wrappe {
    position: absolute;
    top: 1rem;
    width: 160px;
    height: 60px;
    right: 1rem;
    font-size: 30px;
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .text-wrappesolar {
    position: absolute;
    top: 1rem;
    width: 160px;
    height: 60px;
    right: 23rem;
    font-size: 30px;
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .text-wrappesolar a {
    text-decoration: none;
  }
  .setting {
    position: absolute;
    top: 1rem;
    width: 160px;
    height: 60px;
    left: 60rem;
    font-size: 30px;
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .setting a {
    text-decoration: none;
  }
  .text-wrappebattery {
    position: absolute;
    top: 1rem;
    width: 160px;
    height: 60px;
    right: 34rem;
    font-size: 30px;
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .text-wrappebattery a {
    color: #ffffff;
    text-decoration: none;
  }
  .text-wrappebattery {
    text-decoration: none;
    color: #ffffff;
  }
  .text-wrappeinverter {
    position: absolute;
    top: 1rem;
    width: 160px;
    height: 60px;
    right: 45rem;
    font-size: 30px;
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .text-wrappeinverter a {
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .product-infoo {
    float: left;
    height: 510px;
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
    margin: 0 0 0 25px;
    font-family: "Playfair Display", serif;
    color: #332e2e;
    line-height: 1.5em;
    font-size: 20px;
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
  .product-imgdash {
    box-shadow: 10px 10px 10px rgb(217, 214, 214);
    margin: 15px;
    margin-right: 0px;
    float: left;
    height: 500px;
    width: 270px;
    border-radius: 30px;
  }
  .product-imgdash img {
    border-radius: 30px;
    height: 500px;
  }
  .options input[type="text"] {
    width: 259px;
    margin: 10px;
    position: relative;
    display: inline;
    background-color: #9cd6e7;
    border: none;
    color: #2d2a2a;
    font-size: 20px;
    text-align: center;
    height: 50px;
  }
}
@media screen and (min-width: 50px) and (max-width: 1301px) {
  .dashHeader {
    width: 100%;
    height: 400px;
    background-image: linear-gradient(
      to right,
      rgb(82, 166, 185),
      rgb(179, 217, 235)
    );
  }
  .inn {
    width: 170px;
    left: 100px;
    position: relative;
    display: inline-block;
    background-color: #236c83;
    border: none;
    color: #f8f4f4;
    font-size: 30px;
    text-align: center;
  }
  .product-price-btnd .update {
    display: flex;
    position: absolute;
    top: 130px;
    height: 55px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 0px;
    font-size: 20px;
    font-weight: lighter;
    color: #fff7f7;
    left: 10px;
    background-color: #236c83;
    border-radius: 30px;
    width: 80px;
    justify-content: center;
    align-items: center;
  }
  .product-price-btnd .update:hover {
    background-color: rgb(32, 159, 91);
  }
  .product-price-btnd .delete {
    display: flex;
    position: absolute;
    top: -300px;
    height: 55px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 0px;
    font-size: 20px;
    font-weight: lighter;
    color: #fff7f7;
    left: 220px;
    background-color: #236c83;
    border-radius: 20px;
    width: 50px;
    justify-content: center;
    align-items: center;
  }
  .product-price-btnd .delete:hover {
    background-color: rgb(206, 40, 38);
  }
  .productOfCompany {
    position: relative;
    margin: 0px;
  }
  .dashbord {
    display: inline;
    width: 100%;
    height: 1500px;
    background-color: #b4cbdb;
  }
  .comppImg {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 80px;
    margin: 40px;
    border-color: rgb(11, 26, 75);
    border-style: solid;
    display: inline;
  }
  .companyNamedash {
    position: absolute;
    color: #010101;
    top: 3%;
    left: 30%;
    font-size: 60px;
    font-family: "Roboto-Regular", Helvetica;
  }
  .compDescriptiondash {
    position: absolute;
    color: #333131;
    top: 12%;
    left: 32%;
    font-size: 20px;
    font-family: "Roboto-Regular", Helvetica;
    width: 400px;
  }
  .provideProduct a {
    position: absolute;
    top: 32%;
    width: 180px;
    height: 80px;
    left: 13rem;
    font-size: 30px;
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dis {
    border-radius: 5px;
    background-color: rgb(248, 248, 249);
    background-position: 100% 100%;
    background-size: cover;
    height: 1500px;
    position: relative;
    top: 25%;
    width: 100%;
    left: 0px;
    margin: 0px;
  }
  .product-price-btnd {
    height: 103px;
    width: 327px;
    margin-top: 17px;
    position: relative;
  }

  .product-price-btnd p {
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
    background-color: #82b8c9;
    border-radius: 10px;
    width: 100px;
    text-align: center;
  }
  .product-price-btnd button {
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
    background-color: #5f9eb1;
    cursor: pointer;
  }

  .product-price-btnd button:hover {
    background-color: #236c83;
  }
  .text-wrappe {
    position: absolute;
    top: 32%;
    width: 180px;
    height: 80px;
    left: 26rem;
    font-size: 30px;
    background-color: #236c83;
    border-radius: 10px;
    border: #ffffff;
    color: #ffffff;
    text-decoration: none;
    text-align: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .product-infoo {
    float: left;
    height: 510px;
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
    margin: 0 0 0 25px;
    font-family: "Playfair Display", serif;
    color: #332e2e;
    line-height: 1.5em;
    font-size: 20px;
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
  .product-imgdash {
    box-shadow: 10px 10px 10px rgb(217, 214, 214);
    margin: 15px;
    margin-right: 0px;
    float: left;
    height: 500px;
    width: 270px;
    border-radius: 30px;
  }

  .product-imgdash img {
    border-radius: 30px;
    height: auto;
  }
  .options input[type="text"] {
    width: 259px;
    margin: 10px;
    position: relative;
    display: inline;
    background-color: #9cd6e7;
    border: none;
    color: #2d2a2a;
    font-size: 20px;
    text-align: center;
    height: 50px;
  }
}
</style>
