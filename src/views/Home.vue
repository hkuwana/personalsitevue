<template>
    <div class="home">
        <div class="progress-bar">
        <p>from https://wildebee.st/</p>
        </div>

        <div class="top-section"></div>
        <div class="scroll-to-section"></div>

        <div class="portfoliogrid">
            <div id="title my-works">
                <div class="title">
                    <h2>Kezari</h2>
                </div>
                <div class="description">
                <p>my edescrtiption</p>
                </div>
                
            </div>
            <div>
            <p>Hiro</p>
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
*
  align-items: center
  text-align: center

.progress-bar
  // position: fixed
  // top: 35vh

.portfoliogrid
  display: grid
  grid-template-rows: repeat(4, 100px)
  grid-template-columns: repeat(2, 1fr)


</style>
