// api mock 

class API{
    getValue = (coin)=>{
    console.log("calling API")
    switch(coin){
        case "BTC":
            return 123;
        case "ETH":
            return 453;
        case "LTC":
            return 744;
    }
    }
}

/////////////////////////////////

//const api = new API();
//console.log(api.getValue("BTC"))

class Proxy{
    api = new API();
    cache = {};

    getValue = (coin)=>{
        if(this.cache[coin] == null){
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin];
    }
}

const proxy = new Proxy();
console.log(proxy.getValue("BTC"));
console.log(proxy.getValue("LTC"));
console.log(proxy.getValue("ETH"));console.log(proxy.getValue("BTC"));
console.log(proxy.getValue("LTC"));
console.log(proxy.getValue("ETH"));console.log(proxy.getValue("BTC"));
console.log(proxy.getValue("LTC"));
console.log(proxy.getValue("ETH"));