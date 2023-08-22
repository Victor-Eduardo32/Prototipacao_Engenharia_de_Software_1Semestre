document.addEventListener('DOMContentLoaded', () => {

function copiarProduto() {
    const btnsCopiar = document.querySelectorAll(".btn-copiar");
    btnsCopiar.forEach(btn => 
        btn.addEventListener('click', () => {
            const linhaAtual = btn.parentNode.parentNode;
            const novaLinha = linhaAtual.cloneNode(true);
            linhaAtual.insertAdjacentElement('afterend', novaLinha);
            excluirProduto();
            copiarProduto(novaLinha.querySelector(".btn-copiar"));
        }));
}

function excluirProduto() {
    const btnsExcluir = document.querySelectorAll(".btn-excluir");
    btnsExcluir.forEach(btn => {
        btn.addEventListener('click', (event) => {
            linhaAtual = event.target.parentNode.parentNode;
            document.getElementById("remover-produto").style.display = 'block';
        });
    });

    document.getElementById("btn-sim").addEventListener('click', () => {
        linhaAtual.parentNode.removeChild(linhaAtual);
        document.getElementById("remover-produto").style.display = 'none';
    });

    document.getElementById("btn-nao").addEventListener('click', () => {
        document.getElementById("remover-produto").style.display = 'none';
    });
}

function editarProduto() {
    const btnsEditar = document.querySelectorAll(".btn-editar");
    btnsEditar.forEach(btn =>
        btn.addEventListener('click', () => {
            const BtnFinalEditar = document.getElementById("btn-editar");
            document.getElementById("add-produtos").style.display = 'block';
            BtnFinalEditar.style.display = 'block';

            const linhaAtual = btn.parentNode.parentNode;
            const nomePdt = linhaAtual.cells[0].innerHTML;
            const categoriaPdt = linhaAtual.cells[1].innerHTML;
            const valorPdt = linhaAtual.cells[2].innerHTML.replace("R$", "").trim();
            const quantPdt = linhaAtual.cells[3].innerHTML;
            
            document.getElementById("nome-produto").value = nomePdt;
            document.getElementById("categoria-produto").value = categoriaPdt;
            document.getElementById("valor-produto").value = valorPdt;
            document.getElementById("quant-produto").value = quantPdt;            

            BtnFinalEditar.addEventListener('click', function salvarProduto() {
                linhaAtual.cells[0].innerHTML = document.getElementById("nome-produto").value;
                linhaAtual.cells[1].innerHTML = document.getElementById("categoria-produto").value;
                linhaAtual.cells[2].innerHTML = "R$" + document.getElementById("valor-produto").value;
                linhaAtual.cells[3].innerHTML = document.getElementById("quant-produto").value;
                
                document.getElementById("add-produtos").style.display = 'none'
                BtnFinalEditar.removeEventListener('click', salvarProduto);
                BtnFinalEditar.style.display = 'none'
    })}));
}

function adicionarProduto() {
    document.getElementById("add-btn").addEventListener('click', () => {
        document.getElementById("add-produtos").style.display = 'block';
        document.getElementById("btn-final").style.display = 'block';
    });

    document.getElementById("btn-final").addEventListener('click', () => {
        
        // Adicionar as informações a tabela
        const nomePdt = document.getElementById("nome-produto").value;
        const valorPdt = document.getElementById("valor-produto").value;
        const quantPdt = document.getElementById("quant-produto").value;
        const categoriaPdt = document.getElementById("categoria-produto").value;
        const btnAcoes = `<i class="material-icons btn-editar">edit</i>
                        <i class="material-icons btn-excluir">delete</i>
                        <i class="material-icons btn-copiar">content_copy</i>`;
        

        if(nomePdt != '' && valorPdt !=' ' && quantPdt != '' && categoriaPdt != '') {
            const infoProduto = document.getElementById("info-produto");
            const novaLinha = infoProduto.insertRow();
            const colunaNome = novaLinha.insertCell(0);
            const colunaCategoria = novaLinha.insertCell(1);
            const colunaValor = novaLinha.insertCell(2);
            const colunaQuant = novaLinha.insertCell(3);  
            const colunaAcoes = novaLinha.insertCell(4);         

            colunaNome.innerHTML = nomePdt;
            colunaValor.innerHTML = "R$" + valorPdt;
            colunaQuant.innerHTML = quantPdt;
            colunaCategoria.innerHTML = categoriaPdt;
            colunaAcoes.innerHTML = btnAcoes;

            // Botão de remover os novos itens
            excluirProduto();

            //Botão para copiar o produto
            copiarProduto();

            //Botão para editar o produto
            editarProduto();

            // Remover o campo de adicionar
            document.getElementById("add-produtos").style.display = 'none';

            // Limpar os inputs
            document.getElementById("nome-produto").value = '';
            document.getElementById("valor-produto").value = '';
            document.getElementById("quant-produto").value = '';
            document.getElementById("categoria-produto").value = '';
            document.getElementById("btn-final").style.display = 'none';

            document.querySelector(".btn-voltar").addEventListener('click', () => {
                document.getElementById("btn-final").style.display = 'none';
                document.getElementById("btn-editar").style.display = 'none';
                document.getElementById("add-produtos").style.display = 'none';
        
                document.getElementById("nome-produto").value = '';
                document.getElementById("valor-produto").value = '';
                document.getElementById("quant-produto").value = '';
                document.getElementById("categoria-produto").value = '';
            });
        }       
    });

    document.querySelector(".btn-voltar").addEventListener('click', () => {
        document.getElementById("btn-final").style.display = 'none';
        document.getElementById("btn-editar").style.display = 'none';
        document.getElementById("add-produtos").style.display = 'none';

        document.getElementById("nome-produto").value = '';
        document.getElementById("valor-produto").value = '';
        document.getElementById("quant-produto").value = '';
        document.getElementById("categoria-produto").value = '';
    });
}
    
    // Botão e campo de adicionar produto
    adicionarProduto();

    // Botão para remover os itens presentes na tabela
    excluirProduto();

    // Botão para copiar os itens presentes na tabela
    copiarProduto();

    // Botão para editar os itens presentes na tabela
    editarProduto();    
    
});




