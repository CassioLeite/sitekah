<script setup>
import WhatsAppButton from './WhatsAppButton.vue'
import { siteConfig } from '../config'
import heroOrganicBg from '../assets/hero-organic-bg.png'
</script>

<template>
  <section
    id="inicio"
    class="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28"
  >
    <!-- Base cream — left stays light for readability -->
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f6f1ea_0%,#faf7f2_55%,#faf7f2_100%)]"
      aria-hidden="true"
    />

    <!-- Decorative organic artwork — right side only, soft left blend -->
    <div
      class="hero-art pointer-events-none absolute inset-y-0 right-0 z-0 w-[82%] overflow-hidden sm:w-[74%] md:w-[68%] lg:w-[64%]"
      aria-hidden="true"
    >
      <!-- Dedicated transform layer so positioning utilities don't fight the animation -->
      <div class="hero-art-drift absolute inset-0">
        <img
          :src="heroOrganicBg"
          alt=""
          class="hero-art-img absolute -right-[14%] top-[-4%] h-[108%] w-[118%] max-w-none object-cover object-[86%_center] opacity-[0.38] sm:opacity-[0.43] md:object-[92%_center] md:opacity-[0.47]"
          width="1024"
          height="682"
          decoding="async"
          fetchpriority="low"
        />
      </div>
    </div>

    <!-- Cream veil: protects the text column and softens mid-frame invasion -->
    <div
      class="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,#faf7f2_0%,#faf7f2_38%,rgba(250,247,242,0.94)_50%,rgba(250,247,242,0.62)_60%,rgba(250,247,242,0.28)_70%,rgba(250,247,242,0.08)_82%,transparent_92%)] sm:bg-[linear-gradient(90deg,#faf7f2_0%,#faf7f2_32%,rgba(250,247,242,0.9)_44%,rgba(250,247,242,0.5)_56%,rgba(250,247,242,0.18)_68%,rgba(250,247,242,0.05)_80%,transparent_90%)]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
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
