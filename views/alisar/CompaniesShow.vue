<template class="all">
  <div>
    <RouterLink to="LoginComp" class="btn" id="btn">
      Login as company
    </RouterLink>
  </div>
  <div class="box-cont">
    <div class="box">
      <div class="contenat">
        <div>
          <h3>some contenat</h3>
          <h4>some info description</h4>
          <p>you want to add somthing</p>
        </div>
      </div>
    </div>
    <div class="box-cont">
      <div class="box">
        <div class="image">
          <img src="1.png" />
        </div>
        <div class="contenat">
          <h3>company name</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="box-cont">
    <div class="box">
      <div class="contenat">
        <div>
          <h3>some contenat</h3>
          <h4>some info description</h4>
          <p>you want to add somthing</p>
        </div>
      </div>
    </div>
    <div class="box-cont">
      <div class="box">
        <div class="image">
          <img src="1.png" />
        </div>
        <div class="contenat">
          <h3>company name</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="box-cont">
    <div class="box">
      <div class="contenat">
        <div>
          <h3>some contenat</h3>
          <h4>some info description</h4>
          <p>you want to add somthing</p>
        </div>
      </div>
    </div>
    <div class="box-cont">
      <div class="box">
        <div class="image">
          <img src="1.png" />
        </div>
        <div class="contenat">
          <h3>company name</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="box-cont">
    <div class="box">
      <div class="contenat">
        <div>
          <h3>some contenat</h3>
          <h4>some info description</h4>
          <p>you want to add somthing</p>
        </div>
      </div>
    </div>
    <div class="box-cont">
      <div class="box">
        <div class="image">
          <img src="1.png" />
        </div>
        <div class="contenat">
          <h3>company name</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="box-cont">
    <div class="box">
      <div class="contenat">
        <div>
          <h3>some contenat</h3>
          <h4>some info description</h4>
          <p>you want to add somthing</p>
        </div>
      </div>
    </div>
    <div class="box-cont">
      <div class="box">
        <div class="image">
          <img src="1.png" />
        </div>
        <div class="contenat">
          <h3>company name</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompaniesShow",
};
</script>

<style>
.contenat h3 {
  font-size: 6rem;
  color: #333;
}
.box .contenat {
  padding: 2rem;
  text-align: center;
}
.box .contenat h3 {
  font-size: 2.5rem;
  color: #333;
}
.box .image img {
  height: 25rem;
}
.box:hover .image img {
  transform: scale(1.1);
}
.box-cont .box .image {
  position: relative;
  text-align: left;
  padding-top: 2rem;
  overflow: hidden;
}
.box-cont .box {
  flex: 1 1 30rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 1);
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(0, 0, 0, 1);
  position: relative;
}
.home {
  display: flex;
  align-items: right;
  margin: 100px auto;
}
.contenat {
  max-width: 30rem;
  align-items: right;
}
.contenat h3 {
  font-size: 16rem;
  color: #333;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 5px;
}
.contenat h4 {
  font-size: 2rem;
  color: #333;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 5px;
}

.contenat p {
  font-size: 3rem;
  color: #131212;
  padding: 5px;
  line-height: 1.5;
  align-items: right;
  position: relative;
}
.all {
  margin: 0px;
  padding: 10px;
  font-family: verdana, Geneva, "Poppins", sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.2s linear;
}
:root {
  color: var(--pink);
}
.all {
  font-size: 62.5%;
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
  overflow-x: hidden;
  padding: 30px 30px;
}
#btn {
  margin: 0px 1100px;
}
</style>
