<script setup>
const steps = [
  {
    title: 'Diagnóstico inicial pelo WhatsApp',
    desc: 'Você conta a situação — CLT para PJ, MEI, troca de contador ou recebimento do exterior — e a gente entende o contexto.',
  },
  {
    title: 'Enquadramento correto',
    desc: 'Avaliamos MEI, SLU, LTDA, CNAE e regime tributário para o seu perfil de tecnologia.',
  },
  {
    title: 'Organização e documentação',
    desc: 'Definimos o fluxo de documentos, emissão de notas e a separação entre pessoa física e jurídica.',
  },
  {
    title: 'Acompanhamento mensal',
    desc: 'Impostos, prazos e previsibilidade — para você focar no trabalho, não na surpresa fiscal.',
  },
]
</script>

<template>
  <section
    id="como-funciona"
    class="scroll-mt-24 bg-cream py-16 sm:py-20 md:py-28"
    aria-labelledby="how-title"
  >
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div class="max-w-2xl">
        <h2
          id="how-title"
          class="font-display text-3xl font-semibold tracking-tight text-charcoal md:text-4xl"
        >
          Como funciona
        </h2>
        <p class="mt-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">
          Quatro passos simples. Sem formulário longo — a conversa começa no
          WhatsApp.
        </p>
      </div>

      <ol class="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="rounded-3xl border border-mist bg-parchment p-6 shadow-soft sm:p-7"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-olive/15 font-display text-lg text-olive"
          >
            {{ index + 1 }}
          </span>
          <h3 class="mt-4 font-display text-xl font-medium text-charcoal sm:mt-5">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-charcoal-muted sm:text-base">
            {{ step.desc }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
