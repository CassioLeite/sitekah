<script setup>
const pains = [
  'Não sei se devo abrir MEI, SLU ou LTDA.',
  'Tenho medo de emitir nota errado.',
  'Não sei quanto separar para impostos.',
  'Vou começar como PJ e não sei por onde começar.',
  'Meu contador atual não explica o que está acontecendo.',
  'Recebo ou posso receber do exterior e tenho dúvidas.',
  'Quero previsibilidade, não surpresa.',
]
</script>

<template>
  <section class="bg-cream py-16 sm:py-20 md:py-28" aria-labelledby="pain-title">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div class="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <h2
            id="pain-title"
            class="font-display text-3xl font-semibold tracking-tight text-balance text-charcoal md:text-4xl"
          >
            Você não precisa virar especialista em imposto para trabalhar como
            PJ.
          </h2>
          <p class="mt-5 text-base leading-relaxed text-charcoal-muted sm:text-lg">
            A maioria dos problemas começa quando o profissional vira PJ sem
            orientação clara.
          </p>
        </div>

        <ul class="space-y-3">
          <li
            v-for="(pain, index) in pains"
            :key="pain"
            class="flex gap-3.5 rounded-2xl border border-mist/80 bg-parchment px-4 py-3.5 shadow-soft sm:gap-4 sm:px-5 sm:py-4"
          >
            <span
              class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/10 font-display text-sm text-terracotta"
            >
              {{ index + 1 }}
            </span>
            <p class="text-[0.95rem] leading-snug text-charcoal sm:text-base">
              {{ pain }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
