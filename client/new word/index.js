let first_languange = document.getElementById('first_languange')
let second_languange = document.getElementById('second_languange')
let add = document.getElementById('add')
let save = document.getElementById('save')

let dictonary = new Object();

let f_add = () => {
    if (first_languange.value != '' && second_languange.value != '') {
        dictonary[first_languange.value.toLowerCase()] = second_languange.value.toLowerCase();
        first_languange.value = '';
        second_languange.value = '';
        return true
    }
}

add.addEventListener('click', () => {
    f_add();
})

save.addEventListener('click', () => {
    f_add()
    if (localStorage.dictonary) {
        let old_dictonary = JSON.parse(localStorage.dictonary);
        dictonary = Object.assign(dictonary, old_dictonary);
        localStorage.setItem('dictonary', JSON.stringify(dictonary))

    } else {
        localStorage.setItem('dictonary', JSON.stringify(dictonary))
    }
})
