
const churnCtx = document.getElementById("churnChart");

new Chart(churnCtx, {
type: "pie",
data: {
labels: ["Clientes que permanecen", "Clientes que cancelan"],
datasets: [{
data: [73,27],
backgroundColor: [
"#2ecc71",
"#e74c3c"
]
}]
},
options:{
responsive:true
}
});

const contractCtx = document.getElementById("contractChart");

new Chart(contractCtx, {
type: "bar",
data: {
labels:["Mes a Mes","1 Año","2 Años"],
datasets:[{
label:"Tasa de Churn",
data:[45,20,10],
backgroundColor:[
"#f39c12",
"#3498db",
"#2ecc71"
]
}]
},
options:{
responsive:true,
maintainAspectRatio:false,
scales:{
y:{
beginAtZero:true
}
}
}
});