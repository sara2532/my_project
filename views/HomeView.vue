<template>
  <div class="desktop1">
    <div class="div">
      <HeaderO />
      <div class="overlap-222">
        <div class="solarT">
          Harness the powbacer of the sun with solar panels!
        </div>
        <div class="solat">
          Get ahead of your energy needs with cutting-edge solar and home
          backup.
        </div>

        <div class="margin_best">
          <router-link
            :to="{
              name: 'AnalysisEntry',
            }"
            class="bestplane"
          >
            Best Free Plane
            <img class="imgbest" src="../assets/icons8-solar-energy.gif" />
          </router-link>
        </div>

        <!--<LoginView />-->
        <theHome />
        <div class="overlap-group">
          <solarProduct />
          <batteryProduct />
          <inverterProduct />
          <!--<div class="text-wrapper">The Components of Solar Energy</div>-->
        </div>
        <descView />
        <theTreeHome />
        <sliderView />
      </div>
    </div>
  </div>
  <FooterHome />
</template>

<script>
// @ is an alias to /src
import FooterHome from "@/components/FooterHome.vue";
import HeaderO from "@/components/HeaderO.vue";
//import LoginView from "@/components/LoginView.vue";
import sliderView from "@/components/sliderView.vue";
import solarProduct from "@/components/solarProduct.vue";
import batteryProduct from "@/components/batteryProduct.vue";
import inverterProduct from "@/components/inverterProduct.vue";
import descView from "@/components/descView.vue";
import theHome from "@/components/theHome.vue";
import theTreeHome from "@/components/theTreeHome.vue";

export default {
  name: "HomeView",
  components: {
    FooterHome,
    //LoginView,
    HeaderO,
    sliderView,
    solarProduct,
    batteryProduct,
    inverterProduct,
    theHome,
    descView,
    theTreeHome,
  },
};
</script>
<style>
html {
  background-color: #f0f6fa;
}
@media screen and (min-width: 1300px) and (max-width: 7800px) {
  .solarT {
    position: relative;
    color: #031936;
    top: 80px;
    left: 6%;
    font-size: 70px;
    font-family: Roobert, sans-serif;
    width: 750px;
  }
  .solat {
    position: relative;
    color: #031936;
    top: 100px;
    left: 8%;
    font-size: 20px;
    font-family: Roobert, sans-serif;
    width: 400px;
  }
  .desktop1 .overlap-group {
    display: flex;
  }
  .bestplane {
    text-decoration: none;
    position: absolute;
    display: inline;
    top: 46%;
    width: 300px;
    font-size: 30px;
    height: 55px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    border: none;
    color: #000000;
    left: 9%;
    box-shadow: 2px 2px 2px #516681;
    text-align: center;
  }

  .bestplane .imgbest {
    background-color: #80c7e6;
    height: 46px;
    left: -5px;
    position: relative;
  }
  .bestplane:hover {
    box-shadow: 5px 5px 5px #516681;
  }
  .desktop1 .div {
    background-color: #ffffff;
    height: 9000px;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: block;
  }
}
@media screen and (min-width: 50px) and (max-width: 1301px) {
  .solarT {
    position: relative;
    color: #031936;
    top: 120px;
    left: 6%;
    font-size: 60px;
    font-family: Roobert, sans-serif;
    width: 550px;
  }
  .solat {
    position: relative;
    color: #031936;
    top: 120px;
    left: 6%;
    font-size: 20px;
    font-family: Roobert, sans-serif;
    width: 400px;
  }
  .desktop1 .overlap-group {
    display: block;
  }
  .margin_best {
    margin-bottom: 700px;
  }
  .bestplane {
    text-decoration: none;
    position: absolute;
    display: inline;
    width: 300px;
    top: 42%;
    font-size: 30px;
    height: 55px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: none;
    color: #031936;
    right: 5%;
    box-shadow: 2px 2px 2px #516681;
    text-align: center;
  }

  .bestplane .imgbest {
    background-color: #80c7e6;
    height: 40px;
    left: -5px;
    position: relative;
  }
  .bestplane:hover {
    box-shadow: 5px 5px 5px #516681;
  }
  .desktop1 .div {
    background-color: #ffffff;
    height: 11000px;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: block;
  }
}
.theTT {
  position: relative;
  display: block;
}
.desktop1 {
  background-color: #a6ceeb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.desktop1 .overlap {
  height: 673px;
  left: 0;
  position: absolute;
  top: 7000px;
  width: 100%;
}

.desktop1 .rectangle {
  background-color: #ffffff;
  border-radius: 0px 0px 30px 30px;
  height: 673px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.desktop1 .frame {
  height: 100%;
  left: 0;
  overflow: hidden;
  overflow-x: scroll;
  position: absolute;
  top: 17px;
  width: 100%;
}

.desktop1 .rectangle-2 {
  background-color: #d8d3d3;
  border-radius: 30px;
  height: 639px;
  left: 0;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .rectangle-2 img {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  border-radius: 30px;
  height: 639px;
  left: 0;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .rectangle-3 img {
  border-radius: 30px;
  height: 639px;
  left: 0;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .rectangle-3 {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  background-color: #d8d3d3;
  border-radius: 30px;
  height: 639px;
  left: 700px;
  position: absolute;
  top: 0;
  width: 663px;
}

.desktop1 .rectangle-4 {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  background-color: #d9d9d9;
  border-radius: 30px;
  height: 639px;
  left: 1399px;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .rectangle-4 img {
  border-radius: 30px;
  height: 639px;
  left: 0;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .rectangle-5 {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  background-color: #d9d9d9;
  border-radius: 30px;
  height: 639px;
  left: 2099px;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .rectangle-5 img {
  border-radius: 30px;
  height: 639px;
  left: 0;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .rectangle-6 {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  background-color: #d9d9d9;
  border-radius: 30px;
  height: 639px;
  left: 2799px;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .rectangle-6 img {
  border-radius: 30px;
  height: 639px;
  left: 0;
  position: absolute;
  top: 0;
  width: 663px;
}
.desktop1 .arrows-chevron {
  height: 39px !important;
  left: 1432px !important;
  position: absolute !important;
  top: 328px !important;
  width: 39px !important;
}

.desktop1 .footer-white {
  height: 799px;
  left: 0;
  position: absolute;
  top: 3198px;
  width: 1505px;
}
.desktop1 .overlap-222 {
  background-image: url(./../assets/back/c.jpg);
  background-position: 100% 50%;
  background-size: cover;
  height: 1072px;
  position: relative;
  top: 0px;
  width: 100%;
}

.desktop1 .img {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  left: 100px;
  position: absolute;
  top: 70px;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}

.desktop1 .rectangle-10 {
  border: 4px solid;
  border-color: #ffffff;
  border-radius: 30px;
  height: 968px;
  left: 2%;
  position: absolute;
  top: 41px;
  width: 95%;
}

.desktop1 .text-wrapper-2 a {
  text-decoration: none;
  list-style: none;
  color: #040404;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 503px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 77px;
  width: 219px;
}

.desktop1 .text-wrapper-3 a {
  text-decoration: none;
  list-style: none;
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 712px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 78px;
  width: 150px;
}

.desktop1 .text-wrapper-4 a {
  text-decoration: none;
  list-style: none;
  color: #080808;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 862px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 78px;
  width: 150px;
}

.desktop1 .text-wrapper-5 a {
  text-decoration: none;
  list-style: none;
  color: #080808;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 1018px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 78px;
  width: 150px;
}

.desktop1 .text-wrapper-10 a {
  text-decoration: none;
  list-style: none;
  color: #080808;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 1180px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 78px;
  width: 150px;
}
.desktop1 .text-wrapper-6 a {
  text-decoration: none;
  list-style: none;
  color: #080808;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 180px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 80px;
  width: 142px;
}

.desktop1 .rectangle-11 {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  background-color: #ffffff;
  border-radius: 30px;
  height: 67px;
  left: 103rem;
  position: absolute;
  top: 72px;
  width: 10rem;
}
.text-wrapper-77 a {
  text-decoration: none;
  list-style: none;
}
.desktop1 .text-wrapper-77 {
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 103rem;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 91px;
  width: 10rem;
  text-align: center;
}
.desktop1 .text-wrapper-77 li {
  text-align: center;
}

.desktop1 .text-wrapper-8 {
  color: #010101;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 221px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 575px;
  white-space: nowrap;
  width: 156px;
}

.desktop1 .ios-icon-search {
  height: 44px !important;
  left: 1242px !important;
  position: absolute !important;
  top: 576px !important;
  width: 56px !important;
}

.desktop1 .rectangle-12 {
  background-color: RGB(35, 108, 131, 0.3);
  border-radius: 0px 0px 30px 30px;
  height: 200px;
  left: 30px;
  position: absolute;
  top: 850px;
  width: 1086px;
}

.desktop1 .p {
  color: #ffffff;
  font-family: "Roboto-SemiBold", Helvetica;
  font-size: 32px;
  font-weight: 600;
  left: 94px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 890px;
  width: 773px;
}

.desktop1 .text-wrapper-9 {
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 36px;
  font-weight: 600;
  left: 1rem;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 6950px;
  width: 100%;
}

.desktop1 .text-wrapper-77 .sub-sub-menuhome {
  text-align: center;
  display: none;
  list-style: none;
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  border-radius: 30px;
  position: relative;
  top: 15px;
}
.desktop1 .text-wrapper-77 .sub-sub-menuhome li {
  text-align: center;
  list-style: none;
  text-decoration: none;
  position: absolute;
  color: #000000;
  position: relative;
  left: -18px;
}
.desktop1 .text-wrapper-77.sub-sub-menuhome {
  list-style: none;
  text-decoration: none;
  color: #000000;
  text-align: center;
}
.text-wrapper-77:hover .sub-sub-menuhome {
  text-align: center;
  display: block;
}
.productContanier {
  display: flex;
  width: 100%;
  height: 600px;
  background-color: #12662b;
  position: absolute;
  top: 2500px;
  height: 950px;
  border-radius: 10px;
  vertical-align: middle;
}
.productContanier2 {
  display: flex;
  width: 100%;
  height: 600px;
  background-color: #12662b;
  position: absolute;
  top: 3500px;
  height: 950px;
  border-radius: 10px;
  vertical-align: middle;
}
.productContanier3 {
  display: flex;
  width: 100%;
  height: 600px;
  background-color: #12662b;
  position: absolute;
  top: 4500px;
  height: 950px;
  border-radius: 10px;
  vertical-align: middle;
}
.desktop1 .photoText {
  width: 50%;
  height: 950px;
  position: absolute;
  border-radius: 30px;
  left: 50%;
  color: #ffffff;
  margin: 2%;
  width: 40%;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
}
.moree:hover .photoText {
  font-size: 30px;
}
.desktop1 .photoText p {
  display: block;
  font-size: 50px;
}
.desktop1 .rectangle-7 {
  width: 50%;
  height: 950px;
  background-color: rgb(237, 242, 250);
  position: absolute;
  border-radius: 30px;
}
.desktop1 .rectangle-7 img {
  left: 50px;
  width: 100%;
  top: 0px;
  height: 100%;
  border-radius: 10px;
}
.desktop1 .more {
  display: none;
}
.photoText .moree:hover .more {
  display: block;
  font-size: 30px;
}
.desktop1 .rectangle-8 {
  box-shadow: 10px 10px 20px rgb(94, 91, 91);
  left: 660px;
  width: 600px;
  top: 1400px;
  height: 600px;
  background-color: rgb(237, 242, 250);
  position: absolute;
  border-radius: 30px;
}
.desktop1 .rectangle-8 img {
  left: 660px;
  width: 600px;
  top: 0px;
  height: 600px;
  border-radius: 30px;
}
.desktop1 .rectangle-9 {
  box-shadow: 10px 10px 20px rgb(105, 102, 102);
  left: 1270px;
  width: 600px;
  top: 1400px;
  height: 600px;
  background-color: rgb(254, 255, 255);
  position: absolute;
  border-radius: 30px;
}
.desktop1 .rectangle-9 img {
  left: 1270px;
  width: 600px;
  top: 0px;
  height: 600px;
  border-radius: 30px;
}
.desktop1 .text-wrapper {
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 45px;
  font-weight: 600;
  left: 40px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: left;
  top: 2250px;
  width: 100%;
}
.treeContent {
  height: 1400px;
  left: 0;
  position: absolute;
  top: 5240px;
  width: 100%;
  background-color: #236c83;
  border-radius: 5px;
  display: inline;
}
.treeContent h3 {
  color: #ffffff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 40px;
  font-weight: 600;
  left: 1rem;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;
  width: 800px;
  top: 100px;
  left: 70px;
  position: relative;
}
.treeContent .im1 {
  position: relative;
  top: -100px;
  border-radius: 5px;
  left: 1150px;
  width: 800px;
  height: 600px;
  position: relative;
  display: inline;
}
.treeContent .h4 {
  color: #ffffff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;
  width: 1000px;
  left: 70px;
  display: inline;
  position: absolute;
  margin-top: 50px;
  top: 270px;
}
.treeContent h5 {
  color: #ffffff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;
  width: 1000px;
  left: 100px;
  display: inline;
  position: absolute;
  margin-top: 180px;
  top: 270px;
}
.treeContent .im2 {
  position: relative;
  top: 530px;
  border-radius: 5px;
  left: -750px;
  width: 800px;
  height: 600px;
  position: relative;
  display: inline;
}
.treeContent .t-im2 {
  color: #ffffff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: right;
  width: 1000px;
  left: 850px;
  display: inline;
  position: absolute;
  margin-top: 100px;
  top: 650px;
}
.treeContent .t2-im2 {
  color: #ffffff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;
  width: 800px;
  left: 1000px;
  display: inline;
  position: absolute;
  margin-top: 100px;
  top: 750px;
}
.companyNameHome {
  position: absolute;
  font-size: 50px;
  font-weight: 500;
  top: 350px;
  left: 44%;
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
