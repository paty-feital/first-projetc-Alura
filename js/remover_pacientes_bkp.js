var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event) {
	var alvoTarget = event.target; // td
	var paiDoAlvo = alvoTarget.parentNode // tr

	paiDoAlvo.remove();

})


/*var pacientes = document.querySelectorAll('.paciente');

	pacientes.forEach(function(paciente) {
		paciente.addEventListener('dblclick', function() {

			console.log('Fui clicado duas vezes - "double click"!!!');
			this.remove();

	})

})
*/