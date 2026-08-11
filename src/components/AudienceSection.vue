<script setup>
const audiences = [
  {
    title: 'Desenvolvedores PJ',
    desc: 'Quem emite nota, fecha contrato e quer saber quanto separar de imposto todo mês.',
  },
  {
    title: 'Freelancers de tecnologia',
    desc: 'Projetos variados, clientes diferentes — e a necessidade de manter o CNPJ em ordem.',
  },
  {
    title: 'Consultores de software',
    desc: 'Contratos recorrentes que pedem enquadramento certo desde o começo.',
  },
  {
    title: 'Product managers PJ',
    desc: 'Profissionais de produto no modelo PJ, com rotina de entrega e nota fiscal.',
  },
  {
    title: 'Designers UX/UI PJ',
    desc: 'Designers contratados que precisam de CNPJ organizado, sem complicar o dia a dia.',
  },
  {
    title: 'Profissionais remotos',
    desc: 'Quem trabalha de qualquer lugar — para empresas no Brasil ou em outro estado.',
  },
  {
    title: 'MEI que cresceu',
    desc: 'Quando o faturamento ou a atividade pedem migração para ME, com planejamento.',
  },
  {
    title: 'CLT virando PJ',
    desc: 'Abrir empresa, emitir a primeira nota e separar bem pessoa física e jurídica.',
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
          Atendimento pensado para quem presta serviço, entrega produto e vive de
          contrato — no Brasil ou recebendo do exterior.
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
