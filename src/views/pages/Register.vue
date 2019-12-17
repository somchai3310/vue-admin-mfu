<template>
  <div class="app flex-row align-items-center">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <b-img
          src="https://www.mfu.ac.th/fileadmin/templates/assets/images/logo/logo_mfuwebtypo3_09052018-02.png"
          center
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>

      <b-col md="10" sm="10">
        <b-card no-body class="mx-4 bgCard">
          <b-card-header>
            <h1>Register</h1>
          </b-card-header>
          <b-row>
            <b-col md="6" sm="6">
              <b-card-body class="p-4">
                <b-form id="form-control11">
                  <vue-dropzone
                    class="drop"
                    ref="myVueDropzone"
                    id="dropzone"
                    :options="dropzoneOptions"
                  ></vue-dropzone>

                  <p class="textPhoto" style="margin-bottom:22px;">
                    *** Photo 1x1.5 inch
                    <br />*** Maximum file size 3 MB
                    <br />*** Only one picture
                    <br />*** File .png or .jpg
                  </p>

                  <span class="text-muted mb-3" for="userId">Student ID</span>
                  <b-input-group class="mb-3">
                    <br />
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      id="userId"
                      type="text"
                      maxlength="10"
                      class="form-control"
                      name="userId"
                      onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                      v-model="userId"
                      placeholder="รหัสนักศึกษา"
                      autocomplete="userId"
                    />
                  </b-input-group>

                  <span class="text-muted mb-3" for="school">School</span>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-graduation"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-select id="school" v-model="school" :options="schools"></b-form-select>
                  </b-input-group>

                  <span class="text-muted mb-3" for="major">Major</span>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-graduation"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-select
                      type="text"
                      id="major"
                      v-model="major"
                      :options="majors"
                      placeholder="เลือกสาขาวิชา"
                    ></b-form-select>
                  </b-input-group>
                </b-form>
              </b-card-body>
            </b-col>

            <b-col md="6" sm="6">
              <b-card-body class="p-4">
                <b-form id="form-control12">
                  <span class="text-muted mb-3" for="userName">Name</span>
                  <b-input-group class="mb-3">
                    <div
                      data-v-715a1058
                      class="col-12"
                      style="padding-left: 0px;padding-right: 2px"
                    >
                      <b-row>
                        <b-col cols="6">
                          <b-input-group class>
                            <b-input-group-prepend>
                              <b-input-group-text>
                                <i class="fa fa-user"></i>
                              </b-input-group-text>
                            </b-input-group-prepend>
                            <b-form-input
                              id="userName"
                              type="text"
                              v-model="firstName"
                              placeholder="First"
                              autocomplete="firstName"
                            ></b-form-input>
                          </b-input-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-input
                            id="userName"
                            type="text"
                            v-model="lastName"
                            placeholder="Last"
                            autocomplete="lastName"
                          ></b-form-input>
                        </b-col>
                      </b-row>
                    </div>
                  </b-input-group>

                  <span class="text-muted mb-3" for="userDOB">Date of Birth</span>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="fa fa-birthday-cake"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      id="userDOB"
                      type="date"
                      class="form-control"
                      v-model="dob"
                      placeholder="วันเดือนปีเกิด"
                      autocomplete="dob"
                    />
                  </b-input-group>

                  <span class="text-muted mb-3" for="userPhone">Phone No.</span>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-phone"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      id="userPhone"
                      type="text"
                      maxlength="10"
                      onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                      class="form-control"
                      v-model="phone"
                      placeholder="เบอร์โทรศัพท์มือถือ"
                      autocomplete="phone"
                    />
                  </b-input-group>

                  <span class="text-muted mb-3" for="userAdr">Address</span>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-home"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      id="userAdr"
                      type="text"
                      class="form-control"
                      name="address"
                      v-model="address"
                      placeholder="ที่อยู่ปัจจุบัน"
                      autocomplete="address"
                    />
                  </b-input-group>

                  <span class="text-muted mb-3" for="userEmail">Email</span>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>@</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="email"
                      class="form-control"
                      v-model="email"
                      placeholder="you@example.com"
                      autocomplete="email"
                    />
                  </b-input-group>

                  <span class="text-muted mb-3" for="password">Password</span>
                  <b-input-group class="mb-3">
                    <b-input-group-text>
                      <i class="icon-lock"></i>
                    </b-input-group-text>
                    <b-form-input
                      :type="passwordVisible ? 'text' : 'password'"
                      class="form-control"
                      v-model="password"
                    />
                    <b-input-group-prepend>
                      <b-button @click="togglePasswprdVisible">
                        <i class="icon-eye"></i>
                      </b-button>
                    </b-input-group-prepend>
                  </b-input-group>

                  <span class="text-muted mb-3" for="password">Re-Password</span>
                  <b-input-group class="mb-3">
                    <b-input-group-text>
                      <i class="icon-lock"></i>
                    </b-input-group-text>
                    <b-form-input
                      :type="passwordReVisible ? 'text' : 'password'"
                      class="form-control"
                      v-model.lazy="checkPassword"
                    />

                    <b-input-group-prepend>
                      <b-button @click="toggleRePasswprdVisible">
                        <i class="icon-eye"></i>
                      </b-button>
                    </b-input-group-prepend>
                  </b-input-group>
                  <b-row align-h="around">
                    <b-col md="6" sm="6">
                      <b-button variant="primary" block @click="checkForm">Create Account</b-button>
                    </b-col>
                    <b-col md="6" sm="6">
                      <b-button variant="danger" type="button" block @click="resetForm">Reset Form</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        <b>กรุณาทำตามคำแนะนำดังนี้:</b>
      </template>
      <div class="d-block">
        <div id="error" class="alert alert-danger" role="alert" v-if="errors.length">
          <ul>
            <li v-for="error in errors" :key="error['.key']">{{ error }}</li>
          </ul>
        </div>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
    </b-modal>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Media from "vue-media";
export default {
  name: "Register",
  components: {
    vueDropzone: vue2Dropzone,
    Media
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 113,
        thumbnailHeight: 151,
        maxFilesize: 3,
        isMobile: false,
        maxFiles: 1,
        addRemoveLinks: true,
        headers: { "My-Awesome-Header": "header value" }
      },

      school: "กรุณาเลือกสำนักวิชา",
      schools: [
        { value: "กรุณาเลือกสำนักวิชา", text: "กรุณาเลือกสำนักวิชา" },
        {
          value: "สำนักวิชาเทคโนโลยีสารสนเทศ",
          text: "สำนักวิชาเทคโนโลยีสารสนเทศ"
        },
        {
          value: "สำนักวิชาศิลปศาสตร์",
          text: "สำนักวิชาศิลปศาสตร์"
        },
        {
          value: "สำนักวิชาวิทยาศาสตร์",
          text: "สำนักวิชาวิทยาศาสตร์"
        },
        {
          value: "สำนักวิชาการจัดการ",
          text: "สำนักวิชาการจัดการ"
        },
        {
          value: "สำนักวิชาอุตสาหกรรมเกษตร",
          text: "สำนักวิชาอุตสาหกรรมเกษตร"
        },
        {
          value: "สำนักวิชานิติศาสตร์",
          text: "สำนักวิชานิติศาสตร์"
        },
        {
          value: "สำนักวิชาวิทยาศาสตร์เครื่องสำอาง",
          text: "สำนักวิชาวิทยาศาสตร์เครื่องสำอาง"
        },
        {
          value: "สำนักวิชาวิทยาศาสตร์สุขภาพ",
          text: "สำนักวิชาวิทยาศาสตร์สุขภาพ"
        },
        {
          value: "สำนักวิชาพยาบาลศาสตร์",
          text: "สำนักวิชาพยาบาลศาสตร์"
        },
        {
          value: "สำนักวิชาแพทยศาสตร์",
          text: "สำนักวิชาแพทยศาสตร์"
        },
        {
          value: "สำนักวิชาทันตแพทยศาสตร์",
          text: "สำนักวิชาทันตแพทยศาสตร์"
        },
        {
          value: "สำนักวิชานวัตกรรมสังคม",
          text: "สำนักวิชานวัตกรรมสังคม"
        },
        {
          value: "สำนักวิชาจีนวิทยา",
          text: "สำนักวิชาจีนวิทยา"
        }
      ],
      major: "กรุณาเลือกสาขาวิชา",
      errors: [],
      email: "",
      userId: "",
      firstName: "",
      lastName: "",
      dob: "",
      phone: "",
      address: "",
      majors: [
        { value: "กรุณาเลือกสาขาวิชา", text: "กรุณาเลือกสาขาวิชา" },
        {
          value: "สาขาวิชาวิศวกรรมคอมพิวเตอร์",
          text: "สาขาวิชาวิศวกรรมคอมพิวเตอร์"
        },
        {
          value: "สาขาวิชาวิศวกรรมการสื่อสารและสารสนเทศ",
          text: "สาขาวิชาวิศวกรรมการสื่อสารและสารสนเทศ"
        },
        {
          value: "สาขาวิชาเทคโนโลยีสารสนเทศ",
          text: "สาขาวิชาเทคโนโลยีสารสนเทศ"
        },
        {
          value: "สาขาวิชาวิศวกรรมซอฟต์แวร์",
          text: "สาขาวิชาวิศวกรรมซอฟต์แวร์"
        },
        {
          value: "สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรม",
          text: "สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรม"
        },
        {
          value: "สาขาวิชาเทคโนโลยีมัลติมีเดียและการสร้างภาพเคลื่อนไหว",
          text: "สาขาวิชาเทคโนโลยีมัลติมีเดียและการสร้างภาพเคลื่อนไหว"
        }
      ],
      password: "",
      checkPassword: "",
      passwordVisible: false,
      passwordReVisible: false
    };
  },

  computed: {
    notSamePasswords() {
      if (this.passwordsFilled) {
        return this.password == this.checkPassword;
      } else {
        return false;
      }
    },
    passwordsFilled() {
      return this.password !== "" && this.checkPassword !== "";
    },
    passwordValidation() {
      let errors = [];
      for (let condition of this.rules) {
        if (!condition.regex.test(this.password)) {
          errors.push(condition.message);
        }
      }
      if (errors.length === 0) {
        return { valid: true, errors };
      } else {
        return { valid: false, errors };
      }
    }
  },
  methods: {
    delete: function() {
      this.$refs.myVueDropzone.removeFile(file);
    },
    resetForm: function() {
      this.school = "";
      this.userId = "";
      this.major = "";
      this.firstName = "";
      this.lastName = "";
      this.dob = "";
      this.phone = "";
      this.password = "";
      this.checkPassword = "";
    },
    checkForm: function(e) {
      this.errors = [];

      if (!this.userId) {
        this.errors.push("id.");
      }
      if (!this.school) {
        this.errors.push("school");
      }
      if (!this.major) {
        this.errors.push("major");
      }
      if (!this.firstName) {
        this.errors.push("First name");
      }
      if (!this.lastName) {
        this.errors.push("Last name");
      }
      if (!this.dob) {
        this.errors.push("day of birth");
      }
      if (!this.phone) {
        this.errors.push("phone number");
      }
      if (!this.address) {
        this.errors.push("address");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      }
      if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.password) {
        this.errors.push("Password required.");
      }
      if (!this.checkPassword) {
        this.errors.push("re passwords");
      }

      if (!this.notSamePasswords) {
        this.errors.push("Passwords don't match.");
      }

      if (!this.errors.length) {
        return true && alert("บันทึกบัญชีผู้ใช้สำเร็จ");
      }

      this.showError();
      e.preventDefault();
    },

    validEmail: function(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },

    togglePasswprdVisible() {
      this.passwordVisible = !this.passwordVisible;
    },

    toggleRePasswprdVisible() {
      this.passwordReVisible = !this.passwordReVisible;
    },

    showError() {
      this.$bvModal.show("bv-modal-example");
    }
  }
};
</script>

<style>
.card {
  margin-top: 25px;
  margin-bottom: 50px;
}

body {
  background-image: url("http://management.mfu.ac.th/assets/images/og_fb.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}
.bgCard {
  background-color: rgba(255, 255, 255, 0.712);
  border: none;
}
h1 {
  color: #8c1e1f;
}
.dropzone {
  text-align: center;
  display: block;
  margin: auto;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  width: 50%;
  padding: 0px 0px;
}
.dropzone .dz-preview .dz-remove {
  margin: auto;
  padding-bottom: 0px;
}

.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.textPhoto {
  color: #8c1e1f;
}

.logoMFU {
  position: relative;
  width: auto;
  height: auto;
}
</style>

