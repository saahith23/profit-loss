var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#button");
var output = document.querySelector("#output");

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var cp = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, cp);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput('neutral')
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput('Profit')
    } else {
        showOutput('loss')
    }
}

function showOutput(message) {
    output.innerHTML = message;
}