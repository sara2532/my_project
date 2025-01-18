<template>
  <div class="newLogin">
    <LoginView />
  </div>
</template>
<script>
import LoginView from "@/components/LoginView.vue";
export default {
  name: "LoginCompView",
  components: {
    LoginView,
  },
};
</script>
<style>
.newLogin {
  background-image: url(./../assets/back/c.jpg);
  background-position: 100% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 1072px;
  position: relative;
  top: 0px;
  width: 100%;
}
</style>
