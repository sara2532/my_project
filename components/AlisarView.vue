<template>
  <div class="sssalisar">
    <section class="c">
      <div id="alisar-form-wrap">
        <h2 class="h22">Get Free Pridcate Price</h2>
        <form id="alisar-form">
          <div class="allField">All fields are required</div>
          <div class="panelNumber">Hours Operation For Batteries</div>
          <p>
            <input
              type="number"
              id="panelNumber"
              name="hourOPeration"
              placeholder=""
              required
              v-model="alisarData.con_houre_bat"
            />
          </p>
          <div class="panelNumber">Panels Number</div>
          <p>
            <input
              type="number"
              id="panelNumber"
              name="panelNumber"
              placeholder=""
              required
              v-model="alisarData.num_panel"
            />
          </p>
          <div class="panelNumber">Batteries Number</div>
          <p>
            <input
              type="number"
              id="panelNumber"
              name="BatteryNumber"
              placeholder=""
              required
              v-model="alisarData.num_batt"
            />
          </p>
          <p>
            <input
              type="button"
              id="alisar"
              value="Get Price"
              style="color: #232323"
              @click="alisar"
            />
          </p>
        </form>
      </div>
    </section>
  </div>
  <div class="predicate">Pridcated Price :</div>
  <div class="result">{{ posts }}</div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      alisarData: { con_houre_bat: "", num_panel: "", num_batt: "" },
      posts: "",
    };
  },
  methods: {
    alisar() {
      axios
        .post("http://192.168.229.77:5011/api/v1/predict", this.alisarData)
        .then((r) => {
          console.log(r);
          this.posts = Math.floor(
            Math.round(r.data.total_price[0] / 1000000) * 1000000
          );
        });
      //window.location.reload();
    },
  },
};
</script>
<style>
.sssalisar {
  align-items: center;
  display: block;
  text-align: center;
  left: 500px;
  border-radius: 0px;
  top: 200px;
  /* background-color: #f0f6fa; */
}
.alisar {
  margin: 20px;
}
.h22 {
  font-weight: 400;
  text-align: center;
  color: #2c2d2c;
  font-size: 40px;
  font-weight: 40px;
}
.panelNumber {
  margin: 20px;
  padding: 10px;
  text-align: left;
  font-size: 30px;
}
.allField {
  text-align: left;
  margin-top: 40px;
}
p {
  position: relative;
}

a,
a:link,
a:visited,
a:active {
  color: #3a3f40;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
a:focus,
a:hover,
a:link:focus,
a:link:hover,
a:visited:focus,
a:visited:hover,
a:active:focus,
a:active:hover {
  color: #030303;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

@media screen and (min-width: 540px) and (max-width: 680px) {
  #alisar-form-wrap {
    position: relative;
    /*background-color: RGB(244, 245, 246, 0.4);*/
    width: 100%;
    top: 100px;
    left: 0%;
    text-align: center;
    padding: 15px 0 0 0;
    border-radius: 30px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
    display: block;
    height: 78s0px;
  }
  .result {
    position: relative;
    /*background-color: RGB(244, 245, 246, 0.4);*/
    width: 80%;
    top: 100px;
    left: 10%;
    text-align: center;
    padding: 15px 0 0 0;
    border-radius: 30px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.3);
    display: block;
    height: 100px;
    font-size: 50px;
    color: #ffffff;
  }
  .predicate {
    position: relative;
    /*background-color: RGB(244, 245, 246, 0.4);*/
    width: 80%;
    top: 140px;
    left: -40px;
    text-align: center;
    display: block;
    height: 100px;
    font-size: 40px;
    color: #ffffff;
  }
}
@media screen and (min-width: 681px) and (max-width: 7800px) {
  .result {
    position: relative;
    /*background-color: RGB(244, 245, 246, 0.4);*/
    width: 40%;
    top: -200px;
    left: 10%;
    text-align: center;
    padding: 15px 0 0 0;
    border-radius: 30px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.3);
    display: block;
    height: 100px;
    font-size: 50px;
    color: #ffffff;
  }
  .predicate {
    position: relative;
    /*background-color: RGB(244, 245, 246, 0.4);*/
    width: 40%;
    top: -200px;
    left: -2%;
    text-align: center;
    display: block;
    height: 100px;
    font-size: 50px;
    color: #ffffff;
  }
  #alisar-form-wrap {
    position: relative;
    /* background-color: RGB(244, 245, 246, 0.4); */
    width: 40%;
    top: 80px;
    left: 60%;
    text-align: center;
    padding: 20px 0 0 0;
    border-radius: 30px;
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
    display: block;
    height: 800px;
  }
}

#alisar-form {
  padding: 0 60px;
  border-radius: 30px;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  height: 60px;
  line-height: 60px;
  border-radius: 30px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0 0 0 10px;
  margin: 0;
  color: #000000;
  border: 1px solid #f9f9f9;
  font-style: normal;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  display: inline-block;
  background-color: #f9f9f9;
}
input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #c7cacb;
}
input[type="text"]:focus:invalid,
input[type="password"]:focus:invalid {
  color: #cc1e2b;
  border-color: #cc1e2b;
}
input[type="text"]:valid ~ .validation,
input[type="password"]:valid ~ .validation {
  display: block;
  border-color: #0c0;
}
input[type="text"]:valid ~ .validation span,
input[type="password"]:valid ~ .validation span {
  background: #0c0;
  position: absolute;
  border-radius: 30px;
}
input[type="text"]:valid ~ .validation span:first-child,
input[type="password"]:valid ~ .validation span:first-child {
  top: 30px;
  left: 14px;
  width: 20px;
  height: 3px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
input[type="text"]:valid ~ .validation span:last-child,
input[type="password"]:valid ~ .validation span:last-child {
  top: 35px;
  left: 8px;
  width: 11px;
  height: 3px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.validation {
  display: none;
  position: absolute;
  content: " ";
  height: 60px;
  width: 30px;
  right: 15px;
  top: 0px;
}

input[type="submit"] {
  border: none;
  display: block;
  background-color: #83cce5;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  font-size: 18px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-align: center;
}
input[type="submit"]:hover {
  background-color: #78b3c6;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

#create-account-wraphome {
  background-color: #eeedf1;
  color: #4084de;
  font-size: 14px;
  width: 100%;
  padding: 10px 0;
  border-radius: 30px;
}
</style>
