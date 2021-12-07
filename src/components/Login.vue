<template>
  <div class="col-lg-5 col-lg-offset-4 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <p class="panel-title">{{loginMode ? "LOGIN" : "SIGNUP"}}</p>
      </div>
      <div class="panel-body">
        <form>
          <div class="row">
            <input class="form-control" type="text" v-model="email" placeholder="Email" />
          </div>

          <div class="row">
            <input class="form-control" type="password" v-model="password" placeholder="Password" />
          </div>

          <div class="row">
            <a
              @click.prevent="loginMode = !loginMode"
            >{{loginMode ? "Don\'t have an account" : "Already have an account"}}</a>
          </div>

          <div class="row">
            <div class="pull-right">
              <button
                class="btn btn-primary"
                :disabled="done"
                @click.prevent="save"
              >{{this.loginMode ? 'LOGIN ' : 'SIGN UP '}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loginMode: true,
    };
  },
  computed: {
    done() {
      if (!this.email || !this.password) {
        return true;
      }
    },
  },
  methods: {
    save() {
      let credentials = {
        email: this.email,
        password: this.password,
        loginMode: this.loginMode,
      };
      this.$store.dispatch("login", credentials);
    },
  },
};
</script>
<style scoped>
.row {
  padding: 10px;
}
</style>