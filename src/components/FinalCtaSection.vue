<script setup>
import WhatsAppButton from './WhatsAppButton.vue'
</script>

<template>
  <section class="py-16 sm:py-20 md:py-28" aria-labelledby="final-cta-title">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div
        class="relative overflow-hidden rounded-[1.75rem] bg-charcoal px-6 py-12 text-center shadow-lift sm:rounded-[2rem] sm:px-8 sm:py-14 md:px-16 md:py-20"
      >
        <div
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(107,122,82,0.35),transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(184,106,76,0.2),transparent_45%)]"
          aria-hidden="true"
        />
        <div class="relative mx-auto max-w-2xl">
          <h2
            id="final-cta-title"
            class="font-display text-3xl font-semibold tracking-tight text-balance text-parchment md:text-4xl"
          >
            Quer cuidar do seu CNPJ com mais clareza?
          </h2>
          <p class="mt-5 text-base leading-relaxed text-champagne sm:text-lg">
            Fale direto pelo WhatsApp e conte sua situação. Vamos orientar o
            melhor caminho para o seu caso.
          </p>
          <div class="mt-8 flex justify-center sm:mt-9">
            <WhatsAppButton class="w-full max-w-sm sm:w-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
