<template>
  <div>
    <div data-v-69b584c2 class="card">
      <div data-v-69b584c2 class="card-header">
        <div data-v-69b584c2>
          <h2>API Reference</h2>
        </div>
      </div>
      <div class="card-body">
        <h2>API Reference</h2>
        <b-table hover :fields="fieldsHeader" :items="itemsData"></b-table>
       
      
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "newtest02",
  data() {
    return {
      fieldsHeader: [
        {
          key: "id",
          sortable: false,
          class: "colCenter",
          label:"ID"
        },
        {
          key: "method",
          sortable: false
        },
        {
          key: "api_name",
          sortable: false,
          label:"API Name"
        },
        {
          key: "description",
          sortable: false
        },
        {
          key: "last_update",
          sortable: false,
          class: "colCenter"
        },
        {
          key: "revoke_date",
          sortable: false,
          class: "colCenter"
        },
        {
          key: "status",
          sortable: false,
          class: "colCenter"
        }
      ],
      itemsData: [
        {
          isActive: true,
          id: "1",
          method: "Post",
          api_name: "Register",
          description: "-",
          last_update: "12/10/2562",
          revoke_date: "-",
          status: "Ready"
        },
        {
          isActive: true,
          id: "2",
          method: "Get",
          api_name: "Check Phone",
          description: "Shall check mobile",
          last_update: "12/10/2562",
          revoke_date: "20/10/2562",
          status: "Ready Wait Revoke",
          _rowVariant: "danger"
        },
        {
          isActive: true,
          id: "3",
          method: "Get",
          api_name: "Check Username",
          description: "Shall check username",
          last_update: "-",
          revoke_date: "-",
          status: "Developer"
        },
        {
          isActive: true,
          id: "4",
          method: "Get",
          api_name: "Check Email",
          description: "Shall check email",
          last_update: "12/10/2562",
          revoke_date: "12/10/2562",
          status: "Revoke",
          _rowVariant: "secondary"
        }
      ]
    };
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
}

.text-red {
  color: red !important;
}

.colCenter {
  text-align: center;
}

/* .table-danger{
    border-color:none !important;
background-color: white;
} */

.table-danger td {
  border-color: none !important;
  background-color: white;
  border-color: black;
  color: red;
}
.table-secondary td {
  border-color: none !important;
  background-color: white;
  border-color: black;
  color: gray;
  text-decoration: line-through;
}
</style>


