
function cl(...element) {
    console.log(String(element))
}
// Example generator

// _Random number
// const a_number = (start, end) => {
//     let number = Math.round(Math.random() * (start - end) + end);
//     return number
// }
// const generator = (operator) => {
//     let level = localStorage.level || false
//     let start = 1;
//     let end = 0;
//     let example = 0;
//     let str_example = '';
//     if (level == 'easy') {
//         end = 100
//     } else if (level == 'middle') {
//         end = 1000
//     } else if (level == "difficult") {
//         end = 100000
//     } else {
//         console.error('Daraja yuklanmadi')
//     }
//     let number = a_number(start, end);
//     let number_2 = a_number(start, end);
//     if (operator == '+') {
//         return example = `${number}+${number_2}=${number+number_2}`
//     } else if (operator == '-') {
//         return example = `${number}-${number_2}=${number-number_2}`
//     } else if (operator == '×') {
//         return example = `${number}×${number_2}=${number*number_2}`
//     } else if (operator == '÷') {
//         return example = `${number}÷${number_2}=${number/number_2}`
//     }

// }

// Interface changer

// _ Add new p element to dom
let addNewP = (word) => {
    let e = document.querySelector('p')
    let p = document.createElement('p');
    p.innerHTML = word;
    e.parentNode.appendChild(p).setAttribute('class', 'bottom')
    document.querySelector('.bottom')
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
            e.removeAttribute('class');
            e.setAttribute('class', 'top')
            e.innerHTML = e.getAttribute('key')
        } else if (html_class == 'bottom') {
            e.removeAttribute('class')
            e.setAttribute('class', 'center')
            addNewP(word)
        }

    })
    return true
}

// _Resoult checker
// let checker = (resoult) => {
//     document.querySelectorAll('button').forEach((e) => {
//         e.addEventListener('click', () => {
//             if (e.innerHTML == resoult) {
//                 cl(true)
//                 main()
//             } else {
//                 cl(false)
//                 main()
//             }
//         })
//     })
// }

// _Button text changer
// let button_setter = (resoult) => {
//     localStorage.setItem('true_set', Math.round(Math.random() * 4))
//     let counter = 0;
//     document.querySelectorAll('button').forEach((e) => {
//         if (counter == localStorage.true_set) {
//             e.innerHTML = resoult.split('=')[1];
//         } else {
//             let wrong_result = Math.round(Math.random() * (Number(resoult.split('=')[1]) + 35))
//             e.innerHTML = wrong_result != resoult ? wrong_result : 0
//         }
//         counter += 1;
//     })
//     return true
// }

// let resoult_getter = () => {
//     return document.querySelector('.center').getAttribute('key')
// }
// Main, controller function
// let main = () => {
//     let operator = '+'
//     if (!document.querySelector('.top')) {
//         scroller(generator(operator))
//     }
//     if (scroller(generator(operator))) {
//         if (button_setter(resoult_getter())) {
//             checker(resoult_getter().split('=')[1])
//         }
//     }
// }
// main()

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
addNewP(first_languange[0])
scroller(second_languange[0])


document.addEventListener('click',()=>{
    addNewP(first_languange[1])
    scroller(first_languange[0])
})



