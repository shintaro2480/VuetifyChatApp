<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-sheet
        class="pa-4"
        color="grey-lighten-4"
      >
        <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          :to="to"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
        >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
  import { ref } from 'vue'
  import '@mdi/font/css/materialdesignicons.css'

  const links = [
    ['mdi-inbox-arrow-down', 'Inbox', '/'],
    ['mdi-send', 'Send', '/about'],
    ['mdi-delete', 'Trash', '/about'],
    ['mdi-alert-octagon', 'Spam', '/about'],
  ]

  const drawer = ref(null)
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
    background-color: #89cfcf;
}

.bg-grey-lighten-4 {
    background-color: #f5f5f500 !important;
}
</style>
