function temperatura(){

    let vtem=parseInt(document.getElementById('val-tem').value)
    let temp=parseInt(document.getElementById('grados').value)
    let conver=parseInt(document.getElementById('medidas').value)

    if (temp==1 && conver==1) {

        let res=vtem

        alert(`${vtem} grados Celcius, equivalen a ${res} grados Celcius`)
        
    } else if (temp==1 && conver==2) {
 
        let res=vtem+274.15 

        alert(`${vtem} grados celcius, equivalen a ${res} grados kelvin`)
        
    } else if (temp==1 && conver==3){

        let res=(vtem * 9/5) + 32

        alert(`${vtem} grados Celcius, equivalen a ${res} grados Fahrenheit`)

    } else if (temp==2 && conver==1) {

        let res=vtem-273.15

        alert(`${vtem} grados Kelvin, equivalen a ${res} grados Celcius`)
        
    } else if (temp==2 && conver==2) {

        let res=vtem

        alert(`${vtem} grados Kelvin, equivalen a ${res} grados Kelvin`)
        
    } else if (temp==2 && conver==3) {

        let res=(vtem-273.15)* 9/5 + 32

        alert(`${vtem} grados Kelvin, equivalen a ${res} grados Fahrenheit`)
        
    }
    else if (temp==3 && conver==1) {

        let res=(vtem-32)*5/9

        alert(`${vtem} grados Fahrenheit, equivalen a ${res} grados Celcius`)
        
    }
    else if (temp==3 && conver==2) {

        let res=(vtem-32)*5/9 + 273.15

        alert(`${vtem} grados Fahrenheit, equivalen a ${res} grados Kelvin`)
        
    }
    else if (temp==3 && conver==3) {

        let res=vtem

        alert(`${vtem} grados Fahrenheit, equivalen a ${res} grados Fahrenheit`)
        
    }
}