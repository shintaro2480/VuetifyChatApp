<template>
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