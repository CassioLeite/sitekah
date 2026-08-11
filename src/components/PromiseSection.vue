<template>
  <section class="py-16 sm:py-20 md:py-28" aria-labelledby="promise-title">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <div
        class="relative overflow-hidden rounded-[1.75rem] border border-champagne/70 bg-gradient-to-br from-cream via-parchment to-champagne-light px-6 py-12 shadow-card sm:rounded-[2rem] sm:px-10 sm:py-14 md:px-14 md:py-16"
      >
        <!-- Subtle abstract depth (right / bottom-right) -->
        <div
          class="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-olive/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -bottom-20 right-[12%] h-52 w-52 rounded-full bg-champagne/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute bottom-8 right-4 h-36 w-36 rounded-[40%] bg-terracotta/10 blur-2xl"
          aria-hidden="true"
        />

        <div class="relative mx-auto max-w-3xl">
          <h2
            id="promise-title"
            class="font-display text-3xl font-semibold tracking-tight text-balance text-charcoal md:text-4xl"
          >
            Online como uma plataforma. Próxima como uma contadora de confiança.
          </h2>
          <p
            class="mt-5 text-base leading-relaxed text-charcoal-muted sm:mt-6 sm:text-lg"
          >
            O trabalho é remoto e objetivo: documentos digitais, prazos claros e
            conversa direta. Sem fila de protocolo e sem resposta genérica. Você
            fala com alguém que entende o seu caso e explica o próximo passo com
            calma.
          </p>

          <ul class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            <li
              class="rounded-2xl border border-champagne/60 bg-parchment/80 px-5 py-5"
            >
              <span
                class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-olive/10 text-olive"
                aria-hidden="true"
              >
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.1-3.3A7.6 7.6 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
              <h3 class="mt-3 font-display text-xl text-olive">Remoto</h3>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-muted">
                WhatsApp e documentos digitais, de onde você estiver.
              </p>
            </li>

            <li
              class="rounded-2xl border border-champagne/60 bg-parchment/80 px-5 py-5"
            >
              <span
                class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-terracotta/10 text-terracotta"
                aria-hidden="true"
              >
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path
                    d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                  />
                </svg>
              </span>
              <h3 class="mt-3 font-display text-xl text-terracotta">Claro</h3>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-muted">
                Orientação prática para emitir, pagar e organizar.
              </p>
            </li>

            <li
              class="rounded-2xl border border-champagne/60 bg-parchment/80 px-5 py-5"
            >
              <span
                class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/5 text-charcoal"
                aria-hidden="true"
              >
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                  />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <h3 class="mt-3 font-display text-xl text-charcoal">Humano</h3>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-muted">
                Contexto do seu CNPJ, sem linguagem inacessível.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
