<template>
  <div class="dashboard">
    <Sidebar/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Dashboard',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: rgb(34, 200, 34);
  height: 100vh;
}
.content {
  background-color: white;
  border-radius: 5px;
}

</style>
