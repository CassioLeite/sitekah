<script setup>
import WhatsAppButton from './WhatsAppButton.vue'
import { siteConfig } from '../config'
</script>

<template>
  <section
    id="inicio"
    class="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(217,203,179,0.55),transparent_55%),radial-gradient(ellipse_at_90%_20%,rgba(107,122,82,0.12),transparent_45%),linear-gradient(180deg,#f6f1ea_0%,#faf7f2_60%,#faf7f2_100%)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full bg-champagne/40 blur-3xl animate-soft-float"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-olive/10 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-6xl px-5 md:px-8">
      <div class="max-w-3xl">
        <p
          class="animate-fade-up mb-4 text-sm font-medium tracking-wide text-olive sm:mb-5"
        >
          Para quem trabalha com tecnologia e precisa de clareza no CNPJ
        </p>
        <h1
          class="animate-fade-up-delay-1 font-display text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-balance text-charcoal sm:text-4xl md:text-[3.25rem] md:leading-[1.12]"
        >
          Contabilidade online para profissionais de tecnologia, com atendimento
          humano de verdade.
        </h1>
        <p
          class="animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-charcoal-muted sm:mt-6 sm:text-lg md:text-xl"
        >
          Abra, regularize ou cuide do seu CNPJ com uma contadora que entende a
          rotina de quem presta serviço, emite nota e quer pagar imposto do jeito
          certo — sem virar especialista em tributos.
        </p>

        <div
          class="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
        >
          <WhatsAppButton class="w-full sm:w-auto" />
          <a
            href="#como-funciona"
            class="inline-flex w-full items-center justify-center rounded-full border border-charcoal/15 bg-parchment/70 px-6 py-3.5 font-medium text-charcoal transition-all hover:border-olive/40 hover:bg-cream sm:w-auto sm:px-7"
          >
            Ver como funciona
          </a>
        </div>
      </div>

      <!-- Trust signals honestos (sem métricas inventadas) -->
      <ul
        class="animate-fade-up-delay-2 mt-12 flex flex-wrap gap-2.5 sm:mt-14 sm:gap-3"
        aria-label="O que você encontra aqui"
      >
        <li
          v-for="signal in siteConfig.trustSignals"
          :key="signal"
          class="rounded-full border border-champagne/70 bg-cream/80 px-3.5 py-2 text-sm text-charcoal-muted shadow-soft"
        >
          {{ signal }}
        </li>
        <li
          class="rounded-full border border-olive/20 bg-olive/10 px-3.5 py-2 text-sm text-olive"
        >
          {{ siteConfig.accountant.crc }}
        </li>
      </ul>
    </div>
  </section>
</template>
