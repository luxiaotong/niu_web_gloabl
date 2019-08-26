<template>
  <div class="links">
    <button class="button--grey" @click="change('cn')"> 中国 </button>
    <button class="button--grey" @click="change('en')"> 美国 </button>
    <button class="button--grey" @click="change('nl')"> 荷兰 </button>
    <button class="button--grey" @click="change('fr')"> 法国 </button>
    <button class="button--grey" @click="change('de')"> 德国 </button>
    <button class="button--grey" @click="change('jp')"> 日本 </button>
  </div>
</template>

<style>
.links {
  padding-top: 15px;
}
</style>

<script>
export default {
    methods: {
        change(country) {
            this.$cookies.set("country", country, { path: "/", maxAge: 60 * 60 * 24 * 7 });
            if ( country == 'cn' ) {
                location.href = process.env.baseUrlLocal
            } else {
                location.href = process.env.baseUrlGlobal + '/' + country
            }
        }
    }
}
</script>
