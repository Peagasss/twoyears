# 💖 Dois Anos de Nós | Experiência Web Comemorativa Editorial

Uma Single Page Application (SPA) com estética **editorial, afetiva e de estúdio profissional**, construída com **HTML5**, **Tailwind CSS/CSS moderno** e **JavaScript puro**, combinando animações cinematográficas, microinterações táteis e recursos interativos exclusivos para celebrar 2 anos de história de amor.

---

## 🎨 Identidade Visual & Paleta "Ametista Imperial / Lilás Radiante"

- **Fundo Base**: Off-White / Gelo (`#F8FAFC` e `#FFFFFF`), com iluminação ambiente sutil via gradientes radiais fixos combinando azul suave e lilás translúcido.
- **Cor Primária (Estrutural e Títulos)**: Azul Royal (`#1E40AF` e `#2563EB`).
- **Cor de Romance & Destaque Marcante**: Roxo Ametista (`#7C3AED`), aplicado em títulos destacados, badges, tags de status, bordas do marco 21 e linha guia vertical.
- **Cor de Luminosidade / Brilho Radiante**: Lilás Brilhante (`#A855F7`), aplicado em efeitos de aura (*glow*), pontos guias luminosos e pulsação suave dos segundos nos contadores.

---

## ✨ Funcionalidades Especiais Implementadas

### 📸 1. Polaroids com Efeito Flip 3D (Bastidores Secretos)
- Moldura física branca (`#FFFFFF`) com rotação orgânica alternada (`-1.4°` e `+1.4°`).
- **Frente**: Fotografia do momento com opção de zoom e botão *"Ver bastidores 🔄"*.
- **Verso (CSS 3D Flip)**: Gira suavemente em 180° revelando uma nota íntima com a história engraçada, fofa ou emocionante por trás daquela foto específica (`behindTheScenes` em cada item de `TIMELINE_DATA`).
- Botão *"Voltar à foto 📷"* para retornar à visualização da imagem.

### 💌 2. Envelope Virtual com Selo de Cera (Clímax do Dia 21)
- No card do 2º Aniversário, há um envelope clássico com **selo de cera 3D** gravado com o número **2** em tom Ametista.
- Ao clicar no selo:
  - Animação do lacre se rompendo.
  - Chuva de confetes e corações celebratórios.
  - Abertura de um modal com efeito de papel nobre exibindo uma **Carta de Amor completa e emocionante**, configurável na constante `LOVE_LETTER_TEXT` no topo do `app.js`.

### 🎵 3. Mensagens Afetivas Flutuantes Sincronizadas (#music-toast)
- Container com **Glassmorphism refinado**, borda sutil ametista (`#A855F7`) e aura luminosa fixado na base da tela (respeitando `env(safe-area-inset-bottom)`).
- Sincronizado segundo a segundo com a trilha sonora **"I Was Made For Lovin' You" (KISS)**:
  - Frases carinhosas surgem e desaparecem em momentos-chave da música com animação suave de fade-in e slide vertical (`translate-y-2` -> `translate-y-0`).
  - Totalmente configurável pela matriz `MUSIC_SYNC_MESSAGES` no `app.js` com timestamps exatos (`start` e `end`).
  - Oculta-se automaticamente caso a música seja pausada.

### 📥 4. Botão Comemorativo: "Guardar Nossa Linha do Tempo" (Download PNG)
- Integração com a biblioteca `html2canvas` via CDN.
- Botão no painel de celebração que gera instantaneamente um pôster de alta resolução em formato `.png` com o resumo dos 11 marcos, datas e títulos da história do casal, pronto para guardar na galeria ou compartilhar.

### ⏱️ 5. Contadores com Efeito Bump & Linha Guia Dinâmica
- Transição fluida `.digit-bump` a cada segundo sem trocas bruscas de números.
- Linha guia vertical central com gradiente luminoso ativo de azul para ametista que se preenche conforme o scroll do visitante, acompanhada por um ponto de luz pulsante.
- Animações suaves de entrada com **AOS (Animate On Scroll)** intercalando esquerda e direita.

### 🌌 6. Astronomia & O Firmamento (O Testemunho dos Céus)
- **Mapa Estelar Minimalista (21 de Outubro de 2024)**: Cartão visual em azul-noite profundo (`#0B132B` / `#0F172A`) com constelações astronômicas desenhadas em SVG e coordenadas celestes orbitais (Cruzeiro do Sul, Alinhamento de Órion, Corona Borealis e estrela Sirius).
- **Animações de Cintilação Cósmica**: Efeitos CSS `@keyframes starTwinkle1/2/3` e `.star-pulse-slow` que dão vida cintilante às estrelas de diferentes magnitudes.
- Frase editorial de estúdio: *"O céu brilhava exatamente sob este traçado na noite em que os nossos caminhos se uniram."*
- **Ciclos Lunares Lado a Lado**:
  1. *Abertura (21.10.2024)*: **Lua Gibosa Minguante** (~84% iluminada) com relevo e corona lilás translúcida.
  2. *Marco de 2 Anos (21.10.2026)*: **Lua Gibosa Crescente** (~82% iluminada) com brilho ametista vibrante.
  - Conexão poética entre a constância dos ciclos celestes e o amadurecimento do amor ao longo destes 730 dias.

### ✝️ 7. Nossa Aliança Sob a Providência Divina (Cosmovisão Reformada / Presbiteriana)
- **Identidade Teológica Reformada**: Fundamentada na soberania de Deus, na providência graciosa que orquestra todos os encontros, na graça imerecida e na aliança como compromisso sagrado perante o Senhor (*Soli Deo Gloria*).
- **O Cordão de Três Dobras (Eclesiastes 4:12)**: Destaque tipográfico bíblico e reflexão sobre Cristo como a terceira dobra inabalável da união.
- **Três Pilares da Aliança**: Cards de Providência Soberana, Graça & Perdão e Aliança Sagrada.

---

## 🚀 Como Testar Imediatamente (Modo de Teste / DEBUG_MODE)

O arquivo `app.js` já está configurado no início com:

```javascript
const DEBUG_MODE = true;
```

Dessa forma, ao abrir o `index.html` em qualquer navegador:
1. Todas as travas são liberadas imediatamente para você navegar, testar os giros das Polaroids, abrir o envelope e clicar no download.
2. A barra discreta no canto inferior direito permite **"Simular Bloqueio"** para ver a tela de suspense que ela verá antes das 12h do dia 11.

> **Quando for enviar oficialmente:** basta alterar para `const DEBUG_MODE = false;` no topo do `app.js`.

---

## ✏️ Como Personalizar o Conteúdo

### Bastidores e Fotos:
No arquivo [`app.js`](file:///c:/Users/pedro/OneDrive/Documentos/PROGRAMAÇÃO/TWOYEARS/app.js), edite o array `TIMELINE_DATA`:
```javascript
{
  dayNumber: 1,
  dayLabel: "11 de Outubro",
  date: "2026-10-11T12:00:00-03:00",
  title: "Onde Tudo Começou",
  quote: "Aquele primeiro olhar...",
  photoUrl: "link-ou-caminho-da-foto.jpg",
  location: "Nosso primeiro encontro",
  behindTheScenes: "A história secreta de bastidor contada com as suas palavras..."
}
```

### Carta de Amor:
No arquivo [`app.js`](file:///c:/Users/pedro/OneDrive/Documentos/PROGRAMAÇÃO/TWOYEARS/app.js), edite a constante `LOVE_LETTER_TEXT`.

### Trilha Sonora Oficial ("I Was Made For Lovin' You" - KISS):
- Arquivo local primário: salve seu arquivo de áudio como `kiss.mp3` na mesma pasta do projeto.
- No [`index.html`](file:///c:/Users/pedro/OneDrive/Documentos/PROGRAMAÇÃO/TWOYEARS/index.html), a tag `<audio id="romantic-audio" loop preload="auto">` busca `kiss.mp3` e possui link de streaming de fallback.
- **Pop-up Interativo de Entrada**: Como os navegadores modernos bloqueiam o autoplay com som antes do primeiro clique, um pop-up romântico surge na abertura da página perguntando se a pessoa deseja viver a experiência com a trilha sonora oficial (*"Ouvir com Trilha Sonora"*) ou prefere continuar em silêncio (*"Continuar em silêncio por enquanto"*).
- **Elevação Gradual de Volume (de 2% em 2% até 50%)**: Ao escolher ouvir a trilha (ou clicar no botão de som no topo a qualquer momento), o volume inicia suavemente em 0% e sobe de 2% em 2% a cada 120ms até atingir o patamar ideal de **50% de volume**, proporcionando uma imersão acústica delicada e progressiva de ~3 segundos.
- O botão no topo sincroniza um mini equalizador animado, e em aparelhos móveis aciona feedback tátil (*haptic vibrations*) ao tocar/pausar e ao romper o lacre do envelope do Dia 21.

---

## 📱 Otimização Mobile-First Cirúrgica (iPhones 11 ao 15 Pro Max)

- **Safe Area Insets & Viewport Cover**: Configurado com `viewport-fit=cover`, `env(safe-area-inset-top)` e `env(safe-area-inset-bottom)`, garantindo visualização impecável tanto com o notch do iPhone 11 quanto com a **Dynamic Island** dos iPhones 14/15 Pro.
- **Dynamic Viewport Height (`100dvh`)**: Elimina saltos e quebras de layout causados pelo recolhimento da barra de endereços do Safari Mobile.
- **Ergonomia de Toque ($\ge 44 \times 44\text{px}$)**: Todos os botões, links e o lacre de cera respeitam os padrões de toque da Apple (`touch-action: manipulation;` evitando delay de duplo clique).
- **Polaroids Calibradas**: Ocupam de 85% a 92% da largura útil sem transbordar horizontalmente (`overflow-x: hidden`).
- **Suporte a 60Hz/120Hz ProMotion**: Animações aceleradas por GPU (`transform: translateZ(0); will-change: transform;`) com `-webkit-overflow-scrolling: touch`.
