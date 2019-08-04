<template>
  <div>
    <h1>Top</h1>
    <router-link to="/silhouette" class="button">START</router-link>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
  color: #42b983;
}
</style>
