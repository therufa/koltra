<template>
  <div>
    these are the details {{ details }}
    lista
    <nuxt-link :to="{ name: 'trade-item', params: { item: '12-haromszaz-majom' } }">reszletek</nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      details: this.$route.params.details
    }
  }
}
</script>
