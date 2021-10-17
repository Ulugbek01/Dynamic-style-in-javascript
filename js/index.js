// document.getElementById("range1").oninput = function () {
//   // console.log(document.getElementById("range1").value);
//   document.getElementById("input1").value =
//     document.getElementById("range1").value;

//   document.getElementById("box").style.borderTopLeftRadius =
//     document.getElementById("range1").value + "px";
// };
// document.getElementById("range2").oninput = function () {
//   document.getElementById("input2").value =
//     document.getElementById("range2").value;

//   document.getElementById("box").style.borderTopRightRadius =
//     document.getElementById("range2").value + "px";
// };
// document.getElementById("range3").oninput = function () {
//   document.getElementById("input3").value =
//     document.getElementById("range3").value;

//   document.getElementById("box").style.borderBottomLeftRadius =
//     document.getElementById("range3").value + "px";
// };
// document.getElementById("range4").oninput = function () {
//   document.getElementById("input4").value =
//     document.getElementById("range4").value;

//   document.getElementById("box").style.borderBottomRightRadius =
//     document.getElementById("range4").value + "px";
// };

function Range() {
  let r1 = document.getElementById("range1").value;
  let r2 = document.getElementById("range2").value;
  let r3 = document.getElementById("range3").value;
  let r4 = document.getElementById("range4").value;

  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let input4 = document.getElementById("input4");

  input1.value = r1;
  input2.value = r2;
  input3.value = r3;
  input4.value = r4;

  document.getElementById("box").style.borderRadius =
    r1 + "px " + r2 + "px " + r3 + "px " + r4 + "px ";
}
