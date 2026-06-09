const receitasDados = {
    "talos": {
        titulo: "Sopa Nutritiva de Talos e Legumes",
        ingredientes: [
            "2 xícaras de talos bem lavados (couve, brócolis ou espinafre)",
            "2 batatas médias picadas",
            "1 cenoura picada",
            "1 colher de sopa de azeite",
            "Sal e temperos a gosto"
        ],
        passos: [
            "Refogue alho e cebola no azeite.",
            "Adicione os talos picados, as batatas e a cenoura.",
            "Cubra com água e cozinhe até amaciar.",
            "Bata no liquidificador se preferir consistência de creme."
        ]
    },
    "cascas-banana": {
        titulo: "Bolo de Casca de Banana",
        ingredientes: [
            "Cascas de 4 bananas lavadas",
            "2 ovos",
            "2 xícaras de leite",
            "2 colheres de manteiga",
            "2 xícaras de açúcar",
            "3 xícaras de farinha de trigo",
            "1 colher de fermento"
        ],
        passos: [
            "Bata as cascas, ovos, leite, manteiga e açúcar no liquidificador.",
            "Misture com a farinha em uma tigela separada.",
            "Adicione o fermento e asse por 30 minutos a 180°C."
        ]
    },
    "cascas-batata": {
        titulo: "Chips de Casca de Batata",
        ingredientes: [
            "Cascas de batatas limpas e bem secas",
            "1 colher de azeite",
            "Sal e temperos a gosto"
        ],
        passos: [
            "Espalhe as cascas secas em uma assadeira.",
            "Regue com azeite e misture os temperos.",
            "Asse a 200°C por 15 minutos até dourar."
        ]
    },
    "arroz": {
        titulo: "Bolinho de Arroz de Forno",
        ingredientes: [
            "2 xícaras de arroz cozido amanhecido",
            "1 ovo",
            "1/2 xícara de leite",
            "3 colheres de farinha de trigo",
            "Tempero verde e sal"
        ],
        passos: [
            "Misture todos os ingredientes em uma bacia.",
            "Molde os bolinhos usando duas colheres.",
            "Coloque em forma untada e asse por 20 minutos a 200°C."
        ]
    }
};

const inputAlimento = document.getElementById('food-weight');
const btnCalcular = document.getElementById('btn-calcular');
const resDinheiro = document.getElementById('res-dinheiro');
const resAgua = document.getElementById('res-agua');
const ingredienteSelect = document.getElementById('ingredient-select');
const recipeDisplay = document.getElementById('recipe-display');
const recipeTitle = document.getElementById('recipe-title');
const recipeIngredientsList = document.getElementById('recipe-ingredients-list');
const recipeStepsList = document.getElementById('recipe-steps-list');

btnCalcular.addEventListener('click', () => {
    const pesoSemanal = parseFloat(inputAlimento.value);

    if (isNaN(pesoSemanal) || pesoSemanal <= 0) {
        alert("Por favor, insira um peso válido.");
        return;
    }

    const pesoAnual = pesoSemanal * 52;
    const prejuizoDinheiroAnual = pesoAnual * 12; 
    const aguaDesperdicadaAnual = pesoAnual * 1500; 

    resDinheiro.textContent = `R$ ${prejuizoDinheiroAnual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    resAgua.textContent = `${aguaDesperdicadaAnual.toLocaleString('pt-BR')} Litros`;
});

ingredienteSelect.addEventListener('change', (e) => {
    const selecionado = e.target.value;

    if (!selecionado) {
        recipeDisplay.classList.add('hidden');
        return;
    }

    const receita = receitasDados[selecionado];

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
    }
});