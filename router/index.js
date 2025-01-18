import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Signup from "../views/SignupView.vue";
import SolarView from "../views/SolarView.vue";
import BatteryView from "../views/BatteryView.vue";
import CompaniesShow from "../views/alisar/CompaniesShow.vue";
import LoginComp from "../views/alisar/LoginComp.vue";
import ProdComp from "../views/alisar/ProdComp.vue";
import NavBar from "../views/alisar/NavBar.vue";
import InverterView from "../views/InverterView.vue";
import companiesView from "../views/company/companiesView.vue";
import companyView from "../views/company/companyView.vue";
import addProduct from "../views/company/addProduct.vue";
import LoginCompany from "../views/LoginCompany.vue";
import ProductDetails from "../views/ProductDetails.vue";
import BatteryProductDetails from "../views/BatteryProductDetails.vue";
import InverterProductDetails from "../views/InverterProductDetails.vue";
import dashbordView from "../views/company/dashbordView.vue";
import SolarprovideView from "../views/company/provides/SolarprovideView.vue";
import BatteryprovideView from "../views/company/provides/BatteryprovideView.vue";
import InverterprovideView from "../views/company/provides/InverterprovideView.vue";
import AnalysisEntry from "../views/AnalysisEntry.vue";
import NewHome from "../views/NewHome.vue";
import LoginCompView from "../views/LoginCompView.vue";
import dashBatteries from "../views/company/dashBatteries.vue";
import dashInv from "../views/company/dashInv.vue";
import settingView from "../views/settingView.vue";
import dataAnalyise from "../views/dataAnalyise.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/SolarView",
    name: "SolarView",
    component: SolarView,
  },
  {
    path: "/BatteryView",
    name: "BatteryView",
    component: BatteryView,
    props: true,
  },
  {
    path: "/CompaniesShow",
    name: "CompaniesShow",
    component: CompaniesShow,
  },
  {
    path: "/LoginComp",
    name: "LoginComp",
    component: LoginComp,
  },
  {
    path: "/ProdComp",
    name: "ProdComp",
    component: ProdComp,
  },
  {
    path: "/NavBar",
    name: "NavBar",
    component: NavBar,
  },
  {
    path: "/InverterView",
    name: "InverterView",
    component: InverterView,
  },
  {
    path: "/companiesView",
    name: "companiesView",
    component: companiesView,
  },
  {
    path: "/addProduct/:id",
    name: "addProduct",
    component: addProduct,
    props: true,
  },
  {
    path: "/companyView/:id/:title",
    name: "companyView",
    component: companyView,
    props: true,
  },
  {
    path: "/LoginCompany",
    name: "LoginCompany",
    component: LoginCompany,
  },
  {
    path: "/ProductDetails/:id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/BatteryProductDetails/:id",
    name: "BatteryProductDetails",
    component: BatteryProductDetails,
  },
  {
    path: "/InverterProductDetails/:id",
    name: "InverterProductDetails",
    component: InverterProductDetails,
  },
  {
    path: "/dashbordView",
    name: "dashbordView",
    component: dashbordView,
    meta: { requiresAuth: true },
  },
  {
    path: "/SolarprovideView",
    name: "SolarprovideView",
    component: SolarprovideView,
  },
  {
    path: "/BatteryprovideView",
    name: "BatteryprovideView",
    component: BatteryprovideView,
  },
  {
    path: "/InverterprovideView",
    name: "InverterprovideView",
    component: InverterprovideView,
  },
  {
    path: "/AnalysisEntry",
    name: "AnalysisEntry",
    component: AnalysisEntry,
  },
  {
    path: "/settingView",
    name: "settingView",
    component: settingView,
  },
  {
    path: "/NewHome",
    name: "NewHome",
    component: NewHome,
  },
  {
    path: "/LoginCompView",
    name: "LoginCompView",
    component: LoginCompView,
  },
  {
    path: "/dashBatteries",
    name: "dashBatteries",
    component: dashBatteries,
  },
  {
    path: "/dashInv",
    name: "dashInv",
    component: dashInv,
  },
  {
    path: "/dataAnalyise",
    name: "dataAnalyise",
    component: dataAnalyise,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   const userToken = sessionStorage.getItem("userToken");

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!userToken) {
//       // User is not authenticated, redirect to login page
//       next("/LoginCompany");
//     } else {
//       // User is authenticated, proceed to the requested route
//       next();
//     }
//   }
// });
// router.beforeEach((to, from, next) => {
//   if (to.name === "dashbordView") {
//     const userToken = sessionStorage.getItem("userToken");
//     if (!userToken) {
//       // User is not authenticated, redirect to login page
//       next("/");
//     } else {
//       // User is authenticated, proceed to the requested route
//       next();
//     }
//   } else {
//     // For other routes, proceed without authentication check
//     next();
//   }
// });
export default router;
