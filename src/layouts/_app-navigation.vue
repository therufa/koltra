<template>
  <div class="app-header">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark app clipped-left flat class="app-toolbar">
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link to="/" class="app-title">{{ title }}</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          nuxt
          flat
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'app-header',

  data () {
    return {
      items: [
        { icon: '', title: 'Home', to: '/' },
        { icon: '', title: 'Collections', to: { name: 'collections' } }
      ],
      title: 'Koltra',
      drawer: false
    }
  }
}
</script>
