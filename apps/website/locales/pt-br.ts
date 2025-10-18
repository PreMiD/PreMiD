import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Por favor, apoie-nos desativando seu bloqueador de anúncios 😢."
    }
  },
  component: {
    searchBar: {
      search: "Pesquisar",
      sortBy: "Ordenar por",
      searchPresence: "Pesquisar presence",
      sort: {
        mostUsed: "Mais Usados",
        alphabetical: "Ordem Alfabética"
      },
      categories: {
        all: "Todas",
        anime: "Anime",
        games: "Jogos",
        music: "Música",
        other: "Outros",
        socials: "Redes sociais",
        videos: "Vídeos e transmissões"
      }
    },
    browserCard: {
      wip: "Em Andamento",
      support: {
        safari: "Estamos trabalhando para dar suporte ao Safári!"
      }
    },
    userChip: {
      loading: "Carregando..."
    },
    storeCard: {
      addPresence: "Adicionar",
      removePresence: "Remover"
    },
    donationModal: {
      title: "Um Favor Rápido...",
      description: "Esperamos que você ame o PreMiD! Se ele traz um sorriso para o seu rosto, por que não espalhar um pouco de amor de volta? Nossa equipe de voluntários colocou seus corações para torná-lo incrível só para você!",
      continue: "Continuar",
      close: "Fechar",
      patreon: "Apoie-nos no {name}",
      github: "Apoie-nos no {name}",
      holdTight: "Segure firme... carregando o botão mágico..."
    }
  },
  header: {
    links: {
      contributors: "Contribuidores",
      downloads: "Downloads",
      features: "Recursos",
      store: "Loja"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Contribuições da Presence",
        error: {
          title: "Erro",
          description: "Estamos tendo problemas para carregar este usuário... Por favor, tente novamente mais tarde."
        }
      }
    },
    home: {
      meta: {
        title: "Página Inicial"
      },
      title: "Melhore sua presença “ligado” com PreMiD",
      subtitle: "Mostre aos seus amigos o que {word} você está gostando.",
      words: {
        music: "Música",
        videos: "Vídeos",
        streams: "Transmissões",
        media: "Redes Sociais"
      },
      description: "PreMiD é uma ferramenta simples e poderosa que lhe permite compartilhar suas atividades atuais de mídia em várias plataformas como YouTube, Disney+, Netflix e muito mais. Fique conectado e deixe seus amigos verem o que você está aprontando em tempo real.",
      getStarted: "Vamos começar",
      sections: {
        feature: {
          title: "Por que você ama o PreMiD",
          feature1: {
            title: "Controle de Privacidade",
            description: "Assuma o controle de suas configurações de privacidade e decida quais atividades você quer compartilhar com os outros. Seus dados, suas regras."
          },
          feature2: {
            title: "Orientado pela Comunidade",
            description: "Experiência de suporte incomparável para uma infinidade de plataformas, alimentada por uma comunidade apaixonada e dedicada a você."
          },
          feature3: {
            title: "Configurações Personalizáveis",
            description: "Adapte sua experiência PreMiD com amplas opões de personalização para atender suas preferências e necessidades."
          },
          feature4: {
            title: "Instalação Fácil",
            description: "Levante-se e corra com o PreMiD em breve. Nosso processo de configuração simples garante um começo sem complicações."
          },
          feature5: {
            title: "Respeita os Termos de Serviço do Discord",
            description: "Em total conformidade com os Termos de Serviço do Discord, utilizando os pontos finais oficiais fornecidos pelo Discord."
          },
          feature6: {
            title: "Recursos Futuros",
            description: "Fique atento para as novas e empolgantes funcionalidades e melhorias que iram melhorar ainda mais sua experiência com o PreMiD."
          }
        },
        howItWorks: {
          title: "Como Isso Funciona",
          step1: {
            title: "Instale a Extensão",
            description: "Adicione o PreMiD ao seu navegador."
          },
          step2: {
            title: "Iniciar Sessão com o Discord",
            description: "Conecte-se com o PreMiD usando sua conta do Discord."
          },
          step3: {
            title: "Adicionar Serviços",
            description: "Escolha os serviços você quer exibir, como YouTube, Disney+, e muito mais."
          },
          step4: {
            title: "Aproveite",
            description: "Compartilhe suas atividades e aproveite usando o PreMiD."
          }
        },
        callToAction: {
          title: "Pronto Para Começar?",
          description: "Junte-se aos {count} usuários que já estão amando usar o PreMiD.",
          button: "Comece Agora"
        }
      }
    },
    contributors: {
      title: "Contribuidores",
      presenceDevelopers: "Desenvolvedores de Presence",
      staff: "Equipe",
      supporters: "Apoiadores",
      translators: "Tradutores",
      avatar: {
        tooltip: "Clique para copiar o avatar de {name}"
      }
    },
    downloads: {
      title: "Downloads",
      steps: {
        install: "Instalar Extensão",
        login: "Iniciar Sessão com o Discord",
        add: "Adicionar Presences",
        showoff: "Esconder!"
      },
      section: {
        heading: {
          title: "Hora de se exibir.",
          description: "Use o PreMiD agora e mostre para seus amigos o que você está fazendo, talvez você encontre alguém com os mesmos interesses.",
          getStarted: "Vamos começar",
          extension: "Extensão"
        }
      },
      browser: {
        your: "Seu Navegador",
        other: "Outros Navegadores",
        based: "Baseado em {browser}"
      },
      mobile: {
        title: "Más notícias!",
        description: "O PreMiD não está disponível para dispositivos móveis, desculpe!"
      },
      alphaAccess: {
        title: "Desbloqueie o Acesso Alfa Exclusivo!",
        description: "Entre no futuro do PreMiD tornando-se um membro do Patreon ou nos patrocinando no GitHub. O seu apoio não apenas impulsiona o nosso desenvolvimento, mas também lhe garante acesso primeiro às funcionalidades mais inovadoras que estamos criando. Experimente os limites do que PreMiD pode oferecer e influencie sua trajetória com seu feedback. Não é só por ser a primeira vez — é quase parte de algo maior.",
        callToAction: "Saiba Mais e Junte-se à Inovação"
      },
      faq: "Perguntas Frequentes",
      faqs: {
        q1: {
          question: "O que é PreMiD?",
          answer: "PreMiD é uma ferramenta simples e configurável que permite mostrar o que você está fazendo no seu navegador no seu status de atividade do Discord."
        },
        q2: {
          question: "Como eu uso o PreMiD?",
          answer: "Você pode usar o PreMiD instalando a extensão e logando com sua conta do Discord. Quando você estiver logado, você pode adicionar presences ao seu perfil e exibir aos seus amigos."
        },
        q3: {
          question: "O PreMiD é contra os TdS do Discord?",
          answer: "Não, o PreMiD não é contra os TdS do Discord. O PreMiD usa a API do Discord (incluindo endpoints de API agregados fornecidos pelo Discord) para definir sua atividade. Isto significa que o PreMiD está em total conformidade com os TdS do Discord."
        },
        q4: {
          question: "Que serviços o PreMiD suporta?",
          answer: "O PreMiD suporta muitos serviços diferentes, incluindo YouTube, Twitter e Netflix. A lista de serviços suportados está em constante crescimento. Você pode ver a lista completa de Presences em nossa página da loja."
        },
        q5: {
          question: "Como posso contribuir com o PreMiD?",
          answer: "Você pode contribuir com o PreMiD juntando-se à nossa comunidade no GitHub. Você pode ajudar relatando problemas, sugerindo recursos ou contribuindo com código."
        },
        q6: {
          question: "O PreMiD é gratuito?",
          answer: "Sim, o PreMiD é gratuito para usar. No entanto, aceitamos doações através de Patreon e GitHub Sponsors para ajudar a apoiar o desenvolvimento do projeto."
        },
        q7: {
          question: "O que eu devo fazer se encontrar um problema com o PreMiD?",
          answer: "Se você tiver algum problema com o PreMiD, você pode entrar no nosso servidor do Discord para suporte. Também temos um guia para solucionar problemas em nossa documentação."
        },
        q8: {
          question: "PreMiD não suporta xyz, você pode adicioná-lo?",
          answer: "Nossas Presences são guiadas pela comunidade, não temos recursos para adicionar cada plataforma. No entanto, você pode adicionar sua própria Presence seguindo as instruções na nossa documentação."
        },
        q9: {
          question: "Com que frequência o PreMiD é atualizado?",
          answer: "Somos um pequeno projecto orientado por voluntários. tentamos atualizar o PreMiD o mais frequentemente possível, mas não podemos prometer que estaremos sempre no topo das coisas."
        }
      }
    },
    store: {
      title: "Loja",
      noPresence: "Nenhuma presence corresponde à sua pesquisa...",
      presence: {
        button: {
          reportIssue: "Reportar um Problema",
          suggestFeature: "Sugerir um Recurso",
          viewCode: "Ver Código"
        },
        title: {
          description: "Descrição",
          information: "Informações"
        },
        informationSection: {
          contributors: "Contribuidores:",
          version: "Versão: {version}",
          users: "Usuários: {users}",
          tags: "Marcadores:",
          supportedUrls: "URLs Suportadas:"
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
    supportUs: "Apoie-nos",
    more: "Mais",
    legal: "Informações Legais",
    supportList: {
      donate: "Doar",
      contribute: "Contribuir",
      translate: "Traduzir"
    },
    moreList: {
      faq: "FAQ",
      documentation: "Documentação",
      status: "Status"
    },
    legalList: {
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço",
      cookiePolicy: "Política de cookies"
    },
    withLoveBy: "Com",
    by: "por",
    copyright: "©️ {year}-{currentYear} {company} Todos os direitos reservados."
  },
  error: {
    404: {
      title: false,
      message: "A página que você está procurando não existe."
    },
    500: {
      title: false,
      message: "Algo deu errado do nosso lado."
    },
    default: {
      title: "Erro",
      message: "Algo deu errado do nosso lado.",
      button: "Voltar"
    }
  }
}));