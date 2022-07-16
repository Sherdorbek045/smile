
// Interface changer

// _ Add new p element to dom
let addNewP = (word) => {
    let e=document.querySelector('p');
    let p = document.createElement('p');
    p.innerHTML = word;
    e.parentNode.appendChild(p).setAttribute('class', 'bottom')
    document.querySelector('.bottom').setAttribute('key', full_example)
}

const p = {
    "p1": "value1",
    "p2": "value2",
    "p3": "value3"
};

let first_languange=[]
let second_languange=[]
for (let [key, value] of Object.entries(p)) {
  first_languange.push(key)
  second_languange.push(value)
}
let getOneWord=()=>{
    let dict;
    let choice=Math.round(Math.random()*(2-1)+1)
    if(choice==1){
        dict=first_languange;
    }else if(choice==2){
        dict=second_languange;
    }
    let choice_word=Math.round(Math.random()*((dict.length-1)-0)+0)
    addNewP(dict[choice_word])
}

// _Example scroller

let scroller = (full_example) => {
    let pies = document.querySelectorAll('p');
    pies.forEach((e) => {
        let html_class = e.classList[0];
        if (html_class == 'top') {
            e.removeAttribute('class');
            e.setAttribute('class', 'hidden')
            e.style.display = 'none'
        } else if (html_class == 'center') {
            e.removeAttribute('class');
            e.setAttribute('class', 'top')
            e.innerHTML = e.getAttribute('key')
        } else if (html_class == 'bottom') {
            e.removeAttribute('class')
            e.setAttribute('class', 'center')
            addNewP(full_example, e)
        }

    })
    return true
}

// Main, controller function
let main = () => {
    if (!document.querySelector('.top')) {
        getOneWord()
    }
    
}






document.addEventListener('click',()=>{
    main()
})





