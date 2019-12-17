<template>
  <div id="api-ref-form">
    <form @submit.prevent="handleSubmit">
      <b-row>
        <b-col>
          <label>Method</label>

          <b-form-input
            ref="first"
            type="text"
            placeholder="Method"
            :class="{'has-error': submitting && invalidMethod}"
            v-model="item.method"
            @focus="clearStatus"
            @keypress="clearStatus"
          />
        </b-col>
        <b-col>
          <label>API name</label>

          <b-form-input
            placeholder="API name"
            :class="{'has-error':submitting && invalidName}"
            v-model="item.name"
            type="text"
            @focus="clearStatus"
          />
        </b-col>

        <b-col>
          <label>Description</label>
          <b-form-input
            placeholder="Description"
            :class="{'has-error':submitting && invalidDescription}"
            v-model="item.description"
            type="text"
            @focus="clearStatus"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label>Last Update</label>
          <b-form-input
            placeholder="Last Update"
            :class="{'has-error':submitting && invalidLastUpdate}"
            v-model="item.last_update"
            type="text"
            @focus="clearStatus"
          />
        </b-col>
        <b-col>
          <label>Revoke Date</label>
          <b-form-input
            placeholder="Revoke Date"
            :class="{'has-error':submitting && invalidRevokeDate}"
            v-model="item.revoke_date"
            type="text"
            @focus="clearStatus"
          />
        </b-col>
        <b-col>
          <label>Status</label>

          <b-form-input
            placeholder="Status"
            :class="{'has-error':submitting && invalidStatus}"
            v-model="item.status"
            type="text"
            @focus="clearStatus"
          />
        </b-col>
      </b-row>
      <b-button variant="success" @click="handleSubmit()" class="float-sm-right">Add API</b-button>
      <br />
      
      <p v-if="error && submitting" class="error-message">Please fill out all required fields</p>
      <p v-if="success" class="success-message">API successfully added</p>
      
    </form>
  </div>
</template>

<script>
export default {
  name: "api-ref-form",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      item: {
        name: "",
        method: "",
        description: "",
        last_update: "",
        revoke_date: "",
        status: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();

      if (
        this.invalidName ||
        this.invalidDescription ||
        this.invalidMethod ||
        this.invalidStatus ||
        this.invalidRevokeDate ||
        this.invalidLastUpdate
      ) {
        this.error = true;
        return;
      }

      this.$emit("add:item", this.item);
      this.$refs.first.focus();

      this.item = {
        method: "",
        name: "",
        method: "",
        description: "",
        last_update: "",
        revoke_date: "",
        status: ""
      };
      this.error = false;
      this.success = true;
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  },
  computed: {
    invalidName() {
      return this.item.name === "";
    },
    invalidStatus() {
      return this.item.state === "";
    },
    invalidRevokeDate() {
      return this.item.revoke_date === "";
    },
    invalidLastUpdate() {
      return this.item.last_update === "";
    },
    invalidDescription() {
      return this.item.description === "";
    },
    invalidMethod() {
      return this.item.method === "";
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 1rem;
}

input {
  margin-bottom: 1rem;
}

[class*="-message"] {
  font-weight: bold;
}

.error-message {
  color: #d33c40;
}
.success-message {
  color: #32a95d;
}
button{
right: 50;
}
</style>