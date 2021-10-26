<template>
  <div class="currencyTable">
    <table>
      <tr>
        <td>
          Currency
        </td>
        <td>
          Exchange rate
        </td>
      </tr>
      <tr v-for="(result, index) in $store.state.exchangeRates" :key="index">
        <td>
          {{result.currency}}
        </td>
        <td>
          {{result.exchangeRate.toFixed(2)}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
 name: "CurrencyTable" 
}
</script>


<style scoped>
.currencyTable{
  display: flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
  font-size:30px;
}
</style>