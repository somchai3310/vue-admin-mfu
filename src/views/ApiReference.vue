<template>
  <div>
    <div  class="card">
      <div  class="card-header">
        <div>
          <h2>API Reference</h2>
        </div>
      </div>
      <div class="card-body">
        <h2>API Reference</h2>
        

        <div >
          <api-ref-form @add:item="addItem" />
          <api-ref-table :items="items" @delete:item="deleteItem" @edit:item="editItem" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ApiRefForm from "@/components/ApiRefForm";
import ApiRefTable from "@/components/ApiRefTable";
export default {
  name: "ApiReference",
  components: {
    ApiRefForm,
    ApiRefTable
  },
  data() {
    return {
      items: [
        {
          id: 1,
          method: "Post",
          name: "Register",
          description: "",
          last_update: "12/10/2562",
          revoke_date: "-",
          status: "Ready"
        },
        {
          id: 2,
          method: "Get",
          name: "Check Phone",
          description: "Shall check moblile",
          last_update: "12/10/2562",
          revoke_date: "12/10/2562",
          status: "Ready Wait Revoke"
        },
        {
          id: 3,
          method: "Get",
          name: "Check Username",
          description: "Shall check username",
          last_update: "-",
          revoke_date: "-",
          status: "Developer"
        },
        {
          id: 4,
          method: "Get",
          name: "Check Email",
          description: "Shall check email",
          last_update: "12/10/2562",
          revoke_date: "12/10/2562",
          status: "Revoke"
        }
      ]
    };
  },
  methods: {
    addItem(item) {
      const lastId =
        this.items.length > 0 ? this.items[this.items.length - 1].id : 0;
      const id = lastId + 1;
      const newItem = { ...item, id };
      this.items = [...this.items, newItem];
      console.log(this.items);
    },
    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    editItem(id, updatedItem) {
      this.items = this.items.map(item =>
        item.id === id ? updatedItem : item
      );
    }
  }
};
</script>

<style>
th {
  background-color: rgb(114, 159, 206);
  color: white;
  border-bottom: 1pt solid black !important;
  border-top: 1pt solid black !important;
  text-align: center;
}
table,
th,
td {
  border: 1px solid black;
  vertical-align: none !important;
}

.text-red {
  color: red;
}

.colCenter {
  text-align: center;
}

.revoke {
  color: gray;
  text-decoration: line-through;
}

</style>