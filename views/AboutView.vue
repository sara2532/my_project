<template>
  <HeaderO />
  <div class="about">
    <div class="treeContent1">
      <h3>Group of four students</h3>
      <h4 class="h4">
        We are trying to find a solution to the problem of accessing solar
        energy companies
      </h4>
      <h5>
        and helping to choose the product and company appropriate to
        capabilities and demand of customers
      </h5>
      <img src="./../assets/aboutus/Batteries-1080x675.png" class="im1" />
      <h4 class="t-im2">The Solar Energy</h4>
      <div class="t2-im2">
        What is solar energy? Solar energy has been distinguished by its vital
        role in creating a healthier and safer environment, and here solar panel
        systems undoubtedly stand out as a prime example. These systems are
        installed on the roofs of residential, commercial and institutional
        buildings, and exploit the sun’s photovoltaic energy, converting it into
        clean, climate-friendly electricity, capable of meeting the buildings’
        need for electricity and hot water throughout the day.
      </div>
      <img src="./../assets/aboutus/light.jpg" class="im2" />
    </div>
  </div>
  <div class="footerabout"><FooterHome /></div>
</template>

<script>
// @ is an alias to /src
import HeaderO from "@/components/HeaderO.vue";
import FooterHome from "@/components/FooterHome.vue";
export default {
  data: function () {
    return {
      pageName: "About us",
      pageDescripition: "this is about us page ",
    };
  },
  name: "AboutView",
  components: {
    HeaderO,
    FooterHome,
  },
};
</script>
<style>
.about {
  height: 600px;
}
.treeContent1 {
  box-shadow: 10px 10px 20px rgb(150, 147, 147);
  height: 1400px;
  left: 0;
  position: absolute;
  top: 90px;
  width: 100%;
  background-color: #3e849d;
  border-radius: 30px;
  display: inline;
}
.treeContent1 h3 {
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
.treeContent1 .im1 {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  position: relative;
  top: -10px;
  border-radius: 30px;
  left: 1150px;
  width: 700px;
  height: 600px;
  position: relative;
  display: inline;
}
.treeContent1 .h4 {
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
.treeContent1 h5 {
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
.treeContent1 .im2 {
  box-shadow: 10px 10px 20px rgb(33, 32, 32);
  position: relative;
  top: 450px;
  border-radius: 30px;
  left: -600px;
  width: 800px;
  height: 600px;
  position: relative;
  display: inline;
}
.treeContent1 .t-im2 {
  color: #ffffff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: left;
  width: 1000px;
  left: 950px;
  display: inline;
  position: absolute;
  margin-top: 50px;
  top: 650px;
}
.treeContent1 .t2-im2 {
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
  margin-top: 50px;
  top: 750px;
}
.footerabout {
  top: 850px;
  position: relative;
}
@media screen and (min-width: 450px) and (max-width: 1301px) {
  .about {
    height: 2000px;
    display: block;
    text-align: center;
    position: relative;
  }
  .treeContent1 {
    height: 2600px;
    left: 0;
    position: relative;
    top: 10px;
    width: 100%;
    background-color: #3e849d;
    border-radius: 5px;
    display: block;
  }
  .treeContent1 h3 {
    color: #ffffff;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 40px;
    font-weight: 600;
    left: 1rem;
    letter-spacing: 0;
    line-height: normal;
    text-align: left;
    width: auto;
    top: 100px;
    left: 70px;
    position: relative;
    display: block;
  }
  .treeContent1 .im1 {
    position: relative;
    border-radius: 5px;
    width: 500px;
    height: 500px;
    display: inline-block;
    top: 560px;
  }
  .treeContent1 .h4 {
    color: #ffffff;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    text-align: left;
    width: 80%;
    left: 70px;
    display: inline;
    position: relative;
    margin-top: 50px;
    top: 70px;
    display: block;
  }
  .treeContent1 h5 {
    color: #ffffff;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    text-align: left;
    width: 80%;
    left: 100px;
    display: inline;
    position: absolute;
    margin-top: 180px;
    top: 270px;
  }
  .treeContent1 .im2 {
    position: relative;
    top: 740px;
    border-radius: 5px;
    text-align: center;
    width: 500px;
    height: 500px;
    position: relative;
    display: inline;
  }
  .treeContent1 .t-im2 {
    color: #ffffff;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    text-align: left;
    width: 300px;
    left: 70px;
    position: relative;
    margin-top: 50px;
    top: 650px;
    display: block;
  }
  .treeContent1 .t2-im2 {
    color: #ffffff;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    text-align: left;
    width: 80%;
    left: 70px;
    display: inline;
    position: relative;
    margin-top: 0px;
    top: 690px;
    display: block;
  }
  .footerabout {
    top: 700px;
    position: relative;
  }
}
</style>
