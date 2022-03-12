function cadastrar_equipamento() {
	let nome = document.getElementById("nome_equipamento").value;
	let id = document.getElementById("id_equipamento").value;
	let linha = document.getElementById("linha").value;
	let local = document.getElementById("local").value;
	let frequencia_aplicacao = document.getElementById("frequencia_aplicacao").value;
	let dados_equipamento = {
		nome: nome,
		id: id,
		linha: linha,
		local: local,
		frequencia_aplicacao: frequencia_aplicacao
	}
	console.log(dados_equipamento)
}