<template>
    <div class="home">
        <div class="top-section">
            <div class="spacing"></div>
            <div class="self-photo">
                <img src="../assets/quora-photo.png" alt="self-photo" class="quora-photo" />
            </div>
        </div>
        <div class="scroll-to-section about-me">
            <div class="spacing"></div>
            <div class="header">
                <h1>About me</h1>
            </div>
            <div class="information">
                <p>I'm a rising senior at Brown University studying Environmental Engineering. Currently working on developing, designing, and deploying products</p>
            </div>
            <div class="spacing"></div>
        </div>
        <div class="scroll-to-section kezari">
            <div class="spacing"></div>
            <div class="header">
                <h1>Kezari</h1>
            </div>
            <div class="information">
                <p>We focused on creating sustainable and aesthetic pants for female travelers</p>
                <router-link class="kezari-nav" to="/about">Read More Here</router-link>|
            </div>
            <div class="spacing"></div>
        </div>
        <div class="scroll-to-section skills">
            <div class="spacing"></div>
            <div class="header">
                <h1>Skills</h1>
            </div>
            <div class="skill-list">
                <div class="skill-head">
                    <p>Languages</p>
                </div>
                <div>
                    <ul class="list">
                        <li>Fluent: Japanese, English</li>
                        <li>Proficient: Mandarin</li>
                        <li>Basic: Spanish</li>
                    </ul>
                </div>
                <div class="skill-head">
                    <p>Technical</p>
                </div>
                <div>
                    <p>Javascript (Vue), CSS, HTML, Python, MATLAB, MYSQL</p>
                </div>
                <div class="skill-head">
                    <p>Interests</p>
                </div>
                <div>
                    <p>Hiking, Philosophy, Running, Meditating, Go (Weiqi)</p>
                </div>
            </div>
        </div>
        <div class="scroll-to-section works">
            <div class="spacing"></div>
            <div class="header">
                <h1 class>My Writings</h1>
            </div>
            <div>
                <ul class="list">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.quora.com/profile/Hiro-Kuwana"
                    >
                        <p>Quora</p>
                    </a>
                    <router-link class="blog" to="/blog">Blog</router-link>|
                </ul>
            </div>
            <div class="spacing"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {}
};
</script>

<style lang="sass" scoped>
p
    font-size: 2em
    line-height: 2em
    font-weight: 300
    margin: 0 3rem 3rem 0
.home
    align-items: center

.self-photo
    margin: 0 0 0 0

.top-section
    max-height: 660px
    top: 0
    background: var(--colorCream)
    display: none

.scroll-to-section
    min-height: 101vh
    position: relative
    color: var(--colorWhite)
    overflow: auto
    display: grid
.header
    font-size: 2em
    text-transform: uppercase
    font-family: var(--fontNimbusSanLReg)
    letter-spacing: .07em
    padding-top: 10vh
    padding-bottom: 0

.spacing
    display: none

.about-me
    background: var(--colorRoyalDarkBlue)

.kezari
    background: var(--colorEgyptianBlue)
    .kezari-nav
        color: var(--colorCream)

.skills
    background: var(--colorXanadu)
    .skill-head
        text-decoration: underline
.works
    background: var(--colorSeaGreen)

.list li, a
    color: inherit
    font-family: var(--fontSimplifica)
    letter-spacing: .09rem
    font-size: 2rem
    line-height: 2rem
    list-style: none
.blog
    font-size: 4rem

@media only screen and (min-width: 800px)
    .top-section
        display: grid
    .about-me, .kezari, .works, .home
        grid-template-columns: 5vw 1fr 1fr 5vw
    .information
        padding-top: 25vh
    .skills
        grid-template-columns: 5vw 1fr 2fr 5vw
        background: var(--colorXanadu)
        .skill-list
            display: grid
            grid-template-columns: 1fr 1fr
            grid-template-rows: repeat(3, 1fr)
            align-items: center
    .spacing
        display: inline-grid
    .header, .list
        padding-top: 25vh
    
        
</style>
