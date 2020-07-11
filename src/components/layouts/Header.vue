<template>
    <section class="header">
        <div class="header-left">
            <router-link class="head-logo" to="/">
                <img id="head-icon" src="../../assets/website_logo.png" alt="website-logo" />
            </router-link>
        </div>
        <nav class="header-right">
            <ul class="main-nav">
                <router-link class="head-nav" :to="{ name: 'About', params: {id: 'visitor'} }">About</router-link>|
                <router-link class="head-nav" :to="{ name: 'Blog'}">Thoughts</router-link>|
                <router-link class="head-nav" :to="{ name: 'Projects'}">Projects</router-link>|
                <router-link class="head-nav" :to="{ name: 'Contact'}">Contact</router-link>|
            </ul>
        </nav>
    </section>
</template>

<script>
export default {
    name: "Header"
};
</script>

<style lang="sass" scoped>
.header
    // position: -webkit-sticky
    // position: sticky
    top: 0
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: space-around
    max-width: 100%
    padding: var(--navHeightDesktop)
    margin: 0 auto
    #head-icon
        height: 50px
    .header-left, .header-right
        margin: 1em 0 .5em
        display: inline
    .head-nav .head-logo
        color: red
    router-link
        color: var(--colorJet)

.head-nav:hover
    -webkit-transition-delay: .1s
    transition-delay: .1s
    color: var(--colorRoyalDarkBlue)
.head-logo:hover
    -webkit-transition-delay: .1s
    transition-delay: .1s
    color: var(--colorRoyalDarkBlue)
</style>