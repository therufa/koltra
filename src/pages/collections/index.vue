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
  </div>
</template>
