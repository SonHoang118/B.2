const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnElement = $('.btn')
const btnTextElement = $$('.btn .text-btn b')

console.log(btnTextElement)
// btnElement.onclick = function(){
//     btnTextElement.classList.add('btn-text-active')
// }

btnTextElement.forEach(element => {
    console.log(element.innerText)
});
console.log(btnTextElement.length)

// setTimeout(() => {
//     // btnTextElement.classList.add('btn-text-active')
//     for(var i=0;i<btnTextElement.length;i++){
//         if(btnTextElement[i].classList.contains('btn-text-active')){
//             console.log(btnTextElement[i].innerText)
//             btnTextElement[i].classList.remove('btn-text-active')
//             if(i==(btnTextElement.length-1)){

//                 btnTextElement[0].classList.add('btn-text-active')
//             }
//             else{
//                 btnTextElement[i+1].classList.add('btn-text-active')
//             }
//             b
//         }
//     }
// },3000)

// btnTextElement[0].style = 'display:block'
btnTextElement[0].style = 'animation: switch_text_hide .5s linear forwards'
setTimeout(()=>{
    // btnTextElement[0].style = 'display: none;'

},500)