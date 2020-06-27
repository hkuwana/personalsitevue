<template>
    <div class="home">
        <div class="top-section">
            <div></div>
            <div>
                <img src="../assets/quora-photo.png" alt="self-photo" class="quora-phot" />
            </div>
        </div>
        <div class="scroll-to-section about-me">
            <div></div>
            <div class="header">
                <h1>About me</h1>
            </div>
            <div class="information">
                <p>I'm a rising senior at Brown University studying Environmental Engineering. Right now, I'm doing product development, design, and deployment</p>
            </div>
            <div></div>
        </div>
        <div class="scroll-to-section kezari">
            <div></div>
            <div class="header">
                <h1>Kezari</h1>
            </div>
            <div class="information">
                <p>We focused on creating sustainable and aesthetic pants for female travelers</p>
                <router-link class="kezari-nav" to="/about">Read More Here</router-link>|
            </div>
            <div></div>
        </div>
        <div class="scroll-to-section skills">
            <div></div>
            <div class="header">
                <h1>Skills</h1>
            </div>
            <div class="skill-list">
                <div>
                    <p>Languages</p>
                </div>
                <div>
                    <ul class="list">
                        <li>Fluent: Japanese, English</li>
                        <li>Proficient: Mandarin</li>
                        <li>Basic: Spanish</li>
                    </ul>
                </div>
                <div>
                    <p>Technical</p>
                </div>
                <div>
                    <p>Javascript (Vue), CSS, HTML, Python, MATLAB, MYSQL</p>
                </div>
                <div>
                    <p>Interests</p>
                </div>
                <div>
                    <p>Hiking, Philosophy, Running, Meditating, Go (Weiqi)</p>
                </div>
            </div>
        </div>
        <div class="scroll-to-section works">
            <div></div>
            <div class="header">
                <h1 class>My Writings</h1>
            </div>
            <div>
                <ul class="list writing-links">
					<a target="_blank" rel="noopener noreferrer" href="https://www.quora.com/profile/Hiro-Kuwana">
					<p>Quora</p>
					</a>
					<router-link class ="blog" to="/blog">Blog-Posts</router-link>|
                </ul>
            </div>
            <div></div>
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
*

.home
	align-items: center
	grid-template-columns: 5vw 1fr 1fr 5vw
.top-section
	height: 80vh
	display: grid
	top: 0
	background: black
.scroll-to-section
	min-height: 101vh
	display: grid
	position: relative
	color: var(--colorWhite)

.header
	padding-top: 30vh
	font-size: 2em
	text-transform: uppercase
	font-family: var(--fontNimbusSanLReg)
	letter-spacing: .07em

.information
	padding-top: 30vh

.about-me
	grid-template-columns: 5vw 1fr 1fr 5vw
	background: var(--colorRoyalDarkBlue)
.kezari
	grid-template-columns: 5vw 1fr 1fr 5vw
	background: var(--colorEgyptianBlue)
	.kezari-nav
		color: var(--colorCream)
.works
	grid-template-columns: 5vw 1fr 1fr 5vw
	background: var(--colorSeaGreen)

.skills
	grid-template-columns: 5vw 1fr 2fr 5vw
	background: var(--colorXanadu)
	.skill-list
		display: grid
		grid-template-columns: 1fr 1fr
		grid-template-rows: repeat(3, 1fr)
		align-items: center
.list li, a
	color: inherit
	font-family: var(--fontSimplifica)
	letter-spacing: .09em
	font-size: 2em
	line-height: 2em
	list-style: none
.blog
	font-size: 3em
.writing-links
	padding-top: 20vh


@media only screen and (max-width: var(--breakpointDesktopSmall))
	.scroll-to-section .top-section
		grid-template-columns: 1fr

</style>
