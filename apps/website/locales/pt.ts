import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Por favor, apoia-nos a desativar o teu bloqueador de anúncios."
    }
  },
  component: {
    searchBar: {
      search: "Pesquisar",
      sortBy: "Ordenar por",
      searchPresence: "Pesquisar presence",
      sort: {
        mostUsed: "Mais Usado",
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
        safari: "Estamos a trabalhar no suporte para Safari, fica atento!"
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
      title: "Um Favorzinho...",
      description: "Esperamos que adores o PreMiD! Se te trás um sorriso à boca, por que não retribuir um pouco do amor? A nossa equipa de voluntários deu o seu melhor para torná-lo incrível só para ti!",
      continue: "Continuar",
      close: "Fechar",
      patreon: "Suporta em {name}",
      github: "Patrocinar em {name}",
      holdTight: "Segura-te bem... a carregar o botão mágico..."
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
          description: "Estamos a ter dificuldades em carregar este utilizador... Por favor, tenta novamente mais tarde."
        }
      }
    },
    home: {
      meta: {
        title: "Início"
      },
      title: "Melhora a Tua Presença Online Com o PreMiD",
      subtitle: "Mostra aos teus amigos de que {word} desfrutas.",
      words: {
        music: "Música",
        videos: "Vídeos",
        streams: "Transmissões",
        media: "Mídia"
      },
      description: "PreMiD é uma ferramenta simples e poderosa que te permite partilhar a tua atividade atual em várias plataformas, como YouTube, Disney+, Netflix e mais. Mantém-te conectado e deixa os teus amigos verem o que estás a fazer em tempo real.",
      getStarted: "Começa já",
      sections: {
        feature: {
          title: "Porque Irás Adorar o PreMiD",
          feature1: {
            title: "Controlo de Privacidade",
            description: "Assume controlo das tuas configurações de privacidade e decide quais atividades partilhar com os outros. Os teus dados, as tuas regras."
          },
          feature2: {
            title: "Dirigido pela Comunidade",
            description: "Experiencia um suporte incomparável para uma multitude de plataformas, impulsionado por uma comunidade apaixonada e dedicada."
          },
          feature3: {
            title: "Configurações Personalizáveis",
            description: "Personaliza a tua experiência no PreMiD com opções de personalização extensas que se adequam às tuas preferências e necessidades."
          },
          feature4: {
            title: "Configuração Fácil",
            description: "Começa a usar o PreMiD em pouco tempo. O nosso processo de configuração simples garante um início sem complicações."
          },
          feature5: {
            title: "Cumpre os Termos de Serviço do Discord",
            description: "Cumpre totalmente com os Termos de Serviço do Discord, ao utilizar os pontos finais oficiais fornecidos pelo Discord."
          },
          feature6: {
            title: "Funcionalidades Futuras",
            description: "Fica atento a novas funcionalidades e melhorias emocionantes que vão melhorar a tua experiência com o PreMiD ainda mais."
          }
        },
        howItWorks: {
          title: "Como Funciona",
          step1: {
            title: "Instala a Extensão",
            description: "Adiciona o PreMiD ao teu navegador."
          },
          step2: {
            title: "Iniciar sessão com Discord",
            description: "Conecta o PreMiD à tua conta do Discord."
          },
          step3: {
            title: "Adicionar Serviços",
            description: "Escolhe os serviços que queres exibir, como YouTube, Disney+ e mais."
          },
          step4: {
            title: "Aproveita",
            description: "Partilha a tua atividade e desfruta do PreMiD."
          }
        },
        callToAction: {
          title: "Pronto para começar?",
          description: "Junta-te aos {count} utilizadores que já adoram o PreMiD.",
          button: "ComeçarAgora"
        }
      }
    },
    contributors: {
      title: "Contribuidores",
      presenceDevelopers: "Programadores de Presença",
      staff: "Staff",
      supporters: "Contribuidores",
      translators: "Tradutores",
      avatar: {
        tooltip: "Clica para copiar o avatar de {name}"
      }
    },
    downloads: {
      title: "Downloads",
      steps: {
        install: "Instalar extensão",
        login: "Iniciar sessão com Discord",
        add: "Adicionar Presenças",
        showoff: "Gaba-te!"
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
        your: "O teu navegador",
        other: "Outros navegadores",
        based: "Baseado em {browser}"
      },
      mobile: {
        title: "Más notícias!",
        description: "PreMiD não está disponível para dispositivos móveis, desculpa!"
      },
      alphaAccess: {
        title: "Desbloqueia o Acesso Exclusivo Alpha!",
        description: "Dá um passo no futuro do PreMiD ao te tornares um Patron ou ao nos patrocinares no GitHub. O teu apoio não só impulsiona o nosso desenvolvimento, como também te garante acesso antecipado às funcionalidades mais inovadoras que estamos a criar. Experimenta o que há de mais avançado no PreMiD e influencia a sua trajetória com o teu feedback. Não se trata apenas de ser o primeiro — trata-se de fazer parte de algo maior.",
        callToAction: "Sabe mais & Junta-te à Inovação"
      },
      faq: "Perguntas Frequentes",
      faqs: {
        q1: {
          question: "O que é PreMiD?",
          answer: "O PreMiD é uma ferramenta simples e configurável que te permite mostrar o que estás a fazer na web no teu estado de atividade no Discord."
        },
        q2: {
          question: "Como uso o PreMiD?",
          answer: "Podes usar o PreMiD instalando a extensão e iniciando sessão com a tua conta do Discord. Quando entrares, podes adicionar presenças ao teu perfil e gabares--te aos teus amigos."
        },
        q3: {
          question: "O PreMiD vai contra os Termos de Serviço do Discord?",
          answer: "Não, o PreMiD não vai contra os Termos de Serviço do Discord. O PreMiD utiliza a API do Discord (incluindo pontos de saída restritos fornecidos pelo próprio Discord) para definir a tua atividade. Isto significa que o PreMiD cumpre os Termos de Serviço do Discord."
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