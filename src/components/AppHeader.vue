<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import WhatsAppButton from './WhatsAppButton.vue'
import logoMinhaContabil from '../assets/logo-minha-contabil.png'

const open = ref(false)
const scrolled = ref(false)

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#para-devs', label: 'Para Devs' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#duvidas', label: 'Dúvidas' },
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function closeMenu() {
  open.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition-all duration-300"
    :class="
      scrolled || open
        ? 'border-b border-mist/80 bg-parchment/90 shadow-soft backdrop-blur-md'
        : 'bg-transparent'
    "
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8"
    >
      <a
        href="#inicio"
        class="inline-flex shrink-0 items-center"
        @click="closeMenu"
      >
        <img
          :src="logoMinhaContabil"
          alt="Minha Contabil"
          class="h-8 w-auto object-contain sm:h-10 lg:h-12"
          width="240"
          height="70"
          decoding="async"
        />
      </a>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Principal">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-charcoal-muted transition-colors hover:text-charcoal"
        >
          {{ link.label }}
        </a>
        <WhatsAppButton variant="nav" label="WhatsApp" />
      </nav>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        aria-label="Abrir menu"
        @click="open = !open"
      >
        <span class="sr-only">Menu</span>
        <svg
          v-if="!open"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-width="1.75"
            d="M4 7h16M4 12h16M4 17h16"
          />
        </svg>
        <svg
          v-else
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-width="1.75"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>
      </button>
    </div>

    <div
      id="mobile-nav"
      class="border-t border-mist/80 bg-parchment/95 px-5 pb-5 pt-2 backdrop-blur-md lg:hidden"
      :class="open ? 'block' : 'hidden'"
    >
      <nav class="flex flex-col gap-1" aria-label="Mobile">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="rounded-xl px-3 py-3 text-charcoal-muted hover:bg-cream hover:text-charcoal"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <div class="mt-2 px-1" @click="closeMenu">
          <WhatsAppButton
            variant="primary"
            label="WhatsApp"
            class="w-full"
          />
        </div>
      </nav>
    </div>
  </header>
</template>
