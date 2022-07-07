let userName;
buttom__task1.addEventListener('click', function() {
    user_name = prompt("input name")
    var arr = Array.from(user_name);
    console.log(arr); //проверка
    checkNumber(arr);
});

function checkNumber(arr) {
    let newName = "";
    for (let index = 0; index < arr.length; index++) {
        if (isNaN(arr[index])) {
            let a = arr[index];
            console.log(a);
            newName = newName.concat(arr[index]);
        }
    }
    alert(newName);
}

//-----------------------------------
buttom__task2.addEventListener('click', function() {
    var modal = modal();
    document.querySelector('#buttom__task2').addEventListener('click', function() {
        modal.show();
    })
});