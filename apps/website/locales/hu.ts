import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Kérjük, támogass minket azzal, hogy kikapcsolod a hirdetésblokkolódat."
    }
  },
  component: {
    searchBar: {
      search: "Keresés",
      sortBy: "Rendezés szerint",
      searchPresence: "Presence keresése",
      sort: {
        mostUsed: "Leggyakrabban használt",
        alphabetical: "Betűrend szerint"
      },
      categories: {
        all: "Minden",
        anime: "Anime",
        games: "Játék",
        music: "Zene",
        other: "Egyéb",
        socials: "Közösségi",
        videos: "Videók és Közvetítések"
      }
    },
    browserCard: {
      wip: "Folyamatban",
      support: {
        safari: "Dolgozunk a Safari támogatásán, maradj velünk!"
      }
    },
    userChip: {
      loading: "Betöltés..."
    },
    storeCard: {
      addPresence: "Hozzáadás",
      removePresence: "Eltávolítás"
    },
    donationModal: {
      title: "Egy gyors szívesség...",
      description: "Reméljük, imádni fogod a PreMiD-et! Ha mosolyt csal az arcodra, miért ne adnál vissza egy kis szeretetet? Önkéntes csapatunk szívét-lelkét beletette, hogy neked szuper legyen!",
      continue: "Folytatás",
      close: "Bezárás",
      patreon: "Támogatás a(z) {name}-on/-en",
      github: "Szponzorálás a(z) {name}-on",
      holdTight: "Tarts ki... töltődik a varázsgomb..."
    }
  },
  header: {
    links: {
      contributors: "Közreműködők",
      downloads: "Letöltések",
      features: "Funkciók",
      store: "Áruház"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Presence hozzájárulások",
        error: {
          title: "Hiba",
          description: "Problémánk akadt a felhasználó betöltésével... Kérlek, próbáld meg később újra."
        }
      }
    },
    home: {
      meta: {
        title: "Kezdőlap"
      },
      title: "Emeld új szintre az online Presence-ed a PreMiD segítségével",
      subtitle: "Mutasd meg a barátaidnak, milyen {word}-et élvezel éppen.",
      words: {
        music: "Zene",
        videos: "Videók",
        streams: "Közvetítések",
        media: "Média"
      },
      description: "A PreMiD egy egyszerű, mégis erőteljes eszköz, amellyel megoszthatod aktuális médiaaktivitásodat több platformon, például a YouTube-on, a Disney+-on, a Netflixen és sok más helyen. Maradj kapcsolatban, és engedd, hogy barátaid valós időben lássák, mivel foglalkozol.",
      getStarted: "Kezdő lépések",
      sections: {
        feature: {
          title: "Miért fogod szeretni a PreMiD-et",
          feature1: {
            title: "Adatvédelem kezelése",
            description: "Vedd kézbe az adatvédelmi beállításaidat, és te döntsd el, milyen tevékenységeket osztasz meg másokkal. Adataid, a te szabályaid."
          },
          feature2: {
            title: "Közösség által vezérelt",
            description: "Tapasztald meg a páratlan támogatást számtalan platformhoz, amelyet egy lelkes és elkötelezett közösség hajt."
          },
          feature3: {
            title: "Testreszabható beállítások",
            description: "Formáld a PreMiD élményt a saját ízlésed és igényeid szerint a széleskörű testreszabási lehetőségekkel."
          },
          feature4: {
            title: "Egyszerű beállítás",
            description: "Indítsd be a PreMiD-et pillanatok alatt. Az egyszerű beállítási folyamatunk garantálja a gondtalan kezdést."
          },
          feature5: {
            title: "Összhangban a Discord felhasználási feltételeivel",
            description: "Teljes mértékben megfelel a Discord felhasználási feltételeinek, mivel a Discord által biztosított hivatalos végpontokat használja."
          },
          feature6: {
            title: "Jövőbeli funkciók",
            description: "Maradj velünk, mert izgalmas új funkciók és fejlesztések érkeznek, amelyek még tovább fokozzák a PreMiD élményt."
          }
        },
        howItWorks: {
          title: "Hogyan működik",
          step1: {
            title: "Telepítsd a bővítményt",
            description: "Add hozzá a PreMiD-et a böngésződhöz."
          },
          step2: {
            title: "Jelentkezz be Discorddal",
            description: "Kapcsold össze a PreMiD-et a Discord fiókoddal."
          },
          step3: {
            title: "Szolgáltatások hozzáadása",
            description: "Válaszd ki azokat a szolgáltatásokat, amelyeket meg szeretnél jeleníteni, például a YouTube-ot, a Disney+-t és még sok mást."
          },
          step4: {
            title: "Élvezd",
            description: "Oszd meg tevékenységeidet, és élvezd a PreMiD használatát."
          }
        },
        callToAction: {
          title: "Készen állsz, hogy elkezdd?",
          description: "Csatlakozz ahhoz a(z) {count} felhasználóhoz, akik már imádják a PreMiD-et.",
          button: "Kezdd el most"
        }
      }
    },
    contributors: {
      title: "Közreműködők",
      presenceDevelopers: "Presence fejlesztők",
      staff: "Csapat",
      supporters: "Támogatók",
      translators: "Fordítók",
      avatar: {
        tooltip: "Kattints ide {name} avatarjának másolásához"
      }
    },
    downloads: {
      title: "Letöltések",
      steps: {
        install: "Bővítmény telepítése",
        login: "Jelentkezz be Discorddal",
        add: "Presence-ek hozzáadása",
        showoff: "Mutasd meg magad!"
      },
      section: {
        heading: {
          title: "Ideje felvágni.",
          description: "Használd a PreMiD-et most és oszd meg másokkal, amit éppen csinálsz, így talán hasonló érdeklődésű személyeket is felfedezhetsz.",
          getStarted: "Kezdő lépések",
          extension: "Bővítmény"
        }
      },
      browser: {
        your: "A böngésződ",
        other: "Más böngészők",
        based: "{browser} alapú"
      },
      mobile: {
        title: "Rossz hír!",
        description: "A PreMiD nem érhető el mobil eszközökre, sajnáljuk!"
      },
      alphaAccess: {
        title: "Nyisd meg az exkluzív Alfa hozzáférést!",
        description: "Lépj be a PreMiD jövőjébe azzal, hogy Patronná válsz, vagy szponzorálsz minket GitHubon. A támogatásod nemcsak a fejlesztésünket gyorsítja fel, hanem elsőként ad hozzáférést a leginnovatívabb funkciókhoz, amelyeken dolgozunk. Tapasztald meg mindazt, amit a PreMiD legmodernebb megoldásai nyújthatnak, és formáld a jövőjét a visszajelzéseddel. Ez nem csak arról szól, hogy te vagy az első – hanem arról, hogy részese vagy valami nagyobbnak.",
        callToAction: "Tudj meg többet és csatlakozz az innovációhoz"
      },
      faq: "Gyakran ismételt kérdések",
      faqs: {
        q1: {
          question: "Mi az a PreMiD?",
          answer: "A PreMiD egy egyszerűen konfigurálható segédprogram, amellyel megjelenítheted, hogy mit csinálsz a weben a Discord aktivitási státuszodban."
        },
        q2: {
          question: "Hogyan használjam a PreMiD-et?",
          answer: "A PreMiD-et úgy használhatod, hogy telepíted a bővítményt, majd bejelentkezel a Discord fiókoddal. Miután bejelentkeztél, hozzáadhatsz Presences-t a profilodhoz, és megmutathatod barátaidnak, mivel foglalkozol."
        },
        q3: {
          question: "Ellentétes a PreMiD a Discord felhasználási feltételeivel?",
          answer: "Nem, a PreMiD nem ellentétes a Discord felhasználási feltételeivel. A PreMiD a Discord API-ját használja (beleértve a Discord által biztosított védett API végpontokat is) az aktivitásod beállításához. Ez azt jelenti, hogy a PreMiD teljes mértékben összhangban van a Discord felhasználási feltételeivel."
        },
        q4: {
          question: "Milyen szolgáltatásokat támogat a PreMiD?",
          answer: "A PreMiD számos különböző szolgáltatást támogat, többek között a YouTube-ot, a Twitchet és a Netflixet. A támogatott szolgáltatások listája folyamatosan bővül. A teljes Presences listát megtekintheted a store oldalunkon."
        },
        q5: {
          question: "Hogyan tudok hozzájárulni a PreMiD-hez?",
          answer: "A PreMiD-hez úgy tudsz hozzájárulni, hogy csatlakozol a közösségünkhöz a GitHubon. Segíthetsz hibák jelentésével, funkciók javaslásával vagy kód hozzájárulással."
        },
        q6: {
          question: "Ingyenes a PreMiD használata?",
          answer: "Igen, a PreMiD használata ingyenes. Ugyanakkor elfogadunk adományokat Patreonon és GitHub Sponsorson keresztül, hogy támogasd a projekt fejlesztését."
        },
        q7: {
          question: "Mit kell tennem, ha problémába ütközöm a PreMiD-del?",
          answer: "Ha bármilyen problémába ütközöl a PreMiD használata közben, csatlakozhatsz a Discord szerverünkhöz segítségért. Emellett van egy hibaelhárítási útmutatónk is a dokumentációnkban."
        },
        q8: {
          question: "A PreMiD nem támogatja az xyz-t, hozzá tudjátok adni?",
          answer: "Az úgynevezett Presences közösségi alapon készülnek, így nincs erőforrásunk minden egyes platform hozzáadására. Ugyanakkor te is létrehozhatsz saját Presence-t, ha követed a dokumentációnkban található útmutatót."
        },
        q9: {
          question: "Milyen gyakran frissül a PreMiD?",
          answer: "Egy kis, önkéntesek által működtetett projekt vagyunk, igyekszünk a lehető leggyakrabban frissíteni a PreMiD-et, de nem tudjuk megígérni, hogy mindig minden azonnal naprakész lesz."
        }
      }
    },
    store: {
      title: "Áruház",
      noPresence: "Nincs a keresésednek megfelelő Presence...",
      presence: {
        button: {
          reportIssue: "Hiba jelentése",
          suggestFeature: "Funkció javaslata",
          viewCode: "Kód megtekintése"
        },
        title: {
          description: "Leírás",
          information: "Információ"
        },
        informationSection: {
          contributors: "Közreműködők:",
          version: "Verzió: {version}",
          users: "Felhasználók: {users}",
          tags: "Címkék:",
          supportedUrls: "Támogatott URL-ek:"
        }
      },
      header: {
        categories: "Kategóriák",
        search: "Presence keresése"
      }
    }
  },
  footer: {
    partners: "Partnerek",
    followUs: "Kövess minket",
    supportUs: "Támogass minket",
    more: "Továbbiak",
    legal: "Jogi információk",
    supportList: {
      donate: "Támogatás",
      contribute: "Hozzájárulás",
      translate: "Fordítás"
    },
    moreList: {
      faq: "GYIK",
      documentation: "Dokumentáció",
      status: "Állapot"
    },
    legalList: {
      privacyPolicy: "Adatvédelmi irányelvek",
      termsOfService: "Szolgáltatási feltételek",
      cookiePolicy: "Sütiszabályzat"
    },
    withLoveBy: "Szeretettel",
    by: "által",
    copyright: "© {year}-{currentYear} {company} Minden jog fenntartva."
  },
  error: {
    404: {
      title: false,
      message: "Az oldal, amit keresel, nem létezik."
    },
    500: {
      title: false,
      message: "Valami hiba történt a mi oldalunkon."
    },
    default: {
      title: "Hiba",
      message: "Valami hiba történt a mi oldalunkon.",
      button: "Vissza"
    }
  }
}));