const submitBtn = document.querySelector(".submit__btn");
const ratingSpace = document.querySelector(".rating__page");
const thankyouSpace = document.querySelector(".thankyou_page");
const ratingEl = document.querySelector('.selected')
let rating = 0;
let ratingDiv = document.querySelector('.rating__numbers')


console.log(ratingDiv)

ratingDiv.addEventListener('click', (event) =>{
    if (event.target.tagName === 'BUTTON'){
        rating = event.target.innerHTML;
        console.log(rating)
    }
})

submitBtn.addEventListener("click", function(){
    ratingSpace.classList.add('hide')
    thankyouSpace.classList.remove('hide')
    ratingEl.innerHTML = `You selected ${rating} out of 5`
    
})


