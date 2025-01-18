<template>
  <div class="solar-promo">
    <div class="solar-text">
      <h1>why solar ?</h1>
      <h2>Break the limits of traditional energy</h2>
      <p>
        Replace costly, unreliable grid power with solar energy and backup
        battery. Enjoy clean, renewable energy and reduce your carbon footprint.
      </p>
      <button @click="learnMore" class="learn-more-btn">Learn more</button>
    </div>
    <img src="../assets/aa.png" alt="Solar energy image" class="solar-image" />
  </div>
</template>

<script setup>
function learnMore() {
  // Add your logic here for learning more about solar energy
  console.log("Learn more about solar energy...");
}
</script>

<style scoped>
.solar-promo {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 32px;
  background-color: #fffcf5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 1700px;
  width: 100%;
  height: 900px;
}

.solar-image {
  width: 1200px;
  height: auto;
  float: right;
  margin-left: 32px;
  border-radius: 8px;
  left: 10%;
  text-align: left;
  border: none;
}

.solar-text {
  flex: 1;
}

.solar-text h2 {
  font-size: 5rem;
  font-weight: bold;
  color: #333;
  left: 60px;
  text-align: left;
  position: relative;
  margin: 0;
  font-family: Roobert, sans-serif;
}
.solar-text h1 {
  font-weight: bold;
  color: #6f6d68;
  left: 90px;
  text-align: left;
  font-size: 1rem;
  top: 250px;
  position: absolute;
  font-weight: 600;
  line-height: 1.05rem;
  letter-spacing: 0.035rem;
  margin-top: clamp(0.75rem, calc((100vw - 1439px) * 16), 1rem);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.solar-text p {
  font-size: 1.125rem;
  color: #444;
  margin-bottom: 24px;
  line-height: 1.6;
  width: 400px;
  position: relative;
  left: 100px;
  top: 30px;
  text-align: left;
  margin: 0;
  font-family: Roobert, sans-serif;
}

.learn-more-btn {
  width: fit-content;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  align-items: center;
  font-weight: 500;
  line-height: 1.2rem;
  white-space: nowrap;
  padding-left: 1.5rem;
  border-radius: 50rem;
  padding-right: 1.5rem;
  letter-spacing: -0.02rem;
  justify-content: center;
  text-decoration: none;
  flex-direction: row-reverse;
  padding: 1.125rem 1.5rem;
  left: 90px;
  position: relative;
  top: 90px;
  font-family: Roobert, sans-serif;
}
.learn-more-btn.light {
  color: #1f2647;
  border: 0.0625rem solid #1f2647;
  background-color: transparent;
}
.learn-more-btn:hover {
  background-color: #499ab8;
}
@media screen and (min-width: 540px) and (max-width: 680px) {
  .solar-promo {
    display: block;
    align-items: center;
    text-align: center;
    padding: 32px;
    background-color: #fffcf5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 0px;
    width: 100%;
    height: 900px;
  }

  .solar-image {
    width: 100%;
    height: auto;
    float: right;
    margin-left: 32px;
    border-radius: 8px;
    left: 0%;
    text-align: left;
    border: none;
    margin-top: 150px;
  }

  .solar-text {
    flex: 1;
  }

  .solar-text h2 {
    font-size: 5rem;
    font-weight: bold;
    color: #333;
    left: 60px;
    text-align: left;
    position: relative;
    margin: 0;
    font-family: Roobert, sans-serif;
  }
  .solar-text h1 {
    font-weight: bold;
    color: #6f6d68;
    left: 90px;
    text-align: left;
    font-size: 1rem;
    top: 0px;
    position: absolute;
    font-weight: 600;
    line-height: 1.05rem;
    letter-spacing: 0.035rem;
    margin-top: clamp(0.75rem, calc((100vw - 1439px) * 16), 1rem);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .solar-text p {
    font-size: 1.125rem;
    color: #444;
    margin-bottom: 24px;
    line-height: 1.6;
    width: 400px;
    position: relative;
    left: 100px;
    top: 30px;
    text-align: left;
    margin: 0;
    font-family: Roobert, sans-serif;
  }

  .learn-more-btn {
    width: fit-content;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    align-items: center;
    font-weight: 500;
    line-height: 1.2rem;
    white-space: nowrap;
    padding-left: 1.5rem;
    border-radius: 50rem;
    padding-right: 1.5rem;
    letter-spacing: -0.02rem;
    justify-content: center;
    text-decoration: none;
    flex-direction: row-reverse;
    padding: 1.125rem 1.5rem;
    left: 90px;
    position: relative;
    top: 90px;
    font-family: Roobert, sans-serif;
  }
  .learn-more-btn.light {
    color: #1f2647;
    border: 0.0625rem solid #1f2647;
    background-color: transparent;
  }
  .learn-more-btn:hover {
    background-color: #499ab8;
  }
}
</style>
