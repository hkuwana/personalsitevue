<template>
    <section class="Main">
        <router-view id="mainpage" />
    </section>
</template>

<script>
export default {
    name: "Main"
};
</script>

<style lang="sass" scoped>
#mainpage
    min-height: 100vh

</style>