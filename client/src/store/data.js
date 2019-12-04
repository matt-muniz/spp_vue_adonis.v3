import axios from "axios";
import moment from "moment";

export default {
  namespaced: true,
  state: {
    customerData: [],
    eventTimes: {
      em: "10 - 12",
      ea: "1 - 3",
      en: "4 - 6"
    },
    availableTimes: []
  },
  actions: {
    fetchData: ({ commit }) => {
      return axios
        .get("/customer")
        .then(({ data }) => {
          const { customers } = data;
          commit("loadData", customers);
        })
        .catch(error => console.log(error, "error"));
    }
  },
  mutations: {
    loadData: (state, projects) => {
      state.customerData = projects;
    }
  },
  getters: {
    formatDate: state => {
      return state.customerData.map(({ date }) =>
        date ? moment(date).format("dddd, MMMM Do YYYY") : ""
      );
    },
    mapEventTimes: state => {
      return state.customerData.map(({ time }) => {
        if (time == "en") {
          return state.eventTimes.em;
        } else {
          return state.eventTimes.en;
        }
      });
    }
  }
};
