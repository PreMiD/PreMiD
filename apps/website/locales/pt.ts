import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Por favor, apoie-nos desativando o seu bloqueador de anúncios."
    }
  },
  component: {
    searchBar: {
      search: "Pesquisar",
      sortBy: "Ordenar por",
      searchPresence: "Pesquisar presence",
      sort: {
        mostUsed: "Mais Utilizado",
        alphabetical: "Alfabético"
      },
      categories: {
        all: "Todos",
        anime: "Anime",
        games: "Jogos",
        music: "Música",
        other: "Outro",
        socials: "Social",
        videos: "Vídeos e Transmissões"
      }
    },
    browserCard: {
      wip: "Trabalho em Progresso",
      support: {
        safari: "Estamos a trabalhar no suporte para o Safari, fique atento!"
      }
    },
    userChip: {
      loading: "A carregar..."
    },
    storeCard: {
      addPresence: "Adicionar",
      removePresence: "Remover"
    },
    donationModal: {
      title: "Um Favor Rápido...",
      description: "Esperamos que adores o PreMiD! Se ele te trouxer um sorriso, por que não retribuir um pouco de amor? A nossa equipa de voluntários deu o melhor de si para torná-lo incrível só para ti!",
      continue: "Continuar",
      close: "Fechar",
      patreon: "Suporte em {name}",
      github: "Patrocinar em {name}",
      holdTight: "Agarra-te firme... a carregar o botão mágico..."
    }
  },
  header: {
    links: {
      contributors: "Contribuidores",
      downloads: "Downloads",
      features: "Funcionalidades",
      store: "Loja"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Contribuições de Presença",
        error: {
          title: "Erro",
          description: "Estamos a ter dificuldades em carregar este utilizador... Por favor, tente novamente mais tarde."
        }
      }
    },
    home: {
      meta: {
        title: "Início"
      },
      title: "Melhore a sua presença online com o PreMiD",
      subtitle: "Mostra aos teus amigos o que {word} estás a desfrutar.",
      words: {
        music: "Música",
        videos: "Vídeos",
        streams: "Transmissões",
        media: "Mídia"
      },
      description: "O PreMiD é uma ferramenta simples e poderosa que permite partilhar a tua atividade atual em várias plataformas, como YouTube, Disney+, Netflix e outras. Mantém-te conectado e deixa os teus amigos verem o que estás a fazer em tempo real.",
      getStarted: "Começa já",
      sections: {
        feature: {
          title: "Porque vais adorar o PreMiD",
          feature1: {
            title: "Controlo de Privacidade",
            description: "Toma o controlo das tuas configurações de privacidade e decide quais as atividades que queres partilhar com os outros. Os teus dados, as tuas regras."
          },
          feature2: {
            title: "Orientado pela Comunidade",
            description: "Desfruta de um suporte incomparável para uma infinidade de plataformas, impulsionado por uma comunidade apaixonada e dedicada."
          },
          feature3: {
            title: "Configurações Personalizáveis",
            description: "Personaliza a tua experiência no PreMiD com opções de personalização extensas para se adequar às tuas preferências e necessidades."
          },
          feature4: {
            title: "Configuração Fácil",
            description: "Começa a usar o PreMiD em pouco tempo. O nosso processo de configuração simples garante um início sem complicações."
          },
          feature5: {
            title: "Conforme com os Termos de Serviço do Discord",
            description: "Totalmente conforme com os Termos de Serviço do Discord, utilizando os pontos finais oficiais fornecidos pelo Discord."
          },
          feature6: {
            title: "Funcionalidades Futuras",
            description: "Fica atento a novas funcionalidades e melhorias emocionantes que irão tornar a tua experiência com o PreMiD ainda melhor."
          }
        },
        howItWorks: {
          title: "Como Funciona",
          step1: {
            title: "Instala a Extensão",
            description: "Obtenha o PreMiD ao teu navegador."
          },
          step2: {
            title: "Entre com o Discord",
            description: "Conecta o PreMiD à tua conta do Discord."
          },
          step3: {
            title: "Adicionar Serviços",
            description: "Escolhe os serviços que queres exibir, como YouTube, Disney+ e outros."
          },
          step4: {
            title: "Aproveite",
            description: "Compartilhe a tua atividade e desfruta de usar o PreMiD."
          }
        },
        callToAction: {
          title: "Pronto para começar?",
          description: "Junte-se aos {count} utilizadores que já adoram o PreMiD.",
          button: "Iniciar Agora"
        }
      }
    },
    contributors: {
      title: "Contribuidores",
      presenceDevelopers: "Desenvolvedores de Presença",
      staff: "Staff",
      supporters: "Contribuidores",
      translators: "Tradutores",
      avatar: {
        tooltip: "Clique para copiar o avatar de {name}"
      }
    },
    downloads: {
      title: "Downloads",
      steps: {
        install: "Instalar extensão",
        login: "Entre com o Discord",
        add: "Adicionar Presenças",
        showoff: "Exibido!"
      },
      section: {
        heading: {
          title: "Hora de te exibires.",
          description: "Usa o PreMiD agora e mostra aos teus amigos o que estás a fazer. Pode ser que encontres alguém com os mesmos interesses.",
          getStarted: "Começa já",
          extension: "Extensão"
        }
      },
      browser: {
        your: "Seu navegador",
        other: "Outros navegadores",
        based: "Baseado em {browser}"
      },
      mobile: {
        title: "Más notícias!",
        description: "O PreMiD não está disponível para dispositivos móveis, desculpa!"
      },
      alphaAccess: {
        title: "Desbloqueia o Acesso Exclusivo Alpha!",
        description: "Dá um passo no futuro do PreMiD ao tornares-te um Patron ou ao patrocinares-nos no GitHub. O teu apoio não só impulsiona o nosso desenvolvimento, mas também te garante acesso antecipado às funcionalidades mais inovadoras que estamos a criar. Experimenta o que há de mais avançado no PreMiD e influencia a sua trajetória com o teu feedback. Não se trata apenas de ser o primeiro — é fazer parte de algo maior.",
        callToAction: "Saiba mais e Junta-te à Inovação"
      },
      faq: "Perguntas Frequentes",
      faqs: {
        q1: {
          question: "O que é PreMid?",
          answer: "O PreMiD é uma ferramenta simples e configurável que te permite mostrar o que estás a fazer na web no teu status de atividade no Discord."
        },
        q2: {
          question: "Como posso usar o PreMiD?",
          answer: "Podes usar o PreMiD instalando a extensão e iniciando sessão com a tua conta do Discord. Depois de entrares, podes adicionar presenças ao teu perfil e mostrar aos teus amigos."
        },
        q3: {
          question: "O PreMiD vai contra os Termos de Serviço do Discord?",
          answer: "Não, o PreMiD não vai contra os Termos de Serviço do Discord. O PreMiD utiliza a API do Discord (incluindo endpoints restritos fornecidos pelo próprio Discord) para definir a tua atividade. Isso significa que o PreMiD está totalmente em conformidade com os Termos de Serviço do Discord."
        },
        q4: {
          question: "Que serviços o PreMiD suporta?",
          answer: "O PreMiD suporta muitos serviços diferentes, incluindo YouTube, Twitch e Netflix. A lista de serviços suportados está em constante crescimento. Podes ver a lista completa de Presenças na nossa página da loja."
        },
        q5: {
          question: "Como posso contribuir para o PreMiD?",
          answer: "Podes contribuir para o PreMiD juntando-te à nossa comunidade no GitHub. Podes ajudar reportando problemas, sugerindo funcionalidades ou contribuindo com código."
        },
        q6: {
          question: "O PreMiD é gratuito para usar?",
          answer: "Sim, o PreMiD é gratuito para usar. No entanto, aceitamos doações através do Patreon e GitHub Sponsors para ajudar a apoiar o desenvolvimento do projeto."
        },
        q7: {
          question: "O que devo fazer se encontrar um problema com o PreMiD?",
          answer: "Se encontrares algum problema com o PreMiD, podes juntar-te ao nosso servidor no Discord para obter suporte. Também temos um guia de resolução de problemas na nossa documentação."
        },
        q8: {
          question: "O PreMiD não suporta xyz, podem adicionar isso?",
          answer: "As nossas chamadas Presenças são orientadas pela comunidade, não temos recursos para adicionar todas as plataformas. No entanto, podes adicionar a tua própria Presença seguindo as instruções na nossa documentação."
        },
        q9: {
          question: "Com que frequência o PreMiD é atualizado?",
          answer: "Somos um pequeno projeto orientado por voluntários, e o nosso objetivo é atualizar o PreMiD o mais frequentemente possível, mas não podemos prometer que estaremos sempre a par de tudo."
        }
      }
    },
    store: {
      title: "Loja",
      noPresence: "Nenhuma presença corresponde à sua pesquisa...",
      presence: {
        button: {
          reportIssue: "Reportar um Problema",
          suggestFeature: "Sugerir uma Funcionalidade",
          viewCode: "Ver código"
        },
        title: {
          description: "Descrição",
          information: "Informação"
        },
        informationSection: {
          contributors: "Contribuidores:",
          version: "Versão: {version}",
          users: "Utilizadores: {users}",
          tags: "Etiquetas:",
          supportedUrls: "URLs Suportados:"
        }
      },
      header: {
        categories: "Categorias",
        search: "Pesquisar presence"
      }
    }
  },
  footer: {
    partners: "Parceiros",
    followUs: "Siga-nos",
    supportUs: "Apoia-nos",
    more: "Mais",
    legal: "Legal",
    supportList: {
      donate: "Doar",
      contribute: "Contribuir",
      translate: "Traduzir"
    },
    moreList: {
      faq: "FAQ",
      documentation: "Documentação",
      status: "Estado"
    },
    legalList: {
      privacyPolicy: "Política de privacidade",
      termsOfService: "Termos de Serviço",
      cookiePolicy: "Política de cookies"
    },
    withLoveBy: "Com",
    by: "por",
    copyright: "© {year}-{currentYear} {company} Todos os direitos reservados."
  },
  error: {
    404: {
      title: false,
      message: "A página que procuras não existe."
    },
    500: {
      title: false,
      message: "Ocorreu um erro do nosso lado."
    },
    default: {
      title: "Erro",
      message: "Ocorreu um erro do nosso lado.",
      button: "Voltar atrás"
    }
  }
}));