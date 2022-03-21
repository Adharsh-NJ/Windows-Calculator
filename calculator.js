let upperInput = document.getElementById("upper-input")
let lowerInput = document.getElementById("lower-input")

for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let btnValue = this.value
        onClick(btnValue)
    }
    )
}

let oneByX = () => {
    upperInput.value = `1/${lowerInput.value}`
    lowerInput.value = 1 / lowerInput.value
}
let sqr = () => {
    upperInput.value = `sqr(${lowerInput.value})`
    lowerInput.value = lowerInput.value * lowerInput.value;
}
let sqrt = () => {
    upperInput.value = `sqrt(${lowerInput.value})`
    lowerInput.value = Math.sqrt(lowerInput.value)
}

let calculate = {
    '1/x': oneByX,
    'sq': sqr,
    'sqrt': sqrt,
    ce() {
        lowerInput.value = 0
    },
    c() {
        lowerInput.value = 0
        upperInput.value = ""
    },
    back() {
        lowerInput.value = lowerInput.value.slice(0, -1)
    }

}

//flag to check the last input is a number or not
let isNumber = false

function onClick(value) {
    //checking input value number or not
    if (isNaN(value) && value !== '.') {

        if (calculate.hasOwnProperty(value)) {
            calculate[value]()

        }
        //for square root (sqrt) ,square(sq) and 1/x
        else if (upperInput.value[0] == "s" || upperInput.value[1] == "/") {
            upperInput.value = lowerInput.value + value
            isNumber = false
        }
        //for first operation
        else if (upperInput.value == " ") {
            upperInput.value = lowerInput.value + value
            lowerInput.value = 0
        }
        else if (!isNumber) {
            upperInput.value = upperInput.value.slice(0, -1) + value

        }
        //normal calculation
        else {
            upperInput.value = eval(upperInput.value + lowerInput.value) + value
            lowerInput.value = parseFloat(upperInput.value)
            isNumber = false
        }

    } else {
        //if input is number
        if (lowerInput.value == 0 || !isNumber) {
            lowerInput.value = value
            isNumber = true
        }
        else {
            lowerInput.value += value
            isNumber = true
        }
    }
}
