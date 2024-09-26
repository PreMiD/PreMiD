import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Merci de nous soutenir en désactivant ton bloqueur de pub."
    }
  },
  component: {
    searchBar: {
      search: "Rechercher",
      sortBy: "Trier par",
      searchPresence: "Rechercher une Presence",
      sort: {
        mostUsed: "Les plus utilisés",
        alphabetical: "De A à Z"
      },
      categories: {
        all: "Tout",
        anime: "Animé",
        games: "Jeux",
        music: "Musique",
        other: "Autres",
        socials: "Réseaux Sociaux",
        videos: "Vidéos et Streams"
      }
    },
    browserCard: {
      wip: false,
      support: {
        safari: "Nous travaillons sur le support de Safari, restez à l'écoute !"
      }
    },
    userChip: {
      loading: "Chargement..."
    },
    storeCard: {
      addPresence: "Ajouter",
      removePresence: "Retirer"
    },
    donationModal: {
      title: false,
      description: false,
      continue: false,
      close: "Fermer",
      patreon: "Soutenir sur {name}",
      github: "Parrainer sur {name}",
      holdTight: false
    }
  },
  header: {
    links: {
      contributors: "Contributeurs",
      downloads: "Téléchargements",
      features: "Fonctionnalités",
      store: "Boutique"
    }
  },
  page: {
    users: {
      userPage: {
        title: false,
        error: {
          title: "Erreur",
          description: false
        }
      }
    },
    home: {
      meta: {
        title: "Accueil"
      },
      title: false,
      subtitle: false,
      words: {
        music: "Musique",
        videos: "Vidéos",
        streams: false,
        media: false
      },
      description: false,
      getStarted: "Commencer",
      sections: {
        feature: {
          title: "Pourquoi vous allez adorer PreMiD",
          feature1: {
            title: "Contrôle de la vie privée",
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
          title: false,
          step1: {
            title: "Installe l'extension",
            description: "Ajoute PreMiD à ton navigateur."
          },
          step2: {
            title: "Se connecter à Discord",
            description: false
          },
          step3: {
            title: "Ajouter des Services",
            description: "Choisis les services que tu souhaites afficher, comme YouTube, Disney+, et plus encore."
          },
          step4: {
            title: false,
            description: false
          }
        },
        callToAction: {
          title: false,
          description: "Rejoins les {count} utilisateurs qui aiment déjà PreMiD.",
          button: false
        }
      }
    },
    contributors: {
      title: "Contributeurs",
      presenceDevelopers: "Développeurs de Présences",
      staff: "Équipe",
      supporters: "Supporteurs",
      translators: "Traducteurs",
      avatar: {
        tooltip: "Clique pour copier l'avatar de {name}"
      }
    },
    downloads: {
      title: "Téléchargements",
      steps: {
        install: "Installer l'extension",
        login: "Se connecter à Discord",
        add: "Ajouter des Présences",
        showoff: false
      },
      section: {
        heading: {
          title: "C'est l'heure du show.",
          description: "Commencez à utiliser PreMiD dès maintenant et montrez à vos amis ce que vous êtes en train de faire, peut-être vous trouverez quelqu'un avec les mêmes centres d'intérêts.",
          getStarted: "Commencer",
          extension: "Extension"
        }
      },
      browser: {
        your: "Votre navigateur",
        other: "Autres navigateurs",
        based: "Basé sur {browser}"
      },
      mobile: {
        title: "Mauvaise nouvelle !",
        description: "PreMiD n'est pas disponible pour les appareils mobiles, désolé !"
      },
      alphaAccess: {
        title: "Débloque l'accès exclusif à l'alpha !",
        description: false,
        callToAction: false
      },
      faq: "Questions fréquemment posées",
      faqs: {
        q1: {
          question: "Qu'est-ce que PreMiD ?",
          answer: false
        },
        q2: {
          question: "Comment utiliser PreMiD ?",
          answer: false
        },
        q3: {
          question: "PreMiD est-il contraire aux CGU de Discord ?",
          answer: false
        },
        q4: {
          question: false,
          answer: false
        },
        q5: {
          question: "Comment puis-je contribuer à PreMiD ?",
          answer: false
        },
        q6: {
          question: false,
          answer: false
        },
        q7: {
          question: false,
          answer: false
        },
        q8: {
          question: "PreMiD ne supporte pas xyz, pouvez-vous l'ajouter ?",
          answer: false
        },
        q9: {
          question: "À quelle fréquence PreMiD est-il mis à jour ?",
          answer: false
        }
      }
    },
    store: {
      title: "Boutique",
      noPresence: "Aucune présence ne correspond à votre recherche...",
      presence: {
        button: {
          reportIssue: "Signaler un problème",
          suggestFeature: "Suggérer une fonctionnalité",
          viewCode: "Voir le code"
        },
        title: {
          description: "Description",
          information: "Information"
        },
        informationSection: {
          contributors: "Contributeurs :",
          version: "Version : {version}",
          users: "Utilisateurs : {users}",
          tags: "Tags :",
          supportedUrls: "URL prises en charge :"
        }
      },
      header: {
        categories: "Catégories",
        search: "Rechercher une Présence"
      }
    }
  },
  footer: {
    partners: "Partenaires",
    followUs: "Suivez-nous",
    supportUs: "Aidez-nous",
    more: "Plus",
    legal: "Mentions Légales",
    supportList: {
      donate: "Faire un don",
      contribute: "Contribuer",
      translate: "Traduire"
    },
    moreList: {
      faq: "Foire Aux Questions",
      documentation: "Documentation",
      status: "État"
    },
    legalList: {
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions générales d'utilisation",
      cookiePolicy: "Politique de Cookies"
    },
    withLoveBy: "Avec",
    by: "par",
    copyright: "©️ {year}-{currentYear} {company} Tous droits réservés."
  },
  error: {
    404: {
      title: false,
      message: "La page que tu cherches n'existe pas."
    },
    500: {
      title: false,
      message: false
    },
    default: {
      title: "Erreur",
      message: false,
      button: "Revenir en arrière"
    }
  }
}));