<template class="alisarNav">
  <header>
    <input type="checkbox" name="" id="toggler" />
    <label for="toggler" class="fas fa-bars"></label>
    <img src="2.png" />
    <a href="#" class="logo">SolarSpace<span>.</span></a>
    <nav class="navigation">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Companies</a>
      <a href="#">Review</a>
    </nav>
    <div class="icons">
      <a href="#" class="fas fa-heart"></a>
      <a href="#" class="fas fa-shopping-cart"></a>
      <a href="#" class="fas fa-user"></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.alisarNav {
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
.alisarNav {
  font-size: 62.5%;
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
  overflow-x: hidden;
}
section {
  padding: 2rem 9%;
}
header {
  top: 0%;
  right: 0%;
  left: 0%;
  background-color: #eee0e0;
  width: 100%;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 9%;
  box-shadow: 0.5rem 1rem, rgba(0, 0, 0, 1);
}
header .logo {
  text-decoration: none;
  color: #333;
  font-weight: bolder;
  font-size: 3rem;
}
header .navigation a {
  color: #666;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  padding: 0 1.5rem;
  margin-right: 20px;
}
.navigation a:hover {
  color: #70e679;
}
header .icons a {
  font-size: 2.5rem;
  color: #eee0e0;
  margin-left: 1.5rem;
}
header .icons a:hover {
  color: #70e679;
}
header #toggler {
  display: none;
}
header .fa-bars {
  font-size: 3rem;
  color: #333;
  border-radius: 0.5rem;
  padding: 5rem, 1.5rem;
  cursor: pointer;
  border: 0.1rem solid rgba(0, 0, 0, 1);
  display: none;
}
@media (max-width: 768px) {
  header .fa-bars {
    display: block;
  }
  header .navigation {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #eee;
    border-top: 0.1rem solid rgba(0, 0, 0, 1);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  header #toggler:checked ~ .navigation {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  header .navigation a {
    margin: 1.5rem;
    padding: 1.5rem;
    background: #fff;
    border: 0.1rem solid rgba(0, 0, 0, 1);
    display: block;
  }
}
</style>
