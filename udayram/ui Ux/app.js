// const slec = document.querySelector("#mark1");

let amountVal,
   currencyTpye,
   statusVal,
   EURval,
   USDval,
   INRval,
   valNum = false;
let currencySet = false;
$(".currencySel").select(function () {
   console.log("hi");
});

/*----------  It will fetch api on start of page,
I can use static values late for concersions,
  ----------*/

$(document).ready(function () {
   $(".hideme").toggle();
   //$("button").click(function () {
   $.get(
      "http://api.exchangeratesapi.io/v1/latest?access_key=d78ccad0e0ba35c8175662df6c3d9930",
      function (data, status, success) {
         statusVal = status;
         USDval = success["responseJSON"]["rates"]["USD"];
         EURval = success["responseJSON"]["rates"]["EUR"] * 1.087583;
         //INRval = success["responseJSON"]["rates"]["INR"]; // / (82.566554 * 1.087583);
         console.log("usd", USDval, "inr", INRval, EURval);
      }
   );
});

$(".EURclass").click(function () {
   currencyTpye = "EUR";
   $(".changeCur").text(`${currencyTpye}`);

   // console.log();
});
$(".INRclass").click(function () {
   currencyTpye = "INR";

   $(".changeCur").text(`${currencyTpye}`);
});
$(".INRclass,.EURclass").click(function () {
   $(".hideme").toggle();
});

$("#mark1").click(function () {
   $(".hideme").toggle();
});
/*----------  click button function  ----------*/

$(".button-wala-2 button").click(function () {
   //currencyTpye = $("#selectC").val();

   /*----------  To check weather input is number or not  ----------*/
   if ($.isNumeric(`${$("input").val()}`)) {
      valNum = true;
   } else {
      valNum = false;
   }

   /*----------  to check weather Currency is selected or not  ----------*/

   if (currencyTpye != "Select currency:") {
      currencySet = true;
   }

   /**
    *
    * I have made a condition that input should be number and
    *  currency must be choose to get go inside 'if'
    *
    */

   if (currencySet && valNum) {
      amountVal = $("input").val();
      Ans = currencyAns(currencyTpye);
      Ans *= $("input").val();
      Ans = Math.floor(Ans * 100) / 100;
      // console.log($("#test").text());
      $("#test").text(`$${Ans}`);
      $("#statusA")
         .text(`${statusVal}`)
         .css("color", "green")
         .css("font-weight", "bold")
         .css("text-transform", "capitalize")
         .css("font-size", "1em");
   } else {
      $("#test").text("{{Value In USD}}");
      $("#statusA")
         .text(`FAILURE`)
         .css("color", "red")
         .css("font-weight", "bold")
         .css("font-size", "1em");
   }
});
/*----------  , cu  ----------*/

/**
 *
 * It will return value of currency
 * Currenty I have made static because of only 2 exchange on webpage
 * you can make it dynamic easyly
 *
 */

function currencyAns(currencyTpye) {
   if (currencyTpye == "EUR") {
      console.log(1);
      return EURval;
   } else {
      console.log(2);
      INRval = EURval / 75.92;
      return INRval; // 82.566554; // 1.087583);
   }
}
