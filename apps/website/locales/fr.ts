import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Merci de nous soutenir en désactivant votre bloqueur de publicité."
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
      wip: "En cours de développement",
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
      title: "Une Petite Faveur...",
      description: "Nous espérons que vous allez adorer PreMiD ! S'il vous fait sourire, pourquoi ne pas lui rendre la pareille ? Notre équipe de bénévoles met tout son cœur à le rendre génial, rien que pour vous !",
      continue: "Continuer",
      close: "Fermer",
      patreon: "Soutenir sur {name}",
      github: "Parrainer sur {name}",
      holdTight: "Tenez bon... chargement du bouton magique..."
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
        title: "Contributions à la Présence",
        error: {
          title: "Erreur",
          description: "Nous avons des difficultés à charger cet utilisateur... Veuillez réessayer plus tard."
        }
      }
    },
    home: {
      meta: {
        title: "Accueil"
      },
      title: "Améliorez votre Présence en ligne avec PreMiD",
      subtitle: "Montrez à vos amis {word} vous aimez.",
      words: {
        music: "quelle Musique",
        videos: "quelles Vidéos",
        streams: "quels Streams",
        media: "quels Médias"
      },
      description: "PreMiD est un outil simple et puissant qui vous permet de partager votre activité médiatique actuelle à travers plusieurs plateformes telles que YouTube, Disney+, Netflix, etc. Restez connecté et permettez à vos amis de voir ce que vous faites en temps réel.",
      getStarted: "Commencer",
      sections: {
        feature: {
          title: "Pourquoi vous allez adorer PreMiD",
          feature1: {
            title: "Contrôle de la vie privée",
            description: "Prenez en charge vos paramètres de confidentialité et décidez des activités que vous partagez avec les autres. Vos données, vos règles."
          },
          feature2: {
            title: "Propulsé par la communauté",
            description: "Faites l'expérience d'un support inégalé pour une multitude de plateformes, grâce à une communauté passionnée et dévouée."
          },
          feature3: {
            title: "Réglages personnalisables",
            description: "Adaptez votre expérience PreMiD avec de nombreuses options de personnalisation selon vos préférences et besoins."
          },
          feature4: {
            title: "Mise en place facile",
            description: "Soyez opérationnel avec PreMiD en un rien de temps. Notre processus d'installation simple garantit un démarrage sans tracas."
          },
          feature5: {
            title: "Conforme aux CGU de Discord",
            description: "Entièrement conforme aux Conditions Générales d'Utilisation de Discord en utilisant les points de terminaisons (endpoints) officiels fournis par Discord."
          },
          feature6: {
            title: "Fonctionnalités futures",
            description: "Restez à l'affût de nouvelles fonctionnalités et améliorations qui amélioreront encore votre expérience PreMiD."
          }
        },
        howItWorks: {
          title: "Comment ça marche ?",
          step1: {
            title: "Installer l'extension",
            description: "Ajoutez PreMiD à votre navigateur."
          },
          step2: {
            title: "Se connecter à Discord",
            description: "Connectez PreMiD à votre compte Discord."
          },
          step3: {
            title: "Ajouter des Services",
            description: "Choisissez les services que vous souhaitez afficher, comme YouTube, Disney+, et plus encore."
          },
          step4: {
            title: "Profiter",
            description: "Partagez votre activité et profitez de PreMiD."
          }
        },
        callToAction: {
          title: "Prêt à commencer ?",
          description: "Rejoignez les {count} utilisateurs qui aiment déjà PreMiD.",
          button: "Commencer maintenant"
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
        tooltip: "Cliquez pour copier l'avatar de {name}"
      }
    },
    downloads: {
      title: "Téléchargements",
      steps: {
        install: "Installer l'extension",
        login: "Se connecter à Discord",
        add: "Ajouter des Présences",
        showoff: "Frimer !"
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
        title: "Débloquez l'accès exclusif à l'alpha !",
        description: "Entrez dans le futur de PreMiD en devenant un membre Patreon ou en nous parrainant sur GitHub. Votre soutien ne fait pas que propulser notre développement, il vous donne aussi un accès privilégié aux fonctionnalités les plus innovantes que nous concevons. Découvrez les dernières nouveautés de ce que PreMiD peut offrir et influencez sa trajectoire grâce à vos commentaires. Il ne s'agit pas seulement d'être le premier, mais de faire partie de quelque chose de plus grand.",
        callToAction: "En savoir plus et rejoindre l'innovation"
      },
      faq: "Questions fréquemment posées",
      faqs: {
        q1: {
          question: "Qu'est-ce que PreMiD ?",
          answer: "PreMiD est un utilitaire simple et configurable qui vous permet de montrer ce que vous faites sur le web dans votre statut d'activité Discord."
        },
        q2: {
          question: "Comment utiliser PreMiD ?",
          answer: "Vous pouvez utiliser PreMiD en installant l'extension et en vous connectant avec votre compte Discord. Une fois connecté, vous pouvez ajouter des Présences à votre profil et les montrer à vos amis."
        },
        q3: {
          question: "PreMiD est-il contraire aux CGU de Discord ?",
          answer: "Non, PreMiD n'est pas contraire aux CGU de Discord. PreMiD utilise l'API de Discord (y compris les points de terminaisons (endpoints) d'API protégés fournis par Discord) pour définir votre activité. Cela signifie que PreMiD est en totale conformité avec les CGU de Discord."
        },
        q4: {
          question: "Quels sont les services pris en charge par PreMiD ?",
          answer: "PreMiD prend en charge de nombreux services différents, notamment YouTube, Twitch et Netflix. La liste des services pris en charge ne cesse de s'allonger. Vous pouvez consulter la liste complète des présences sur la page de notre boutique."
        },
        q5: {
          question: "Comment puis-je contribuer à PreMiD ?",
          answer: "Vous pouvez contribuer à PreMiD en rejoignant notre communauté sur GitHub. Vous pouvez nous aider en signalant des problèmes, en suggérant des fonctionnalités ou en contribuant au code."
        },
        q6: {
          question: "PreMiD est-il gratuit à utiliser ?",
          answer: "Oui, l'utilisation de PreMiD est gratuite. Cependant, nous acceptons les dons via Patreon et les parrainages GitHub pour aider à soutenir le développement du projet."
        },
        q7: {
          question: "Que dois-je faire si je rencontre un problème avec PreMiD ?",
          answer: "Si vous rencontrez des problèmes avec PreMiD, vous pouvez rejoindre notre serveur Discord pour obtenir de l'aide. Nous avons également un guide de dépannage sur notre documentation."
        },
        q8: {
          question: "PreMiD ne supporte pas xyz, pouvez-vous l'ajouter ?",
          answer: "Nos « Présences » sont gérées par la communauté, nous n'avons pas les ressources nécessaires pour ajouter toutes les plateformes. Cependant, vous pouvez ajouter votre propre Présence en suivant les instructions de notre documentation."
        },
        q9: {
          question: "À quelle fréquence PreMiD est-il mis à jour ?",
          answer: "Nous sommes un petit projet mené par des bénévoles, nous essayons de mettre à jour PreMiD aussi souvent que possible mais nous ne pouvons pas promettre que nous serons toujours au top."
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
      message: "La page que vous cherchez n'existe pas."
    },
    500: {
      title: false,
      message: "Quelque chose s'est mal passé de notre côté."
    },
    default: {
      title: "Erreur",
      message: "Quelque chose s'est mal passé de notre côté.",
      button: "Revenir en arrière"
    }
  }
}));