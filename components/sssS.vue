<div class="desktop navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <div class="div2">
      <div class="overlap-22">
        <img src="./../assets/cccc.jpg" class="img11" />
        <div class="rectangle-100"></div>
        <div class="text-wrapper-666 container-fluid">
          <a href="/" class="navbar-brand">SolarEco Tech</a>
        </div>
        <button
          class="navbar-toggler ms-auto t"
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <div class="navbar-nav ms-auto">
              <li class="nav-item">
                <div class="text-wrapper-222">
                  <RouterLink to="/SolarView">Solar Panel</RouterLink>
                </div>
              </li>
              <div class="text-wrapper-333 nav-item">
                <router-link to="/BatteryView" class="nav-link active"
                  >Battery</router-link
                >
              </div>
              <div class="text-wrapper-444 nav-item">
                <RouterLink to="/InverterView">Inverter</RouterLink>
              </div>
              <div class="text-wrapper-555 nav-item">
                <RouterLink to="/about">About us</RouterLink>
              </div>
              <div class="text-wrapper-1010 nav-item">
                <RouterLink to="/companiesView">Company</RouterLink>
              </div>

              <div class="rectangle-1111 nav-item"></div>
              <div class="text-wrapper-777 nav-item">
                <RouterLink to="/">login</RouterLink>
                <ul class="sub-sub-menuh">
                  <li><RouterLink to="/signup">signup</RouterLink></li>
                  <li><RouterLink to="/">login</RouterLink></li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>