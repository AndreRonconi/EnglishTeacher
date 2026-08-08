# Tabela de Planos e Regras para profandre.com.br

Este documento contém todas as informações, estruturas de preços, termos de fidelidade, textos de vantagens/tooltips e funções JavaScript prontas (com integração via WhatsApp) para a atualização dos planos no site **profandre.com.br**.

---

## 1. Resumo dos Planos e Valores

| Plano | Categoria | Valor Mensal | Contrato Mínimo | Professor / Formato |
| :--- | :--- | :--- | :--- | :--- |
| **Plano Assinatura** | Plataforma Digital | R$ 27,00 / mês | Sem Fidelidade (Mensal) | Estudo Individual + IA Tutor 24h |
| **Conversation Club** | Grupos | R$ 249,00 / mês | 3 Meses | 2x Aulas ao vivo em grupo / semana |
| **Reading Club** | Grupos | R$ 249,00 / mês | 3 Meses | 2x Aulas ao vivo em grupo / semana |
| **Plano Total Clubs** | Grupos (Combo) | R$ 399,00 / mês | 3 Meses | 5x Aulas ao vivo em grupo / semana |
| **Plano Prof André** | Individual VIP | R$ 629,00 / mês | 6 Meses | 1x Individual/sem com Prof. André + Todos os Clubes |
| **Plano Premium (1x/sem)** | Individual | R$ 429,00 / mês (+ Opcionais) | 6 Meses | 1x Individual/sem com Prof. Certificado Bridge |
| **Plano Premium (2x/sem)** | Individual | R$ 799,00 / mês (+ Opcionais) | 6 Meses | 2x Individual/sem com Prof. Certificado Bridge |
| **Plano Premium (3x+/sem)** | Individual | Sob Consulta | 6 Meses | Personalizado via WhatsApp |

---

## 2. Detalhamento dos Planos

### 👑 2.1. Plano Premium (Configurador Flexível)
- **Descrição:** Aulas individuais com professores certificados Bridge + Opcionais de Grupos.
- **Frequência das Aulas Individuais:**
  - **1x por semana:** R$ 429,00 / mês
  - **2x por semana:** R$ 799,00 / mês
  - **3x ou mais por semana:** Sob Consulta (Encaminha para o Prof André)
- **Clubes Opcionais (Adicionais ao contrato):**
  - **+ 1 Clube** (Conversation **OU** Reading): + R$ 100,00 / mês
  - **+ 2 Clubes** (Conversation **E** Reading): + R$ 170,00 / mês *(Desconto especial de combo)*
  - **Inglês com Músicas:** GRATUITO (R$ 0,00)
- **Contrato Mínimo:** 6 meses
- **Formas de Pagamento:** Pix / Cartão

---

### ⭐ 2.2. Plano Prof André
- **Descrição:** Aulas individuais exclusivas diretamente com o Prof. André + Acesso Completo a Todos os Clubes.
- **Valor:** R$ 629,00 / mês
- **Contrato Mínimo:** 6 meses
- **Inclusões:**
  - 1x Aula Individual por semana exclusiva com o Prof. André
  - Acesso Completo ao Conversation Club (2x/semana)
  - Acesso Completo ao Reading Club (2x/semana)
  - 1x Aula semanal de Inglês com Músicas (Gratuito)
  - Acompanhamento direto e plano de estudos VIP com Prof. André

---

### 🚀 2.3. Plano Total Clubs
- **Descrição:** Imersão completa em todos os clubes em grupo com o melhor custo-benefício.
- **Valor:** R$ 399,00 / mês
- **Contrato Mínimo:** 3 meses
- **Inclusões:**
  - 2x Aulas/semana de Conversation Club
  - 2x Aulas/semana de Reading Club
  - 1x Aula/semana de Inglês com Músicas
  - Plataforma e aplicativo ilimitados

---

### 💬 2.4. Conversation Club
- **Descrição:** Treino prático de conversação em grupo para destravar a fala.
- **Valor:** R$ 249,00 / mês
- **Contrato Mínimo:** 3 meses
- **Inclusões:** 2x Aulas ao vivo em grupo/semana + Aula bônus de Inglês com Músicas.

---

### 📖 2.5. Reading Club
- **Descrição:** Leitura guiada, expansão de vocabulário e interpretação de texto.
- **Valor:** R$ 249,00 / mês
- **Contrato Mínimo:** 3 meses
- **Inclusões:** 2x Aulas ao vivo em grupo/semana + Aula bônus de Inglês com Músicas.

---

### 🛡️ 2.6. Plano Assinatura (Plataforma Digital)
- **Descrição:** Acesso digital completo à plataforma, materiais e Tutor IA 24h.
- **Valor:** R$ 27,00 / mês
- **Fidelidade:** Sem contrato de fidelidade (Mensal)

---

## 3. Textos de Apoio e Tooltips (Explicativos)

### 💡 Vantagens das Aulas em Grupo (Ícone de Dúvida do Cabeçalho)
- **Aceleração da Fluência:** Prática dinâmica em ambiente imersivo e sem julgamentos.
- **Múltiplos Sotaques:** Exposição a diferentes ritmos e repertórios reais de fala.
- **Combo Perfeito:** A aula individual foca na sua necessidade pontual; o grupo desenvolve a espontaneidade.

### Explicação dos Clubes (Tooltips dos Cards):
- **💬 Conversation Club:** Prática de conversação 100% ao vivo com dinâmicas em grupo para acelerar sua fala, espontaneidade e vocabulário cotidiano.
- **📖 Reading Club:** Aulas de leitura guiada com foco em compreensão de texto, expansão de repertório e pronúncia correta das palavras.
- **🎵 Inglês com Músicas:** Encontros descontraídos estudando letras de hits para aprender gírias, conectores de fala e expressões reais.

---

## 4. Código JavaScript Pronto (Funções para WhatsApp)

Copie e cole estas funções no código do site **profandre.com.br** para manipular o cálculo do Plano Premium e redirecionar para o WhatsApp oficial (`5586999907211`).

```javascript
// Número oficial do WhatsApp do Prof André
const WHATSAPP_PHONE = '5586999907211';

/**
 * Redireciona para o WhatsApp com mensagem formatada
 * @param {string} textMessage
 */
function sendToWhatsApp(textMessage) {
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
}

/**
 * Ação dos botões de planos diretos (Conversation, Reading, Total Clubs, Prof André, etc)
 * @param {string} planId
 */
function handleDirectPlanClick(planId) {
    let message = '';

    switch (planId) {
        case 'profandre':
            message = 'Olá Prof André, gostaria de assinar o Plano Prof André (Aulas exclusivas 1x/semana + todos os clubes por R$ 629/mês).';
            break;
        case 'total_clubs':
            message = 'Olá Prof André, gostaria de assinar o Plano Total Clubs (5x aulas em grupo/semana por R$ 399/mês).';
            break;
        case 'conversation':
            message = 'Olá Prof André, gostaria de assinar o plano Conversation Club (R$ 249/mês).';
            break;
        case 'reading':
            message = 'Olá Prof André, gostaria de assinar o plano Reading Club (R$ 249/mês).';
            break;
        case 'assinatura':
            message = 'Olá Prof André, gostaria de assinar o Plano Assinatura Digital (R$ 27/mês).';
            break;
        default:
            message = 'Olá Prof André, gostaria de solicitar informações sobre os planos de inglês.';
    }

    sendToWhatsApp(message);
}

/**
 * Calculadora de preço do Plano Premium (Aulas Individuais + Opcionais)
 * @param {'1x' | '2x' | '3x+'} frequency
 * @param {boolean} includeConversation
 * @param {boolean} includeReading
 * @returns {{ totalPrice: number | string, message: string }}
 */
function calculatePremiumPlan(frequency, includeConversation, includeReading) {
    if (frequency === '3x+') {
        return {
            totalPrice: 'Sob Consulta',
            message: 'Olá Prof André, gostaria de consultar valores para o Plano Premium com 3x ou mais aulas individuais por semana.'
        };
    }

    // 1. Preço Base
    const basePrice = frequency === '1x' ? 429 : 799;

    // 2. Cálculo dos Clubes Adicionais
    const clubCount = (includeConversation ? 1 : 0) + (includeReading ? 1 : 0);
    let addOnPrice = 0;

    if (clubCount === 1) {
        addOnPrice = 100; // 1 clube adiciona R$ 100
    } else if (clubCount === 2) {
        addOnPrice = 170; // 2 clubes adicionam R$ 170 (desconto de combo)
    }

    const totalPrice = basePrice + addOnPrice;

    // 3. Montar mensagem amigável para o WhatsApp
    const selectedClubs = [];
    if (includeConversation) selectedClubs.push('Conversation Club');
    if (includeReading) selectedClubs.push('Reading Club');

    const clubsText = selectedClubs.length > 0 
        ? ` + ${selectedClubs.join(' e ')}` 
        : '';

    const message = `Olá Prof André, gostaria de contratar o Plano Premium ${frequency} individual/semana${clubsText} (R$ ${totalPrice}/mês).`;

    return {
        totalPrice,
        message
    };
}

/**
 * Exemplo de manipulador para o botão de confirmação do Configurador Premium
 */
function handlePremiumSubmit() {
    // Obter estado dos controles do seu HTML/React
    const frequency = document.querySelector('input[name="frequency"]:checked')?.value || '1x';
    const hasConversation = document.querySelector('#check-conversation')?.checked || false;
    const hasReading = document.querySelector('#check-reading')?.checked || false;

    const result = calculatePremiumPlan(frequency, hasConversation, hasReading);
    sendToWhatsApp(result.message);
}
```

---

## 5. Checklist de Verificação para profandre.com.br

- [x] **Indicação de fidelidade:** Exibir `*Contrato mínimo de 3 meses` nos clubes e `*Contrato mínimo de 6 meses` nos planos individuais.
- [x] **Preço em destaque:** Exibir `R$ XXX /mês` centralizado acima do botão de ação.
- [x] **Texto em Minúsculo (Natural):** Subtítulos sem formatação de caixa alta (todas em maiúsculas).
- [x] **Tooltips Interativos:** Ícones `?` com popup explicativo nas vantagens dos grupos e de cada clube.
- [x] **Plano Prof André:** Card com valor de R$ 629/mês enfatizando aulas exclusivas com o Prof. André + todos os clubes inclusos.
