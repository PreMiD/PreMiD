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
      searchPresence: "Ieškoti „Presence“",
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
        title: "Būsenos konfigūracijos",
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
      subtitle: false,
      words: {
        music: "Muzika",
        videos: "Video įrašai",
        streams: false,
        media: "Medija"
      },
      description: "PreMiD yra paprastas bet galingas įrankis, leidžiantis dalintis jūsų dabartine medijos veikla per įvairias platformas, tokias kaip YouTube, Disney+, Netflix ir kitas. Išlikite prisijungę ir leiskite draugams realiu laiku matyti, ką veikiate.",
      getStarted: "Pradėkite",
      sections: {
        feature: {
          title: "Kodėl pamėgsite PreMiD",
          feature1: {
            title: false,
            description: false
          },
          feature2: {
            title: false,
            description: false
          },
          feature3: {
            title: false,
            description: false
          },
          feature4: {
            title: false,
            description: false
          },
          feature5: {
            title: false,
            description: false
          },
          feature6: {
            title: false,
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
            description: false
          },
          step3: {
            title: "Pridėti paslaugas",
            description: false
          },
          step4: {
            title: "Mėgaukitės",
            description: false
          }
        },
        callToAction: {
          title: false,
          description: false,
          button: false
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
        tooltip: false
      }
    },
    downloads: {
      title: "Atsisiuntimai",
      steps: {
        install: "Diegti plėtinį",
        login: "Prisijungti su Discord",
        add: "Pridėti Buvimą",
        showoff: false
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
        your: false,
        other: false,
        based: false
      },
      mobile: {
        title: false,
        description: false
      },
      alphaAccess: {
        title: false,
        description: false,
        callToAction: false
      },
      faq: false,
      faqs: {
        q1: {
          question: false,
          answer: false
        },
        q2: {
          question: false,
          answer: false
        },
        q3: {
          question: false,
          answer: false
        },
        q4: {
          question: false,
          answer: false
        },
        q5: {
          question: false,
          answer: false
        },
        q6: {
          question: "Ar „PreMiD“ galima naudoti nemokamai?",
          answer: false
        },
        q7: {
          question: false,
          answer: false
        },
        q8: {
          question: false,
          answer: false
        },
        q9: {
          question: false,
          answer: false
        }
      }
    },
    store: {
      title: "Parduotuvė",
      noPresence: false,
      presence: {
        button: {
          reportIssue: false,
          suggestFeature: false,
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
    withLoveBy: false,
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
      message: false
    },
    default: {
      title: "Klaida",
      message: "Kažkas ne taip nutiko mūsų pusėje.",
      button: "Eiti atgal"
    }
  }
}));