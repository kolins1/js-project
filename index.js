function submitRadioButton() {
    var gen=document.forms["my form"] ["gender"];
    if(gen[0].checked==false&&gen[1].checked==false) {
        alert("please enter your gender")

    }
}