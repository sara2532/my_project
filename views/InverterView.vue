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
                <h2>{{ c.type }}</h2>
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
    axios.get("http://127.0.0.1:8000/api/inverters").then((res) => {
      this.posts = res.data.data;
      console.log(this.posts);
    });
  },
  data() {
    return {
      posts: [],
      search: "",
    };
  },
  methods: {
    sendSearch() {
      const formData = new FormData();
      formData.append("search", this.search);
      axios
        .post("http://127.0.0.1:8000/api/inverterSearch", formData)
        .then((res) => {
          this.posts = res.data.data;
          console.log(this.posts);
        });
    },
  },
};
</script>
