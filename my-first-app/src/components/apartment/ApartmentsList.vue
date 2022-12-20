<template>
    <Container>
    <div class="apartments-list">
<ApartmentsItem
v-for="{id, descr, rating, price,imgUrl} in items" 
:key = 'id'
:descr = 'descr'
:rating = 'rating'
:price = 'price'
:imgSrc = 'imgUrl'
class="appartment-list__item"
/>
    </div>
</Container>
</template>

<script>
import Container from '../shared/Container.vue';
import ApartmentsItem from './ApartmentsItem.vue';

    export default {
        name:'ApartmentsList',
        components:{
            ApartmentsItem,
            Container
        },
        props:{
            items:{
                type:Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
//   padding-left: 50px;
  &__item{
    margin-bottom: 30px;
  }
}
</style>