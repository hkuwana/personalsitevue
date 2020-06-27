<template>
    <section class="footer">
        <h1 id="catch">Want to chat?</h1>
        <h2 id="mobile-catch">Want to talk?</h2>
        <ul class="imageLinks">
            <div class="logo-list">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hiroyuki-kuwana/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="logos" viewBox="0 0 24 24">
                        <path
                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                        />
                    </svg>
                </a>
            </div>

            <div class="logo-list">
                <a href="mailto:hkuwana97@gmail.com" subject="Saw your personal website...">
                    <svg xmlns="http://www.w3.org/2000/svg" class="logos" viewBox="0 0 24 24">
                        <path
                            d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"
                        />
                    </svg>
                </a>
            </div>
        </ul>
        <p>@2020 Hiroyuiki Kuwana. All rights reserved.</p>
    </section>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style lang="sass" scoped>
.footer
    padding: 6vh
    text-align: center!important
    background-color: var(--colorJet)
    color: var(--colorCream)
    -webkit-font-smoothing: antialiased
    #catch
        font-size: 5vw
        margin-top: 0
    .imageLinks
        list-style: none
        .logo-list
            display: inline-block
            .logos
                height: 3em
                width: 3em
                margin-right: 1em
#mobile-catch
    display: none
@media screen and (max-width: var(--breakpointDesktopSmall))
  .view-container
    width: 100%
    margin-left: 0
  #catch 
    display: none
  #mobile-catch
    display: block
    
.logos
    fill: var(--colorCream)

</style>