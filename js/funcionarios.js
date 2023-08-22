document.addEventListener('DOMContentLoaded', () => {
  function editar() {
    const btnEditar = document.querySelectorAll(".btn-editar");
    const btnFinalEditar = document.getElementById("btn-final-editar");
    const btnVoltar = document.querySelector(".btn-voltar");
    const addFuncionario = document.getElementById("add-funcionario");
  
    btnEditar.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabela = btn.closest('table');
        const nome = tabela.querySelector('.info-funcionario-1');
        const valor = tabela.querySelector('.info-funcionario-2');
        const telefone = tabela.querySelector('.info-funcionario-3');
        const horas = tabela.querySelector('.info-funcionario-4');
        const email = tabela.querySelector('.info-funcionario-5');
        const senha = tabela.querySelector('.info-funcionario-6');
  
        document.getElementById("nome-funcionario").value = nome.textContent;
        document.getElementById("valor-salarial").value = valor.textContent.replace("R$", "");
        document.getElementById("telefone-funcionario").value = telefone.textContent;
        document.getElementById("horas-funcionario").value = horas.textContent;
        document.getElementById("email-funcionario").value = email.textContent;
        document.getElementById("senha-funcionario").value = senha.textContent;
        
        addFuncionario.style.display = 'block';
        btnFinalEditar.style.display = 'block';
        
        btnFinalEditar .addEventListener('click', () => {
          // Atualize os dados da tabela com os novos dados fornecidos pelo usuário
          nome.innerHTML = document.getElementById("nome-funcionario").value;
          valor.textContent = "R$" + document.getElementById("valor-salarial").value;
          telefone.textContent = document.getElementById("telefone-funcionario").value;
          horas.textContent = document.getElementById("horas-funcionario").value;
          email.textContent = document.getElementById("email-funcionario").value;
          senha.textContent = document.getElementById("senha-funcionario").value;
  
          addFuncionario.style.display = 'none';
          btnFinalEditar.style.display = 'none';

          btnVoltar.addEventListener('click', () => {
            document.getElementById("btn-final").style.display = 'none';
            document.getElementById("btn-final-editar").style.display = 'none';
            document.getElementById("add-funcionario").style.display = 'none';
          });
        });
      });
    });
  }

  function excluir() {
    const btnExcluir = document.querySelectorAll(".btn-excluir");
    const btnSim = document.getElementById("btn-sim");
    const btnNao = document.getElementById("btn-nao");
  
    btnExcluir.forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById("remover-funcionario").style.display = 'block';
        btnSim.addEventListener('click', () => {
          const tabela = btn.closest('table');
          const iconeFuncionario = tabela.previousElementSibling;
          if (iconeFuncionario !== null) {
            iconeFuncionario.remove();
          }
          tabela.remove();
          document.getElementById("remover-funcionario").style.display = 'none';
        });
        
        btnNao.addEventListener('click', () => {
          document.getElementById("remover-funcionario").style.display = 'none';
        });
      });
    });
  }

function addFuncionario() {
  const btnAdd = document.getElementById("add-btn");
  const btnFinal = document.getElementById("btn-final");
  const addFuncionario = document.getElementById("add-funcionario");

  btnAdd.addEventListener('click', () => {
    addFuncionario.style.display = 'block';
    btnFinal.style.display = 'block';          
    document.getElementById("nome-funcionario").value = '';
    document.getElementById("valor-salarial").value = '';
    document.getElementById("telefone-funcionario").value = '';
    document.getElementById("horas-funcionario").value = '';
    document.getElementById("email-funcionario").value = '';
    document.getElementById("senha-funcionario").value = '';
    });

  btnFinal.addEventListener('click', () => {
    const nomeFnr = document.getElementById("nome-funcionario").value;
    const valorFnr = document.getElementById("valor-salarial").value;
    const telefoneFnr = document.getElementById("telefone-funcionario").value;
    const horasFnr = document.getElementById("horas-funcionario").value;
    const emailFnr = document.getElementById("email-funcionario").value;
    const senhaFnr = document.getElementById("senha-funcionario").value;

    if (nomeFnr != '' && valorFnr != '' && telefoneFnr != '' && horasFnr != '' && emailFnr != '' && senhaFnr != '') {
      const novaTabela = document.createElement('table');
      novaTabela.classList.add('tabela');

      const iconFunc = document.createElement('i');
      iconFunc.classList.add('material-icons');
      iconFunc.classList.add('icon-funcionario');
      iconFunc.innerText = 'account_circle';


      const primeiroHd = document.createElement("thead");
      const corpo1Hd = primeiroHd.insertRow();
      corpo1Hd.classList.add('primeiro-titulo-info');
      const nomeHd = corpo1Hd.insertCell(0);
      nomeHd.innerHTML = 'Nome';
      const valorHd = corpo1Hd.insertCell(1);
      valorHd.innerHTML = 'Salário';
      const telefoneHd = corpo1Hd.insertCell(2);
      telefoneHd.innerHTML = 'Telefone';
      const horasHd = corpo1Hd.insertCell(3);
      horasHd.innerHTML = 'Expediente';

      const primeiraInfo = document.createElement("tbody");
      primeiraInfo.classList.add('primeira-info-funcionario');
      const infoFuncionario1 = primeiraInfo.insertRow();
      infoFuncionario1.classList.add('primeira-info');
      const colunaNome = infoFuncionario1.insertCell(0);
      colunaNome.innerHTML = nomeFnr;
      colunaNome.classList.add("info-funcionario-1");
      const colunaValor = infoFuncionario1.insertCell(1);
      colunaValor.innerHTML = "R$" + valorFnr + ".00";
      colunaValor.classList.add("info-funcionario-2");
      const colunaTelefone = infoFuncionario1.insertCell(2);
      colunaTelefone.innerHTML = telefoneFnr;
      colunaTelefone.classList.add("info-funcionario-3");
      const colunaHoras = infoFuncionario1.insertCell(3);
      colunaHoras.innerHTML = horasFnr;
      colunaHoras.classList.add("info-funcionario-4");

      const segundoHd = document.createElement("thead");
      const corpo2Hd = segundoHd.insertRow();
      corpo2Hd.classList.add('segundo-titulo-info');
      const emailHd = corpo2Hd.insertCell(0);
      emailHd.innerHTML = 'Email';
      const senhaHd = corpo2Hd.insertCell(1);
      senhaHd.innerHTML = 'Senha';

      const segundaInfo = document.createElement("tbody");
      segundaInfo.classList.add('segunda-info-funcionario');
      const infoFuncionario2 = segundaInfo.insertRow();
      infoFuncionario2.classList.add('segunda-info');
      const colunaEmail = infoFuncionario2.insertCell(0);
      colunaEmail.innerHTML = emailFnr;
      colunaEmail.classList.add("info-funcionario-5");
      const colunaSenha = infoFuncionario2.insertCell(1);
      colunaSenha.innerHTML = senhaFnr;
      colunaSenha.classList.add("info-funcionario-6");

      const iconesFun = document.createElement("tbody");
      iconesFun.classList.add('icones-funcionarios')
      const inserirIcones = iconesFun.insertRow();
      const iconeEdit = inserirIcones.insertCell(0);
      iconeEdit.classList.add('icon-edit');
      iconeEdit.innerHTML = '<i class="material-icons btn-editar">edit</i>';
      const iconeExcluir = inserirIcones.insertCell(1);
      iconeExcluir.classList.add('icon-delete');
      iconeExcluir.innerHTML = '<i class="material-icons btn-excluir">delete</i>';

      novaTabela.appendChild(primeiroHd);
      novaTabela.appendChild(primeiraInfo);
      novaTabela.appendChild(segundoHd);
      novaTabela.appendChild(segundaInfo);
      novaTabela.appendChild(iconesFun);
      iconFunc.appendChild(novaTabela);

      document.getElementById("funcionarios").appendChild(iconFunc); 

      document.getElementById("funcionarios").appendChild(novaTabela);

      addFuncionario.style.display = 'none';
      btnFinal.style.display = 'none';

      excluir();
      editar();

      } 
      
      document.querySelector(".btn-voltar").addEventListener('click', () => {
        document.getElementById("add-funcionario").style.display = 'none';
        document.getElementById("btn-final").style.display = 'none';
        document.getElementById("btn-editar").style.display = 'none';
    });
    });
  }

    document.querySelector(".btn-voltar").addEventListener('click', () => {
    document.getElementById("btn-final").style.display = 'none';
    document.getElementById("btn-final-editar").style.display = 'none';
    document.getElementById("add-funcionario").style.display = 'none';
  });
  
  addFuncionario();
  excluir();
  editar();
});  