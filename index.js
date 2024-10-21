//se declara o variabila de tip tablou T ce contine nr 1-20
//afiseaza un mesaj pt fiecare nr din tablou
//mesajul este de doua tipuri : : "Numar par" + numar valoare 
//sau "nr impar"

let tablou = []
counter = 1;
function test(){
    for (let i = 0; i < 20; i++){
        tablou[i]=counter
        counter++
    }
}

function check_par_impar(y){
    let i = 1;
    while(i < y){
        let x = 2     
        if(y % x == 0){
            console.log("Numar par   = " + y)
            i++
        }
        else if(y % x != 0){
            console.log("Numar impar = " + y)
            i++
        }
    }
    console.log(i)
}

test()
console.log(tablou)
//check_par_impar(tablou[i])