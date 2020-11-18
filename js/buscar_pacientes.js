var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
	
	xhr.addEventListener('load', function() {
		var erroAjax = document.querySelector("#erro-ajax");

		if (xhr.status == 200) {
			erroAjax.classList.add("invisivel");
			var resposta = xhr.responseText; // string
			var pacientes = JSON.parse(resposta); // converte para objeto

			pacientes.forEach( function(paciente) {

				adicionaPacienteTabela(paciente);

			}) 
		} else {
			erroAjax.classList.remove("invisivel");
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
	xhr.send();
});