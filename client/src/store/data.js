import axios from "axios";
import moment from "moment";

export default {
  namespaced: true,
  state: {
    customerData: [],
    eventTimes: [
      { value: "em", time: "10 - 12" },
      { value: "ea", time: "1 - 3" },
      { value: "en", time: "4 - 6" }
    ],
    availableTimes: [],
    events: []
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
    mapEventTimes: () => {},
    events: state => {
      return state.customerData.map(({ event, date }) => {
        const newDate = date ? moment(date).format("YYYY-MM-DD") : "";

        const s = {
          name: event,
          start: newDate
        };
        return (state.events = s);
      });
    }
  }
};
