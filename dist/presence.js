var presence = new Presence({
    clientId: "630418879411126282",
    mediaKeys: false
});


var browsingStamp = Math.floor(Date.now()/1000);
presence.on("UpdateData", () => {
    let presenceData = {
        largeImageKey: "logo",
        largeImageText = "OGLLE.COM.BR"
    };
    presenceData.startTimestamp = browsingStamp;

    if(window.location.pathname.toLowerCase() === ("/#Inicio")) {
        presenceData.state = "Inicio"
    }
    if(window.location.pathname.toLowerCase() === ("/nossos-programas")) {
        presenceData.state = "Programas"
    }
    if(window.location.pathname.toLowerCase() === ("/servicos")) {
        presenceData.state = "Serviços"
    }
    if(window.location.pathname.toLowerCase() === ("/noticias")) {
        presenceData.state = "Notícias"
    }
    if(window.location.pathname.toLowerCase() === ("/#Contato")) {
        presenceData.state = "Contato"
    }
    if(window.location.pathname.toLowerCase() === ("/anuncios")) {
        presenceData.state = "Ganhando dinheiro com a Oglle.com.br!"
    }

    presence.setActivity(presenceData);

});
