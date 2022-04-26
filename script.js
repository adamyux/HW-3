function mysquareFunction() {
  //onclick to output Square
  document.getElementById("output1").value = "4";
  document.getElementById("output2").value = "9";
  document.getElementById("output3").value = "16";
}
document.addEventListener("DOMContentLoaded", function (event) {
  //define an array
  const origArray = [2,3,4];

  document.getElementById("cube").addEventListener("click", function () {
    //pass a function to map
    let x = origArray.map(x => x * x * x);
    //assign each value to the right output box
    document.getElementById("output1").value = x[0];
    document.getElementById("output2").value = x[1];
    document.getElementById("output3").value = x[2];
  });    
});

//define an array again
const origArray = [2,3,4];
//add eventlistener for box 3 - to the fourth
document.getElementById("tothefourth").addEventListener("click", function () {
  //call function toFourth
  let y = origArray.map(toFourth);
});

function toFourth(oneItem) {
  //to the fourth
  let y = origArray.map(y => y * y * y * y);
  //print 3 boxes
  document.getElementById("output1").value = y[0];
  document.getElementById("output2").value = y[1];
  document.getElementById("output3").value = y[2];
}