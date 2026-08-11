<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AudienceSection from './components/AudienceSection.vue'
import PainSection from './components/PainSection.vue'
import PromiseSection from './components/PromiseSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TechSpecificSection from './components/TechSpecificSection.vue'
import AboutSection from './components/AboutSection.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCtaSection from './components/FinalCtaSection.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <div class="min-h-screen">
    <a
      href="#inicio"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-olive focus:px-4 focus:py-2 focus:text-parchment"
    >
      Pular para o conteúdo
    </a>

    <AppHeader />

    <main>
      <HeroSection />
      <AudienceSection />
      <PainSection />
      <PromiseSection />
      <HowItWorksSection />
      <ServicesSection />
      <TechSpecificSection />
      <AboutSection />
      <FaqSection />
      <FinalCtaSection />
    </main>

    <AppFooter />

    <WhatsAppButton
      variant="floating"
      label="WhatsApp"
      class="lg:hidden"
    />
  </div>
</template>
