<template>
  <section class="products" id="products">
    <a name="product"></a>
    <h1 class="heading">products<span>new</span></h1>
    <div class="box-cont">
      <div class="box">
        <div class="image">
          <img src="1.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">876$<span>993$</span></div>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="2.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">897$<span>998$</span></div>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="3.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">778$<span>990$</span></div>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="4.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">654<span>786</span></div>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="4.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">654<span>786</span></div>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="4.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">654<span>786</span></div>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="4.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">654<span>786</span></div>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="4.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">654<span>786</span></div>
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src="4.png" />
          <div class="icons">
            <a href="#">details</a>
            <a href="#" class="cart-btn">buy now</a>
            <a href="#">like</a>
          </div>
        </div>
        <div class="content">
          <h3>product</h3>
          <div class="price">654<span>786</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProdComp",
};
</script>

<style>
.products {
  margin: 0px;
  padding: 0px;
  font-family: verdana, Geneva, "Poppins", sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.2s linear;
}
.products {
  font-size: 62.5%;
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
  overflow-x: hidden;
}
section {
  padding: 2rem 9%;
}
.box-cont {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.box-cont .box {
  flex: 1 1 30rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 1);
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(0, 0, 0, 1);
  position: relative;
}
.box-cont .box .discount {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.7rem 1rem;
  font-size: 2rem;
  color: var(--green);
  background: rgba(255, 51, 153, 0.05);
  z-index: 1;
  border-radius: 0.5rem;
}
.box-cont .box .image {
  position: relative;
  text-align: center;
  padding-top: 2rem;
  overflow: hidden;
}
.box-cont .box .image img {
  height: 25rem;
}
.box-cont .box:hover .image img {
  transform: scale(1.1);
}
.box-cont .box .image .icons {
  position: absolute;
  bottom: -7rem;
  left: 0;
  right: 0;
  display: flex;
}
.box-cont .box:hover .image .icons {
  bottom: 0;
}
.box-cont .box .image .icons a {
  height: 5rem;
  font-size: 2rem;
  width: 50%;
  line-height: 5rem;
  background: #70e679;
  color: #fff;
  text-align: center;
}
.box-cont .box .image .icons a:hover {
  background: #333;
}
.box-cont .box .image .icons .cart-btn {
  border-left: 1rem solid #999999;
  border-right: 1rem solid #999999;
  width: 100%;
}
.box-cont .box .content {
  padding: 2rem;
  text-align: center;
}
.box-cont .box .content h3 {
  font-size: 2.5rem;
  color: #333;
}
.box-cont .box .content .price {
  font-size: 2.5rem;
  color: #70e679;
  font-weight: bolder;
  padding-top: 1rem;
}
.box-cont .box .content .price span {
  font-size: 1.5rem;
  color: #999999;
  font-weight: lighter;
  text-decoration: line-through;
}
</style>
