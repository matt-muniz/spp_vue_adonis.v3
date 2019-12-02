import axios from "axios";

export default {
  namespaced: true,
  state: {
    customerData: []
  },
  actions: {
    loadData({ commit }) {
      return axios
        .get("/customer")
        .then(({ data }) => {
          const { customers } = data;
          commit("getData", customers);
        })
        .catch(error => console.log(error, "error"));
    }
  },
  mutations: {
    getData(state, projects) {
      state.customerData = projects;
    }
  }
};
