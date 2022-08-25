let plusButtons = document.querySelectorAll(".plus");
let quantityOfArticle = document.querySelectorAll(".x");
let deleteButtons = document.querySelectorAll(".del");
let minusButtons = document.querySelectorAll(".minus");
const prices=document.querySelectorAll(".price");console.log(prices)
const bigDivs = document.querySelectorAll(".card");
const sum = document.querySelector(".sum");


for(let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click",function () {
        if(quantityOfArticle[i].innerHTML>0) {
            quantityOfArticle[i].innerHTML--;
        }
});
}

for(let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click",function () {
        
            quantityOfArticle[i].innerHTML++;
            sum.innerHTML = parseInt(sum.innerHTML)+ parseInt(prices[i].innerHTML);
    
});
}

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click",function() {
        bigDivs[i].remove()
        sum.innerHTML = parseInt(sum.innerHTML) - parseInt(prices[i].innerHTML);
    });
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }


