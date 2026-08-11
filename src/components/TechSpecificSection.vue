<script setup>
const topics = [
  'Contrato PJ',
  'Emissão de nota para empresa brasileira',
  'Prestação de serviço para empresa do exterior',
  'CNAE para desenvolvimento de software',
  'Pró-labore e distribuição de lucros',
  'Simples Nacional e fator R',
  'Organização para não misturar PF e PJ',
  'Previsão mensal de impostos',
]
</script>

<template>
  <section class="bg-cream py-16 sm:py-20 md:py-28" aria-labelledby="tech-title">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div class="max-w-3xl">
        <h2
          id="tech-title"
          class="font-display text-3xl font-semibold tracking-tight text-balance text-charcoal md:text-4xl"
        >
          PJ de tecnologia tem dúvidas específicas. A contabilidade também
          precisa entender isso.
        </h2>
        <p class="mt-5 text-base leading-relaxed text-charcoal-muted sm:text-lg">
          Não é contabilidade genérica para qualquer negócio. É orientação para
          quem vive de serviço intelectual, contrato e entrega digital.
        </p>
      </div>

      <ul class="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
        <li
          v-for="topic in topics"
          :key="topic"
          class="flex items-start gap-3 rounded-2xl border border-mist/90 bg-parchment px-4 py-3.5 shadow-soft sm:px-5 sm:py-4"
        >
          <span
            class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-olive"
            aria-hidden="true"
          />
          <span class="text-sm text-charcoal sm:text-base">{{ topic }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
