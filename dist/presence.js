var presence = new Presence({
    clientId: "630418879411126282",
    mediaKeys: false
});


var browsingStamp = Math.floor(Date.now()/1000);
presence.on("UpdateData", () => {
    let presenceData = {
        largeImageKey: "logo",
        largeImageText = "OGLLE.COM.BR",
        partyId = "https://oglle.com.br/#Inicio",
        partySize = 1,
        partyMax = 1000,
        spectateSecret = "MTIzNDV8MTIzNDV8MTMyNDU0",
        joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= "
    };
    presenceData.startTimestamp = browsingStamp;

    if(window.location.pathname.toLowerCase() === ("/#Inicio")) {
        presenceData.state = "Inicio"
    }
    if(window.location.pathname.toLowerCase() === ("/nossos-programas")) {
        //presenceData.details = "OGLLE.COM.BR"
        presenceData.state = "Programas"
    }
    if(window.location.pathname.toLowerCase() === ("/servicos")) {
        //presenceData.details = "OGLLE.COM.BR"
        presenceData.state = "Serviços"
    }
    if(window.location.pathname.toLowerCase() === ("/noticias")) {
        //presenceData.details = "OGLLE.COM.BR"
        presenceData.state = "Notícias"
    }
    if(window.location.pathname.toLowerCase() === ("/#Contato")) {
        //presenceData.details = "OGLLE.COM.BR"
        presenceData.state = "Contato"
    }
    if(window.location.pathname.toLowerCase() === ("/anuncios")) {
        //presenceData.details = "OGLLE.COM.BR"
        presenceData.state = "Ganhando dinheiro com a Oglle.com.br!"
    }

    presence.setActivity(presenceData);

});