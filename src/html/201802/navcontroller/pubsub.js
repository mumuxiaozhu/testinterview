


function Pubsub (){
    this.moduleControllMap={};
}
Pubsub.prototype.register = function(topic,module,callback){
    if(typeof module ==='function'){
        callback = module;
        module= null;
    }
    if(callback==null){
        return;
    }
    var topics=null;
    if(module==null){
        topics  = this.moduleControllMap[topic];
        if(topics==null){
            this.moduleControllMap[topic]=[];
        }
        this.moduleControllMap[topic].push(callback);

    }else{
        var mods  = this.moduleControllMap[module];
        if(mods!=null){
            topics  = mods[topic];
            topics==null?this.moduleControllMap[module][topic]=[]:'';
        }else{
            this.moduleControllMap[module]={
            };
            this.moduleControllMap[module][topic]=[]
        }
        this.moduleControllMap[module][topic].push(callback);
    }


}

Pubsub.prototype.notify = function(topic,params,module){
    var topics=null;
    if(topic==null){return;}
    if(module!=null&&arguments.length==3){
        topics= this.moduleControllMap[module][topic];
    }else{
        topics= this.moduleControllMap[topic];
    }
    if(topics!=null){
       for(var i =0 ;i<topics.length;i++){
           topics[i](params);
        }

    }


}

Pubsub.prototype.clear = function(topic,module){

}

var pubsub = new Pubsub();