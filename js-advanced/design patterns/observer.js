class Subject{
    observers = []  //obs functions

    subscribe = (fn)=>{
        this.observers.push(fn)
    }
    unsubscribe = (fnToRemove)=>{
        this.observers = this.observers.filter( fn => {
            if( fn!= fnToRemove){
                return fn
            }
        })

    }
    fire = ()=>{
        this.observers.forEach(fn =>{
            fn.call()
        })
    }
}

const subject = new Subject();

function obs1(){
    console.log("first")
}

function obs2(){
    console.log("second")
}

subject.subscribe(obs1);
subject.subscribe(obs2);

subject.fire()

subject.unsubscribe(obs2)

subject.fire()