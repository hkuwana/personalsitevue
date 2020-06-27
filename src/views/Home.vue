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
            <div>
                <h1>About me</h1>
            </div>
            <div>
                <p>I'm a rising senior at Brown University studying Environmental Engineering. Right now, I'm doing product development, design, and deployment</p>
            </div>
            <div></div>
        </div>
        <div class="scroll-to-section kezari">
            <div></div>
            <div>
                <h1>Kezari</h1>
            </div>
            <div>
                <p>We focused on enlargening female pockets for travelers, and sold our product from my dorm room to our customers.</p>
                <router-link class="kezari-nav" to="/about">Read More Here</router-link>|
            </div>
            <div></div>
        </div>
        <div class="scroll-to-section works">
            <div></div>
            <div>
                <h1>Works</h1>
            </div>
            <div>
                <p>I'm currently a rising senior at Brown University studying Environmental Engineering. During COVID, I've spent my time learning front-end programming and learning as much as possible about product development, design, and deployment</p>
            </div>
            <div></div>
        </div>
        <div class="scroll-to-section skills">
            <div></div>
            <div class="skills-head">
                <h1>Skills</h1>
            </div>
            <div class="skill-list">
                <div>
                    <p>Languages</p>
                </div>
                <div>
                    <ul id="language-list">
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
                    <p>Hiking, Drumming, Running, Meditating, Writing, Reading, Go (Weiqi)</p>
                </div>
            </div>
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
.home
	align-items: center
	grid-template-columns: 5vw 1fr 1fr 5vw
.top-section
	height: 80vh
	display: grid
	top: 0
	background: black
.scroll-to-section
	height: 101vh
	display: grid

.about-me
	grid-template-columns: 5vw 1fr 1fr 5vw
	position: relative
	background: var(--colorRoyalDarkBlue)
	color: var(--colorWhite)
	padding-top: 20vw
.kezari
	grid-template-columns: 5vw 1fr 1fr 5vw
	position: relative
	background: var(--colorEgyptianBlue)
	color: var(--colorWhite)
	padding-top: 20vw
.works
	grid-template-columns: 5vw 1fr 1fr 5vw
	position: relative
	background: var(--colorSeaGreen)
	color: var(--colorWhite)
	padding-top: 20vw
.skills
	grid-template-columns: 5vw 1fr 2fr 5vw
	position: relative
	background: var(--colorXanadu)
	color: var(--colorWhite)
	.skills-head
		padding-top: 20vw
	.skill-list
		display: grid
		grid-template-columns: 1fr 1fr
		grid-template-rows: repeat(3, 1fr)
		align-items: center
		#language-list li
			color: inherit
			font-family: var(--fontSimplifica)
			letter-spacing: .09em
			font-size: 2em
			line-height: 2em
			list-style: none
.kezari-nav
	color: var(--colorCream)
@media only screen and (max-width: var(--breakpointDesktopSmall))
.scroll-to-section .top-section
	flex-wrap: wrap
	grid-auto-flow: row
.top-section
	font-size: 4.2vw
	flex: 1
	padding: 0
	margin-top: .8vw
</style>
