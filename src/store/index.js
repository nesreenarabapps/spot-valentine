import { createStore } from 'vuex'

import EventService from '@/services/EventService';

export default createStore({
  state: {
    loading: false,
    errorMessage: null,
    alertMessage: null,
    info: null,
    senders: null,
    receivers: null,
  },

  getters: {
  },
  mutations: {
    SET_INFO: (state, payload) => state.info = payload,
    SET_SENDERS: (state, payload) => state.senders = payload,
    SET_RECEIVERS: (state, payload) => state.receivers = payload,
    SET_ERROR: (state, payload) => state.errorMessage = payload,

    SET_ALERT_MESSAGE: (state, payload) => state.alertMessage = payload,
    REST_ALERT_MESSAGE: state => state.alertMessage = null,
  },
  actions: {
    errorhandling({ commit, dispatch, state }, { name, error }) {
      if (error.response) {
        console.log("error response");
        // console.log(name + "Error ", error.response.data);
        if (error.response.status == 404) {
          commit("SET_ALERT_MESSAGE", "NO.S.k");
          return;
        }
        if (error.response.status == 500) {
          commit("SET_ALERT_MESSAGE", "S.E.5");
          return;
        }
        let alertMessage = error.response.data.error
          ? error.response.data.error.message
          : error.response.data.message;

        commit("SET_ALERT_MESSAGE", alertMessage);
      } else if (error.response.request) {
        commit("SET_ALERT_MESSAGE", "Network Error");
      } else {
        commit("SET_ALERT_MESSAGE", "Connection Error");
      }
    },

    async getInfoApi({ commit, dispatch }) {
      await EventService.EventGetInfo()
        .then((res) => {
          // console.log(res.data.data)
          commit('SET_INFO', res.data.data)
        })
        .catch(error => {
          if (error.response) {
            console.log("error response");
            // console.log(name + "Error ", error.response.data);
            if (error.response.status == 404) {
              commit("SET_ERROR", "NO.S.k");
              return;
            }
            if (error.response.status == 500) {
              commit("SET_ERROR", "S.E.5");
              return;
            }
            let alertMessage = error.response.data.error
              ? error.response.data.error.message
              : error.response.data.message;
    
            commit("SET_ERROR", alertMessage);
          } else if (error.response.request) {
            commit("SET_ERROR", "Network Error");
          } else {
            commit("SET_ERROR", "Connection Error");
          }
        })
    },
    
    async getInfoSenders({ commit, dispatch }) {
      await EventService.EventGetSenders()
      .then((res) => {
          // console.log(res.data.data)
          commit("SET_SENDERS", res.data.data);
        })
        .catch((error) => {
          dispatch("errorhandling", { name: "senders", error });
        });
    },
  
    async getInfoReceivers({ commit, dispatch }) {
      await EventService.EventGetRecevires()
        .then((res) => {
          // console.log(res.data.data)
          commit('SET_RECEIVERS', res.data.data)
        })
        .catch((error) => {
          dispatch("errorhandling", { name: "senders", error })
        })
    },

  },


  modules: {
  }
})
