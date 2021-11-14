function cal() {
  var myday = document.getElementById("day").value;
  var mymonth = document.getElementById("month").value;
  var myyear = document.getElementById("year").value;

  var date = new Date();
  var d = date.getDate();
  var m = 1 + date.getMonth();
  var y = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (myday > d) {
    d = d + month[m - 1];
    m = m - 1;
  }
  if (mymonth > m) {
    m = m + 12;
    y = y - 1;
  }
  var d1 = d - myday;
  var m1 = m - mymonth;
  var y1 = y - myyear;

  document.getElementById("age").innerHTML =
    "Your Age is " + y1 + " Years " + m1 + " Months " + d1 + " Days";
}

function submitRadioButton() {
  var gen = document.forms["myforms"]["gender"];
  if (gen[0].checked == false && gen[1].checked == false) {
    alert("please enter you gender");
  }
}
