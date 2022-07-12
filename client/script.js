let buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        open(e.target.value)
    })
})
