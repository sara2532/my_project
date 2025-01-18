<template>
  <div class="product">
    <div class="body">
      <div class="wrapper">
        <div class="product-img">
          <img src="{{ image }}" height="420" width="327" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{{ title }}</h1>
            <h2></h2>
            <p>
              {{ body }}
            </p>
          </div>
          <div class="product-price-btn">
            <p>
              <span>{{ price }}</span
              >$
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductView",
  props: {
    title: String,
    body: String,
    id: String,
    price: String,
    image: String,
  },
};
</script>
<style>
.body {
  border-radius: 10px;
  background-color: #d1dff1;
  border-radius: 30px;
}
.product {
  border-radius: 10px;
  margin-left: 40px;
}
.wrapper {
  display: contents;
  height: 420px;
  margin: 20px;
  width: 600px;
  border-radius: 10px;
}

.product-img {
  margin: 15px;
  margin-right: 0px;
  float: left;
  height: 420px;
  width: 300px;
  border-radius: 10px;
}

.product-img img {
  border-radius: 10px;
}

.product-info {
  float: left;
  height: 420px;
  width: 280px;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 15px;
  margin-left: 0px;
}

.product-text {
  height: 300px;
  width: 327px;
}
.product-text h1 {
    margin: 0 0 0 10px;
    padding-top: 30px;
    font-size: 25px;
    color: #000000;
  }

.product-text h1,
.product-price-btn p {
  font-family: "Bentham", serif;
}

.product-text h2 {
  margin: 20px 0px 47px 0px;
  font-size: 13px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #08386c;
  letter-spacing: 0.2em;
}

.product-text p {
  height: 125px;
  margin: 0 0 0 38px;
  font-family: "Playfair Display", serif;
  color: #ffffff;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
  width: 200px;
}

.product-price-btn {
  height: 103px;
  margin-top: 17px;
  position: relative;
}

.product-price p {
  display: inline-block;
  position: absolute;
  top: -13px;
  height: 50px;
  font-family: "Trocchi", serif;
  margin: 0 0 0 38px;
  font-size: 28px;
  font-weight: lighter;
  color: #ffffff;
  left: 50px;
  width: 300px;
  background-color: #236c83;
  border-radius: 10px;
  text-align: center;
}

span {
  display: inline-block;
  height: 50px;
  font-family: "Suranna", serif;
  font-size: 34px;
}

.product-price-btn button {
  display: inline-block;
  height: 50px;
  width: 200px;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #a2c0d6;
  cursor: pointer;
  outline: none;
}

.product-price :hover {
  background-color: #0c4d8f;
}
</style>
