import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Lūdzu, atbalstiet mūs, atspējojot reklāmu bloķētāju."
    }
  },
  component: {
    searchBar: {
      search: "Meklēt",
      sortBy: "Kārtot pēc",
      searchPresence: "Meklēt Presence",
      sort: {
        mostUsed: "Visbiežāk izmantotais",
        alphabetical: "Alfabētiski"
      },
      categories: {
        all: "Viss",
        anime: "Anime",
        games: "Spēles",
        music: "Mūzika",
        other: "Cits",
        socials: "Sociālie tīkli",
        videos: "Video & Straumēšana"
      }
    },
    browserCard: {
      wip: "WIP",
      support: {
        safari: "Mēs strādājam pie Safari atbalsta, sekojiet līdzi jaunumiem!"
      }
    },
    userChip: {
      loading: "Ielādē..."
    },
    storeCard: {
      addPresence: "Pievienot",
      removePresence: "Noņemt"
    },
    donationModal: {
      title: false,
      description: "Mēs ceram, ka jums patiks PreMiD! Ja tas liek jums smaidīt, kāpēc gan neatbildēt ar mīlestību? Mūsu brīvprātīgo komanda iegulda visu savu sirdi, lai padarītu to lielisku tieši jums!",
      continue: "Turpināt",
      close: "Aizvērt",
      patreon: "Atbalstīt {name}",
      github: "Sponsorēt {name}",
      holdTight: "Turiet cieši... ielādējas burvju poga..."
    }
  },
  header: {
    links: {
      contributors: "Ieguldītāji",
      downloads: "Lejupielādes",
      features: "Funkcijas",
      store: "Veikals"
    }
  },
  page: {
    users: {
      userPage: {
        title: false,
        error: {
          title: "Kļūda",
          description: "Mums rodas problēmas, ielādējot šo lietotāju... Lūdzu, mēģiniet vēlreiz vēlāk."
        }
      }
    },
    home: {
      meta: {
        title: "Māja"
      },
      title: "Uzlabojiet savu klātbūtni tiešsaistē ar PreMiD",
      subtitle: false,
      words: {
        music: "Mūzika",
        videos: "Video",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Sāc",
      sections: {
        feature: {
          title: "Kāpēc Jums Patiks PreMiD",
          feature1: {
            title: "Privātuma Kontrole",
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
            title: "Atbilst Discord lietošanas noteikumiem",
            description: "Pilnībā atbilst Discord pakalpojumu sniegšanas noteikumiem, izmantojot oficiālos Discord nodrošinātos galapunktus."
          },
          feature6: {
            title: "Nākotnes Funkcijas",
            description: false
          }
        },
        howItWorks: {
          title: "Kā Tas Darbojas",
          step1: {
            title: "Instalējiet paplašinājumu",
            description: "Pievienojiet PreMiD savam pārlūkam."
          },
          step2: {
            title: "Pieslēgties ar Discord",
            description: "Savienojiet PreMiD ar savu Discord kontu."
          },
          step3: {
            title: false,
            description: false
          },
          step4: {
            title: "Izbaudiet",
            description: "Dalieties savās aktivitātēs un izbaudiet PreMiD lietošanu."
          }
        },
        callToAction: {
          title: "Vai esat gatavs sākt?",
          description: "Pievienojies {count} lietotājiem, kuri jau ir iecienījuši PreMiD.",
          button: "Sākt Tagad"
        }
      }
    },
    contributors: {
      title: "Ieguldītāji",
      presenceDevelopers: "Presence Izstrādātāji",
      staff: "Personāls",
      supporters: "Atbalstītāji",
      translators: "Tulki",
      avatar: {
        tooltip: false
      }
    },
    downloads: {
      title: "Lejupielādes",
      steps: {
        install: false,
        login: "Pieslēgties ar Discord",
        add: "Pievienot Presence",
        showoff: false
      },
      section: {
        heading: {
          title: "Laiks izrādīties.",
          description: "Izmanto PreMiD tagad, lai izrādītos draugiem, ko tu dari, varbūt tu atradīsi kādu ar līdzīgām interesēm.",
          getStarted: "Sāc",
          extension: "Paplašinājums"
        }
      },
      browser: {
        your: "Jūsu pārlūks",
        other: "Citi pārlūki",
        based: false
      },
      mobile: {
        title: "Sliktas ziņas!",
        description: "Atvainojiet, PreMiD nav pieejams mobilajām ierīcēm!"
      },
      alphaAccess: {
        title: "Atbloķējiet ekskluzīvu piekļuvi alfa versijai!",
        description: false,
        callToAction: false
      },
      faq: "Bieži uzdotie jautājumi",
      faqs: {
        q1: {
          question: "Kas ir PreMiD?",
          answer: false
        },
        q2: {
          question: "Kā lietot PreMiD?",
          answer: false
        },
        q3: {
          question: false,
          answer: false
        },
        q4: {
          question: "Kādus pakalpojumus atbalsta PreMiD?",
          answer: false
        },
        q5: {
          question: "Kā es varu palīdzēt PreMiD procesā?",
          answer: false
        },
        q6: {
          question: "Vai PreMiD lietošana ir bez maksas?",
          answer: "Jā, PreMiD lietošana ir bez maksas. Tomēr mēs pieņemam ziedojumus, izmantojot Patreon un GitHub sponsorus, lai atbalstītu projekta attīstību."
        },
        q7: {
          question: "Kas man jādara, ja rodas problēmas ar PreMiD?",
          answer: false
        },
        q8: {
          question: false,
          answer: false
        },
        q9: {
          question: "Cik bieži tiek atjaunināts PreMiD?",
          answer: false
        }
      }
    },
    store: {
      title: "Veikals",
      noPresence: "Nav atrasts neviens presence, kas atbilst jūsu meklēšanai...",
      presence: {
        button: {
          reportIssue: "Ziņot par problēmu",
          suggestFeature: "Ieteikt funkciju",
          viewCode: "Skatīt Kodu"
        },
        title: {
          description: "Apraksts",
          information: "Informācija"
        },
        informationSection: {
          contributors: "Dalībnieki:",
          version: "Versija: {version}",
          users: false,
          tags: false,
          supportedUrls: "Atbalstītie URL:"
        }
      },
      header: {
        categories: "Kategorijas",
        search: "Meklēt Presence"
      }
    }
  },
  footer: {
    partners: "Partneri",
    followUs: "Sekojiet mums",
    supportUs: "Atbalsti mūs",
    more: "Vairāk",
    legal: "Juridiskā informācija",
    supportList: {
      donate: "Ziedot",
      contribute: "Dod savu ieguldījumu",
      translate: "Tulko"
    },
    moreList: {
      faq: "BUJ",
      documentation: "Dokumentācija",
      status: "Statuss"
    },
    legalList: {
      privacyPolicy: "Privātuma politika",
      termsOfService: "Pakalpojumu sniegšanas noteikumi",
      cookiePolicy: "Sīkdatņu Politika"
    },
    withLoveBy: "Ar",
    by: "no",
    copyright: "© {year}-{currentYear} {company} Visas tiesības aizsargātas."
  },
  error: {
    404: {
      title: false,
      message: "Lapa, kuru meklējat, neeksistē."
    },
    500: {
      title: false,
      message: "Mūsu pusē kaut kas nogāja greizi."
    },
    default: {
      title: "Kļūda",
      message: "Mūsu pusē kaut kas nogāja greizi.",
      button: "Iet Atpakaļ"
    }
  }
}));