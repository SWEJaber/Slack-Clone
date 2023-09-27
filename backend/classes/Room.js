class Room
{
    constructor(id, title, namespaceID, isPrivate = false)
    {
        this.id = id;
        this.title = title;
        this.namespaceID = namespaceID;
        this.isPrivate = isPrivate;
        this.history = []
    }

    addMessage(message)
    {
        this.history.push(message)
    }

    clearHistory(){
        this.history = []
    }
}

module.exports = Room