let input = document.getElementById("input");
let result = document.getElementById("result");

let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

input.addEventListener("keyup", calculate);
inputType.addEventListener("change", calculate);
resultType.addEventListener("change", calculate);

function calculate(){
    let inputTypeValue = inputType.value;
    let resultTypeValue = resultType.value;

    //Meter
    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.001;
    } else if(inputTypeValue === "meter" && resultTypeValue === "santimeter"){
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        result.value = input.value;
    }

    //Kilometer
    if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
        result.value = input.value;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "santimeter"){
        result.value = Number(input.value) * 100000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 1000;
    }

    //Santimeter
    if(inputTypeValue === "santimeter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.00001;
    }else if(inputTypeValue === "santimeter" && resultTypeValue === "santimeter"){
        result.value = input.value;
    }else if(inputTypeValue === "santimeter" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.01;
    }
}