function Butik() {
    var ad = document.getElementById("text").value
    var span = document.getElementById("sp")
    console.log();
}

function onklik() {
    var a = document.getElementById("first").value
    var b = document.getElementById("second").value
    var d = document.getElementById("total")

    var c = a * b
    d.value = c
}

function klikk() {
    var q = document.getElementById("back")
    var s = q.value.slice(0,length-1)
    q.value = s  
}

function art() {
    var input = document.getElementById("art-azalt")
    var r = parseFloat(input.value) +1;
    input.value = r

    if(r>=100){
        document.body.style.backgroundColor ='red'
    }
    else{
        document.body.style.backgroundColor = 'white'
    }
}

function azalt() {
    var input = document.getElementById("art-azalt")
    var z = parseFloat(input.value) -1;
    if(z < 1){
        z=0

    }
    input.value = z   

    if(z<100){
        document.body.style.backgroundColor = 'white'
    }
}

var Zeynal= function (x,y) {
  var sum = 1
    for(i=x; i<=y; i++){     
        sum*= i
    }
   console.log(sum);   
}
Zeynal(6,7)

// ---------------------------------------------------//
// ---------------------------------------------------//
// -------------------INHERITANCE---------------------//
// ---------------------------------------------------//
// ---------------------------------------------------//


class Heyvan{
    constructor(ad,hereket,ayaq){

        this.ad = ad,
        this.hereket = hereket,
        this.ayaq = ayaq
    }
    metod(){
        console.log("Butun heyvanlar qidalanir");
    }
}

class It extends Heyvan
{
    Metod(){
        console.log("Bobik hurur");
    }
}

var it = new It("Bobik", "qacir", 4 )
console.log(it.hereket);
it.Metod()

class Pisik extends Heyvan
{
    Metod(){
        return "pisik miyoldayir"
    }
}

var pisik = new Pisik("Masha", "yatir", 4)
console.log(pisik.Metod());
console.log(pisik.hereket);


// ---------------------------------------------------//
// ---------------------------------------------------//
// -------------------ENCAPSULLATION------------------//
// ---------------------------------------------------//
// ---------------------------------------------------//

class Capsullama{
    MetodK(ad,soyad,yas){
        this.ad = ad,
        this.soyad = soyad,
        this.yas= yas
     }
     AD(){
        return this.ad
     }
     Soyad(){
        return this.soyad
     }
     Yas(){
        return this.yas
     }
}

var caps = new Capsullama()
caps.MetodK("Zeynal","Mikayilli",35)
console.log(caps.AD());
console.log(caps.Soyad());
console.log(caps.Yas());
































































