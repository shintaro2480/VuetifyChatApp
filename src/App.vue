<template>
<SidebarComponent/>
  
</template>


<script setup>

import SidebarComponent from '@/components/layouts/SidebarComponent'



  // import { ref } from 'vue'
  // import '@mdi/font/css/materialdesignicons.css'

  // const links = [
  //   ['mdi-inbox-arrow-down', 'Inbox', '/'],
  //   ['mdi-send', 'Send', '/about'],
  //   ['mdi-delete', 'Trash', '/about'],
  //   ['mdi-alert-octagon', 'Spam', '/about'],
  // ]

  // const drawer = ref(null)


</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav.v-navigation-drawer.v-navigation-drawer--left.v-navigation-drawer--active.v-theme--light {
  background-color: #96e7e0;
    
}

.bg-grey-lighten-4 {
    background-color: #f5f5f500 !important;
}

nav {
    padding: 0px;
}
</style>
