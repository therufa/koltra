<template>
  <div>
    these are the details {{ details }}
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
