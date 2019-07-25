class DataLoader {
    constructor() {
        // CONST 
        this.nbRandomsProds = 3
        this.loadRandomProductions()
        this.nbRandomsLogos = 10
        this.loadRandomLogos()
    }

    loadRandomProductions() {
        this.random_productions = []
        let production_tmp = os_productions
            .map(x => ({ x, r: Math.random() }))
            .sort((a, b) => a.r - b.r)
            .map(a => a.x)
            .slice(0, this.nbRandomsProds);
        production_tmp.forEach((prod) => {
            this.random_productions += replaceInProdTemplate(prod)
        })
        document.getElementById("productionsSample").innerHTML = this.random_productions
    }
    
    loadRandomLogos() {
        this.random_logosHTML = []
        let productionsToUse = []
        let production_tmp = os_productions
            .map(x => ({ x, r: Math.random() }))
            .sort((a, b) => a.r - b.r)
            .map(a => a.x)
        
        production_tmp.forEach((prod) => {
            if (prod.logo_url != "") {
                productionsToUse.push(prod)
            }
        })
        
        productionsToUse = productionsToUse.slice(0, this.nbRandomsLogos)
        productionsToUse.forEach((prod) => {
            this.random_logosHTML += replaceInLogoTemplate(prod)
        })
        document.getElementById("logosSample").innerHTML = this.random_logosHTML
    }
}

os_data = new DataLoader()
