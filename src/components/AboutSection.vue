<script setup>
import { siteConfig } from '../config'
import karinyPhoto from '../assets/kariny-professional.png'
</script>

<template>
  <section id="sobre" class="scroll-mt-24 py-16 sm:py-20 md:py-28" aria-labelledby="about-title">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div class="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div
          class="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-champagne bg-cream shadow-card"
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

        <div>
          <h2
            id="about-title"
            class="font-display text-3xl font-semibold tracking-tight text-balance text-charcoal md:text-4xl"
          >
            Você fala com uma contadora, não com um protocolo.
          </h2>

          <div class="mt-7 space-y-2 sm:mt-8">
            <p class="font-display text-2xl text-charcoal">
              {{ siteConfig.accountant.name }}
            </p>
            <p class="text-sm tracking-wide text-olive">
              {{ siteConfig.accountant.crc }}
            </p>
            <p class="mt-4 leading-relaxed text-charcoal-muted">
              {{ siteConfig.accountant.bio }}
            </p>
          </div>

          <ul class="mt-6 flex flex-wrap gap-2" aria-label="Forma de atendimento">
            <li
              v-for="signal in siteConfig.trustSignals"
              :key="signal"
              class="rounded-full bg-cream px-3 py-1.5 text-xs text-charcoal-muted"
            >
              {{ signal }}
            </li>
          </ul>

          <blockquote
            class="mt-8 border-l-2 border-terracotta/40 pl-5 font-display text-xl leading-snug text-charcoal italic"
          >
            “{{ siteConfig.accountant.quote }}”
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
