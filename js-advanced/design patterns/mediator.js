class Member{
    constructor(name){
        this.name = name;
        this.chatroom = null;
    }

    send = (msg, target)=>{
        this.chatroom.send(msg, this, target)
    }
    recieve = (msg, sender)=>{
        console.log(sender.name + " to " + this.name + " : " + msg)
    }
}

class Chatroom{
    members = {};

    addMember = (member)=>{
        this.members[member.name] = member;
        member.chatroom = this;
    }

    send = (msg, sender, target)=>{
        target.recieve(msg, sender);
    }
}

const chat = new Chatroom();
const bob = new Member("Bob");
const tim = new Member("Tim");
const idk = new Member("Idk");

chat.addMember(bob)
chat.addMember(tim)
chat.addMember(idk)

bob.send("Hello brah", tim)
bob.send("Hello brah", bob)