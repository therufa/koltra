<template>
  <v-app>
    <app-navigation />

    <header class="app-front-header">
      <v-content class="hidden-xs-only">
        <v-container>
          <div class="jumbo-wrapper">
            <v-card class="jumbo">
              <v-jumbotron color="white">
                Koltra. A hely ahol elcserelheted mindenedet
              </v-jumbotron>
            </v-card>
          </div>
        </v-container>
      </v-content>
    </header>

    <v-content class="home-content">
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

