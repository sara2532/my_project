<template>
  <div class="comp_login">
    <section class="contacta" id="contacta">
      <div class="textAddProduct">Add Product</div>
      <div class="row">
        <form @submit.prevent="savedata">
          <label id="label">Product Name</label>
          <input
            type="text"
            placeholder="producName"
            class="box"
            @change="OnProductName"
            v-model="product_name"
          />
          <br />
          <label id="label">Product Image</label>
          <input
            type="file"
            @change="onFileSelected"
            accept=".jpg, .jpeg, .png"
          />
          <br />
          <label id="label">Product Type</label>
          <input
            type="text"
            placeholder="type"
            class="box"
            @change="OnProductType"
            v-model="type"
          />
          <br />
          <label id="label">Description</label>
          <input
            type="text"
            placeholder="Description"
            class="box"
            @change="OnProductDescription"
            v-model="description"
          />
          <br />
          <label id="label">Product Price</label>
          <input
            type="number"
            placeholder="Price"
            class="box"
            @change="OnProductPrice"
            v-model="price"
          />
          <br />

          <button type="submit" class="btnn"></button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  name: "addProduct",
  data() {
    return {
      product_name: "",
      image: "",
      type: "",
      description: "",
      price: "",
    };
  },
  methods: {
    onFileSelected(event) {
      this.image = event.target.files[0];
    },
    OnProductName(e) {
      console.log(e);
    },
    savedata() {
      const formData = new FormData();
      formData.append("product_name", this.product_name);
      formData.append("type", this.type);
      formData.append("description", this.description);
      formData.append("image", this.image);
      formData.append("price", this.price);
      formData.append("company_id", this.$props.id);
      axios
        .post("http://127.0.0.1:8000/api/addProducts", formData)
        .then((res) => console.log(res))
        .then(this.$router.push("/companiesView"));
    },
  },
};
</script>

<style>
input[type="file"] {
  background-color: #f0f0f0;
  color: #333;
  padding: 10px 15px;
  border: 1px solid #070808;
  border-radius: 30px;
  cursor: pointer;
  font-size: 20px;
}
.textAddProduct {
  font-size: 40px;
  color: #fff;
  left: 9%;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.comp_login {
  align-items: center;
  display: inline;
  text-align: center;
  left: 800px;
  border-radius: 30px;
}
.contacta {
  background-image: url(./../../assets/Panel-1.png);
  background-repeat: no-repeat;
  background-size: cover;
  left: 500px;
  text-align: center;
  height: 1050px;
  margin: 100pxpx;
  padding: 0px;
  font-family: verdana, Geneva, "Poppins", sans-serif;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.2s linear;
  border-radius: 30px;
}
.contacta {
  font-size: 62.5%;
  overflow-x: hidden;
  text-align: center;
  left: 500px;
  border-radius: 30px;
}
.row {
  position: relative;
  display: inline-block;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-radius: 30px;
  left: 9%;
}
.row form {
  text-align: left;
  flex: 1 1 40rem;
  padding: 2rem 2.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 1);
  border: 0.1rem solid rgba(0, 0, 0, 1);
  background: #fff;
  border-radius: 30px;
  margin: 7rem 0;
  width: 50%;
}
.row form .box:focus {
  border-color: #70e679;
}

.row form .box {
  padding: 1rem;
  font-size: 1.7rem;
  color: #333;
  text-transform: none;
  border: 0.1rem solid rgba(0, 0, 0, 1);
  margin: 0.7rem 0;
  border-radius: 30px;
  width: 100%;
}
.row form .btn {
  text-align: center;
}
.row .image {
  flex: 1 1 40rem;
}
.row .image img {
  width: 100%;
}
.heading {
  text-align: center;
  font-size: 4rem;
  color: #333;
  padding: 1rem;
  margin: 2rem 0;
  background: rgba(255, 51, 153, 0.05);
}
#label {
  font-size: 1.5rem;
  text-align: center;
  padding: 10px;
  position: relative;
}
.btnn {
  display: inline-block;
  font-size: 1.7rem;
  background: #333;
  border-radius: 5rem;
  margin-top: 1rem;
  padding: 0.9rem 3.5rem;
  color: #fff;
  cursor: pointer;
  background-color: #236c83;
}
.btn:hover {
  background-color: #70e679;
}
.heading span {
  color: #70e679;
}
.imagePickButton {
  display: block;
  width: 200px;
  height: 50px;
  margin: 20px;
  margin-left: 0px;
  background-color: #236c83;
  color: #fff;
  font-size: 20px;
  border-radius: 30px;
  border: #236c83;
}
</style>
