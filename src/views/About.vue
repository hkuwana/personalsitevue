<template>
  <div class="about">
      <h1>Website colors</h1>
      <p>I like playing around with colors, so this is a theme I just went randomly until I found something that was nice</p>
      <ul class ="colors">
        <li id="jet">Jet</li>
        <li id="royalbluedark">Royal Blue Dark</li>
        <li id="egyptianblue">Egyptian Blue</li>
        <li id="seagreen">Sea Green</li>
        <li id="xanadu">Xanadu</li>
      </ul>
  </div>
</template>


<script>
export default {
  name: 'About',
  components: {
  }
}
</script>

<style lang="sass" scoped>
.about
  text-align: center
  padding: 0
  .colors
    list-style: none
    padding: 1em 4em
    color: white
    margin: 10px auto
    #jet
      background: #3D3A3A
    #royalbluedark
      background: #162766
    #egyptianblue
      background: #143790
    #seagreen
      background: #408E63
    #xanadu
      background: #7B8E7E



</style>