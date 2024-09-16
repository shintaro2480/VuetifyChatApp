<template>
    <v-app>
        <v-card class="login-card" title="新規登録" text="メールアドレスとパスワードを入力してください">
            <form @submit.prevent="submit">
                <v-text-field
                v-model="name.value.value"
                :counter="10"
                :error-messages="name.errorMessage.value"
                label="名前"
                ></v-text-field>

                <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="E-mail"
                ></v-text-field>

                <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="パスワード"
                ></v-text-field>


                <v-btn
                color="success"
                class="me-4"
                type="submit"
                >
                新規登録
                </v-btn>

                <v-btn @click="handleReset">
                クリア
                </v-btn>
            </form>
        </v-card>
    </v-app>
</template>


<script setup>
//  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'
  //import * as yup from 'yup';

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return '名前は少なくとも２文字以上必要です'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      }
    },
  })
  const name = useField('name')
//  const phone = useField('phone')
  const email = useField('email')
//  const select = useField('select')



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

