<template>
  <div class="theHome">
    <h1 class="company-namee">
      The #1 Home Solar & Battery Educate Company in Syria
    </h1>
    <div class="company-infoo">
      <div class="company-feature">
        <h2 class="company-slogan">
          Unrivaled home solar and battery experience
          <img src="../assets/icons8-solar-panel.gif" alt="Solar Panel Icon" />
        </h2>
        <p class="company-stats">
          With 900,000 homes and counting, no one has more installation
          expertise.
        </p>
      </div>
      <hr class="hh" />
      <div class="company-feature">
        <h2 class="company-slogan">
          Smart technology
          <img src="../assets/icons8-smart.gif" alt="Smart Icon" />
        </h2>
        <p class="company-stats">
          An ecosystem of innovative products that put you in control of your
          home energy needs.
        </p>
      </div>
      <hr />
      <div class="company-feature">
        <h2 class="company-slogan">
          Product and pricing solutions
          <img src="../assets/icons8-product.gif" alt="Product Icon" />
        </h2>
        <p class="company-stats">
          For every home, tailored plans including predictable payments, little
          to no down payment, and no debt options.
        </p>
      </div>
      <hr />
      <div class="company-feature">
        <h2 class="company-slogan">
          Discover the power
          <img src="../assets/icons8-sun.gif" alt="Sun Icon" />
        </h2>
        <p class="company-stats">
          of the sun with our user-friendly website. Explore the benefits of
          solar energy and how it can reduce your carbon footprint while saving
          you money.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 540px) and (max-width: 980px) {
  .theHome {
    background-color: rgb(252, 252, 252);
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    top: 1500px;
  }
  .company-infoo {
    font-family: Roobert, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .company-namee {
    font-size: 5rem;
    margin-bottom: 0.5rem;
    color: #181818;
    width: 100%;
    text-align: center;
  }
  .company-feature {
    margin: 20px;
    text-align: center;
  }
  .company-slogan {
    display: inline-flex;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #121111;
    align-items: center;
  }
  .company-slogan img {
    width: 60px;
    height: 60px;
    margin: 0 10px;
  }
  .company-stats {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #6a6868;
  } /* Media Queries */ /* PC Screen (min-width: 768px) */
  @media (min-width: 768px) {
    .company-infoo {
      flex-direction: row;
    }
    .company-feature {
      width: 50%;
    }
  } /* Telephone Screen (max-width: 767px) */
  @media (max-width: 767px) {
    .company-infoo {
      flex-direction: column;
    }
    .company-feature {
      width: 90%;
    }
    .company-slogan {
      font-size: 2rem;
    }
    .company-stats {
      font-size: 1rem;
    }
  }
}
@media screen and (min-width: 981px) and (max-width: 7800px) {
  hr {
    height: 200px;
    position: relative;
    left: -50px;
    margin: 20px;
    top: 40px;
  }
  .hh {
    left: -70px;
  }
  .theHome {
    position: absolute;
    top: 1050px;
    background-color: rgb(252, 252, 252);
    width: 100%;
    height: 1100px;
  }
  .company-infoo {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    margin: 200px;
    background-color: rgb(252, 252, 252);
  }

  .company-namee {
    font-size: 5rem;
    margin-bottom: 0.5rem;
    color: #181818;
    width: 700px;
    display: block;
    left: 100px;
    position: relative;
    margin: 100px;
    background-color: rgb(252, 252, 252);
  }

  .company-slogan {
    display: inline-flex;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #121111;
    width: 400px;
    position: relative;
    left: -40px;
    background-color: rgb(252, 252, 252);
  }
  .company-slogan img {
    width: 60px;
    height: 60px;
    top: 200px;
    position: relative;
    left: -280px;
  }
  .company-stats {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #6a6868;
    position: absolute;
    top: 890px;
    width: 300px;
    background-color: rgb(252, 252, 252);
  }

  .company-features-heading {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .company-features-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #666;
  }
}
</style>
