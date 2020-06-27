<template>
    <div class="about">
        <h1>Website colors</h1>
        <p>I like playing around with colors, so this is a theme I just went randomly until I found something that was nice</p>
        <ul class="colors">
            <li id="jet">Jet</li>
            <li id="royalbluedark">Royal Blue Dark</li>
            <li id="egyptianblue">Egyptian Blue</li>
            <li id="seagreen">Sea Green</li>
            <li id="xanadu">Xanadu</li>
            <li id="cream">Cream</li>
        </ul>
        <h2>How I built this site</h2>
        <p>Built the site pretty much from scratch, except with some help using the VueJS framework and looking at other sites for some inspiration</p>
    </div>
</template>


<script>
export default {
    name: "About",
    components: {}
};
</script>

<style lang="sass" scoped>
.about
  text-align: center
  padding: 1em 4em
  .colors
    list-style: none
    color: white
    #jet
      background: var(--colorJet)
    #royalbluedark
      background: var(--colorRoyalDarkBlue)
    #egyptianblue
      background: var(--colorEgyptianBlue)
    #seagreen
      background: var(--colorSeaGreen)
    #xanadu
      background: var(--colorXanadu)
    #cream
      background: var(--colorOffWhite)
      color: black
</style>