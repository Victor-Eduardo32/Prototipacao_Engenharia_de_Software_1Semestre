document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("criar-conta").addEventListener('click', () => {
        document.getElementById("campo-cadastro").style.display = 'block';
    })

    document.getElementById("btn-final").addEventListener('click', () => {
        const emailCdt = document.getElementById("cadastro-email").value;
        const senhaCdt = document.getElementById("cadastro-senha").value;

        if(emailCdt != '' && senhaCdt != '') {
            document.getElementById("campo-cadastro").style.display = 'none';

            document.getElementById("cadastro-email").value = '';
            document.getElementById("cadastro-senha").value = '';
        }
    })

    document.getElementById("btn-voltar").addEventListener('click', () => {
        document.getElementById("campo-cadastro").style.display = 'none';

        document.getElementById("cadastro-email").value = '';
        document.getElementById("cadastro-senha").value = '';
    })
})