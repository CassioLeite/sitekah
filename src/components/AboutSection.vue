<script setup>
import { siteConfig } from '../config'
import karinyPhoto from '../assets/kariny-professional.png'

const aboutTrust = [
  'Atendimento humano',
  'Explicação clara',
  'Acompanhamento próximo',
]
</script>

<template>
  <section
    id="sobre"
    class="scroll-mt-24 py-20 sm:py-24 md:py-32"
    aria-labelledby="about-title"
  >
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div
        class="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
      >
        <!-- Photo -->
        <div class="relative mx-auto w-full max-w-sm lg:max-w-[26.6rem]">
          <div
            class="pointer-events-none absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-br from-champagne/40 via-transparent to-olive/10 blur-sm"
            aria-hidden="true"
          />
          <div
            class="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-champagne shadow-card"
          >
            <img
              :src="karinyPhoto"
              alt="Kariny, contadora especializada em atendimento para profissionais de tecnologia"
              class="absolute inset-0 h-full w-full object-cover object-top"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <!-- Copy -->
        <div class="max-w-xl">
          <p
            class="inline-flex rounded-full border border-champagne/80 bg-cream px-3.5 py-1.5 text-sm text-olive"
          >
            Atendimento direto com a contadora
          </p>

          <h2
            id="about-title"
            class="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-charcoal sm:mt-6 md:text-4xl"
          >
            Você fala com uma contadora, não com um protocolo.
          </h2>

          <div class="mt-8 space-y-2">
            <p class="font-display text-2xl text-charcoal">
              {{ siteConfig.accountant.name }}
            </p>
            <p class="text-sm tracking-wide text-olive">
              {{ siteConfig.accountant.crc }}
            </p>
            <p class="mt-4 max-w-prose leading-relaxed text-charcoal-muted">
              {{ siteConfig.accountant.bio }}
            </p>
          </div>

          <ul
            class="mt-8 flex flex-wrap gap-2.5"
            aria-label="Diferenciais do atendimento"
          >
            <li
              v-for="item in aboutTrust"
              :key="item"
              class="rounded-full border border-champagne/70 bg-parchment px-3.5 py-1.5 text-sm text-charcoal-muted"
            >
              {{ item }}
            </li>
          </ul>

          <blockquote
            class="mt-9 border-l-2 border-terracotta/40 pl-5 font-display text-xl leading-snug text-charcoal italic md:text-[1.35rem]"
          >
            “{{ siteConfig.accountant.quote }}”
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
