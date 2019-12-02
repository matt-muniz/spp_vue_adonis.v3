<template>
  <div class="hello">
    <div v-for="item in customerData" :key="item.id">
      <p>{{ item.first_name }} {{ item.last_name }}</p>
      <p>{{ item.date }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HelloWorld",
  mounted() {
    this.loadData();
  },
  computed: {
    ...mapState("data", ["customerData"])
  },
  methods: {
    ...mapActions("data", ["loadData"])
  }
};
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
