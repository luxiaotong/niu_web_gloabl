<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        EN
      </h1>
      <h2 class="subtitle">
        Country: {{$store.state.region}}
      </h2>
      <h2 class="subtitle">
        IP: {{$store.state.ip}}
      </h2>
      <country />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import country from '~/components/country.vue'

export default {
  components: {
    Logo,
    country,
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
