<template>
  <div>
    collections
    <br>
    search
    select
    <div></div>
    <nuxt-link
      :to="{ name: 'collections-details', params: { details: 12 } }"
    >hello</nuxt-link>
    <div></div>
    <nuxt-link :to="{ name: 'collections-details', params: { details: 'add-ide-a-penzed' } }">add-ide-a-penzed</nuxt-link>
    <div />

    <list-item
      v-for="(item) in collections"
      :key="item.id"
      :title="item.title"
      :to="{ name: 'collections-details', params: { details: item.id }}">
    </list-item>
  </div>
</template>

<script>
import ListItem from '~/components/collections/list-item'

export default {
  components: {
    ListItem
  },

  asyncData () {
    return {
      collections: [
        { id: 'ca2e362a-828e-4114-a721-f87722b38dcc', title: 'Oceania Visszavar' },
        { id: 'c0c37946-50a1-49ee-99ec-3448f9c0d793', title: 'Garfield Vicces' },
        { id: 'f1dda7b3-497a-4792-ae24-2e1646a5de60', title: 'Saint Jeorje' },
        { id: '7f733358-29c4-4ceb-88e7-bf26ae931108', title: 'Kovasznamegyei csodak' }
      ]
    }
  }
}
</script>

