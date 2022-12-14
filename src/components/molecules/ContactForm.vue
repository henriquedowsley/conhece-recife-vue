<template>
  <Form class="contact-form" :form="form" @submit="send">
    <Field name="name" label="Nome completo" />
    <Field name="email" label="Email" />
    <Field name="phone" label="Telefone" mask="(99) 9.9999-9999" />
    <Field name="subject" label="Assunto" />
    <Field name="message" as="textarea" label="Mensagem" />

    <Button type="button" :disabled="buttonText !== 'Enviar'">
      {{ buttonText }}
    </Button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, darpi, configure } from '@cataline.io/darpi'
import '@cataline.io/darpi/dist/style.css'
import { Button } from '@/components/atoms'
import { useContactStore } from '@/stores/contact'
import { ref } from 'vue'

configure({
  theme: 'light',
  locale: 'ptBR'
})

const contact = useContactStore()
const buttonText = ref('Enviar')

const form = darpi.newForm({
  name: darpi.string().required(),
  email: darpi.string().email().required(),
  phone: darpi.string().required().minLength(16, 'Telefone inválido'),
  subject: darpi.string().required(),
  message: darpi.string().required().minLength(10)
})

async function send() {
  try {
    buttonText.value = 'Aguarde...'

    await contact.send(form.values.all)

    alert('Mensagem enviada com sucesso!')

    form.reset()
  } catch {
    alert('Erro ao enviar mensagem')
  } finally {
    buttonText.value = 'Enviar'
  }
}
</script>

<style scoped lang="scss">
.contact-form {
  display: grid;
  .button {
    margin: auto;
  }
}
</style>
