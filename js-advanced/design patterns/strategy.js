class Fedex{
    calculate = (pckg)=>{
        return 2.45
    }
}

class UPX{
    calculate = (pckg)=>{
        return 5.2
    }
}

class IDK{
    calculate = (pckg)=>{
        return 6.2
    }
}

class Shipping{
    company;
    setStrategy = (company)=>{
        this.company = company;
    }
    calculate = (pckg) =>{
        return this.company.calculate(pckg)
    }
}

const fedex = new Fedex();
const ups = new UPX();
const idk = new IDK();

const pckg = {
    from: 'home', to: 'you', weight: 12.3
}

/* fedex.calculate(pckg)
ups.calculate(pckg)
idk.calculate(pckg) */

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log(shipping.calculate(pckg))
shipping.setStrategy(ups);
console.log(shipping.calculate(pckg))
shipping.setStrategy(idk);
console.log(shipping.calculate(pckg))
