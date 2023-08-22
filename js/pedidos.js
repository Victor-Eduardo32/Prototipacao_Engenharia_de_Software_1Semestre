document.addEventListener('DOMContentLoaded', () => {

function finalizar() {
    const btnsFinalizar = document.querySelectorAll(".finalizar");
    btnsFinalizar.forEach(btn => {
        btn.addEventListener('click', (event) => {
            linhaAtual = event.target.parentNode.parentNode;
            document.getElementById("finalizar-pedido").style.display = 'block';
        });
    });

    document.getElementById("btn-sim-con").addEventListener('click', () => {
        linhaAtual.closest('tr').remove();
        document.getElementById("finalizar-pedido").style.display = 'none';
    });

    document.getElementById("btn-nao-con").addEventListener('click', () => {
        document.getElementById("finalizar-pedido").style.display = 'none';
    });
}

function cancelar() {
    const btnsCancelar = document.querySelectorAll(".cancelar");
    btnsCancelar.forEach(btn => {
        btn.addEventListener('click', (event) => {
            linhaAtual = event.target.parentNode.parentNode;
            document.getElementById("cancelar-pedido").style.display = 'block';
        });
    });

    document.getElementById("btn-sim-can").addEventListener('click', () => {
        linhaAtual.closest('tr').remove();
        document.getElementById("cancelar-pedido").style.display = 'none';
    });

    document.getElementById("btn-nao-can").addEventListener('click', () => {
        document.getElementById("cancelar-pedido").style.display = 'none';
    });
}

function impressao() {
    const impressao = document.querySelector(".off");
    impressao.addEventListener('click', () => {
        if(impressao.classList.contains("off")) {
            impressao.classList.remove('off');
            impressao.classList.add('on');
        } else {
            impressao.classList.remove('on');
            impressao.classList.add('off');
        }
    });
}

function adicionarProduto() {
    document.getElementById("add-btn").addEventListener('click', () => {
        document.getElementById("add-pedidos").style.display = 'block';
    });

    document.getElementById("btn-final").addEventListener('click', () => {
        
        // Adicionar as informações a tabela
        const numPd = document.getElementById("numero-input").value;
        const produtoPd = document.getElementById("produtos-input").value;
        const valorPd = document.getElementById("valor-input").value;
        const btnAcoes = `<td>                     
                            <a href="#"><i class="material-icons imprimir">print</i></a>
                            <a href="#"><i class="material-icons red-text cancelar">cancel</i></a>
                            <a href="#"><i class="material-icons green-text finalizar">check_circle</i></a>
                        </td>`;
        

        if(numPd != '' && produtoPd !=' ' && valorPd != '') {
            const infoPedido = document.getElementById("info-pedidos");
            const novaLinha = infoPedido.insertRow();
            const colunaNum = novaLinha.insertCell(0);
            const colunaProduto = novaLinha.insertCell(1);
            const colunaValor = novaLinha.insertCell(2);
            const colunaAcoes = novaLinha.insertCell(3);         

            colunaNum.innerHTML = numPd;
            colunaProduto.innerHTML = produtoPd;
            colunaValor.innerHTML = 'R$' + valorPd;
            colunaAcoes.innerHTML = btnAcoes;

            colunaNum.setAttribute('class', 'numero-pedido');
            colunaProduto.setAttribute('class', 'produto-pedido');
            colunaValor.setAttribute('class', 'valor-pedido');

            //Botão para finalizar o pedido
            finalizar();

            //Botão para cancelar o pedido
            cancelar();

            // Remover o campo de adicionar
            document.getElementById("add-pedidos").style.display = 'none';

            // Limpar os inputs
            document.getElementById("numero-input").value = '';
            document.getElementById("produtos-input").value = '';
            document.getElementById("valor-input").value = '';
        }       
    });

    document.querySelector(".btn-voltar").addEventListener('click', () => {
        document.getElementById("add-pedidos").style.display = 'none';
    });
}

impressao();
cancelar();
finalizar();
adicionarProduto();
});