<template>
  <HeaderO />
  <div class="ProductDetails">
    <div class="details">
      <div class="photoAndCompany">
        <div class="photoo">
          <div class="productName2">{{ posts.product_name }}</div>
          <img :src="posts.image" class="photo" />
        </div>
        <!-- <div class="com">Company Name</div>
        <div class="priceOfCompany">Price</div>
        <div class="optionOfCompany">Option</div> -->
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
  <div class="footerinv">
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
      .get(`http://127.0.0.1:8000/api/getInverterDetails/${this.ProductId}`)
      .then((res) => {
        this.posts = res.data.data;
        console.log(this.posts);
      });
  },
};
</script>
<style>
@media screen and (min-width: 1300px) and (max-width: 7800px) {
  .productName2 {
    display: none;
  }
  .footerinv {
    top: 1500px;
  }
  .dede {
    font-size: 40px;
    left: 8%;
    position: relative;
    color: #03254a;
  }
  .details {
    background-color: rgb(255, 255, 255);
    display: block;
    position: absolute;
    color: rgb(30, 27, 27);
    border-radius: 10px;
    width: 50%;
    height: 1500px;
  }
  .photoAndCompany {
    left: 100%;
    position: absolute;
    display: block;
    height: 2000px;
    background-color: #ffffff;
  }
  .photoAndCompany .photoo {
    height: 55rem;
    border-radius: 5px;
    margin: 1%;
    margin-left: 0%;
    margin-top: 10%;
    margin-bottom: 3%;
    background-color: #ffffff;
  }
  .photoAndCompany .photo {
    height: 40rem;
    border-radius: 5px;
    margin: 1%;
    margin-left: 20%;
    margin-top: 0%;
    margin-bottom: 10%;
  }
  .photoAndCompany {
    height: 30rem;
    border-radius: 5px;
    margin: 1%;
    margin-left: 0%;
    margin-top: 0%;
    width: 100%;
    background-color: #ffffff;
  }
  .productName {
    margin: 5%;
    font-size: 80px;
    margin-right: 0%;
    background-color: rgb(255, 255, 255);
  }
  .productDesc {
    margin: 10%;
    margin-left: 10%;
    margin-top: 5%;
    font-size: x-large;
    margin-right: 0%;
    width: 70%;
  }
  .productType {
    margin: 6%;
    margin-left: 10%;
    margin-top: 10%;
    font-size: xx-large;
    margin-right: 0%;
    color: #03254a;
  }
  .productAdvantages {
    margin: 10%;
    font-size: x-large;
    margin-right: 0%;
    margin-top: 5%;
    width: 70%;
  }
  .productDisadvantage {
    margin: 10%;
    font-size: x-large;
    margin-right: 0%;
    margin-top: 5%;
    width: 70%;
  }
  .companies {
    display: flex;
    margin: 1%;
    margin-left: 5%;
    margin-top: 30px;
  }
  .companyButton {
    border-radius: 5px;
    width: 350px;
    height: 60px;
    background-color: rgb(131, 197, 211);
    color: #ffffff;
    font-size: 40px;
    margin: 10px;
    margin-left: 0%;
    border: none;
    justify-content: center;
    align-items: center;
  }
  .companyButton a {
    border-radius: 5px;
    width: 400px;
    height: 60px;
    background-color: rgb(131, 197, 211);
    color: #ffffff;
    font-size: 40px;
    margin: 20px;
    margin-left: 0%;
    border: none;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .priceOfCompany {
    margin: 10px;
    margin-left: 2%;
    font-size: 30px;
    background-color: #3e849d;
    border-radius: 5px;
    height: 60px;
    color: #ffffff;
    width: 200px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .optionOfCompany {
    margin: 10px;
    margin-left: 2%;
    font-size: 30px;
    background-color: #3e849d;
    border-radius: 5px;
    height: 60px;
    color: #ffffff;
    width: 400px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
@media screen and (min-width: 50px) and (max-width: 1301px) {
  .productInfo {
    position: relative;
    margin-top: 80%;
    margin-bottom: 5%;
    background-color: #ffffff;
  }
  .dede {
    font-size: 30px;
    left: 8%;
    position: relative;
    display: block;
    margin-top: 10%;
    background-color: #ffffff;
  }
  .details {
    background-color: rgb(255, 255, 255);
    display: block;
    position: relative;
    color: rgb(30, 27, 27);
    border-radius: 10px;
    width: 100%;
  }
  .photoAndCompany {
    left: 0%;
    position: relative;
    display: block;
    height: 100px;
    margin-bottom: 20%;
    background-color: #ffffff;
  }
  .photoAndCompany .photo {
    height: 40rem;
    border-radius: 5px;
    margin: 1%;
    margin-left: 10%;
    margin-bottom: 15%;
    position: relative;
    display: block;
    background-color: #ffffff;
  }
  .productName {
    margin: 5%;
    font-size: 80px;
    margin-right: 0%;
    background-color: rgb(255, 255, 255);
  }
  .photoAndCompany {
    height: 30rem;
    border-radius: 5px;
    margin: 1%;
    margin-left: 0%;
    margin-top: 0%;
    width: 100%;
    background-color: #ffffff;
  }
  .productName2 {
    margin: 2%;
    font-size: 80px;
    margin-right: 0%;
    margin-left: 10%;
    position: relative;
  }
  .productDesc {
    margin: 1%;
    margin-left: 10%;
    margin-top: 3%;
    font-size: x-large;
    margin-right: 0%;
    width: 70%;
    position: relative;
  }
  .productType {
    margin: 6%;
    margin-left: 10%;
    margin-top: 10%;
    font-size: xx-large;
    margin-right: 0%;
    color: #03254a;
    position: relative;
  }
  .productAdvantages {
    margin: 10%;
    font-size: x-large;
    margin-right: 0%;
    margin-top: 5%;
    width: 70%;
    position: relative;
  }
  .productDisadvantage {
    margin: 10%;
    font-size: x-large;
    margin-right: 0%;
    margin-top: 5%;
    width: 70%;
    position: relative;
  }
  .companies {
    display: flex;
    margin: 1%;
    margin-left: 1%;
    top: 10px;
    position: relative;
    background-color: #ffffff;
  }
  .companyButton {
    border-radius: 5px;
    width: 400px;
    height: 60px;
    background-color: rgb(131, 197, 211);
    color: #ffffff;
    font-size: 40px;
    margin: 20px;
    margin-left: 0%;
    border: none;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .companyButton a {
    border-radius: 5px;
    width: 400px;
    height: 60px;
    background-color: rgb(131, 197, 211);
    color: #ffffff;
    font-size: 40px;
    margin: 10px;
    margin-left: 0%;
    border: none;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    position: relative;
  }
  .priceOfCompany {
    margin: 20px;
    margin-left: 2%;
    font-size: 40px;
    background-color: #3e849d;
    border-radius: 5px;
    height: 60px;
    color: #ffffff;
    width: 200px;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .optionOfCompany {
    margin: 20px;
    margin-left: 2%;
    font-size: 40px;
    background-color: #3e849d;
    border-radius: 5px;
    height: 60px;
    color: #ffffff;
    width: 400px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
