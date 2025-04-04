import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Palaikykite mus išjungdami reklamų blokatorių."
    }
  },
  component: {
    searchBar: {
      search: "Paieška",
      sortBy: "Rikiuoti pagal",
      searchPresence: "Ieškoti veiklų",
      sort: {
        mostUsed: "Dažniausiai naudojami",
        alphabetical: "Abėcėlės tvarka"
      },
      categories: {
        all: "Viskas",
        anime: "Animė",
        games: "Žaidimai",
        music: "Muzika",
        other: "Kita",
        socials: "Socialiniai",
        videos: "Vaizdo įrašai ir tiesioginiai transliacijos"
      }
    },
    browserCard: {
      wip: "WIP",
      support: {
        safari: "Dirbame prie „Safari“ palaikymo, sekite naujienas!"
      }
    },
    userChip: {
      loading: "Kraunama..."
    },
    storeCard: {
      addPresence: "Pridėti",
      removePresence: "Pašalinti"
    },
    donationModal: {
      title: "Greita paslauga...",
      description: "Tikimės, kad jums patiks PreMiD! Jei tai sukelia šypseną jūsų veide, kodėl neatsidėkoti tuo pačiu? Mūsų savanorių komanda įdėjo visą širdį, kad padarytų jį nuostabų būtent jums!",
      continue: "Tęsti",
      close: "Uždaryti",
      patreon: "Palaikykite per {name}",
      github: "Remkite per {name}",
      holdTight: "Palaukite... kraunamas magiškas mygtukas..."
    }
  },
  header: {
    links: {
      contributors: "Pagalbininkai",
      downloads: "Siuntiniai",
      features: "Ypatybės",
      store: "Parduotuvė"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Veiklos konfigūracijos",
        error: {
          title: "Klaida",
          description: "Nepavyksta įkelti šio vartotojo... Bandykite dar kartą vėliau."
        }
      }
    },
    home: {
      meta: {
        title: "Pagrindinis"
      },
      title: "Sustiprinkite savo internetinį profilį su PreMiD",
      subtitle: "Parodykite savo draugams, kokį {word} mėgaujatės.",
      words: {
        music: "Muzika",
        videos: "Video įrašai",
        streams: "Transliacijos",
        media: "Medija"
      },
      description: "PreMiD yra paprastas bet galingas įrankis, leidžiantis dalintis jūsų dabartine medijos veikla per įvairias platformas, tokias kaip YouTube, Disney+, Netflix ir kitas. Išlikite prisijungę ir leiskite draugams realiu laiku matyti, ką veikiate.",
      getStarted: "Pradėkite",
      sections: {
        feature: {
          title: "Kodėl pamėgsite PreMiD",
          feature1: {
            title: "Privatumo kontrolė",
            description: "Valdykite savo privatumo nustatymus ir nuspręskite, kokiomis veiklomis jūs dalinatės su kitais. Jūsų duomenys – jūsų taisyklės."
          },
          feature2: {
            title: "Bendruomenės varomas",
            description: "Patirkite neprilygstamą palaikymą daugybei platformų, kurį teikia aistringa ir atsidavusi bendruomenė."
          },
          feature3: {
            title: "Pritaikomi parametrai",
            description: "Pritaikykite savo PreMiD patirtį su plačiomis pritaikymo galimybėmis pagal savo poreikius ir pageidavimus."
          },
          feature4: {
            title: "Lengva sąranka",
            description: false
          },
          feature5: {
            title: "Atitinka Discord paslaugų teikimo sąlygomis",
            description: "Pilnai atitinka Discord paslaugų teikimo sąlygas, naudojant oficialius Discord'o sąsajas."
          },
          feature6: {
            title: "Ateities funkcijos",
            description: false
          }
        },
        howItWorks: {
          title: "Kaip tai veikia",
          step1: {
            title: "Diegti plėtinį",
            description: "Pridėkite PreMiD į savo naršyklę."
          },
          step2: {
            title: "Prisijungti su Discord",
            description: "Susiekite PreMiD su savo Discord paskyrą."
          },
          step3: {
            title: "Pridėti paslaugas",
            description: "Pasirinkite paslaugas, kurias norite rodyti, pavyzdžiui, Youtube, Disney+, ir kitas."
          },
          step4: {
            title: "Mėgaukitės",
            description: "Dalinkitės savo veikla ir mėgaukitės PreMiD naudojimu."
          }
        },
        callToAction: {
          title: "Pasiruošę pradėti?",
          description: "Prisijunkite prie {count} vartotojų, kurie jau mėgsta PreMiD.",
          button: "Pradėti dabar"
        }
      }
    },
    contributors: {
      title: "Pagalbininkai",
      presenceDevelopers: "Būsenų kūrėjai",
      staff: "Darbuotojai",
      supporters: "Rėmėjai",
      translators: "Vertėjai",
      avatar: {
        tooltip: "Spustelėkite norėdami kopijuoti {name} avatarą"
      }
    },
    downloads: {
      title: "Atsisiuntimai",
      steps: {
        install: "Diegti plėtinį",
        login: "Prisijungti su Discord",
        add: "Pridėti veiklą",
        showoff: "Pasigirkite!"
      },
      section: {
        heading: {
          title: "Laikas pasirodyti.",
          description: "Pradėkite naudotis PreMiD dabar ir parodykite kitiems kuo užsiimate, galbūt rasite ką nors su tokiais pačiais pomėgiais.",
          getStarted: "Pradėkite",
          extension: "Plėtinys"
        }
      },
      browser: {
        your: "Jūsų naršyklė",
        other: "Kitos naršyklės",
        based: "{browser} pagrįsta"
      },
      mobile: {
        title: "Blogos žinios!",
        description: "Deja, PreMiD nėra pasiekiama mobiliems įrenginiams!"
      },
      alphaAccess: {
        title: "Atrakinkite išskirtinę Alfa prieigą!",
        description: false,
        callToAction: "Sužinokite daugiau ir prisijunkite prie inovacijų"
      },
      faq: "Dažniausiai Užduodami Klausimai",
      faqs: {
        q1: {
          question: "Kas yra PreMiD?",
          answer: false
        },
        q2: {
          question: "Kaip man naudoti PreMiD?",
          answer: false
        },
        q3: {
          question: "Ar PreMiD pažeidžia Discord'o paslaugų teikimo sąlygas?",
          answer: false
        },
        q4: {
          question: "Kokias paslaugas palaiko PreMiD?",
          answer: false
        },
        q5: {
          question: "Kaip aš galiu prisidėti prie PreMiD?",
          answer: false
        },
        q6: {
          question: "Ar „PreMiD“ galima naudoti nemokamai?",
          answer: false
        },
        q7: {
          question: "Ką daryti, jei aš susiduriu su problema su PreMiD?",
          answer: false
        },
        q8: {
          question: "PreMiD nepalaiko xyz, ar galite tai pridėti?",
          answer: false
        },
        q9: {
          question: "Kaip dažnai yra atnaujinamas PreMiD?",
          answer: false
        }
      }
    },
    store: {
      title: "Parduotuvė",
      noPresence: "Jokia veikla atitinka jūsų paieškos...",
      presence: {
        button: {
          reportIssue: "Pranešti apie problemą",
          suggestFeature: "Pasiūlyti funkciją",
          viewCode: "Peržiūrėti kodą"
        },
        title: {
          description: "Aprašymas",
          information: "Informacija"
        },
        informationSection: {
          contributors: "Bendradarbiai:",
          version: "Versija: {version}",
          users: "Naudotojai: {users}",
          tags: "Žymės:",
          supportedUrls: "Palaikomi URL:"
        }
      },
      header: {
        categories: "Kategorijos",
        search: "Ieškoti „Presence“"
      }
    }
  },
  footer: {
    partners: "Partneriai",
    followUs: "Sekite mus",
    supportUs: "Paremkite mus",
    more: "Daugiau",
    legal: "Teisinės",
    supportList: {
      donate: "Aukoti",
      contribute: "Prisidėkite",
      translate: "Versti"
    },
    moreList: {
      faq: "DUK",
      documentation: "Dokumentacija",
      status: "Statusas"
    },
    legalList: {
      privacyPolicy: "Privatumo politika",
      termsOfService: "Sąlygos",
      cookiePolicy: "Slapukų politika"
    },
    withLoveBy: "Su",
    by: "sukūrė",
    copyright: "© {year}-{currentYear} „{company}“ Visos teisės saugomos."
  },
  error: {
    404: {
      title: false,
      message: "Puslapis, kurio ieškote, neegzistuoja."
    },
    500: {
      title: false,
      message: "Kažkas ne taip nutiko mūsų pusėje."
    },
    default: {
      title: "Klaida",
      message: "Kažkas ne taip nutiko mūsų pusėje.",
      button: "Eiti atgal"
    }
  }
}));