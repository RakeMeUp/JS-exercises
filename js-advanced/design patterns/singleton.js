// LIMIT THE NUMBER OF INSTANCES OF AN OBJECT


class Process{
    constructor(state){
        this.state = state;
    }
}

const Singleton = (function(){
    class ProcessManager{
        numOfProcesses = 0;
    }
    let pManager;

    function createProcessManager(){
        pManager = new ProcessManager()
        
        return pManager
    }
    return {
        getProcessManager: ()=>{
            if(!pManager)
                pManager = createProcessManager();
            
            return pManager;
        }
    }
})()

const procMan = Singleton.getProcessManager();
const procMan2 = Singleton.getProcessManager();

console.log(procMan === procMan2)