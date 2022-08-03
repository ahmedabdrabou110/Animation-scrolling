// console.log(`object`);

let moon = document.querySelector("#moon2")
let stars = document.querySelector("#stars")
let mountains3 = document.querySelector("#mountains3")
let mountains4 = document.querySelector("#mountains4")
let river = document.querySelector("#river5")
let boat= document.querySelector("#boat6")
let catian = document.querySelector(".catian")
let mountains7 = document.querySelector("#mountains7")
let container = document.querySelector(".main")


window.addEventListener("scroll" , ()=>{
    let val = scrollY ; 
    moon.style.top = `${val * 4}px`
    stars.style.left = `${val *2}px`
    mountains3.style.top=`${val *1.2}px`
    mountains4.style.top=`${val *1.5}px`
    river.style.top = `${val}px`
    boat.style.top =`${val*1.1}px`
    boat.style.left =`${val*3}px`
    catian.style.fontSize = `${val}px`
    if(val >= 67) {
        catian.style.fontSize = `67px`
        catian.style.position = `fixed`
        if(val > 480) {
            catian.style.display = `none`
        }else{
            catian.style.display = `block`
        }
    
        if(val > 60) {
            container.style.background = `linear-gradient(#10001f ,#376281)`
        }else{
            container.style.background = `linear-gradient(#200016 ,transparent)`
    
    }

    
    }

    mountains7.style.top = `${val}px`
})