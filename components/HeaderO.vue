<template>
  <nav class="navbar navbar-expand-xl navbar-light bg-blue desktop">
    <div class="container-fluid">
      <img src="./../assets/cccc.jpg" class="img11" />
      <div class="text-wrapper-666out">
        <a class="navbar-brand" href="/">SolarEco Tech</a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <img src="./../assets/cccc.jpg" class="img11" />
        <div class="text-wrapper-666">
          <a class="navbar-brand" href="/">SolarEco Tech</a>
        </div>
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="text-wrapper-222 nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><RouterLink to="/SolarView">Solar Panel</RouterLink></a
            >
          </li>
          <li class="text-wrapper-222 nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/BatteryView">Battery</router-link></a
            >
          </li>
          <li class="text-wrapper-222 nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <RouterLink to="/InverterView">Inverter</RouterLink></a
            >
          </li>
          <li class="text-wrapper-222 nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <RouterLink to="/about">About us</RouterLink></a
            >
          </li>
          <li class="text-wrapper-222 nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <RouterLink to="/companiesView">Our partners</RouterLink></a
            >
          </li>
          <li class="nav-item dropdown text-wrapper-777">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <RouterLink to="/signup">login</RouterLink>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li>
                <a class="dropdown-item" href="#"
                  ><RouterLink to="/signup">signup</RouterLink></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><RouterLink to="/LoginCompView">login</RouterLink></a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@media screen and (min-width: 540px) and (max-width: 680px) {
  .desktop .text-wrapper-666out a {
    text-decoration: none;
    list-style: none;
    color: #fafafa;
    font-family: "Open Sans", sans-serif;
    font-size: 35px;
    font-weight: 400;
    left: 90px;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: left;
    top: 0px;
    width: 1000px;
    font-family: Georgia, "Times New Roman", Times, serif;
    display: inline;
    margin-right: 30px;
  }
  .text-wrapper-777 a {
    text-decoration: none;
    list-style: none;
    border-radius: 30px;
  }
  .desktop .text-wrapper-777 {
    color: #000000;
    font-family: "Roboto-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    position: relative;
    text-align: center;
    top: 1px;
    border-radius: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    width: 160px;
    left: 2%;
  }
  .desktop .text-wrapper-666 a {
    text-decoration: none;
    list-style: none;
    color: #fafafa;
    font-family: "Open Sans", sans-serif;
    font-size: 35px;
    font-weight: 400;
    left: 0px;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: left;
    top: 0px;
    width: 1000px;
    font-family: Georgia, "Times New Roman", Times, serif;
    display: block;
    margin-right: 30px;
  }
}
@media screen and (min-width: 680px) and (max-width: 7800px) {
  .desktop .text-wrapper-666out a {
    display: none;
  }
  .desktop .text-wrapper-666 a {
    text-decoration: none;
    list-style: none;
    color: #fafafa;
    font-family: "Open Sans", sans-serif;
    font-size: 35px;
    font-weight: 400;
    left: 90px;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: left;
    top: 0px;
    width: 1000px;
    font-family: Georgia, "Times New Roman", Times, serif;
    display: block;
    margin-right: 30px;
  }
}
.desktop {
  background-color: #3e849d;
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
}

.desktop .div2 {
  background-color: #fdfeff;
  height: 70px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.desktop .text-wrapper-222 a {
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  width: 219px;
  position: relative;
}
.desktop .text-wrapper-222 a {
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  width: 219px;
  position: relative;
}
.desktop .overlap {
  height: 673px;
  left: 0;
  position: absolute;
  top: 2388px;
  width: 100%;
}

.desktop .rectangle {
  background-color: #f4f7f4;
  border-radius: 0px 0px 30px 30px;
  height: 673px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.desktop .frame {
  height: 100%;
  left: 0;
  overflow: hidden;
  overflow-x: scroll;
  position: absolute;
  top: 17px;
  width: 100%;
}

.desktop .rectangle-2 {
  background-color: #d9d9d9;
  border-radius: 30px;
  height: 639px;
  left: 0;
  position: absolute;
  top: 0;
  width: 663px;
}

.desktop .rectangle-3 {
  background-color: #d9d9d9;
  border-radius: 30px;
  height: 639px;
  left: 700px;
  position: absolute;
  top: 0;
  width: 663px;
}

.desktop .rectangle-4 {
  background-color: #d9d9d9;
  border-radius: 30px;
  height: 639px;
  left: 1399px;
  position: absolute;
  top: 0;
  width: 663px;
}

.desktop .rectangle-5 {
  background-color: #d9d9d9;
  border-radius: 30px;
  height: 639px;
  left: 2099px;
  position: absolute;
  top: 0;
  width: 663px;
}

.desktop .rectangle-6 {
  background-color: #d9d9d9;
  border-radius: 30px;
  height: 639px;
  left: 2799px;
  position: absolute;
  top: 0;
  width: 663px;
}

.desktop .arrows-chevron {
  height: 39px !important;
  left: 1432px !important;
  position: absolute !important;
  top: 328px !important;
  width: 39px !important;
}

.desktop .footer-white {
  height: 799px;
  left: 0;
  position: absolute;
  top: 3198px;
  width: 1505px;
}
.desktop .overlap-22 {
  background-color: #3e849d;
  background-position: 100% 50%;
  background-size: cover;
  height: 200px;
  position: relative;
  top: 0;
  width: 100%;
  border-radius: 5px;
}

.desktop .img11 {
  left: 10px;
  position: absolute;
  top: 4px;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}
/*
.desktop .rectangle-100 {
  border: 4px solid;
  border-color: #ffffff;
  border-radius: 30px;
  height: 130px;
  left: 2%;
  position: absolute;
  top: 41px;
  width: 95%;
}*/
.desktop .text-wrapper-222 a {
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  width: 219px;
  position: relative;
  display: inline;
  top: 10%;
}

.desktop .text-wrapper-333 a {
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  left: 64%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 15px;
  width: 150px;
}
.desktop .text-wrapper-444 a {
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  left: 71%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 15px;
  width: 150px;
}

.desktop .text-wrapper-555 a {
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  left: 78%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 15px;
  width: 150px;
}

.desktop .text-wrapper-1010 a {
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 85%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 20px;
  width: 150px;
}
.desktop .rectangle-1111 {
  text-align: center;
  background-color: #ffffff;
  border-radius: 25px;
  height: 60px;
  position: relative;
  width: 120px;
}
.text-wrapper-777 a {
  text-decoration: none;
  list-style: none;
  border-radius: 30px;
}
.desktop .text-wrapper-777 {
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  position: relative;
  text-align: center;
  top: 1px;
  border-radius: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  width: 160px;
  left: 2%;
}
.desktop .t {
  color: #fefcfc;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 80%;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 2px;
  width: 100px;
  border-radius: 10px;
}
.desktop .text-wrapper-8 {
  color: #010101;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 221px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 575px;
  white-space: nowrap;
  width: 156px;
}

.desktop .ios-icon-search {
  height: 44px !important;
  left: 1242px !important;
  position: absolute !important;
  top: 576px !important;
  width: 56px !important;
}

.desktop .rectangle-12 {
  background-color: #fcf8fa;
  border-radius: 0px 0px 30px 30px;
  height: 20px;
  left: 38px;
  position: absolute;
  top: 845px;
  width: 1086px;
}

.desktop .p {
  color: #ffffff;
  font-family: "Roboto-SemiBold", Helvetica;
  font-size: 32px;
  font-weight: 600;
  left: 94px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 894px;
  width: 773px;
}

.desktop .text-wrapper-9 {
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 36px;
  font-weight: 400;
  left: 1rem;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 2298px;
  width: 100%;
}
.search-box {
  width: 50%;
}
.search-box .search-bar {
  width: 70%;
  display: block;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  left: 241px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 600px;
  height: 5%;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.75);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.sub-sub-menuh {
  text-align: center;
  display: none;
  list-style: none;
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  border-radius: 30px;
  position: relative;
  top: 15px;
}
.sub-sub-menuh li {
  text-align: center;
  list-style: none;
  text-decoration: none;
  position: absolute;
  color: #000000;
  position: relative;
  left: -18px;
}
.sub-sub-menuh a {
  list-style: none;
  text-decoration: none;
  color: #000000;
}
.text-wrapper-777:hover .sub-sub-menuh {
  display: block;
  text-align: center;
}
</style>
