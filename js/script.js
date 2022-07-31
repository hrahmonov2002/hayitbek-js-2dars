var elForm = document.querySelector(".cite-form");
var elInputName = elForm.querySelector(".input-name");
var elInputMoney = elForm.querySelector(".input-money");

var elP = document.querySelector(".text");

var MIN_PRICE = 2000;

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(elInputMoney.value)) { 
    elP.textContent = "Iltimos son kiriting";
} else if (elInputMoney.value >= MIN_PRICE) {
    elP.textContent = "Oq Yo'l";
} else if (elInputMoney.value < MIN_PRICE) {
    elP.textContent = "Yetarli mablag' mavjud emas";
}

})









// var money = prompt("Hisobni kirinting!"). trim();
// var phonePrice = 2500000;

// if (money >= phonePrice) {
//     alert("Sizning mablag'ingiz yetarli");
// } else {
//     alert("Sizda yetarli mablag' mavjud emas.")
// }