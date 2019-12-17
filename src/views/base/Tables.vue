<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="6">
        <c-table :table-data="items" :fields="fields" caption="<i class='fa fa-align-justify'></i> Simple Table"></c-table>
      </b-col>

      <b-col lg="6">
        <c-table :table-data="items" striped caption="<i class='fa fa-align-justify'></i> Striped Table"></c-table>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="6">
        <c-table :table-data="items" small caption="<i class='fa fa-align-justify'></i> Condensed Table"></c-table>
      </b-col>

      <b-col lg="6">
        <c-table :table-data="items" fixed bordered caption="<i class='fa fa-align-justify'></i> Bordered Table"></c-table>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12">
        <c-table :table-data="itemsArray" :per-page=10 hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <c-table dark :table-data="itemsArray" :per-page=10 hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> Dark Table"></c-table>
      </b-col>
    </b-row>
  </div>

</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'

const someData = () => shuffleArray([
  {username: 'Samppa Noris', registered: '2012/01/01', role: 'Member', status: 'Active', _rowVariant: 'success'},
  {username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned', _rowVariant: 'danger'},
  {username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _rowVariant: 'info'},
  {username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
])

export default {
  name: 'tables',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'username', label: 'User', sortable: true},
        {key: 'registered'},
        {key: 'role'},
        {key: 'status', sortable: true}
      ],
    }
  }
}
</script>
