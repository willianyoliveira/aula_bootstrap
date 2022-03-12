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
	
	var that = this;
	var sUrl = "acrescentarUrl"
	$.ajax(sUrl,{
		method: "POST",
		data: JSON.stringify(dados_equipamento),
		contentType: "aplication/json; charset=UTF-8",
		success: function (response) {
			const resp = typeof response === "string" ? JSON.parse(response) : response;
			if(resp.counter > 0){
				xhr.send(data)
				that._onCreateSuccessDialog();
			}else{
				that._onCreateErrorDialog();
			}
		},
		error: function(){

		}

	});
}
