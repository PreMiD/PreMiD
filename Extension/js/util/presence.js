class Presence {
  constructor(type, fields, clientID) {
    this.pType = type;
    this.clientID = clientID;
    this.reqFields = null;
    this.fields = fields;
    this.connection = io.connect('http://localhost:3020/');
    this.playback = false;
    this.trayTitle = ""

    this.connection.on('connect', function() {
    })
    
    switch(type) {
      case "video" || "stream": {
        this.reqFields = ["videoTag", "service"]
        break;
      }
      case "music": {
        break;
      }
      case "read": {
        break;
      }
      default: {
        console.error(`Type ${type} is not valid.`);
      }
    }

    this.reqFields.forEach(field => {
      if(!this.fields.hasOwnProperty(field)) console.error(`Missing field ${field}!`)
    });
  }

  get type() {return this.pType;}
  get video() {return this.fields.videoTag}
  get title() {return this.fields.title}
  get author() {return this.fields.author}

  static sendData() {
    this.connection.emit("updateData", {
      clientID: this.clientID,
      presenceData: {
        details: "Browsing...",
        largeImageKey: 'ff_lg',
        largeImageText: chrome.runtime.getManifest().name + ' V' + chrome.runtime.getManifest().version,
      },
      trayTitle: this.trayTitle,
      service: this.fields.service,
      playback: this.fields.playback
    })
  }
}

var youtubeMusic = new Presence("video", {
  videoTag: "s",
  service: "YouTube"
}, "23189123")
console.log(youtubeMusic.video)