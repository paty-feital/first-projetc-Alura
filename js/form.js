var botaoAdicionar = document.querySelector("#adicionar-paciente");

// exemplo abaixo com chamada de função anônima
botaoAdicionar.addEventListener("click", function(event) {
	
	event.preventDefault();
	
	var form = document.querySelector('#form-adiciona');

	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaCliente(paciente);

	if(erros.length > 0) {
		exibeMensagensErro(erros);
		return;
	}

	adicionaPacienteTabela(paciente);

	form.reset();
	limpaMensagemErro();

})

function adicionaPacienteTabela(paciente) {
	var pacienteTr = montaTr(paciente);
	var tabelaTbody = document.querySelector('#tabela-pacientes');
	tabelaTbody.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente) {

	var pacienteTr = document.createElement('tr');
	pacienteTr.classList.add('paciente');
	
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaCliente(paciente) {

	var erros = [];

	if(paciente.nome.length == 0) {
		erros.push("Nome não pode ser em branco");
	}

	if(!validaPeso(paciente.peso)) {
		erros.push("Peso inválido");
	}

	if(paciente.peso.length == 0) {
		erros.push("Peso não pode ser em branco");
	}

	if(!validaAltura(paciente.altura)) {
		erros.push("Altura inválida");
	} 

	if(paciente.altura.length == 0) {
		erros.push("Altura não pode ser em branco");
	}

	if(paciente.gordura <= 0 || paciente.gordura.length == 0) {
		erros.push("Gordura inválida");
	}

	return erros;
}

function exibeMensagensErro(erros) {

//	var ul = document.querySelector('#mensagens-erro');

	var ul = limpaMensagemErro();
	
	erros.forEach(function(erro) {

		var li = document.createElement('li');
		li.textContent = erro;
		ul.appendChild(li);
	})

}

function limpaMensagemErro() {

	var ul = document.querySelector('#mensagens-erro');
	ul.innerHTML = '';

	return ul;

}