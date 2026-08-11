<script setup>
import { siteConfig, getWhatsAppUrl } from '../config'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-mist bg-cream/60 pb-28 pt-10 sm:pt-12 md:pb-12">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8"
    >
      <div>
        <p class="font-display text-xl font-semibold text-charcoal">
          {{ siteConfig.brandName }}
        </p>
        <p class="mt-2 max-w-sm text-sm leading-relaxed text-charcoal-muted">
          {{ siteConfig.positioning }}
        </p>
        <p class="mt-3 text-xs tracking-wide text-olive">
          {{ siteConfig.accountant.crc }}
        </p>
      </div>

      <div class="flex flex-col gap-2 text-sm text-charcoal-muted md:items-end">
        <a
          :href="getWhatsAppUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-olive transition-colors hover:text-olive-dark"
        >
          Falar no WhatsApp
        </a>
        <p class="text-xs sm:text-sm">
          © {{ year }} {{ siteConfig.brandName }}
        </p>
      </div>
    </div>
  </footer>
</template>
