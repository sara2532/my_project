<template class="solar">
  <div>
    <HeaderO />
    <div class="search-box">
      <input
        type="text"
        class="search-bar"
        placeholder="Search..."
        v-model="this.search"
        @keyup.enter="sendSearch"
      />
      <img src="@/assets/icons8-search.gif" class="searchPhoto" />
    </div>
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
                <p class="descc">
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
</template>
<script>
import HeaderO from "@/components/HeaderO.vue";
import axios from "axios";
export default {
  name: "SolarView",
  components: {
    HeaderO,
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/solarPannels").then((res) => {
      this.posts = res.data.data;
      console.log(this.posts);
    });
  },
  data() {
    return {
      posts: "",
      search: "",
    };
  },
  methods: {
    sendSearch() {
      const formData = new FormData();
      formData.append("search", this.search);
      axios
        .post("http://127.0.0.1:8000/api/solarSearch", formData)
        .then((res) => {
          this.posts = res.data.data;
          console.log(this.posts);
        });
    },
  },
};
</script>
<style>
@media screen and (min-width: 1300px) and (max-width: 7800px) {
  .solar {
    background-color: #0c4d8f;
  }
  .rr {
    text-decoration: none;
    display: inline-block;
    position: absolute;
    top: 17px;
    height: 45px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 38px;
    font-size: 30px;
    font-weight: lighter;
    color: #fffcfc;
    left: 10px;
    width: 200px;
    background-color: #236c83;
    border-radius: 10px;
    text-align: center;
  }
  .rr :hover {
    background-color: #0c4d8f;
  }
  .search-box {
    width: 20%;
    position: absolute;
    left: 22%;
    border-radius: 5px;
    top: 10px;
  }
  .search-box .search-bar {
    width: 100%;
    display: block;
    padding: 15px;
    color: #100f0f;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    /*box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);*/
    /*background-color: rgba(255, 255, 255);*/
    border-radius: 5px;
    transition: 0.4s;
    left: 0px;
    letter-spacing: 0;
    line-height: normal;
    top: 0px;
    height: 5%;
    position: relative;
    /*background-image: linear-gradient(
    to right,
    rgb(181, 189, 191),
    rgb(230, 251, 251)
  );*/
    background-color: #ffffff;
  }
  .search-box .search-bar:focus {
    border-radius: 16px 0px 16px 0px;
    background-color: #ffffff;
  }
  .descc {
    width: 200px;
  }
  .searchPhoto {
    position: absolute;
    top: 23%;
    width: 30px;
    right: 5%;
  }
}
@media screen and (min-width: 50px) and (max-width: 1301px) {
  .solar {
    background-color: #0c4d8f;
  }
  .rr {
    text-decoration: none;
    display: inline-block;
    position: absolute;
    top: 17px;
    height: 45px;
    font-family: "Trocchi", serif;
    margin: 0 0 0 38px;
    font-size: 30px;
    font-weight: lighter;
    color: #fffcfc;
    left: 10px;
    width: 200px;
    background-color: #236c83;
    border-radius: 10px;
    text-align: center;
  }
  .rr :hover {
    background-color: #0c4d8f;
  }
  .search-box {
    width: 20%;
    position: absolute;
    right: 22%;
    border-radius: 5px;
    top: 10px;
  }
  .search-box .search-bar {
    width: 100%;
    display: block;
    padding: 15px;
    color: #100f0f;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    /*box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);*/
    /*background-color: rgba(255, 255, 255);*/
    border-radius: 5px;
    transition: 0.4s;
    left: 0px;
    letter-spacing: 0;
    line-height: normal;
    top: 0px;
    height: 5%;
    position: relative;
    /*background-image: linear-gradient(
    to right,
    rgb(181, 189, 191),
    rgb(230, 251, 251)
  );*/
    background-color: #ffffff;
  }
  .search-box .search-bar:focus {
    border-radius: 16px 0px 16px 0px;
    background-color: #ffffff;
  }
  .descc {
    width: 200px;
  }
  .searchPhoto {
    position: absolute;
    top: 23%;
    width: 30px;
    right: 5%;
  }
}
</style>
