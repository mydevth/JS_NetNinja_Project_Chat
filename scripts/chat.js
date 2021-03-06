
class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.colletion('chats');
    }
async addChat(message){
    const now = new Date();
    const chat ={
        message,
        username: this.username,
        room: this.room,
        created_at: Firebase.firestore.Timestamp.fromDate(now)
    };
    //save the chat document
    const response = await this.chats.add(chat);
    return response;
}
}
const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom);