# Design Spec

## Direção
Premium, warm, cozy e memorável — sensação de consultoria boutique, não de escritório contábil genérico.

## Paleta
| Token | Hex | Uso |
|-------|-----|-----|
| Parchment | `#faf7f2` | Fundo principal |
| Cream | `#f6f1ea` | Seções alternadas |
| Charcoal | `#2a2723` | Texto |
| Charcoal muted | `#5c574f` | Texto secundário |
| Olive | `#6b7a52` | CTA / acento principal |
| Terracotta | `#b86a4c` | Destaques pontuais |
| Champagne | `#d9cbb3` | Bordas / atmosfera |

## Tipografia
- **Display:** Fraunces — títulos editoriais
- **Corpo:** Outfit — leitura clara e contemporânea

## Layout
- Muito whitespace
- Cards arredondados (`rounded-2xl` / `rounded-3xl`)
- Sombras suaves
- Hero com atmosfera (gradientes suaves), sem stock photo genérica
- Sem página de contato; WhatsApp é o único canal
- Trust chips discretos (não dashboard, não métricas falsas)

## Evitar
- Azul/verde “contabilidade corporativa”
- Layout agressivo de sales page
- Formulários pesados
- Cards no hero com aparência de dashboard
- Imagens stock baratas
- Anos de experiência, ratings ou depoimentos inventados

## Motion
- Fade-up no hero
- Float suave em blobs de fundo
- Hover leve em cards e CTAs
- FAQ com expansão simples

## Responsivo
- Mobile-first
- Menu hamburger abaixo de `lg`
- Botão flutuante de WhatsApp no mobile
- Hero e CTAs com largura confortável no mobile
- Footer com padding extra para não cobrir o botão flutuante

## v1.1 polish
- Hero menos apertado no mobile; tipografia escalonada
- Placeholder de foto com iniciais (About)
- Trust signals como chips, não como “stats”
- FAQ com `v-show` (sem corte de texto por max-height)
