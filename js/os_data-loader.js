
class DataLoader {
  constructor() {
    // CONST 
    this.nbRandomsProds = 3
    

    this.loadRandomProductions()
  }

  loadRandomProductions() {
    this.random_productions = []
    let production_tmp = os_productions
      .map(x => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map(a => a.x)
      .slice(0, this.nbRandomsProds);
    production_tmp.forEach((prod) => {
      this.random_productions += replaceInTemplate(prod)
    })
    document.getElementById("productionsSample").innerHTML = this.random_productions
  }
}

os_data = new DataLoader()
