<template>
  <div class="companiesview">
    <HeaderO />
    <div class="companiesLayout">
      <div v-for="c in posts" :key="c.id" class="company-card">
        <div class="comp">
          <div class="comp1">
            <div class="comp_img">
              <img :src="c.image" alt="Company Image" />
            </div>
            <div class="comp_text">
              <h2 class="companyName">{{ c.company_name }}</h2>
              <p class="companyDescription">{{ c.description }}</p>
              <router-link
                :to="{
                  name: 'companyView',
                  params: { id: c.id, title: c.company_name },
                }"
                class="visitButton"
              >
                Visit
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterHome />
</template>

<script>
import HeaderO from "@/components/HeaderO.vue";
import FooterHome from "@/components/FooterHome.vue";
import axios from "axios";

export default {
  data() {
    return {
      pageName: "companiesView",
      compan: null,
      posts: "",
    };
  },
  name: "companiesView",
  components: {
    HeaderO,
    FooterHome,
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/allCompanies").then((res) => {
      this.posts = res.data.data;
      console.log(this.posts);
    });
  },
};
</script>

<style scoped>
@media screen and (min-width: 1300px) and (max-width: 7800px) {
  .companiesLayout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .company-card {
    margin: 20px;
    padding: 20px;
    background-image: linear-gradient(
      to right,
      rgb(82, 166, 185),
      rgb(179, 217, 235)
    );
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 700px;
    height: 300px;
  }

  .company-card:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  .comp {
    display: flex;
  }

  .comp1 {
    display: flex;
    align-items: center;
  }

  .comp_img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 4px;
  }

  .comp_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .comp_text {
    margin-left: 5px;
  }

  .companyName {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #333;
    text-align: left;
  }

  .companyDescription {
    font-size: 1.4rem;
    color: #4c4c4c;
    margin-bottom: 0px;
    top: 40px;
    left: 50px;
    width: 350px;
    font-weight: 2px;
  }

  .visitButton {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #5da1ba;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    top: 40px;
    left: 350px;
    position: relative;
  }

  .visitButton:hover {
    background-color: #19838f;
  }
}
@media screen and (min-width: 50px) and (max-width: 1301px) {
  .companiesLayout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .company-card {
    margin: 20px;
    padding: 20px;
    background-image: linear-gradient(
      to right,
      rgb(82, 166, 185),
      rgb(179, 217, 235)
    );
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 600px;
    height: 300px;
  }

  .company-card:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  .comp {
    display: flex;
  }

  .comp1 {
    display: flex;
    align-items: center;
  }

  .comp_img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 4px;
  }

  .comp_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .comp_text {
    margin-left: 10px;
  }

  .companyName {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #333;
    text-align: center;
  }

  .companyDescription {
    font-size: 1.2rem;
    color: #4c4c4c;
    margin-bottom: 0px;
    top: 40px;
    left: 50px;
    width: 280px;
    font-weight: 2px;
  }

  .visitButton {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #5da1ba;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    top: 80px;
    left: 200px;
    position: relative;
    display: block;
    width: 100px;
  }

  .visitButton:hover {
    background-color: #19838f;
  }
}
.footerOfCompanies {
  bottom: 0px;
  position: relative;
  margin-bottom: 0px;
}
</style>
