<template>
  <div class="hello">
    <div v-for="item in formatDate" :key="item.id">
      <p>{{ item }}</p>
    </div>
    <div v-for="item in mapEventTimes" :key="item.id">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  mounted() {
    this.fetchData();
    this.test();
  },
  computed: {
    ...mapState("data", ["customerData"]),
    ...mapGetters("data", ["formatDate", "mapEventTimes"])
  },
  methods: {
    ...mapActions("data", ["fetchData"]),
    test() {
      return this.mapEventTimes;
    }
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
