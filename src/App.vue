<template>
    <div id="app">
        <Header />
        <ProgressBar />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Footer from "./components/layouts/Footer.vue";
import Header from "./components/layouts/Header.vue";
import ProgressBar from "./components/layouts/ProgressBar.vue";
import Main from "./components/Main.vue";

export default {
    name: "app",
    components: {
        Footer,
        Header,
        ProgressBar,
        Main
    }
};
</script>

<style lang="sass">
@font-face
  font-family: 'Hanken'
  src: url("./assets/font/Hanken-Light.ttf") format("truetype")
@font-face
  font-family: 'Simplifica'
  src: url("./assets/font/SIMPLIFICA-Typeface.ttf") format("truetype")
@font-face
  font-family: 'NimbusSanL-Reg'
  src: url("./assets/font/NimbusSanL-Reg.otf") format("opentype")

:root
  --breakpointPhoneSmall: 320px
  --breakpointPhoneMedium: 375px
  --breakpointPhoneLarge: 512px
  --breakpointPhoneXLarge: 640px
  --breakpointTablet: 768px
  --breakpointDesktopSmall: 1024px
  --breakpointDesktopMedium: 1280px
  --breakpointDesktopLarge: 1440px
  --breakpointDesktopXLarge: 1920px
  --mobileMargin: 14.5vw
  --desktopMarginXS: 3.25vw
  --desktopMarginS: 6.25vw
  --desktopMarginL: 12.5vw
  --colorWhite: #fff
  --colorOffWhite: #f4f1f2
  --colorCream: #ede9e5
  --colorTrueBlack: #000
  --colorJet: #3D3A3A
  --colorRoyalDarkBlue: #162766
  --colorEgyptianBlue: #143790
  --colorSeaGreen: #408E63
  --colorXanadu: #7B8E7E
  --fontHanken: "Hanken"
  --fontNimbusSanLReg: "NimbusSanL-Reg"
  --fontMonteserrat: "Simplifica"
  --fontMonteserrat: "Montserrat", sans-serif
  --desktopInputMargin: 3vw
  --navHeightMobile: 8.14vw
  --navTopMobile: 6.67vw
  --navHeightDesktop: 3.18vw
  --navTopDesktop: 2.6vw

*
  box-sizing: border-box
  // align-items: center
  text-align: center
  font-family: var(--fontNimbusSanLReg)
  letter-spacing: .09rem

p
  font-family: var(--fontMonteserrat)
  letter-spacing: .09em

html, body
  margin: 0
  padding: 0

body
  -webkit-font-smoothing: antialiased
</style>
