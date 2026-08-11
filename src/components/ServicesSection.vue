<script setup>
const services = [
  {
    title: 'Abertura de CNPJ para profissionais de TI',
    desc: 'Do zero ao CNPJ pronto, com enquadramento pensado para desenvolvimento e serviços de tecnologia.',
  },
  {
    title: 'Troca de contador',
    desc: 'Migração organizada, com continuidade das obrigações e sem deixar nada para trás.',
  },
  {
    title: 'Contabilidade mensal',
    desc: 'Acompanhamento contínuo: impostos, documentos e orientação no ritmo do seu contrato.',
  },
  {
    title: 'Migração de MEI para ME',
    desc: 'Quando o faturamento ou a atividade pedem o próximo passo — com planejamento, sem pressa.',
  },
  {
    title: 'Consultoria inicial para PJ',
    desc: 'Uma conversa para entender o melhor caminho antes de abrir empresa ou mudar de regime.',
  },
]
</script>

<template>
  <section
    id="servicos"
    class="scroll-mt-24 py-16 sm:py-20 md:py-28"
    aria-labelledby="services-title"
  >
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div class="max-w-2xl">
        <h2
          id="services-title"
          class="font-display text-3xl font-semibold tracking-tight text-charcoal md:text-4xl"
        >
          Serviços
        </h2>
        <p class="mt-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">
          Do primeiro CNPJ ao acompanhamento mensal — com a mesma clareza em
          cada etapa.
        </p>
      </div>

      <ul class="mt-10 grid gap-3.5 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="service in services"
          :key="service.title"
          class="rounded-3xl border border-mist bg-cream/40 p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:p-7"
        >
          <div
            class="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-olive to-champagne"
            aria-hidden="true"
          />
          <h3 class="font-display text-xl font-medium text-charcoal">
            {{ service.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-charcoal-muted">
            {{ service.desc }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
