// CONST 
const nbRandomsProds = os_productions.length - 1

// SET VARS
document.getElementById("ndProds").innerHTML = os_productions.length

let os_productions_styles = new Set()
os_productions.map(p => os_productions_styles.add(p.style))
document.getElementById("nbStyles").innerHTML = os_productions_styles.size

let random_productions = os_productions
	.map(x => ({ x, r: Math.random() }))
	.sort((a, b) => a.r - b.r)
	.map(a => a.x)
	.slice(0, nbRandomsProds);

let productions_sample = []
random_productions.forEach((prod) => {
	productions_sample += replaceInTemplate(prod)
})

document.getElementById("productionsSample").innerHTML = productions_sample