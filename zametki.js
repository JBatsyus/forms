// проверить, есть ли в локал  сторадже комментарий, и если оно не равно null, то мы должны его показать

document.addEventListener("DOMContentLoaded", function (event) {
    let comment = JSON.parse(localStorage.getItem('comment'));
    if (comment != null) {
        document.getElementById("comment").value = comment;
    }
})


function sendMessage() {
    let comment = document.getElementById('comment');
    let notes = document.getElementById("notes");
    let div = document.createElement('div');

    div.innerText = comment.value;
    div.classList.add('zametka');
    notes.appendChild(div);
    comment.value = "";
}


function checkMessage() {
    let comment = document.getElementById("comment").value;

    // проверяем, есть ли заметка в локальном хранилище
    if (localStorage.getItem('comment') == null) {
        localStorage.setItem('comment', JSON.stringify(comment))
    }


    sendMessage();
}