// [file-tag: code-generated-file-0-1781007457736146753]
// Base de dados das receitas criativas
const receitasDados = {
    "talos": {
        titulo: "Sopa Nutritiva de Talos e Legumes",
        ingredientes: [
            "2 xícaras de talos bem lavados (couve, brócolis ou espinafre)",
            "2 batatas médias picadas",
            "1 cenoura picada",
            "1 cebola pequena e 2 dentes de alho",
            "1 colher de sopa de azeite ou óleo",
            "Sal e temperos a gosto"
        ],
        passos: [
            "Refogue a cebola e o alho no azeite até dourarem.",
            "Adicione os talos picados, as batatas e a cenoura na panela.",
            "Cubra com água, adicione o sal e deixe cozinhar até que tudo esteja bem macio.",
            "Se preferir uma sopa cremosa, bata tudo no liquidificador. Sirva quente!"
        ]
    },
    "cascas-banana": {
        titulo: "Bolo Sustentável de Casca de Banana",
        ingredientes: [
            "Cascas de 4 bananas (bem lavadas e picadas)",
            "2 ovos",
            "2 xícaras de leite",
            "2 colheres de sopa de manteiga",
            "2 xícaras de açúcar",
            "3 xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó"
        ],
        passos: [
            "Bata no liquidificador as cascas de banana, os ovos, o leite, a manteiga e o açúcar.",
            "Despeje essa mistura em uma tigela e adicione a farinha de trigo aos poucos, misturando bem.",
            "Por último, adicione o fermento em pó e misture delicadamente.",
            "Derrame em uma forma untada e asse em forno médio (180°C) por cerca de 30 minutos."
        ]
    },
    "cascas-batata": {
        titulo: "Chips Crocantes de Casca de Batata",
        ingredientes: [
            "Cascas de batatas bem lavadas e secas",
            "1 colher de sopa de azeite",
            "Sal, orégano e páprica a gosto"
        ],
        passos: [
            "Certifique-se de que as cascas estão completamente secas usando um pano limpo.",
            "Coloque as cascas em uma assadeira e regue com o azeite.",
            "Adicione o sal, o orégano e a páprica, misturando bem com as mãos para espalhar o tempero.",
            "Leve ao forno preaquecido a 200°C por 15 a 20 minutos ou até ficarem bem crocantes."
        ]
    },
    "arroz": {
        titulo: "Bolinho de Arroz de Forno Prático",
        ingredientes: [
            "2 xícaras de sobras de arroz cozido",
            "1/2 xícara de queijo ralado (opcional)",
            "1/2 xícara de leite",
            "2 colheres de sopa de cheiro-verde picado",
            "1 ovo",
            "3 colheres de sopa de farinha de trigo",
            "1 colher de chá de fermento em pó"
        ],
        passos: [
            "Em uma tigela, misture bem o arroz, o queijo ralado, o cheiro-verde, o ovo e o leite.",
            "Adicione a farinha de trigo e o fermento por último, mexendo até formar uma massa liga.",
            "Com o auxílio de duas colheres, molde os bolinhos e coloque-os em uma fôrma untada.",
            "Asse em forno preaquecido a 200°C por aproximadamente 20 a 25 minutos até dourarem."
        ]
    }
};

// Elementos da Calculadora
const inputAlimento = document.getElementById('food-weight');
const btnCalcular = document.getElementById('btn-calcular');
const resDinheiro = document.getElementById('res-dinheiro');
const resAgua = document.getElementById('res-agua');

// Elementos das Receitas
const ingredienteSelect = document.getElementById('ingredient-select');
const recipeDisplay = document.getElementById('recipe-display');
const recipeTitle = document.getElementById('recipe-title');
const recipeIngredientsList = document.getElementById('recipe-ingredients-list');
const recipeStepsList = document.getElementById('recipe-steps-list');

// Lógica da Calculadora de Impacto
btnCalcular.addEventListener('click', () => {
    const pesoSemanal = parseFloat(inputAlimento.value);

    if (isNaN(pesoSemanal) || pesoSemanal <= 0) {
        alert("Por favor, insira um valor válido de desperdício em quilos.");
        return;
    }

    // Projeção Anual (52 semanas)
    const pesoAnual = pesoSemanal * 52;

    // Métricas: Custo médio estimado de R$12 por kg de comida aproveitável
    // E pegada hídrica agregada estimada de 1.500 litros de água por kg produzido.
    const prejuizoDinheiroAnual = pesoAnual * 12;
    const aguaDesperdicadaAnual = pesoAnual * 1500;

    // Atualizar os campos formatados para o formato brasileiro
    resDinheiro.textContent = `R$ ${prejuizoDinheiroAnual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    resAgua.textContent = `${aguaDesperdicadaAnual.toLocaleString('pt-BR')} Litros`;
});

// Lógica do Gerador Automático de Receitas
ingredienteSelect.addEventListener('change', (e) => {
    const ingredienteSelecionado = e.target.value;

    if (!ingredienteSelecionado) {
        recipeDisplay.classList.add('hidden');
        return;
    }

    const receita = receitasDados[ingredienteSelecionado];

    if (receita) {
        recipeIngredientsList.innerHTML = "";
        recipeStepsList.innerHTML = "";
        recipeTitle.textContent = receita.titulo;

        receita.ingredientes.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing;
            recipeIngredientsList.appendChild(li);
        });

        receita.passos.forEach(passo => {
            const li = document.createElement('li');
            li.textContent = passo;
            recipeStepsList.appendChild(li);
        });

        recipeDisplay.classList.remove('hidden');
        recipeDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});