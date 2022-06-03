<template>
  <div class="container-fluid">
    <table class="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="moeda in moedas" :key="moeda.id">
          <td>{{ moeda.id }}</td>
          <td>{{ moeda.nome }}</td>
          <td>{{ moeda.preco }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  mounted() {
    this.$store.dispatch('carregarMoedas')
  },
  computed: mapState([
    'moedas'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
