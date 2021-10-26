<template>
  <div class="sidebar">
    <div class="title">
      Menu
    </div>
    <div class="menu-items">
      <router-link to="/addCurrency" class="xyz">
        <div class="link-container">
          Add Currency
        </div>
      </router-link>
      <router-link to="/currencyTable">
        <div class="link-container">
          Currency Table
        </div>
      </router-link>
      <router-link to="/currencyConvert">
        <div class="link-container">
          Currency Convert
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
name: "Sidebar"
}

</script>

<style scoped>
.title{
  font-size: 36px;
  margin: 90px 0px;
  text-align: center;
}
.menu-items{
  display: flex;
  flex-direction: column;
  margin: 30px;
  row-gap: 50px;
}
.menu-items a{
  text-decoration: none;
}
.link-container{
  background-color: white;
  margin: 0px;
  font-size: 20px;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid black;
}

</style>
