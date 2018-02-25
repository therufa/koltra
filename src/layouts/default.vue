<template>
  <v-app>
    <app-navigation />

    <header class="app-front-header">
      <v-content>
        <v-container>
        </v-container>
      </v-content>
    </header>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
import AppNavigation from './_app-navigation'
import AppFooter from './_app-footer'

export default {
  components: {
    AppNavigation,
    AppFooter
  }
}
</script>
