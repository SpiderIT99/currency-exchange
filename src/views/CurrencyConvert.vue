<template>
  <div class="currencyConvert">
    <div>
      
      <select v-model="activeCurrency.currency">
        <option v-for="(currency, index) in $store.state.exchangeRates" :key="index">
          {{ currency.currency }}
        </option>
      </select>
      <input type="number" v-model="activeCurrency.value" required/>
      <button @click="convertToPLN">Convert to PLN</button>
      <div v-if="convertedValue.newValue">
        <p>
          {{ `${convertedValue.oldValue}${convertedValue.oldCurrency} is ${convertedValue.newValue}PLN` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrencyConvert',
  data() {
    return {
      activeCurrency: {
        value: 1,
        currency: "USD"
      },
      convertedValue: {
        oldValue: null,
        oldCurrency: null,
        newValue: null
      }
    }
  },
  methods: {
    convertToPLN() {
      const exchangeRate = this.$store.state.exchangeRates.find(
          (currency) => currency.currency === this.activeCurrency.currency
      ).exchangeRate;
      this.convertedValue.newValue = (this.activeCurrency.value * exchangeRate).toFixed(2);
      this.convertedValue.oldValue = (this.activeCurrency.value).toFixed(2);
      this.convertedValue.oldCurrency = this.activeCurrency.currency;
    },
  }
}
</script>

<style scoped>
.currencyConvert {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 30px;
}
select, input, button{
  font-size: 25px;
}
</style>