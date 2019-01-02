(function (window) {
    {
        var nAgt = navigator.userAgent;
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Edge';
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
        }

        // system
        var os = '-';
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }
        if (/Windows/.test(os)) {
            os = 'Windows';
        }
    }

    window.jscd = {
        browser: browser,
        os: os,
    };
}(this));


var setupDownloads = function(os = jscd.os, browser = jscd.browser){
    if(os == ""){os = jscd.os}
    if(browser == ""){browser = jscd.browser}
    // OS download
    switch (os) {
    	case "Windows":
    		$('#dl').attr('href', 'https://github.com/Timeraa/PreMiD/releases/download/v1.2/PreMiD-Windows-x64.exe');
            document.querySelector('#dl').innerHTML = new XMLSerializer().serializeToString(document.querySelector('#windows').firstChild);
    		break
    	case "Mac OS":
    	case "Mac OS X":
            $('#dl').attr('href', 'https://github.com/Timeraa/PreMiD/releases/download/v1.2/PreMiD-Mac.dmg');
            document.querySelector('#dl').innerHTML = new XMLSerializer().serializeToString(document.querySelector('#apple').firstChild);
    		break
    	case "Linux":
            $('#dl').attr('href', 'https://github.com/Timeraa/PreMiD/releases/download/v1.2/PreMiD-Linux-amd64.deb');
            document.querySelector('#dl').innerHTML = new XMLSerializer().serializeToString(document.querySelector('#linux').firstChild);
    		break
    	default:
    		document.querySelector('#ext').innerHTML = "<span>"+jscd.os+" (Unsupported)</span>";
            break;
    }

    // extension download
    switch (browser) {
    	case "Chrome":
    	case "Vivaldi":
    	case "Chromium":
    	case "Opera":
            $('#ext').attr('href', 'https://chrome.google.com/webstore/detail/premid/agjnjboanicjcpenljmaaigopkgdnihi');
            document.querySelector('#ext').innerHTML = new XMLSerializer().serializeToString(document.querySelector('#chrome').firstChild);
    		break
    	case "Firefox":
            $('#ext').attr('href', 'https://addons.mozilla.org/de/firefox/addon/premid/');
            document.querySelector('#ext').innerHTML = new XMLSerializer().serializeToString(document.querySelector('#firefox').firstChild);
    		break
    	default:
    		document.querySelector('#ext').innerHTML = "<span>"+jscd.browser+" (Unsupported)</span>";
            break;
    }
}

setupDownloads();