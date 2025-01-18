<template>
  <HeaderO />
  <div class="backcolor">
    <a name="signin"></a>
    <h1 class="heading1">Ask<span>Us</span></h1>
    <p class="lets1">let us help you choose wizely</p>
    <div class="ro">
      <form action="" class="backform">
        <label id="label">load sun</label>
        <input
          type="number"
          placeholder="load"
          class="box"
          required
          v-model="data.load_sun"
        />
        <br />

        <label id="label">load battery</label>
        <input
          type="number"
          placeholder="load"
          class="box"
          required
          v-model="data.load_B"
        />
        <br />
        <label id="label">type</label>
        <input
          type="text"
          placeholder="load"
          class="box"
          required
          v-model="data.type"
        />
        <br />
        <label id="label">OPeration Hours</label>
        <input
          type="number"
          placeholder="load"
          class="box"
          required
          v-model="data.n_houres"
        />
        <br />

        <label id="label">budget</label>
        <input
          type="number"
          placeholder="budget"
          class="box"
          required
          v-model="data.budget"
        />
        <br />

        <input type="button" value="compute" class="btn1" @click="wize()" />
      </form>
    </div>
    <p class="lets">
      Be sure that you choice is best choise to custmize your solar system
    </p>
  </div>
  <div class="outputAlisar">
    <!-- <button @click="getData()">getData</button> -->
    <div class="OptionOne">
      <div class="batteryOptions">
        <div class="product">
          <div class="productViewsana" v-for="c in ps" :key="c.id">
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
                      <p>
                        {{ c.description }}
                      </p>
                    </div>
                    <div class="product-price">
                      <p>
                        <span
                          ><RouterLink
                            class="rr"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="batteryOptions">
        <div class="product">
          <div class="productViewsana" v-for="c in inv" :key="c.id">
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
                      <p>
                        {{ c.description }}
                      </p>
                    </div>
                    <div class="product-price">
                      <p>
                        <span
                          ><RouterLink
                            class="rr"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="batteryOptions">
        <div class="product">
          <div class="productViewsana" v-for="c in bat" :key="c.id">
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
                      <p>
                        {{ c.description }}
                      </p>
                    </div>
                    <div class="product-price">
                      <p>
                        <span
                          ><RouterLink
                            class="rr"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterHome />
</template>
<script>
import axios from "axios";
import HeaderO from "@/components/HeaderO.vue";
import FooterHome from "@/components/FooterHome.vue";
export default {
  data: function () {
    return {
      pageName: "About us",
      pageDescripition: "this is about us page ",
      data: { budget: "", load_sun: "", load_B: "", n_houres: "", type: "" },
      solars: [],
      ps: "",
      inverters: [],
      inv: "",
      batteries: [],
      bat: "",
    };
  },
  name: "AboutView",
  components: {
    HeaderO,
    FooterHome,
  },
  mounted() {
    console.log("hhhhhhhhhhhhhh");
  },
  methods: {
    wize() {
      axios
        .post("http://192.168.229.77:5005/api/v1/solar_suggest", this.data)
        .then((r) => {
          console.log(r);
          this.inverters = r.data.I;
          this.batteries = r.data.N;
          this.solars = r.data.B;
          setTimeout(this.getData(), 2000);
        });
      //window.location.reload();
    },
    getData() {
      this.getSolar();
      this.getInverter();
      this.getBattery();
    },
    getInverter() {
      axios
        .post(`http://127.0.0.1:8000/api/getInverter`, {
          id1: this.inverters[0] + 1,
          id2: this.inverters[1] + 1,
        })
        .then((res) => {
          this.inv = res.data.data;
          console.log(this.inv);
        });
    },
    getSolar() {
      axios
        .post(`http://127.0.0.1:8000/api/getSolar`, {
          id1: this.solars[0] + 1,
          id2: this.solars[1] + 1,
        })
        .then((res) => {
          this.ps = res.data.data;
          console.log(this.ps);
        });
    },
    getBattery() {
      axios
        .post(`http://127.0.0.1:8000/api/getBattery`, {
          id1: this.batteries[0] + 1,
          id2: this.batteries[1] + 1,
        })
        .then((res) => {
          this.bat = res.data.data;
          console.log(this.bat);
        });
    },
  },
};
</script>
<style>
.productViewsana {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
}
.backcolor {
  position: relative;
  display: block;
  height: 1500px;
  width: 100%;
  background-image: linear-gradient(white, #3e849d);
  top: 0px;
}
.batteryOptions {
  display: inline-block;
}
@media screen and (min-width: 450px) and (max-width: 1301px) {
  .batteryOptions {
    display: inline-block;
    width: 100%;
  }
  .outputAlisar {
    height: 2000px;
    position: relative;
    width: 100%;
    background-color: #fff;
  }
  .heading1 {
    position: relative;
    display: block;
    text-align: center;
    /* background-color: rgb(255, 255, 255); */
    top: -50px;
    height: 120px;
    font-size: 70px;
    color: #3e849d;
  }
  .lets {
    position: relative;
    display: block;
    text-align: center;
    /* background-color: rgb(255, 255, 255); */
    top: 0px;
    height: 50px;
    font-size: 40px;
    color: #ffffff;
  }
  .lets1 {
    position: relative;
    display: block;
    text-align: center;
    /* background-color: rgb(255, 255, 255); */
    top: 0px;
    height: 50px;
    font-size: 40px;
    color: #3e849d;
  }
  .ro {
    position: relative;
    display: block;
    flex-wrap: wrap;
    gap: 1.5rem;
    border-radius: 30px;
    text-align: center;
    left: 5%;
    top: 0px;
  }
  .ro form {
    text-align: left;
    flex: 1 1 40rem;
    padding: 2rem 2.5rem;
    border: 0.1rem solid rgb(198, 198, 198);
    background: #fff;
    border-radius: 30px;
    margin: 5rem 0;
    width: 90%;
  }
  .ro form .box:focus {
    border-color: #70e679;
  }

  .ro form .box {
    padding: 1rem;
    font-size: 1.7rem;
    color: #333;
    text-transform: none;
    border: 0.1rem solid rgba(0, 0, 0, 1);
    margin: 0.7rem 0;
    border-radius: 30px;
    width: 100%;
  }
  .ro form .btn {
    text-align: center;
  }
  .ro .image {
    flex: 1 1 40rem;
  }
  .ro .image img {
    width: 100%;
  }
  .btn1 {
    background-color: #558a9d;
    color: #ffffff;
    font-size: 30px;
  }
  .btn1:hover {
    background-color: #3e849d;
  }
}
@media screen and (min-width: 1300px) and (max-width: 7800px) {
  .btn1 {
    background-color: #558a9d;
    color: #ffffff;
    font-size: 30px;
  }
  .btn1:hover {
    background-color: #3e849d;
  }
  .heading1 {
    position: relative;
    display: block;
    text-align: center;
    /* background-color: rgb(255, 255, 255); */
    top: -50px;
    height: 120px;
    font-size: 70px;
    color: #3e849d;
  }
  .lets {
    position: relative;
    display: block;
    text-align: center;
    /* background-color: rgb(255, 255, 255); */
    top: 0px;
    height: 50px;
    font-size: 40px;
    color: #ffffff;
  }
  .lets1 {
    position: relative;
    display: block;
    text-align: center;
    /* background-color: rgb(255, 255, 255); */
    top: 0px;
    height: 50px;
    font-size: 40px;
    color: #3e849d;
  }
  .ro {
    position: relative;
    display: block;
    flex-wrap: wrap;
    gap: 1.5rem;
    border-radius: 30px;
    text-align: center;
    left: 30%;
    top: 0px;
  }
  .ro form {
    text-align: left;
    flex: 1 1 40rem;
    padding: 2rem 2.5rem;
    border: 0.1rem solid rgb(198, 198, 198);
    background: #fff;
    border-radius: 30px;
    margin: 5rem 0;
    width: 40%;
  }
  .ro form .box:focus {
    border-color: #70e679;
  }

  .ro form .box {
    padding: 1rem;
    font-size: 1.7rem;
    color: #333;
    text-transform: none;
    border: 0.1rem solid rgba(0, 0, 0, 1);
    margin: 0.7rem 0;
    border-radius: 30px;
    width: 100%;
  }
  .ro form .btn {
    text-align: center;
  }
  .ro .image {
    flex: 1 1 40rem;
  }
  .ro .image img {
    width: 100%;
  }
}
</style>
