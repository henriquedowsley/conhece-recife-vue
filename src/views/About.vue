<template>
  <div class="about">
    <header>
      <img src="@/assets/images/wave-about.svg" class="wave-top" />
      <GoBackButton />
    </header>

    <main>
      <div class="introduction">
        <img src="@/assets/images/face.svg" alt="" />
        <h6>
          Ao perceber que só visitamos lugares que conhecemos, daí nasceu o
          projeto <span class="blue">Conhece</span>
          <span class="orange"> Recife</span>.
        </h6>
      </div>

      <p>
        <b>Objetivo</b> é levar a nossa cidade a alcançar uma maior visibilidade
        entre turistas e entre moradores locais, tendo em vista que os próprios
        recifenses não conhecem as suas histórias, pretendemos fazer com que a
        nossa população conheça mais a sua cidade e que os turistas tenham nossa
        cidade como referência.
      </p>

      <p>
        <b>Diferencial</b> Ter uma pessoa que conhece ou tem histórias naquele
        local que queiram compartilhar com o público.
      </p>

      <p>
        <b>Segurança</b> trazemos uma maior comodidade para você em termos de
        segurança, iremos apontar o risco eminente em cada local.
      </p>

      <p>
        <b>Grupos Prioritários</b> nosso serviço de busca avançada, utiliza um
        mecanismo de filtro de tecnologia de ponta, e está pronto para melhor
        atender as necessiadades das pessoas com deficiência.
      </p>
    </main>

    <footer>
      <h5>
        Mergulhem no <span class="blue">Conhece</span>
        <span class="orange">Recife</span>
      </h5>
      <p>
        www.<span class="blue">conhece</span>
        <span class="orange">recife</span>.com.br/home
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { GoBackButton } from '@/components/atoms'
</script>

<style scoped lang="scss">
.about {
  display: grid;
  height: 100%;
  grid-auto-rows: max-content;
  background-image: url('@/assets/images/bg-about.svg');
  background-repeat: no-repeat;
  background-size: cover;
  .blue {
    color: #2f80ed;
  }
  .orange {
    color: #e78500;
  }
  header {
    width: 100%;
    position: relative;
    .wave-top {
      width: 100%;
      position: relative;
    }
    .go-back-button {
      position: absolute;
      top: 31px;
      left: 20px;
    }
  }
  main {
    padding: 0rem 2rem;
    font-size: 14px;
    .introduction {
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 1rem;
      align-items: center;
      h6 {
        font-size: 15px;
        margin: 0;
      }
      img {
        position: relative;
        left: -31px;
      }
    }
  }
  footer {
    display: grid;
    text-align: center;
    gap: 0.2rem;
    h5,
    p {
      margin: 0;
    }
    p {
      font-size: 14px;
    }
  }
}
</style>
