<template>
    <v-app>
        <v-card class="login-card" title="ログイン" text="メールアドレスとパスワードを入力してください">
            <form @submit.prevent="submit">
                <v-text-field
                v-model="name.value.value"
                :counter="10"
                :error-messages="name.errorMessage.value"
                label="Name"
                ></v-text-field>

                <v-text-field
                v-model="phone.value.value"
                :counter="7"
                :error-messages="phone.errorMessage.value"
                label="Phone Number"
                ></v-text-field>

                <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="E-mail"
                ></v-text-field>

                <v-select
                v-model="select.value.value"
                :error-messages="select.errorMessage.value"
                :items="items"
                label="Select"
                ></v-select>

                <v-checkbox
                v-model="checkbox.value.value"
                :error-messages="checkbox.errorMessage.value"
                label="Option"
                type="checkbox"
                value="1"
                ></v-checkbox>

                <v-btn
                class="me-4"
                type="submit"
                >
                submit
                </v-btn>

                <v-btn @click="handleReset">
                clear
                </v-btn>
            </form>
        </v-card>
    </v-app>
</template>


<script setup>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'
  //import * as yup from 'yup';

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return '名前は少なくとも２文字以上必要です'
      },
      phone (value) {
        if (/^[0-9-]{7,}$/.test(value)) return true

        return 'Phone number needs to be at least 7 digits.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      select (value) {
        if (value) return true

        return 'Select an item.'
      },
      checkbox (value) {
        if (value === '1') return true

        return 'Must be checked.'
      },
    },
  })
  const name = useField('name')
  const phone = useField('phone')
  const email = useField('email')
  const select = useField('select')
  const checkbox = useField('checkbox')

  const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ])

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>

<style scoped>
.login-card{
    width: 700px;
    padding: 30px 0px 40px 0;
    margin: 0 auto;
    margin-top: 50px;
}

.mt-4{
    margin:5px;
}

</style>

