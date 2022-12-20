
<template>
    <div class="header">
<Container>
    <Logo class="logo"/>
</Container>

    </div>
</template>

<script>
import Container from './shared/Container.vue';
import Logo from './Logo.vue';

    export default {
        name: 'AppHeader',
        components:{
            Container,
            Logo
        }
    }

</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 100;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    margin-left: -900px;
  }
}
</style>