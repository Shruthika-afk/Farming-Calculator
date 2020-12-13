var number_1 = document.getElementById("in1").value;

function Calculate()
{
  number_1 = Number(document.getElementById("in1").value);
  
  var area = number_1 * number_1;
  var perimeter = 4 * number_1;
  
  document.getElementById("area").innerHTML = area;
  document.getElementById("perimeter").innerHTML = perimeter;
}
  