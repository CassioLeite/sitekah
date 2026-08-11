<script setup>
const audiences = [
  {
    title: 'Dev PJ emitindo nota',
    desc: 'Para quem presta serviço como pessoa jurídica e precisa manter impostos e obrigações em ordem.',
  },
  {
    title: 'Freelancer de tecnologia',
    desc: 'Para quem atende clientes diferentes e quer clareza sobre notas, impostos e organização.',
  },
  {
    title: 'Consultor com contrato recorrente',
    desc: 'Para quem tem contratos mensais e precisa de previsibilidade no CNPJ.',
  },
  {
    title: 'Profissional remoto',
    desc: 'Para quem trabalha de onde estiver, mas quer a empresa organizada no Brasil.',
  },
  {
    title: 'Product manager PJ',
    desc: 'Para quem entrega produto no modelo PJ e precisa de notas e impostos sem ruído.',
  },
  {
    title: 'Designer UX/UI PJ',
    desc: 'Para quem atua por contrato e quer o CNPJ organizado, sem complicar a rotina.',
  },
  {
    title: 'MEI que cresceu',
    desc: 'Para quem passou do limite, mudou de atividade ou precisa migrar para ME.',
  },
  {
    title: 'CLT virando PJ',
    desc: 'Para quem recebeu uma proposta PJ e quer entender o impacto antes de decidir.',
  },
]
</script>

<template>
  <section id="para-devs" class="scroll-mt-24 py-16 sm:py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div class="max-w-2xl">
        <h2
          class="font-display text-3xl font-semibold tracking-tight text-balance text-charcoal md:text-4xl"
        >
          Feito para quem trabalha com tecnologia
        </h2>
        <p class="mt-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">
          Se você trabalha como PJ em tecnologia, sua contabilidade precisa
          acompanhar sua rotina: contratos, notas, impostos, recebimentos e
          decisões que não podem ficar no escuro.
        </p>
      </div>

      <ul class="mt-10 grid gap-3.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <li
          v-for="item in audiences"
          :key="item.title"
          class="rounded-3xl border border-mist bg-cream/50 p-5 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-6"
        >
          <h3 class="font-display text-lg font-medium text-charcoal">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-charcoal-muted">
            {{ item.desc }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
