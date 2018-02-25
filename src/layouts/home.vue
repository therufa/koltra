<template>
  <v-app>
    <app-navigation />

    <header class="k-front-header hidden-xs-only">
      <v-content>
        <v-container>
          <v-card class="jumbo">
            <v-jumbotron color="secondary" dark>
              this is something
            </v-jumbotron>
          </v-card>
        </v-container>
      </v-content>
    </header>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from './_app-navigation'

export default {
  components: {
    AppNavigation
  }
}
</script>

