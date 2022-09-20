



function buton() {

    var firstStep = document.getElementById("kred-meb").value;
    var secondStep = document.getElementById('mudd').value;
    var thirdStep = document.getElementById('faiz').value;
    var ekran = document.getElementById("total")


    var faizz = firstStep * thirdStep /100
    var aylar = (parseFloat(firstStep)+parseFloat(faizz))/secondStep
    ekran.innerHTML = aylar.toFixed(2)


    
}





