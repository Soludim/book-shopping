<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Solu BookShop</router-link>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <router-link to="/admin" v-show="online ? (online.id == 'P9GfCnQbKQcNtiP8QAWLOpJK0zA3') : false" tag="li" active-class="active">
            <a>Admin</a>
          </router-link>
          <router-link v-if="!online" to="/login" tag="li" active-class="active">
            <a>Login</a>
          </router-link>
          <li v-else @click="isDropDown = !isDropDown" class="dropdown" :class="{open: isDropDown}">
            <a href="#" class="dropdown-toggle" data-toggle="dropdwon">
              {{online.email}}
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu animate__animated animate__bounceIn">
              <li>
                <a href="#" @click="logout">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropDown: false,
    };
  },
  computed: {
    online() {
      console.log(this.$store.getters.activeUser)
      return this.$store.getters.activeUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
</style>
