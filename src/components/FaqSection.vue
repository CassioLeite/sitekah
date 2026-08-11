<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'Desenvolvedor pode ser MEI?',
    a: 'Depende da atividade e do enquadramento. Desenvolvimento de software nem sempre se encaixa bem no MEI. Olhamos o seu caso antes de indicar o caminho.',
  },
  {
    q: 'Qual o melhor tipo de empresa para dev PJ?',
    a: 'Muitos profissionais de TI usam SLU ou LTDA no Simples Nacional — mas o formato certo depende de faturamento, contrato e estrutura. Esse diagnóstico fazemos juntos.',
  },
  {
    q: 'Quanto um profissional de TI paga de imposto?',
    a: 'Varia conforme o regime, o fator R, o pró-labore e o tipo de serviço. O objetivo é previsibilidade: saber o que separar todo mês, sem surpresa.',
  },
  {
    q: 'Preciso de contador para abrir CNPJ?',
    a: 'Para MEI o processo é mais simples. Para ME/EPP, o acompanhamento contábil costuma ser essencial desde a abertura até a operação mensal.',
  },
  {
    q: 'Posso emitir nota para empresa de outro estado?',
    a: 'Sim, em muitos casos. Orientamos a emissão conforme o serviço, o local do tomador e as regras aplicáveis.',
  },
  {
    q: 'Posso receber do exterior como PJ?',
    a: 'Sim. Organizamos a documentação, a emissão quando for o caso, e a declaração para o recebimento internacional ficar regular.',
  },
  {
    q: 'Como funciona a troca de contador?',
    a: 'Você conta a situação atual, alinhamos a transferência de documentos e responsabilidades, e cuidamos da continuidade das obrigações.',
  },
  {
    q: 'O atendimento é todo online?',
    a: 'Sim. Diagnóstico, documentos e acompanhamento são remotos — com conversa direta pelo WhatsApp.',
  },
  {
    q: 'Vocês atendem fora da minha cidade?',
    a: 'Sim. O atendimento é online e pensado para profissionais em qualquer lugar do Brasil.',
  },
  {
    q: 'Como falo com vocês?',
    a: 'Pelo WhatsApp. É o único canal de contato do site — direto, sem formulário.',
  },
]

const openIndex = ref(0)

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section
    id="duvidas"
    class="scroll-mt-24 bg-cream py-16 sm:py-20 md:py-28"
    aria-labelledby="faq-title"
  >
    <div class="mx-auto max-w-3xl px-5 md:px-8">
      <h2
        id="faq-title"
        class="font-display text-3xl font-semibold tracking-tight text-charcoal md:text-4xl"
      >
        Dúvidas frequentes
      </h2>
      <p class="mt-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">
        Respostas diretas para o que mais aparece no dia a dia de quem é PJ de
        tecnologia.
      </p>

      <div
        class="mt-8 divide-y divide-mist rounded-3xl border border-mist bg-parchment shadow-soft sm:mt-10"
        role="list"
      >
        <div
          v-for="(faq, index) in faqs"
          :key="faq.q"
          class="px-4 sm:px-6"
          role="listitem"
        >
          <h3 :id="`faq-question-${index}`">
            <button
              type="button"
              class="flex w-full items-center justify-between gap-3 py-4 text-left sm:gap-4 sm:py-5"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${index}`"
              @click="toggle(index)"
            >
              <span class="text-sm font-medium text-charcoal sm:text-base">
                {{ faq.q }}
              </span>
              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-olive transition-transform duration-300"
                :class="openIndex === index ? 'rotate-45' : ''"
                aria-hidden="true"
              >
                +
              </span>
            </button>
          </h3>
          <div
            :id="`faq-panel-${index}`"
            v-show="openIndex === index"
            class="pb-4 sm:pb-5"
            role="region"
            :aria-labelledby="`faq-question-${index}`"
          >
            <p class="text-sm leading-relaxed text-charcoal-muted sm:text-base">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
