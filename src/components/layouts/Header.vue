<template>
    <section class="header">
        <div class="header-left">
            <router-link class="head_logo" to="/">
                <h1>Hiro Kuwana</h1>
            </router-link>
        </div>
        <nav class="header-right">
            <ul class="main-nav">
                <router-link class="head_nav" to="/about">About</router-link>|
                <router-link class="head_nav" to="/blog">My Thoughts</router-link>|
                <router-link class="head_nav" to="/contact">Contact</router-link>|
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
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: space-around
    max-width: 100%
    padding: 20px
    margin: 0 auto
    color: white!important
    .header-left, .header-right
        margin: 1em 0 .5em
        display: inline
        
        


@media (min-width: 960px)
    .container
        justify-content: space-between
.head_nav:hover
    -webkit-transition-delay: .1s
    transition-delay: .1s
    color: #143790
</style>