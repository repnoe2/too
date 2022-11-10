function a() {
let a= Number(docume.getElementById('a').value);
let b= Number(docume.getElementById('b').value);
let c=a+b;
document.getElementById('result').innerHTML = c;
   }
document.getElementById('c').addEventListener('click', a);
