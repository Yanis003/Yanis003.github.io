const txt = '{"first":"Jennie", "last":"Nichols", "age":30}'
const txt2 = '{"street":"Valwood Pkwy", "number": 8929, "city":"Billings"}'
const txt3 = '{"primaria":"Escuela Nº10", "secundaria": "Colegio Luis F. Leloir", "terciaria":"IPA, Estadistica"}'
const obj = JSON.parse(txt);
const obj2 = JSON.parse(txt2);
const obj3 = JSON.parse(txt3);
document.getElementById("Datos").innerHTML = "Nombre: " + obj.first + ", Apellido:" +  obj.last + ", Edad:" + obj.age ;
document.getElementById("Dir").innerHTML = "Calle: " + obj2.street + ", Nº:" + obj2.number + ", Ciudad: " + obj2.city;
document.getElementById("Educ").innerHTML = "Primaria: " + obj3.primaria + ", Secundaria: " + obj3.secundaria + ", Terciaria: " + obj3.terciaria;
