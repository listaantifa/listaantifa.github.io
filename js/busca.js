function buscar() {
    let nome = document.getElementById("nome").value;
    let nome2 = removerAcentos(nome.trim().replace(/\s\s+/g, ' ').toLowerCase());
    if (nome2 !== "") {
        let hash = hex_sha512(nome2);
        if (hashes.has(hash)) {
            encontrado(nome);
        } else {
            naoencontrado(nome);
        }
    }
}

function encontrado(nome) {
    let res = document.getElementById("resultado");
    res.innerHTML = '<div class="toast toast-error">O nome <em>' + nome + "</em> foi <b>encontrado</b> na lista. Como pode ser um homônimo, sugere-se buscar a lista completa e verificar se esta pessoa realmente está nela.</div>";
}

function naoencontrado(nome) {
    let res = document.getElementById("resultado");
    res.innerHTML = '<div class="toast toast-success">O nome <em>' + nome + "</em> <b>não</b> foi encontrado. É recomendável tentar diversas combinações, conforme as dicas abaixo.</div>";
}

/**
 * Remove acentos de strings
 * @param  {String} string acentuada
 * @return {String} string sem acento
 */

var map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};

function removerAcentos(s){ return s.replace(/[\W\[\] ]/g,function(a){return map[a]||a}) };
