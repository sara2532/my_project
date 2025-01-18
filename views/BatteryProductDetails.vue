<template>
  <HeaderO />
  <div class="ProductDetails">
    <div class="details">
      <div class="photoAndCompany">
        <div class="photoo">
          <div class="productName2">{{ posts.product_name }}</div>
          <img :src="posts.image" class="photo" />
        </div>
        <div class="companies" v-for="c in posts.companies" :key="c.id">
          <div class="companyShow">
            <button class="companyButton">
              <router-link
                :to="{
                  name: 'companyView',
                  params: { id: c.id, title: c.company_name },
                }"
              >
                {{ c.company_name }}
              </router-link>
            </button>
          </div>
          <div class="priceOfCompany">{{ c.price }}</div>
          <div class="optionOfCompany">{{ c.options }}</div>
        </div>
      </div>
      <div class="productInfo">
        <div class="productName">{{ posts.product_name }}</div>
        <div class="productType">Type of product : SolarPanels</div>
        <div class="dede">Description :</div>
        <div class="productDesc">{{ posts.description }}</div>
        <div class="dede">Advantages</div>
        <div class="productAdvantages">
          {{ posts.adadvantages }}
          <!-- <li>one</li>
          <li>one</li>
          <li>one</li> -->
        </div>
        <div class="dede">Disadvantages</div>
        <div class="productDisadvantage">
          {{ posts.disadvantages }}
          <!-- <li>one</li>
          <li>one</li>
          <li>one</li> -->
        </div>
        <!-- <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div class="dede">Description :</div>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="productDesc">{{ posts.description }}</div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <div class="dede">Advantages</div>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="productAdvantages">
                  {{ posts.adadvantages }}
                  <li>one</li>
          <li>one</li>
          <li>one</li>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <div class="dede">Disadvantages</div>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="productDisadvantage">
                  {{ posts.disadvantages }}
                  <li>one</li>
          <li>one</li>
          <li>one</li>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <div class="footerbat">
    <FooterHome />
  </div>
</template>
<script>
import HeaderO from "@/components/HeaderO.vue";
import FooterHome from "@/components/FooterHome.vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  props: ["id"],
  data: function () {
    return {
      pageName: "ProductDetails",
      pageDescripition: "ProductDetails",
      ProductId: "",
      posts: "",
    };
  },
  name: "ProductDetails",
  components: {
    HeaderO,
    FooterHome,
  },
  mounted() {
    const route = useRoute();
    this.ProductId = route.params.id;
    console.log("route", this.ProductId);
    axios
      .get(`http://127.0.0.1:8000/api/getBatteryDetails/${this.ProductId}`)
      .then((res) => {
        this.posts = res.data.data;
        console.log(this.posts);
      });
  },
};
</script>
