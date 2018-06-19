class FF {


    private report = {
        dataFromMgo: null
    };

    open() {
        console.log("opening ff");
    }

    fillInput() {
        console.log("filling input of the ff");
        
    }




    clickRun() {
        console.log("click run on ff");
        
    }


    connectWithMgo(m: MGO) {
        this.report.dataFromMgo = m.sendData();
    }

    getRep() {
        console.log("collect report from ff");

        return this.report;
        
    }
}



class MGO {

    private data = {
        someInfo: "info"
    };


    open() {
        console.log("open mgo");
        
    }

    login() {
        console.log("log into mgo");
        
    }

    sendData() {
        return this.data;
    }
}


class Mail {


    private msg: string;

    checkFF(ff: FF) {
        console.log("verify rep from ff");
        this.msg = ff.getRep().dataFromMgo.someInfo;
    }

    sendMsg() {
        console.log("send info based on rep from ff");
        console.log(this.msg);
        
        
    }
    
    
}


class Facade {
    private mail: Mail;
    private ff: FF;
    private mgo: MGO;


    constructor() {
        this.mail = new Mail();
        this.ff = new FF();
        this.mgo = new MGO();
    }


    performJob() {


        this.mgo.open();
        this.mgo.login();

        this.ff.open();
        this.ff.fillInput();
        this.ff.connectWithMgo(this.mgo);

        this.mail.checkFF(this.ff);
        this.mail.sendMsg();
    }


}



let f = new Facade();
f.performJob();