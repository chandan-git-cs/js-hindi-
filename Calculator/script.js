let inputVal = document.querySelector(".display");
let allBtn = document.querySelectorAll(".btn");

allBtn.forEach((currBtn) => {
    currBtn.addEventListener('click', () => {
        let btnValue = currBtn.textContent;

        if(btnValue === "C"){
            // Clear display
            inputVal.value = "";
        } else if(btnValue === "="){
            // Calculate result
            inputVal.value = eval(inputVal.value);
        } else {
            // Append number/operator
            inputVal.value += btnValue;
        }
    });
});