document.addEventListener("DOMContentLoaded", function () {
    // Variável relacionada ao campo "Possui Diploma" (Tipo: Boolean)
    const possuiDiplomaCheckbox = document.getElementById("possuiDiploma");

    // Adicionar um ouvinte de evento para o checkbox "Possui Diploma"
    possuiDiplomaCheckbox.addEventListener("change", function () {
        if (this.checked) {
            diplomaField.style.display = "block";
        } else {
            diplomaField.style.display = "none";
        }
    });

    // Variável relacionada ao formulário de cadastro (Tipo: HTMLFormElement)
    const cadastroForm = document.getElementById("cadastroForm");

    cadastroForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Variável relacionada ao campo "Nome" (Tipo: String)
        const nome = document.getElementById("nome").value;

        // Variável relacionada ao campo "Idade" (Tipo: Number - Inteiro)
        const idade = parseInt(document.getElementById("idade").value);

        // Variável relacionada ao campo "Salário" (Tipo: Number - Decimal)
        const salario = parseFloat(document.getElementById("salario").value);

        // Variável relacionada ao campo "Possui Diploma" (Tipo: Boolean)
        const possuiDiploma = document.getElementById("possuiDiploma").checked;

        // Variável relacionada ao campo "Tipo de Diploma" (Tipo: String)
        const diploma = document.getElementById("diploma").value;

        // Verificando tipos e exibindo no console
        console.log("Nome (String):", nome);
        console.log("Idade (Number - Inteiro):", idade);
        console.log("Salário (Number - Decimal):", salario);
        console.log("Possui Diploma (Boolean):", possuiDiploma);
        if (possuiDiploma) {
            console.log("Qual Diploma (String):", diploma);
        }
    });
});
