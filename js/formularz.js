'use script';


    

function pobierzImie(event) {
    event.preventDefault();
var inputs = document.getElementsByTagName('input');
    var i = 0;
    while(i < inputs.length) {
        if(inputs[i].type != 'submit'){
        console.log(inputs[i].value)
        }
        i++;
    }
}
          
          // value