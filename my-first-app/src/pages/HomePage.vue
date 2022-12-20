<template>
    <main id="home-page">
        <ApartmentsFilterForm 
      class="apartments-filter"
      @submit="logger"/>
      <ApartmentsList :items="apartments"/>
  
    </main>
  </template>
  
  <script>
  import ApartmentsList from '@/components/apartment/ApartmentsList.vue';
  import apartments from '@/components/apartment/apartments';
  import ApartmentsFilterForm from '@/components/apartment/ApartmentsFilterForm.vue';
  
  export default {
    name: 'App',
    components: {
      ApartmentsList,
      ApartmentsFilterForm,
    },
    data(){
      return{ 
        apartments,
      }
    },
    methods:{
      logger(value){
        console.log(value);
      }
    }
    }
  </script>
  
  <style lang="scss" scoped>
.home-page{
    
}
  .apartments-filter {
  margin-bottom: 40px;
  width: 100%;
  }

  </style>
  