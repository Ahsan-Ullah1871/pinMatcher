function generate() {
    let getNumber = Math.random() * 10000 + "";
    let slice = getNumber.split('.')[0];
    if (slice.length === 4) {
        document.getElementById("pin-display").value = slice;
    }
    else {
        generate();
    }
  
}

document.getElementById("number-buttons").addEventListener('click', function (event) {
    let number = event.target.innerText;

    if (isNaN(number)) {
        if (number == "C") {
            document.getElementById("number-display").value = "";
            
        }
        else if (number == "Back") {
            let select = document.getElementById("number-display").value;
            let minus = select.slice(0, select.length - 1);
             document.getElementById("number-display").value = minus;
        }
     } else {
            document.getElementById("number-display").value += number;

    }
})




function submit() {
    let pinDisplay = document.getElementById("pin-display").value; 
    let numberType = document.getElementById("number-display").value; 
    if (numberType != "") {
         if (numberType == pinDisplay) {
			document.getElementById("right").style.display = "block";
			document.getElementById("wrong").style.display = "none";
		} else {
			document.getElementById("wrong").style.display = "block";
			document.getElementById("right").style.display = "none";

			let detect = document.getElementById("count-wrong")
				.innerText;
			let count = parseInt(detect) - 1;

			if (count > 0 || count == 0) {
				document.getElementById(
					"count-wrong"
				).innerText = count;
			} else {
                alert("Please try again later!!");
                document.getElementById("wrong").style.display = "none";
			}
		}
   }
    
}


function goCAlc() {
    window.location.href = "https://ahsan-ullah1871.github.io/casioCalculator/";
}
// console.log(generate());

