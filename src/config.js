/**
 * Configuração central do site (estático).
 * Substitua todos os valores marcados como PLACEHOLDER antes de publicar.
 */

export const siteConfig = {
  // PLACEHOLDER: nome público da marca / escritório
  brandName: 'Contabilidade para Tech',

  positioning:
    'Contabilidade online para profissionais de tecnologia, com atendimento próximo de uma contadora de verdade.',

  accountant: {
    // Nome completo da contadora
    name: 'Kariny Sopranzi',
    // Registro CRC
    crc: 'SP338629',
    // Bio curta em 2–3 frases
    bio: 'Atendo pessoas e profissionais de tecnologia que precisam de clareza para abrir, regularizar ou cuidar do CNPJ. Explico o que importa na prática — sem jargão desnecessário.',
    // Iniciais usadas em fallbacks visuais
    initials: 'KS',
    photoAlt: 'Kariny Sopranzi, contadora especializada em atendimento para profissionais de tecnologia',
    quote:
      'Meu objetivo é que você entenda sua empresa sem precisar decifrar contabilidade.',
  },

  whatsapp: {
    // PLACEHOLDER: DDI + DDD + número, só dígitos. Ex.: 5511999999999
    phone: '5500000000000',
    defaultMessage:
      'Olá! Vim pelo site e gostaria de entender melhor como funciona a contabilidade para profissionais de tecnologia.',
  },

  /**
   * Sinais de confiança honestos — sem números inventados,
   * avaliações ou anos de experiência fictícios.
   */
  trustSignals: [
    'Atendimento direto',
    'Orientação clara',
    'Serviço 100% online',
    'Foco em profissionais de tecnologia',
  ],

  seo: {
    title: 'Contabilidade online para profissionais de tecnologia',
    description:
      'Contabilidade online para desenvolvedores, freelancers e profissionais de tech, com atendimento humano de uma contadora de verdade.',
    // PLACEHOLDER: URL canônica após publicar
    canonicalUrl: 'https://SEU-USUARIO.github.io/sitekah/',
    // PLACEHOLDER: URL absoluta da imagem OG
    ogImage: 'https://SEU-USUARIO.github.io/sitekah/og-image.svg',
    ogTitle: 'Contabilidade online para profissionais de tecnologia',
    ogDescription:
      'Atendimento próximo de uma contadora de verdade. Abra, regularize ou cuide do seu CNPJ com clareza.',
  },
}

/** Gera o link wa.me a partir de `siteConfig.whatsapp`. */
export function getWhatsAppUrl(customMessage) {
  const phone = String(siteConfig.whatsapp.phone).replace(/\D/g, '')
  const text = encodeURIComponent(
    customMessage || siteConfig.whatsapp.defaultMessage,
  )
  return `https://wa.me/${phone}?text=${text}`
}
