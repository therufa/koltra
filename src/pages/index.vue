<template>
  <div>
    <ul>
      <li v-for="fact in facts" :key="fact.text">
        {{ fact.text }}
      </li>
    </ul>
    <button @click="addItem">add +</button>
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'

export default {
  async asyncData() {
    const response = await fetch('https://nuxt-ssr.firebaseio.com/facts.json')
    const facts = await response.json()

    return { facts }
  },

  methods: {
    addItem() {
      this.facts = [ ...this.facts, { text: `hello ${Math.random()}` } ]
    }
  },
}
</script>

<style>
</style>
