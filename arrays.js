<html>
<body>

<h2>JavaScript Arrays</h2>

<p>JavaScript array elements are accessed using numeric indexes (starting from 0).</p>

<p id="demo1"></p>
<p  id="demo2"></p>
<p id="demo3"></p>
<script>
const cars = ["Saab", "Volvo", "BMW"];//creating array
document.getElementById("demo1").innerHTML = cars[0];
const person = {firstName:"John", lastName:"Doe", age:46};//Objects use names to access its "members". 
document.getElementById("demo2").innerHTML = person.firstName;
const fruits = ["Banana", "Orange", "Apple", "Mango"];//using a for loop
let fLen = fruits.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo3").innerHTML = text;

</script>


</body>
</html>

