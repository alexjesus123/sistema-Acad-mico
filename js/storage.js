console.log("Módulo de armazenamento carregado.");
const STORAGE_KEYS={alunos:"academico_alunos",cursos:"academico_cursos",matriculas:"academico_matriculas",usuarios:"academico_usuarios"};
function salvarDados(chave,dados){try{localStorage.setItem(chave,JSON.stringify(dados));return true}catch(erro){console.error("Erro ao salvar dados",erro);alert("Não foi possível salvar os dados neste navegador.");return false}}
function carregarDados(chave,padrao){try{const valor=localStorage.getItem(chave);if(valor===null)return structuredClone(padrao);const parsed=JSON.parse(valor);return Array.isArray(parsed)?parsed:structuredClone(padrao)}catch(erro){console.error("Erro ao carregar dados",erro);return structuredClone(padrao)}}
function removerDados(chave){localStorage.removeItem(chave)}
function limparDadosAcademicos(){Object.values(STORAGE_KEYS).forEach(removerDados)}