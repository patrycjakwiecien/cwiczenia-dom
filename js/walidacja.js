'use strict';

var wyslijBtn = document.getElementById('wyslij');
var wszytskieZgody = document.getElementById('wszystkie-zgody');
var zgodamarketingowa1 = document.getElementById('zgoda-marketingowa-1');
var zgodamarketingowa2 = document.getElementById('zgoda-marketingowa-2');

function stanCheckbox() {

    //this.checked - zwraca true/false.

    if (this.checked) {
        zgodaMarketingowa1.checked = this.checked;
        zgodaMarketingowa2.checked = this.checked;
    }


    function waliduj() {
        if (document.getElementById('name').value.trim() == "") {
            alert('Wypelnij imie');

        }

        if (document.getElementById('email').value.trim() == "") {
            alert('Wypelnij email');

        }

        if (!zgodaMarketingowa1.checked) {
            alert('Zaznacz pierwsza zgode!');
        }

    }

    wyslijBtn.addEventListener('click', waliduj);
    wyslijBtn.addEventListener('change', stanCheckbox);