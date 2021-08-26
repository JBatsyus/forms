
function newFoto() {
    let file    = document.querySelector('input[type=file]').files[0];
    let newFoto = document.querySelector('img');
    
    let reader  = new FileReader();
  
    reader.onloadend = function () {
        newFoto.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
        newFoto.src = "";
    }
  }


// проверить, есть ли в локал  сторадже имя, и если оно не равно null, то мы должны его показать

document.addEventListener("DOMContentLoaded", function (event) {

    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById("author").value = name;
    }

    let comment = JSON.parse(localStorage.getItem('comment'));
    if (comment != null) {
        document.getElementById("comment").value = comment;
    }
})

// добавление в див комментария

function sendMessage(author, comment) {
    let userCommet = document.getElementById("comment");
    let otvet = document.querySelector(".chat");
    if (userCommet.value) {
        let str = userCommet.value;
        str = str.toLowerCase();
        let comment = str.replaceAll(/(viagra|xxx|sex|drugs|rock'n'roll)/g, '*****');
        otvet.innerHTML += `<span class='author'>${author}:</span><span>${comment} </span><br>`;
    }
    document.getElementById("comment").value = "";
}

// проверка, добавлено ли  имя пользователя в локальное хранилище
function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;



    // проверяем, есть ли имя пользователя и комментарий в локальном хранилище, если нет, то загружаем
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author)
    }
    if (localStorage.getItem('comment') == null) {
        localStorage.setItem('comment', JSON.stringify(comment))
    }
 sendMessage(author, comment);
}

