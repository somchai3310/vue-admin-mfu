<template>
  <tr id="api-ref-table" class="table-responsive">
    <p v-if="items.length < 1 " class="empty-table">No API</p>

    <b-table hover :fields="fields" :items="items" :tbody-tr-class="rowClass">
      <template v-slot:cell(action)="data">
        <!-- {{ data.item }} -->
        <div v-if="editing === data.item.id">
          <b-button-group>
            <b-button variant="primary" @click="editItem(data.item)">Save</b-button>
            <b-button variant="danger" class="muted-button" @click="cancelItem(item)">Cancel</b-button>
          </b-button-group>
        </div>
        <div v-else>
          <b-button-group>
            <b-button variant="warning" @click="editMode(data.item)">Edit</b-button>
            <b-button variant="danger" @click="$emit('delete:item',data.item.id)">Delete</b-button>
          </b-button-group>
        </div>
      </template>
      <!-- editing -->
      <template v-slot:cell(method)="data">
        <!-- <b-form-input v-if="editing ===data.item.id" v-model="data.item.method" /> -->
        <b-form-select
          v-if="editing ===data.item.id"
          v-model="data.item.method"
          :options="methodOption"
        ></b-form-select>
        <p v-else>{{data.item.method}}</p>
      </template>
      <template v-slot:cell(name)="data">
        <b-form-input v-if="editing ===data.item.id" v-model="data.item.name" />
        <p v-else>{{data.item.name}}</p>
      </template>
      <template v-slot:cell(description)="data">
        <b-form-input v-if="editing ===data.item.id" v-model="data.item.description" />
        <p v-else>{{data.item.description}}</p>
      </template>
      <template v-slot:cell(last_update)="data">
        <b-form-input v-if="editing ===data.item.id" v-model="data.item.last_update" type="date"/>
        <p v-else>{{data.item.last_update}}</p>
      </template>
      <template v-slot:cell(revoke_date)="data">
        <b-form-input v-if="editing ===data.item.id" v-model="data.item.revoke_date"  type="date"/>
        <p v-else>{{data.item.revoke_date}}</p>
      </template>
      <template v-slot:cell(status)="data">
        <b-form-input v-if="editing ===data.item.id" v-model="data.item.status" />
        <b-form-select
          v-if="editing ===data.item.id"
          v-model="data.item.status"
          :options="statusOption"
        ></b-form-select>

        <p v-else>{{data.item.status}}</p>
      </template>
    </b-table>

    <!-- <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Method</th>
          <th>Name API</th>
          <th>Description</th>
          <th>Last Update</th>
          <th>Revoke Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="colCenter">
        <tr v-for="item in items" :key="item.id">
          <td v-if="editing === item.id"></td>
          <td v-else>{{item.id}}</td>

          <td v-if="editing === item.id">
            <input type="text" v-model="item.method" />
          </td>
          <td v-else>{{item.method}}</td>

          <td v-if="editing === item.id">
            <input type="text" v-model="item.name" />
          </td>
          <td v-else>{{item.name}}</td>

          <td v-if="editing === item.id">
            <input type="text" v-model="item.description" />
          </td>
          <td v-else>{{item.description}}</td>

          <td v-if="editing === item.id">
            <input type="text" v-model="item.last_update" />
          </td>
          <td v-else>{{item.last_update}}</td>

          <td v-if="editing === item.id">
            <input type="text" v-model="item.revoke_date" />
          </td>
          <td v-else>{{item.revoke_date}}</td>

          <td v-if="editing === item.id">
            <input type="text" v-model="item.status" />
          </td>
          <td v-else>{{item.status}}</td>

          <td v-if="editing === item.id">
            <button @click="editItem(item)">Save</button>
            <button class="muted-button" @click="cancelItem(item)">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(item)">Edit</button>
            <button @click="$emit('delete:item',item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>-->
  </tr>
</template>

<script>
export default {
  name: "api-ref-table",
  data() {
    return {
      fields: [
        { key: "id", label: "ID", class: "colCenter" },
        "method",
        { key: "name", label: "API Name" },
        "description",
        { key: "last_update", label: "Last Update", class: "colCenter" },
        { key: "revoke_date", label: "Revoke Date", class: "colCenter" },
        { key: "status", label: "Status", class: "colCenter" },
        { key: "action", label: "Action", class: "colCenter" }
      ],
      editing: null,
      methodOption: [
        { value: "Get", text: "Get" },
        { value: "Post", text: "Post" }
      ],
      statusOption: [
        { value: "Ready", text: "Ready" },
        { value: "Ready Wait Revoke", text: "Ready Wait Revoke" },
        { value: "Developer", text: "Developer" },
        { value: "Revoke", text: "Revoke" }
      ]
    };
  },
  methods: {
    editMode(item) {
      this.cacheditem = Object.assign({}, item);
      this.editing = item.id;
    },
    cancelItem(item) {
      Object.assign(item, this.cachedItem);
      this.editing = null;
    },

    editItem(item) {
      if (item.name === "" || item.method === "") return;
      this.$emit("edit:item", item.id, item);
      this.editing = null;
    },

    rowClass(items, type) {
      if (!items) return;
      if (items.status === "Ready Wait Revoke") return "text-red";
      if (items.status === "Revoke") return "revoke";
    }
  },
  props: {
    items: Array
  }
};
</script>

<style scoped>
th {
  background-color: rgb(114, 159, 206);
  color: white;
  /* border-bottom: 1pt solid black !important; */
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