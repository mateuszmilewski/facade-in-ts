var FF = /** @class */ (function () {
    function FF() {
        this.report = {
            dataFromMgo: null
        };
    }
    FF.prototype.open = function () {
        console.log("opening ff");
    };
    FF.prototype.fillInput = function () {
        console.log("filling input of the ff");
    };
    FF.prototype.clickRun = function () {
        console.log("click run on ff");
    };
    FF.prototype.connectWithMgo = function (m) {
        this.report.dataFromMgo = m.sendData();
    };
    FF.prototype.getRep = function () {
        console.log("collect report from ff");
        return this.report;
    };
    return FF;
}());
var MGO = /** @class */ (function () {
    function MGO() {
        this.data = {
            someInfo: "info"
        };
    }
    MGO.prototype.open = function () {
        console.log("open mgo");
    };
    MGO.prototype.login = function () {
        console.log("log into mgo");
    };
    MGO.prototype.sendData = function () {
        return this.data;
    };
    return MGO;
}());
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.checkFF = function (ff) {
        console.log("verify rep from ff");
        this.msg = ff.getRep().dataFromMgo.someInfo;
    };
    Mail.prototype.sendMsg = function () {
        console.log("send info based on rep from ff");
        console.log(this.msg);
    };
    return Mail;
}());
var Facade = /** @class */ (function () {
    function Facade() {
        this.mail = new Mail();
        this.ff = new FF();
        this.mgo = new MGO();
    }
    Facade.prototype.performJob = function () {
        this.mgo.open();
        this.mgo.login();
        this.ff.open();
        this.ff.fillInput();
        this.ff.connectWithMgo(this.mgo);
        this.mail.checkFF(this.ff);
        this.mail.sendMsg();
    };
    return Facade;
}());
var f = new Facade();
f.performJob();
