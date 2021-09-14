// TODO ?
class Channel{
    constructor(){
        this.channelID = "b3ssd123" // 
        this.subscriptions = [];
        this.lastActivity = null;
        this.messages = [];
    }

    postMessage(payload){
       try{
            const message = new Message(payload);
            await message.send();
       }catch(err){
           console.log(err);
       }
    }

    refresh(){
        // refresh the channel content
    }

    deleteMessage(){
        // ??? 
    }

}

class Message{
    constructor(){
        this.type = "text",
        this.content = null;
        this.createdAt = Date.now();
        this.messageID = "sdlfk121" // todo
    }

    async send(){

    }

}