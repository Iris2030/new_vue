<template>
    <div class="container">
<slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'MainContainer'
    }
</script>

<style lang="scss" scoped>
.container{
    max-width: 1000px;
    margin: 0 auto;
}
</style>