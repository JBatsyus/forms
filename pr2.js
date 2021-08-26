

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

    // let file = JSON.parse(localStorage.getItem('file'));
    // if (file != null) {
    //     document.querySelector('input[type=file]').files[0] = file;
    // }

    
})

// добавление в див комментария

function sendMessage(author, comment) {
    let userCommet = document.getElementById("comment");
    let otvet = document.querySelector(".chat");

    // добавляем основу сообщения
    let newMessage = document.createElement('div');
    newMessage.className = 'message';

   
        

    // добавляем имя и комментарий
    if (userCommet.value) {
        
        let str = userCommet.value;
        str = str.toLowerCase();
        let comment = str.replaceAll(/(viagra|xxx|sex|drugs|rock'n'roll)/g, '*****');
        otvet.innerHTML +=`<span class='author'>${author}:</span><span>${comment} </span><br>`;
    }
    document.getElementById("comment").value = "";
    
    // добавляем аватарку
    let file = document.querySelector('input[type=file]').files[0];
    if (file) {
        let reader = new FileReader();

        reader.onloadend = function () {
            newMessage.innerHTML += `<img class="avatar" src="${reader.result}"/>`;
        }
        reader.readAsDataURL(file);
    }
 
    // добавляем коммент к чату
    otvet.appendChild(newMessage);

}

// проверка, добавлено ли  имя пользователя в локальное хранилище
function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;
    // let file = document.querySelector('input[type=file]').files[0];
    



    // проверяем, есть ли имя пользователя и комментарий в локальном хранилище, если нет, то загружаем
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author)
    }
    if (localStorage.getItem('comment') == null) {
        localStorage.setItem('comment', JSON.stringify(comment))
    }

    // if (localStorage.getItem('file') == null) {
    //     localStorage.setItem('file', JSON.stringify(file))
    // }
    sendMessage(author, comment);
}