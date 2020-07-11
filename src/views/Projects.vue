<template>
    <div>
        <h1>{{title}}</h1>
        <h3> {{msg}}</h3>
        <input type="text">
        <div class="test">
            <product-detail :product="product" @save="handlesave" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Projects',
  components: {
  },
  data () {
      return { msg : 'I mess around with this page, so use this to learn how to use vue more'} 
  },
  props: {
      age : {
          type: Number,
          validator: function(value){
              return value >= 18;
          }
      }
  }
}
</script>

<style lang="stylus" scoped>

</style>