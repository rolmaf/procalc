document.querySelector(".buttons").onclick = function(){
    let target = event.target;
    let check_operator = ["+" , "-" , "*" , "/"];
    let input = document.querySelector("#expression");
    let input_all = input.value;
    if (target.classList.contains("number")) {
        if (document.querySelector("#expression").value == "0") {
            document.querySelector("#expression").value = "";
        }
        input.value += target.innerHTML;
    }
    if (target.classList.contains("clear")) {
        // console.log(target.innerHTML);
        document.querySelector("#expression").value = "0";
    }
    if (target.classList.contains("operation")) {
        let i = 0;
        let last_char = input_all[input_all.length - 1];
        let value = target.innerHTML;
        if (check_operator.indexOf(last_char) != -1 + i && target.innerHTML != "(" && target.innerHTML != ")"){
            input_all = input_all.replace(/.$/ , value);
            input.value = input_all;
            i = i + 1;
        }
        else {
            input.value += value;
        }
    }
    if (target.classList.contains("calculation")) {
        let result = eval(input_all);   
        document.querySelector("#expression").value = result;
    }
    if (target.classList.contains("operation-koren")) {
        let result = eval(input_all);   
        input_all = Math.sqrt(result);
        result = eval(input_all);
        document.querySelector("#expression").value = result;
    }
    if (target.classList.contains("operation-kvadrat")) {
        let result = eval(input_all);   
        input_all = Math.pow(result , 2);
        result = eval(input_all);
        document.querySelector("#expression").value = result;
    }
    if (target.classList.contains("operation-kub")) {
        let result = eval(input_all);   
        input_all = Math.pow(result , 3);
        result = eval(input_all);
        document.querySelector("#expression").value = result;
    }
};