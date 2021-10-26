import {createStore} from 'vuex'

export default createStore({
  state: {
    exchangeRates: [
      {
        currency: "USD",
        exchangeRate: 3.45
      },
      {
        currency: "EUR",
        exchangeRate: 4.21
      },
      {
        currency: "GBP",
        exchangeRate: 5.21
      },
    ],
  },
  mutations: {
    setExchangeRate (state, payload) {
      const foundExchangeRateIndex = state.exchangeRates.findIndex(
        (exchangeRate) => exchangeRate.currency === payload.currency
      );
      state.exchangeRates[foundExchangeRateIndex] = {
        currency: payload.currency,
        exchangeRate: payload.exchangeRate
      };
    },
  }
});