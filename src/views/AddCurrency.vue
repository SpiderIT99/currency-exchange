<template>
  <div class="addCurrency">
    <select v-model="activeCurrency.currency">
      <option v-for="(currency, index) in $store.state.exchangeRates" :key="index">
        {{currency.currency}}
      </option>
    </select>
    <input type="number" v-model="activeCurrency.exchangeRate">
    <button @click="$store.commit('setExchangeRate', activeCurrency)">Save a currency</button>
  </div>
</template>

<script>
export default {
  name: 'AddCurrency',
  data() {
    return {
      activeCurrency: {
        currency: "USD",
        exchangeRate: 1
      },
    }
  },
}
</script>

<style scoped>
.addCurrency{
  display: flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
  font-size:30px;
}
select, input, button{
  font-size: 25px;
}

</style>