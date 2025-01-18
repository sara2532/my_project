<template>
  <div class="tree-content">
    <h3>Solar Batteries Without Solar Panels? No Sun, No Problem.</h3>
    <img src="@/assets/battery/blog_web_image.800x0.png" class="im1" />
    <h4>
      Solar panels and batteries might sound like a match made in but some
      people install batteries without solar panels.
    </h4>
    <h5>
      Why Solar Batteries Without Panels? Bad roof orientation, Lack of roof,
      space Shade and obstructions, Historical or aesthetic considerations,
      Structural limitations, Apartment or strata limitations
    </h5>
    <img src="@/assets/battery/batteries.jpg" class="im2" />
    <h4 class="t-im2">
      The Advantages Of Solar Batteries (Even Without Solar)
    </h4>
    <div class="t2-im2">
      The full potential of battery systems is realised when paired with solar
      panels because that’s the cheapest energy you can get. However, batteries
      without solar power still offer benefits. Backup Power One of the primary
      reasons people invest in home batteries is to have a backup power source
      during grid outages. Regardless of whether or not you have rooftop solar
      panels, if the grid goes down, it can keep your lights on and provide
      power to essential appliances and devices.
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 1601px) and (max-width: 7800px) {
  .tree-content {
    height: 1400px;
    left: 0;
    position: absolute;
    top: 6500px;
    width: 100%;
    background-color: #3e849d;
    border-radius: 0px;
    display: inline;
  }
  .tree-content h3 {
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
  .tree-content .im1 {
    position: relative;
    top: -60px;
    border-radius: 30px;
    left: 1250px;
    width: 600px;
    height: 600px;
    position: relative;
    display: inline;
  }
  .tree-content h4 {
    color: #ffffff;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    text-align: left;
    width: 800px;
    left: 100px;
    display: inline;
    position: absolute;
    margin-top: 50px;
    top: 370px;
  }
  .tree-content h5 {
    color: #ffffff;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    text-align: left;
    width: 800px;
    left: 100px;
    display: inline;
    position: absolute;
    margin-top: 180px;
    top: 70px;
  }
  .tree-content .im2 {
    position: relative;
    top: 570px;
    border-radius: 30px;
    left: -500px;
    width: 800px;
    height: 600px;
    position: relative;
    display: inline;
  }
  .tree-content .t-im2 {
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
    margin-top: 50px;
    top: 680px;
  }
  .tree-content .t2-im2 {
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
    top: 780px;
  }
}
@media screen and (min-width: 540px) and (max-width: 1600px) {
  .tree-content {
    background-color: #236c83;
    border-radius: 30px;
    padding: 2rem;
    width: 100%; /* sets the width to the full viewport width */ /* ensures the container doesn't exceed the screen width */
    margin: 0 auto; /* centers the container horizontally */
    padding: 20px;
    position: relative;
    margin-top: 0%;

    h3 {
      font-size: 2rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 1rem;
    }

    .im1 {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 30px;
      margin-bottom: 2rem;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 400;
      color: #ffffff;
      margin-bottom: 1rem;
    }

    h5 {
      font-size: 1.5rem;
      font-weight: 400;
      color: #ffffff;
      margin-bottom: 2rem;
    }

    .im2 {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 30px;
      margin-bottom: 2rem;
    }

    .t-im2 {
      font-size: 1.8rem;
      font-weight: 400;
      color: #ffffff;
      text-align: left;
      margin-bottom: 1rem;
    }

    .t2-im2 {
      font-size: 1.25rem;
      font-weight: 400;
      color: #ffffff;
      margin-bottom: 2rem;
    }
  }
}
</style>
