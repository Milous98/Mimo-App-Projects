function convertNumber() {
    let number = document.getElementById("number").value;
    console.log(number);

    choseCalc = document.getElementById("calcul").value;
    // Miles to Km *1.60934
    // Km to Miles *0.621371
    let operation = 0;
    if (choseCalc === "mTk") {
        operation = 1.60934;
    } else {
        operation = 0.621371;
    }
    let resultat = document.querySelector("#result em");
    resultat.innerHTML = (number * operation).toFixed(2);
}
