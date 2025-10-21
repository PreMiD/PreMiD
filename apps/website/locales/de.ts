import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Bitte unterstütze uns, indem du deinen Werbeblocker deaktivierst."
    }
  },
  component: {
    searchBar: {
      search: "Suchen",
      sortBy: "Sortiere nach",
      searchPresence: "Presence suchen",
      sort: {
        mostUsed: "Am häufigsten verwendet",
        alphabetical: "Alphabetisch"
      },
      categories: {
        all: "Alle",
        anime: "Anime",
        games: "Spiele",
        music: "Musik",
        other: "Sonstige",
        socials: "Soziale Netzwerke",
        videos: "Videos & Streams"
      }
    },
    browserCard: {
      wip: "Noch in Arbeit",
      support: {
        safari: "Wir arbeiten daran, Safari zu unterstützen, bleib dran!"
      }
    },
    userChip: {
      loading: "Wird geladen..."
    },
    storeCard: {
      addPresence: "Hinzufügen",
      removePresence: "Entfernen"
    },
    donationModal: {
      title: "Ein kleiner Gefallen...",
      description: "Wir hoffen, dass dir PreMiD gefällt! Wenn es dir ein Lächeln ins Gesicht zaubert, warum dann nicht ein bisschen Liebe zurückgeben?\nUnser Team aus freiwilligen Helfern steckt viel Herzblut hinein, um es für euch großartig zu machen!",
      continue: "Weiter",
      close: "Schließen",
      patreon: "Unterstütze uns auf {name}",
      github: "Sponsor auf {name}",
      holdTight: "Warte... lade den magischen Button..."
    }
  },
  header: {
    links: {
      contributors: "Mitwirkende",
      downloads: "Downloads",
      features: "Funktionen",
      store: "Store"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Presence Beiträge",
        error: {
          title: "Fehler",
          description: "Wir haben Probleme beim Laden dieses Benutzers... Bitte versuche es später erneut."
        }
      }
    },
    home: {
      meta: {
        title: "Startseite"
      },
      title: "Verbessere deine Online-Darstellung mit PreMiD",
      subtitle: "Zeige deinen Freunden, was dir {word} gefällt.",
      words: {
        music: "Musik",
        videos: "Videos",
        streams: "Streams",
        media: "Medien"
      },
      description: "PreMiD ist ein einfaches, leistungsstarkes Tool, mit dem du deine aktuelle Medienaktivität auf verschiedenen Plattformen wie YouTube, Disney+, Netflix und Anderen teilen kannst. Bleib verbunden und lass deine Freunde in Echtzeit sehen, was du tust.",
      getStarted: "Erste Schritte",
      sections: {
        feature: {
          title: "Warum du PreMiD lieben wirst",
          feature1: {
            title: "Datenschutz",
            description: "Ändere deine Datenschutzeinstellungen und entscheide, welche Aktivitäten du mit anderen teilen möchtest. Deine Daten, deine Regeln."
          },
          feature2: {
            title: "Community-basiert",
            description: "Erleben Sie beispiellose Unterstützung für eine Vielzahl von Plattformen, angetrieben von einer leidenschaftlichen und engagierten Community."
          },
          feature3: {
            title: "Anpassbare Einstellungen",
            description: "Passen Sie PreMiD Erlebnis mit umfangreichen Optionen nach Ihren Vorlieben und Bedürfnissen an."
          },
          feature4: {
            title: "Einfache Einrichtung",
            description: "Mit unserem unkomplizierten Setup-Prozess können Sie schnell und einfach mit PreMiD starten."
          },
          feature5: {
            title: "Kompatibel mit Discord Nutzungsbedingungen",
            description: "Konform mit Discord Nutzungsbedingungen, indem die offiziellen Endpunkte von Discord genutzt werden."
          },
          feature6: {
            title: "Zukünftige Funktionen",
            description: "Bleibe dran für aufregende neue Funktionen und Verbesserungen, die Ihr Erlebnis mit PreMiD noch weiter verbessern werden."
          }
        },
        howItWorks: {
          title: "So funktioniert's",
          step1: {
            title: "Installiere die Erweiterung",
            description: "Füge PreMiD zu deinem Browser hinzu."
          },
          step2: {
            title: "Mit Discord anmelden",
            description: "Verbinde PreMiD mit deinem Discord Account."
          },
          step3: {
            title: "Dienst hinzufügen",
            description: "Wählen Sie die Dienste aus, die Sie anzeigen möchten, wie YouTube, Disney+, und mehr."
          },
          step4: {
            title: "Viel Spaß",
            description: "Teilen Sie Ihre Aktivitäten und genieße PreMiD."
          }
        },
        callToAction: {
          title: "Startklar?",
          description: "Trete den {count} Benutzern bei, die PreMiD bereits lieben.",
          button: "Jetzt starten"
        }
      }
    },
    contributors: {
      title: "Mitwirkende",
      presenceDevelopers: "Presence-Entwickler",
      staff: "Team",
      supporters: "Supporter",
      translators: "Übersetzer",
      avatar: {
        tooltip: "Klicke, um den Avatar von {name} zu kopieren"
      }
    },
    downloads: {
      title: "Downloads",
      steps: {
        install: "Erweiterung installieren",
        login: "Mit Discord anmelden",
        add: "Presence hinzufügen",
        showoff: "Zeige es!"
      },
      section: {
        heading: {
          title: "Zeit anzugeben.",
          description: "Beginne mit der Nutzung von PreMiD und zeige anderen, was du machst, vielleicht findest du jemanden mit den gleichen Interessen.",
          getStarted: "Erste Schritte",
          extension: "Browsererweiterung"
        }
      },
      browser: {
        your: "Dein Browser",
        other: "Andere Browser",
        based: "{browser} Basiert"
      },
      mobile: {
        title: "Schlechte Nachrichten!",
        description: "PreMiD ist nicht verfügbar für mobile Geräte, sorry!"
      },
      alphaAccess: {
        title: "Schalte exklusiven Alpha Zugriff frei!",
        description: "Tauche in die Zukunft von PreMiD ein, indem du uns auf Patreon oder GitHub unterstützt. Deine Unterstützung treibt nicht nur unsere Entwicklung voran, sondern gibt dir auch exklusiven Zugang zu den innovativsten Funktionen, die wir entwickeln. Erlebe die neuesten Highlights, die PreMiD zu bieten hat, und gestalte mit deinem Feedback die Zukunft aktiv mit. Es geht nicht nur darum, der Erste zu sein – es geht darum, Teil von etwas Größerem zu sein.",
        callToAction: "Erfahre mehr & werde Teil der Innovation"
      },
      faq: "Häufig gestellte Fragen",
      faqs: {
        q1: {
          question: "Was ist PreMiD?",
          answer: "PreMiD ist ein einfaches, konfigurierbares Tool, mit dem du in deinem Discord-Status zeigen kannst, was du gerade im Browser machst."
        },
        q2: {
          question: "Wie benutze ich PreMiD?",
          answer: "Du kannst PreMiD benutzen, indem du die Erweiterung installiert und dich mit deinem Discord Account anmeldest. Sobald du eingeloggt bist, kannst du die Aktivitäten zu deinem Profil hinzufügen und deinen Freunden zeigen."
        },
        q3: {
          question: "Verstößt PreMiD gegen Discords ToS?",
          answer: "Nein, PreMiD verstößt nicht gegen Discord's Nutzungsbedingungen. PreMiD verwendet Discord's API (inklusive Gated API Endpoints von Discord), um deine Aktivität festzulegen. Das bedeutet, dass PreMiD in voller Übereinstimmung mit Discord's Nutzungsbedingungen steht."
        },
        q4: {
          question: "Welche Dienste unterstützt PreMiD?",
          answer: "PreMiD unterstützt viele verschiedene Dienste, darunter YouTube, Twitch und Netflix. Die Liste der unterstützten Dienste wächst ständig. Du kannst die komplette Liste aller Presences in unserem Store ansehen."
        },
        q5: {
          question: "Wie kann ich zu PreMiD beitragen?",
          answer: "Du kannst zu PreMiD beitragen, indem du unserer Community auf GitHub beitrittst. Du kannst helfen, indem du Probleme meldest, Funktionen vorschlägst oder Code beisteuert."
        },
        q6: {
          question: "Ist PreMiD kostenlos?",
          answer: "Ja, die Nutzung von PreMiD ist kostenlos, aber wir akzeptieren Spenden über Patreon und GitHub Sponsors, um die Entwicklung des Projekts zu unterstützen."
        },
        q7: {
          question: "Was soll ich tun, wenn ich ein Problem mit PreMiD habe?",
          answer: "."
        },
        q8: {
          question: "",
          answer: "Unsere sogenannten Presences sind Community-gesteuert, wir haben nicht die Ressourcen, um jede einzelne Plattform hinzuzufügen. Du kannst jedoch deine eigene Aktivität hinzufügen, indem du den Anweisungen in unserer Dokumentation folgst."
        },
        q9: {
          question: "Wie oft wird PreMiD aktualisiert?",
          answer: "Wir sind ein kleines, von Freiwilligen getragenes Projekt und versuchen, PreMiD so oft wie möglich zu aktualisieren. Allerdings können wir nicht garantieren, dass wir uns immer sofort um alles kümmern können."
        }
      }
    },
    store: {
      title: "Store",
      noPresence: "Keine presence enstspricht deiner Suche...",
      presence: {
        button: {
          reportIssue: "Problem melden",
          suggestFeature: "Schlage eine Funktion vor",
          viewCode: "Code anzeigen"
        },
        title: {
          description: "Beschreibung",
          information: "Informationen"
        },
        informationSection: {
          contributors: "Mitwirkende:",
          version: "Version: {version}",
          users: "Benutzer: {users}",
          tags: "Schlagwörter:",
          supportedUrls: "Unterstützte URLs:"
        }
      },
      header: {
        categories: "Kategorien",
        search: "Presence suchen"
      }
    }
  },
  footer: {
    partners: "Partner",
    followUs: "Folge uns",
    supportUs: "Unterstütze uns",
    more: "Mehr",
    legal: "Impressum",
    supportList: {
      donate: "Spenden",
      contribute: "Mitwirken",
      translate: "Übersetzen"
    },
    moreList: {
      faq: "Häufig gestellte Fragen",
      documentation: "Dokumentation",
      status: "Status"
    },
    legalList: {
      privacyPolicy: "Datenschutzerklärung",
      termsOfService: "Nutzungsbedingungen",
      cookiePolicy: "Datenschutzerklärung"
    },
    withLoveBy: "Mit",
    by: "von",
    copyright: "© {year}-{currentYear} {company} Alle Rechte vorbehalten."
  },
  error: {
    404: {
      title: false,
      message: "Die gesuchte Seite existiert nicht."
    },
    500: {
      title: false,
      message: "Entschuldige, etwas ist bei uns schief gelaufen."
    },
    default: {
      title: "Fehler",
      message: "Entschuldige, etwas ist bei uns schief gelaufen.",
      button: "Zurück"
    }
  }
}));