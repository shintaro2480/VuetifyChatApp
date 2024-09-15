<template>
    <div class="home">ユーザー一覧
    </div>

    <v-app id="inspire">


        <v-main>
        <v-container>
            <v-row>
            <v-col
                v-for="n in 24"
                :key="n"
                cols="2"
            >
            <router-link :to="{path: '/chat', query: {user_id: n}}">
                <v-avatar color="surface-variant" size="100"></v-avatar>
            </router-link>

            </v-col>
            </v-row>
        </v-container>
        </v-main>
    </v-app>

  </template>
  
  <script>
  // @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'HomeView',
    components: {
    //   HelloWorld
    }
  }
  </script>

  <style scoped>
  .bg-surface-variant {
    --v-theme-overlay-multiplier: var(--v-theme-surface-variant-overlay-multiplier);
    background-color: rgb(184 215 213) !important;
    color: rgb(var(--v-theme-on-surface-variant)) !important;
}
  </style>
  