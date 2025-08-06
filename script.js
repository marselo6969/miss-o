const CaixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-perguntas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultados");

const perguntas =[
    {
        enunciado:"Quem foi o 1 campeão mundial de surfe?",
        alternativas:[
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta correta",
                pontos:1 
            }
        ]
    }
]