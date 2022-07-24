// Interface changer

// _ Add new p element to dom
let addNewP = (word) => {
    let e = document.querySelector('.req');
    let p = document.createElement('p');
    p.innerHTML = word;
    e.appendChild(p).setAttribute('class', 'bottom')
}
let dictonary;
let all=0;
localStorage.dictonary ? dictonary=JSON.parse(localStorage.dictonary):location='/client/new word/index.html';
let correct_res = [];
let first_languange = [];
let second_languange = [];
for (let [key, value] of Object.entries(dictonary)) {
    first_languange.push(key)
    second_languange.push(value)
}
let getOneWord = () => {
    let dict;
    let dict_2;
    let choice = Math.round(Math.random() * (2 - 1) + 1)
    if (choice == 1) {
        dict = first_languange;
        dict_2 = second_languange;
    } else if (choice == 2) {
        dict = second_languange;
        dict_2 = first_languange;
    }
    let choice_word = Math.round(Math.random() * ((dict.length - 1) - 0) + 0)
    correct_res.push(dict_2[choice_word])

    scroller(dict[choice_word])
}

// _Example scroller

let scroller = (word) => {
    let pies = document.querySelectorAll('p');
    pies.forEach((e) => {
        let html_class = e.classList[0];
        if (html_class == 'top') {
            e.removeAttribute('class');
            e.setAttribute('class', 'hidden')
            e.style.display = 'none'
        } else if (html_class == 'center') {
            e.removeAttribute('id')
            e.removeAttribute('class');
            e.setAttribute('class', 'top')
        } else if (html_class == 'bottom') {
            e.setAttribute('id', 0)
            e.removeAttribute('class')
            e.setAttribute('class', 'center')
            addNewP(word)
        }

    })
    return true
}

getOneWord()
getOneWord()

//checker
let input = document.querySelector('input');
input.addEventListener('input', (e) => {
    let req = document.querySelector('.center');
    if ((e.target.value).toLowerCase() == correct_res[req.id]) {
        getOneWord();
        correct_res.shift();
        e.target.value = '';
        input.style.borderBottomColor = 'green'
        document.querySelector('#number').innerHTML=(all+=1)
    } else {
        input.style.borderBottomColor = 'red';
    }
})
