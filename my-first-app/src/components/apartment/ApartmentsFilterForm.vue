<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="handleSubmit">
      <CustomSelect :items="cities" v-model="city" class="form__select" />
      <CustomInput
      class="form__input"
        v-model="price"
        placeholder="Price, from"
        error-message="the field shouldn't be empty"
        :rules="rules"
      />
      <SubmitButton class="form__submit" type="submit">
        selection of housing
      </SubmitButton>
    </form>
  </div>
  </template>

<script>
import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import SubmitButton from '../Button.vue';
import { isRequired, charLimit } from '../../utils/validationRules';

export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      price: '',
      city: '',
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: '', label: 'City', selected: true },
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 1000px;
margin-right: auto;
margin-left: auto;
  display: flex;
  &__select {
    margin-right: 30px;
    // margin-left: 240px;

  }
  &__submit {
    margin-left: 180px;
  }

}
</style>