document.addEventListener('DOMContentLoaded', () => {
    function mostrar() {
        const corpoConcluido = document.getElementById("corpo-concluido");
        const corpoCancelado = document.getElementById("corpo-cancelado");
        const corpoFaturamento = document.getElementById("corpo-faturamento");

        document.getElementById("concluido").addEventListener('click', () => {
            if (corpoConcluido.style.display === 'none') {
              corpoConcluido.style.display = 'block';
            } else {
              corpoConcluido.style.display = 'none';
            }
          });
      
          document.getElementById("cancelado").addEventListener('click', () => {
            if (corpoCancelado.style.display === 'none') {
              corpoCancelado.style.display = 'block';
            } else {
              corpoCancelado.style.display = 'none';
            }
          });
      
          document.getElementById("faturamento").addEventListener('click', () => {
            if (corpoFaturamento.style.display === 'none') {
              corpoFaturamento.style.display = 'block';
            } else {
              corpoFaturamento.style.display = 'none';
            }
          });
        }      

    mostrar();
});