<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4 ncard">
              <b-card-body>
                <b-form>
                  <h1>Login</h1>
                  <p class="textmute">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      autocomplete="username email"
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-lock"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" v-b-modal.modal-1>Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <b-button
                    variant="primary"
                    class="mt-3 btn-primary"
                    @click="register"
                  >Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">อีเมลที่คุณป้อนไม่ตรงกับบัญชีผู้ใช้ใดๆ สมัครใช้งานบัญชีผู้ใช้</p>
    </b-modal>
  </div>
</template>

<script>
import DashboardVue from "../Dashboard.vue";
export default {
  name: "Login",
  methods: {
    register: function() {
      this.$router.replace("/pages/register");
    },
    dashboard: function() {
      this.$router.replace("/dashboard");
    }
  }
};
</script>


<style>
body {
  background-image: url("http://management.mfu.ac.th/assets/images/og_fb.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

h1,
h2,
p {
  color: #8c1e1f;
}

.text-muted {
  color: #8c1e1f;
}

.ncard {
  background-color: rgba(255, 255, 255, 1);
  border: none;
}
.btn-primary {
  color: #fff;
  background-color: #8c1e1f;
  border: none;
}

.btn-link {
  font-weight: 400;
  color: #8c1e1f;
  text-decoration: none;
}

.bg-primary {
  background-color: #a07618 !important;
  border: none;
}
</style>
