<template>
  <v-card
    class="collection-list-item">
    <nuxt-link
      :to="to">
      <v-card-text>
        {{ title }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.prevent>details</v-btn>
      </v-card-actions>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  name: 'collectible-list-item',

  props: ['title', 'img', 'layout', 'to']
}
</script>
