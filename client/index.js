let button_values=[
    './index',
    './new word/index',
    './yangi sahifa/index'
]
document.querySelectorAll('button').forEach((e)=>{
    open(button_values[e.value]+'.html')
})