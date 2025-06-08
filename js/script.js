
// Estado da aplicação
let savedActivitiesList = [];
let currentActivity = null;

// Função para alternar entre tabs
function switchTab(tabName) {
    // Esconder todas as tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remover classe ativa de todos os botões
    document.querySelectorAll('[id^="tab-"]').forEach(btn => {
        btn.classList.remove('tab-active');
        btn.classList.add('text-gray-600', 'hover:text-gray-800');
        btn.style.background = '';
        btn.style.color = '';
    });
    
    // Mostrar tab selecionada
    document.getElementById(tabName + '-tab').classList.remove('hidden');
    
    // Ativar botão selecionado
    const activeBtn = document.getElementById('tab-' + tabName);
    activeBtn.classList.add('tab-active');
    activeBtn.classList.remove('text-gray-600', 'hover:text-gray-800');
}

// Função para coletar dados do perfil
function collectStudentProfile() {
    const profile = {
        name: document.getElementById('studentName').value,
        age: document.getElementById('studentAge').value,
        grade: document.getElementById('studentGrade').value,
        cognitiveDifficulties: Array.from(document.querySelectorAll('.cognitive-difficulty:checked')).map(cb => cb.value),
        attentionLevel: document.getElementById('attentionLevel').value,
        learningStyle: document.getElementById('learningStyle').value,
        fineMotor: document.getElementById('fineMotor').value,
        grossMotor: document.getElementById('grossMotor').value,
        mobility: Array.from(document.querySelectorAll('.mobility:checked')).map(cb => cb.value),
        socialInteraction: document.getElementById('socialInteraction').value,
        groupWork: document.getElementById('groupWork').value,
        emotionalRegulation: document.getElementById('emotionalRegulation').value,
        motivation: document.getElementById('motivation').value,
        interests: document.getElementById('interests').value,
        observations: document.getElementById('observations').value
    };
    return profile;
}

// Função para testar a chave da API
async function testApiKey() {
    const apiKey = document.getElementById('apiKey').value.trim();
    
    if (!apiKey) {
        alert('Por favor, insira uma chave da API primeiro.');
        return;
    }

    try {
        const testPrompt = "Diga apenas 'API funcionando corretamente' para testar a conexão.";
        const response = await callGeminiAPI(apiKey, testPrompt);
        
        if (response) {
            alert('✅ Chave da API válida! Conexão funcionando.');
        } else {
            alert('❌ Chave da API inválida ou sem resposta.');
        }
    } catch (error) {
        console.error('Erro no teste:', error);
        let errorMsg = '❌ Erro ao testar a chave da API:\n';
        
        if (error.message.includes('API_KEY_INVALID') || error.message.includes('401')) {
            errorMsg += 'Chave inválida. Verifique se copiou corretamente.';
        } else if (error.message.includes('403')) {
            errorMsg += 'Chave sem permissão para usar a API Gemini.';
        } else {
            errorMsg += error.message;
        }
        
        alert(errorMsg);
    }
}

// Função para gerar atividade
async function generateActivity() {
    const apiKey = document.getElementById('apiKey').value.trim();
    const subject = document.getElementById('subject').value;
    const activityType = document.getElementById('activityType').value;
    const objective = document.getElementById('objective').value;

    if (!apiKey) {
        alert('Por favor, insira sua chave da API do Gemini.');
        return;
    }

    if (!subject || !activityType) {
        alert('Por favor, selecione a matéria e o tipo de atividade.');
        return;
    }

    const profile = collectStudentProfile();
    
    // Mostrar loading
    const btn = document.getElementById('generateBtn');
    const btnText = document.getElementById('generateBtnText');
    btn.disabled = true;
    btn.classList.add('loading');
    btnText.textContent = '⏳ Gerando atividade...';

    try {
        const prompt = buildPrompt(profile, subject, activityType, objective);
        const activity = await callGeminiAPI(apiKey, prompt);
        
        currentActivity = {
            profile: profile,
            subject: subject,
            activityType: activityType,
            objective: objective,
            content: activity,
            timestamp: new Date().toLocaleString('pt-BR')
        };

        displayActivity(activity);
        document.getElementById('resultSection').classList.remove('hidden');

    } catch (error) {
        console.error('Erro completo:', error);
        let errorMessage = 'Erro ao gerar atividade. ';
        
        if (error.message.includes('API_KEY_INVALID') || error.message.includes('401')) {
            errorMessage += 'Chave da API inválida. Verifique se sua chave está correta.';
        } else if (error.message.includes('QUOTA_EXCEEDED') || error.message.includes('429')) {
            errorMessage += 'Cota da API excedida. Tente novamente mais tarde.';
        } else if (error.message.includes('400')) {
            errorMessage += 'Formato da requisição inválido.';
        } else if (error.message.includes('403')) {
            errorMessage += 'Acesso negado. Verifique as permissões da sua chave da API.';
        } else {
            errorMessage += `Detalhes: ${error.message}`;
        }
        
        alert(errorMessage);
    } finally {
        // Restaurar botão
        btn.disabled = false;
        btn.classList.remove('loading');
        btnText.textContent = '🚀 Gerar Atividade Adaptada';
    }
}

// Função para construir o prompt para a API
function buildPrompt(profile, subject, activityType, objective) {
    let prompt = `Crie uma atividade educacional adaptada com as seguintes especificações:

PERFIL DO ESTUDANTE:
- Nome: ${profile.name || 'Estudante'}
- Idade: ${profile.age || 'Não informado'} anos
- Série: ${profile.grade || 'Não informada'}

CARACTERÍSTICAS COGNITIVAS:
- Dificuldades específicas: ${profile.cognitiveDifficulties.length > 0 ? profile.cognitiveDifficulties.join(', ') : 'Nenhuma informada'}
- Nível de atenção: ${profile.attentionLevel || 'Não informado'}
- Estilo de aprendizagem: ${profile.learningStyle || 'Não informado'}

CARACTERÍSTICAS MOTORAS:
- Coordenação motora fina: ${profile.fineMotor || 'Não informado'}
- Coordenação motora grossa: ${profile.grossMotor || 'Não informado'}
- Mobilidade: ${profile.mobility.length > 0 ? profile.mobility.join(', ') : 'Sem limitações informadas'}

CARACTERÍSTICAS SOCIAIS E EMOCIONAIS:
- Interação social: ${profile.socialInteraction || 'Não informado'}
- Trabalho em grupo: ${profile.groupWork || 'Não informado'}
- Regulação emocional: ${profile.emotionalRegulation || 'Não informado'}
- Motivação: ${profile.motivation || 'Não informado'}

INTERESSES: ${profile.interests || 'Não informados'}
OBSERVAÇÕES ESPECIAIS: ${profile.observations || 'Nenhuma'}

REQUISITOS DA ATIVIDADE:
- Matéria: ${subject}
- Tipo de atividade: ${activityType}
- Objetivo específico: ${objective || 'Desenvolver habilidades gerais da matéria'}

INSTRUÇÕES:
1. Crie uma atividade COMPLETAMENTE ADAPTADA às necessidades específicas deste estudante
2. Considere todas as características cognitivas, motoras, sociais e emocionais
3. Inclua adaptações específicas para as dificuldades mencionadas
4. Forneça instruções claras para o professor/educador
5. Sugira variações e progressões da atividade
6. Inclua dicas de avaliação adaptada
7. Considere os interesses do estudante para tornar a atividade mais engajante

Formate a resposta em HTML com estrutura clara e organizada, incluindo:
- Título da atividade
- Objetivos de aprendizagem
- Materiais necessários
- Instruções passo a passo
- Adaptações específicas
- Dicas para o educador
- Formas de avaliação
- Variações possíveis

Use formatação HTML adequada com títulos, listas e destaque para informações importantes.`;

    return prompt;
}

// Função para chamar a API do Gemini
async function callGeminiAPI(apiKey, prompt) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 8192,
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Erro da API:', response.status, response.statusText, errorData);
            throw new Error(`Erro na API (${response.status}): ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            console.error('Resposta inesperada da API:', data);
            throw new Error('Resposta inválida da API');
        }

        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Erro detalhado:', error);
        throw error;
    }
}

// Função para exibir a atividade
function displayActivity(activity) {
    document.getElementById('activityResult').innerHTML = activity;
}

// Função para salvar atividade
function saveActivity() {
    if (!currentActivity) return;
    
    savedActivitiesList.push({...currentActivity, id: Date.now()});
    updateSavedActivitiesList();
    alert('Atividade salva com sucesso!');
}

// Função para atualizar lista de atividades salvas
function updateSavedActivitiesList() {
    const container = document.getElementById('savedActivities');
    const list = document.getElementById('savedList');
    
    if (savedActivitiesList.length === 0) {
        container.classList.add('hidden');
        return;
    }
    
    container.classList.remove('hidden');
    list.innerHTML = savedActivitiesList.map(activity => `
        <div class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="font-semibold text-gray-800">${activity.subject} - ${activity.activityType}</h4>
                    <p class="text-sm text-gray-600">Estudante: ${activity.profile.name || 'N/A'}</p>
                    <p class="text-xs text-gray-500">${activity.timestamp}</p>
                </div>
                <div class="flex space-x-2">
                    <button onclick="viewSavedActivity(${activity.id})" class="text-blue-600 hover:text-blue-800 text-sm">Ver</button>
                    <button onclick="deleteSavedActivity(${activity.id})" class="text-red-600 hover:text-red-800 text-sm">Excluir</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Função para visualizar atividade salva
function viewSavedActivity(id) {
    const activity = savedActivitiesList.find(a => a.id === id);
    if (activity) {
        currentActivity = activity;
        displayActivity(activity.content);
        document.getElementById('resultSection').classList.remove('hidden');
        document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para deletar atividade salva
function deleteSavedActivity(id) {
    if (confirm('Tem certeza que deseja excluir esta atividade?')) {
        savedActivitiesList = savedActivitiesList.filter(a => a.id !== id);
        updateSavedActivitiesList();
    }
}

// Função para imprimir atividade
function printActivity() {
    if (!currentActivity) return;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Atividade - ${currentActivity.subject}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1, h2, h3 { color: #333; }
                .student-info { background: #f5f5f5; padding: 15px; margin-bottom: 20px; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="student-info">
                <h2>Informações do Estudante</h2>
                <p><strong>Nome:</strong> ${currentActivity.profile.name || 'N/A'}</p>
                <p><strong>Idade:</strong> ${currentActivity.profile.age || 'N/A'} anos</p>
                <p><strong>Série:</strong> ${currentActivity.profile.grade || 'N/A'}</p>
                <p><strong>Data:</strong> ${currentActivity.timestamp}</p>
            </div>
            ${currentActivity.content}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Função para gerar variação da atividade
async function generateVariation() {
    if (!currentActivity) return;
    
    const apiKey = document.getElementById('apiKey').value;
    if (!apiKey) {
        alert('Por favor, insira sua chave da API do Gemini.');
        return;
    }

    const btn = document.getElementById('generateBtn');
    const btnText = document.getElementById('generateBtnText');
    btn.disabled = true;
    btn.classList.add('loading');
    btnText.textContent = '⏳ Gerando variação...';

    try {
        const variationPrompt = buildVariationPrompt(currentActivity);
        const variation = await callGeminiAPI(apiKey, variationPrompt);
        
        currentActivity.content = variation;
        currentActivity.timestamp = new Date().toLocaleString('pt-BR');
        
        displayActivity(variation);

    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao gerar variação. Tente novamente.');
    } finally {
        btn.disabled = false;
        btn.classList.remove('loading');
        btnText.textContent = '🚀 Gerar Atividade Adaptada';
    }
}

// Função para construir prompt de variação
function buildVariationPrompt(activity) {
    return `Com base na atividade anterior para o estudante ${activity.profile.name || 'N/A'}, crie uma VARIAÇÃO da mesma atividade que:

1. Mantenha os mesmos objetivos de aprendizagem
2. Use uma abordagem diferente ou formato alternativo
3. Mantenha todas as adaptações necessárias para as características do estudante
4. Seja igualmente engajante mas com elementos novos

Características do estudante para manter as adaptações:
- Dificuldades: ${activity.profile.cognitiveDifficulties.join(', ') || 'Nenhuma'}
- Estilo de aprendizagem: ${activity.profile.learningStyle || 'N/A'}
- Aspectos motores: Coordenação fina ${activity.profile.fineMotor || 'N/A'}, Coordenação grossa ${activity.profile.grossMotor || 'N/A'}
- Aspectos sociais: ${activity.profile.socialInteraction || 'N/A'}
- Interesses: ${activity.profile.interests || 'N/A'}

Matéria: ${activity.subject}
Tipo: ${activity.activityType}

Formate em HTML com estrutura organizada e clara.`;
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Tab inicial
    switchTab('cognitive');
});
