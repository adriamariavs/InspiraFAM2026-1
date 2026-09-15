/* =========================================================
   SCRIPT.JS — INSPIRA FAM EXPERIENCE 2026
   CÓDIGO COMPLETO
========================================================= */


/* =========================================================
   01. REVEAL AO ROLAR
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");

          revealObserver.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(
    (element, index) => {

      element.style.transitionDelay =
        `${Math.min(index % 5, 4) * 70}ms`;

      revealObserver.observe(element);

    }
  );

} else {

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

}


/* =========================================================
   02. VOLTAR AO TOPO
========================================================= */

document
  .querySelectorAll(
    'a[href="#top"], .back-to-top'
  )
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });

      }
    );

  });


/* =========================================================
   03. EXPERIÊNCIAS
========================================================= */

const stageMascot =
  document.querySelector(".stage-mascot");

const experienceItems =
  document.querySelectorAll(
    ".experience-item"
  );


experienceItems.forEach((item) => {

  /* DESKTOP */

  item.addEventListener(
    "mouseenter",
    () => {

      if (!stageMascot) {
        return;
      }

      let rotation = 5;

      switch (item.dataset.tone) {

        case "purple":
          rotation = -12;
          break;

        case "yellow":
          rotation = 8;
          break;

        case "pink":
          rotation = -6;
          break;

        case "orange":
          rotation = 10;
          break;

        default:
          rotation = 5;
      }

      stageMascot.style.transform =
        `scale(1.18) rotate(${rotation}deg)`;

    }
  );


  item.addEventListener(
    "mouseleave",
    () => {

      if (!stageMascot) {
        return;
      }

      stageMascot.style.transform = "";

    }
  );


  /* MOBILE */

  item.addEventListener(
    "touchstart",
    () => {

      item.classList.add(
        "touch-active"
      );

    },
    {
      passive: true
    }
  );


  item.addEventListener(
    "touchend",
    () => {

      setTimeout(() => {

        item.classList.remove(
          "touch-active"
        );

      }, 180);

    },
    {
      passive: true
    }
  );

});


/* =========================================================
   04. MODAL DAS EXPERIÊNCIAS
========================================================= */

const experienceModal =
  document.getElementById(
    "experience-modal"
  );

const experienceNumber =
  document.getElementById(
    "experience-modal-number"
  );

const experienceTitle =
  document.getElementById(
    "experience-modal-title"
  );

const experienceText =
  document.getElementById(
    "experience-modal-text"
  );

const experienceClose =
  document.querySelector(
    ".experience-modal-close"
  );

const experienceContinue =
  document.getElementById(
    "experience-modal-button"
  );


const experienceContent = {

  interativas: {
    number: "01",
    title: "Experiências interativas",
    text:
      "Ativações, dinâmicas e ações para participar de verdade. Aqui, você não fica só olhando: experimenta, testa, interage e descobre."
  },

  exposicoes: {
    number: "02",
    title: "Exposições",
    text:
      "Projetos, trabalhos e ideias ganham espaço para serem vistos de perto. Um convite para conhecer novas criações e diferentes olhares."
  },

  gastronomia: {
    number: "03",
    title: "Foodtrucks & gastronomia",
    text:
      "Sabores também fazem parte da experiência. Aproveite as opções gastronômicas e os momentos de pausa ao longo do evento."
  },

  networking: {
    number: "04",
    title: "Networking",
    text:
      "Um espaço para encontrar pessoas, trocar ideias e aproximar estudantes, visitantes, profissionais, marcas e oportunidades."
  },

  musica: {
    number: "05",
    title: "Música & apresentações",
    text:
      "Momentos ao vivo, atrações e apresentações ajudam a criar o ritmo de cada noite do Inspira FAM."
  },

  marcas: {
    number: "06",
    title: "Marcas & projetos",
    text:
      "Conheça expositores, parceiros, negócios, produtos e iniciativas que fazem parte da experiência."
  },

  /* COMPATIBILIDADE COM NOMES ANTIGOS */

  expositores: {
    number: "06",
    title: "Marcas & projetos",
    text:
      "Conheça expositores, parceiros, negócios, produtos e iniciativas que fazem parte da experiência."
  },

  atividades: {
    number: "01",
    title: "Experiências interativas",
    text:
      "Ativações, dinâmicas e ações especiais para participar, experimentar e descobrir."
  }

};


/* =========================================================
   ABRIR MODAL DAS EXPERIÊNCIAS
========================================================= */

document
  .querySelectorAll("[data-experience]")
  .forEach((item) => {

    item.addEventListener(
      "click",
      () => {

        const key =
          item.dataset.experience;

        const content =
          experienceContent[key];


        if (
          !content ||
          !experienceModal
        ) {
          return;
        }


        if (experienceNumber) {

          experienceNumber.textContent =
            content.number;

        }


        if (experienceTitle) {

          experienceTitle.textContent =
            content.title;

        }


        if (experienceText) {

          experienceText.textContent =
            content.text;

        }


        experienceModal.dataset.tone =
          item.dataset.tone || "";


        if (
          typeof experienceModal.showModal ===
          "function"
        ) {

          experienceModal.showModal();

        }

      }
    );

  });


experienceClose?.addEventListener(
  "click",
  () => {

    experienceModal?.close();

  }
);


experienceContinue?.addEventListener(
  "click",
  () => {

    experienceModal?.close();

  }
);


/* =========================================================
   05. INSCRIÇÕES
========================================================= */

const formSection =
  document.getElementById("forms");

const visitorForm =
  document.getElementById("visitor-form");

const commercialForm =
  document.getElementById(
    "commercial-form"
  );

const formHeading =
  document.getElementById(
    "form-heading"
  );

const formTitle =
  document.getElementById(
    "form-title"
  );

const formDescription =
  document.getElementById(
    "form-description"
  );

const success =
  document.getElementById(
    "form-success"
  );

const successMascot =
  document.getElementById(
    "success-mascot"
  );

const successKicker =
  document.getElementById(
    "success-kicker"
  );

const successTitle =
  document.getElementById(
    "success-title"
  );

const successDescription =
  document.getElementById(
    "success-description"
  );

const alreadyRegistered =
  document.getElementById(
    "already-registered"
  );

const alreadyBack =
  document.getElementById(
    "already-back"
  );

const choiceButtons =
  document.querySelectorAll(
    "[data-form]"
  );


/* =========================================================
   GOOGLE APPS SCRIPT
========================================================= */

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxbSTueVdVNfdViHDP-6d4dbNetiok3GNjG8w5axyjhwZ6ui2hI89c8EG1awpvVl8bQ/exec";


/* =========================================================
   ABRIR FORMULÁRIO
========================================================= */

function openForm(type) {

  if (!formSection) {
    return;
  }


  const isCommercial =
    type === "commercial";


  formSection.classList.remove(
    "is-hidden"
  );


  formSection.setAttribute(
    "aria-hidden",
    "false"
  );


  /* ESCONDER TELAS DE RESULTADO */

  if (success) {
    success.hidden = true;
  }


  if (alreadyRegistered) {
    alreadyRegistered.hidden = true;
  }


  if (formHeading) {
    formHeading.style.display = "";
  }


  /* ESCOLHER FORMULÁRIO */

  visitorForm?.classList.toggle(
    "active",
    !isCommercial
  );


  commercialForm?.classList.toggle(
    "active",
    isCommercial
  );


  /* COMERCIAL */

  if (isCommercial) {

    if (formTitle) {

      formTitle.innerHTML = `
        INTERESSE<br>
        <i>COMERCIAL.</i>
      `;

    }


    if (formDescription) {

      formDescription.textContent =
        "Conte um pouco sobre sua marca e como gostaria de participar.";

    }

  }


  /* VISITANTE */

  else {

    if (formTitle) {

      formTitle.innerHTML = `
        INSCRIÇÃO<br>
        <i>VISITANTE.</i>
      `;

    }


    if (formDescription) {

      formDescription.textContent =
        "Preencha seus dados para participar do evento.";

    }

  }


  setTimeout(() => {

    formSection.scrollIntoView({

      behavior: "smooth",
      block: "start"

    });

  }, 70);

}


/* =========================================================
   BOTÕES DE ESCOLHA
========================================================= */

choiceButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      openForm(
        button.dataset.form
      );

    }
  );


  /* EFEITO MOBILE */

  button.addEventListener(
    "touchstart",
    () => {

      button.classList.add(
        "touch-hover"
      );

    },
    {
      passive: true
    }
  );


  button.addEventListener(
    "touchend",
    () => {

      setTimeout(() => {

        button.classList.remove(
          "touch-hover"
        );

      }, 200);

    },
    {
      passive: true
    }
  );

});


/* =========================================================
   COMUNICAÇÃO COM GOOGLE — JSONP
========================================================= */

function chamarGoogle(parametros) {

  return new Promise((resolve, reject) => {

    /* =====================================================
       CONFIGURAÇÕES
    ===================================================== */

    const callbackName =
      "__inspira_" +
      Date.now() +
      "_" +
      Math.floor(Math.random() * 1000000);


    const script =
      document.createElement("script");


    /*
       O Apps Script pode demorar mais em alguns momentos,
       principalmente quando precisa "acordar".

       Por isso NÃO destruímos o callback aos 15 segundos.
    */

    const TEMPO_AVISO = 20000;
    const TEMPO_LIMITE = 60000;


    let finalizado = false;
    let timeoutAviso = null;
    let timeoutFinal = null;


    /* =====================================================
       LIMPEZA
    ===================================================== */

    function limparScript() {

      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }

    }


    function limparCallbackDepois() {

      /*
         Não apagamos imediatamente o callback.

         Isso evita:
         ReferenceError: __inspira_xxx is not defined

         caso uma resposta atrasada do Google ainda chegue.
      */

      setTimeout(() => {

        try {

          delete window[callbackName];

        } catch (erro) {

          window[callbackName] = function () {};

        }

      }, 120000);

    }


    /* =====================================================
       CALLBACK RECEBIDO DO GOOGLE
    ===================================================== */

    window[callbackName] =
      function (resposta) {

        /*
           Mesmo que o Google tenha demorado,
           enquanto a requisição ainda estiver válida
           nós aceitamos a resposta.
        */

        if (finalizado) {
          return;
        }


        finalizado = true;


        clearTimeout(timeoutAviso);
        clearTimeout(timeoutFinal);


        limparScript();


        /*
           Mantém temporariamente uma função vazia
           no lugar do callback.

           Assim, mesmo se o navegador tentar executar
           novamente uma resposta atrasada, não gera
           ReferenceError.
        */

        window[callbackName] =
          function () {};


        limparCallbackDepois();


        resolve(resposta);

      };


    /* =====================================================
       ERRO REAL DE CARREGAMENTO
    ===================================================== */

    script.onerror =
      function () {

        if (finalizado) {
          return;
        }


        finalizado = true;


        clearTimeout(timeoutAviso);
        clearTimeout(timeoutFinal);


        limparScript();


        /*
           Também não destruímos o callback imediatamente.
        */

        window[callbackName] =
          function () {};


        limparCallbackDepois();


        reject(
          new Error(
            "Não foi possível conectar ao servidor."
          )
        );

      };


    /* =====================================================
       AVISO DE DEMORA
    ===================================================== */

    timeoutAviso =
      setTimeout(() => {

        if (finalizado) {
          return;
        }


        console.warn(
          "O servidor está demorando para responder. Aguardando..."
        );

      }, TEMPO_AVISO);


    /* =====================================================
       LIMITE DE SEGURANÇA
    ===================================================== */

    timeoutFinal =
      setTimeout(() => {

        if (finalizado) {
          return;
        }


        finalizado = true;


        limparScript();


        /*
           MUITO IMPORTANTE:

           Mesmo depois do limite, mantemos uma função
           disponível para impedir o ReferenceError
           observado anteriormente.
        */

        window[callbackName] =
          function () {};


        limparCallbackDepois();


        reject(
          new Error(
            "O servidor demorou mais de 60 segundos para responder."
          )
        );

      }, TEMPO_LIMITE);


    /* =====================================================
       MONTAR PARÂMETROS
    ===================================================== */

    const query =
      new URLSearchParams({
        ...parametros,

        callback:
          callbackName,

        /*
           Evita cache do navegador/proxy.
        */

        _:
          Date.now().toString()
      });


    /* =====================================================
       CRIAR URL
    ===================================================== */

    script.src =
      GOOGLE_SCRIPT_URL +
      "?" +
      query.toString();


    script.async = true;


    /* =====================================================
       ENVIAR PARA O GOOGLE
    ===================================================== */

    document.head.appendChild(
      script
    );

  });

}


/* =========================================================
   BOTÃO — ESTADO ENVIANDO
========================================================= */

function ativarBotaoEnviando(button) {

  if (!button) {
    return "";
  }


  const original =
    button.innerHTML;


  button.disabled = true;


  button.setAttribute(
    "aria-busy",
    "true"
  );


  button.innerHTML = `
    ENVIANDO...
    <span>↗</span>
  `;


  return original;

}


/* =========================================================
   RESTAURAR BOTÃO
========================================================= */

function restaurarBotao(
  button,
  original
) {

  if (!button) {
    return;
  }


  button.disabled = false;


  button.removeAttribute(
    "aria-busy"
  );


  button.innerHTML =
    original;

}


/* =========================================================
   MOSTRAR — JÁ INSCRITO
========================================================= */

function mostrarJaInscrito() {

  visitorForm
    ?.classList
    .remove("active");


  commercialForm
    ?.classList
    .remove("active");


  if (formHeading) {

    formHeading.style.display =
      "none";

  }


  if (success) {

    success.hidden = true;

  }


  if (alreadyRegistered) {

    alreadyRegistered.hidden =
      false;

  }


  setTimeout(() => {

    alreadyRegistered
      ?.scrollIntoView({

        behavior: "smooth",
        block: "center"

      });

  }, 100);

}


/* =========================================================
   MOSTRAR — SUCESSO
========================================================= */

function mostrarSucesso(tipo) {

  visitorForm
    ?.classList
    .remove("active");


  commercialForm
    ?.classList
    .remove("active");


  if (formHeading) {

    formHeading.style.display =
      "none";

  }


  if (alreadyRegistered) {

    alreadyRegistered.hidden =
      true;

  }


  if (success) {

    success.hidden =
      false;

  }


  /* =====================================================
     COMERCIAL
  ===================================================== */

  if (tipo === "comercial") {


    if (successMascot) {

      successMascot.src =
        "ativos/brand/mascote-explosao.png";

    }


    if (successKicker) {

      successKicker.textContent =
        "interesse recebido!";

    }


    if (successTitle) {

      successTitle.innerHTML = `
        Vamos conversar<br>
        sobre sua marca.
      `;

    }


    if (successDescription) {

      successDescription.textContent =
        "Recebemos seu interesse comercial. Nossa equipe analisará as informações e entrará em contato com os próximos passos.";

    }

  }


  /* =====================================================
     VISITANTE
  ===================================================== */

  else {


    if (successMascot) {

      successMascot.src =
        "ativos/brand/mascote-estrela.png";

    }


    if (successKicker) {

      successKicker.textContent =
        "inscrição confirmada!";

    }


    if (successTitle) {

      successTitle.innerHTML = `
        Você está<br>
        no Inspira FAM.
      `;

    }


    if (successDescription) {

      successDescription.textContent =
        "Sua inscrição como visitante foi registrada. Agora é só se preparar para viver a experiência.";

    }

  }


  setTimeout(() => {

    success
      ?.scrollIntoView({

        behavior: "smooth",
        block: "center"

      });

  }, 120);

}


/* =========================================================
   06. ENVIO — VISITANTE
========================================================= */

visitorForm?.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();


    /* VALIDAÇÃO */

    if (
      !visitorForm.checkValidity()
    ) {

      visitorForm.reportValidity();

      return;

    }


    const submitButton =
      visitorForm.querySelector(
        'button[type="submit"]'
      );


    const originalButtonHTML =
      ativarBotaoEnviando(
        submitButton
      );


    try {

      const formData =
        new FormData(
          visitorForm
        );


      const email =
        String(
          formData.get("email") || ""
        )
          .trim()
          .toLowerCase();


      /* =====================================================
         O GOOGLE VERIFICA E CADASTRA EM UMA ÚNICA CHAMADA
      ===================================================== */

      const resposta =
        await chamarGoogle({

          action:
            "cadastrarVisitante",

          nome:
            formData.get("nome") ||
            "",

          email:
            email,

          telefone:
            formData.get("telefone") ||
            "",

          cidade:
            formData.get("cidade") ||
            "",

          quantidade:
            formData.get("quantidade") ||
            "1",

          observacoes:
            formData.get("observacoes") ||
            ""

        });


      console.log(
        "RESPOSTA VISITANTE:",
        resposta
      );


      if (!resposta) {

        throw new Error(
          "Resposta vazia do servidor."
        );

      }


      /* =====================================================
         EMAIL JÁ CADASTRADO
      ===================================================== */

      if (
        resposta.status ===
        "EMAIL_DUPLICADO"
      ) {

        mostrarJaInscrito();

        return;

      }


      /* =====================================================
         INSCRIÇÃO REALIZADA
      ===================================================== */

      if (
        resposta.sucesso === true &&
        resposta.status ===
        "VISITANTE_OK"
      ) {

        visitorForm.reset();

        mostrarSucesso(
          "visitante"
        );

        return;

      }


      throw new Error(
        resposta.mensagem ||
        "Não foi possível realizar a inscrição."
      );

    }


    catch (error) {

      console.error(
        "ERRO NA INSCRIÇÃO:",
        error
      );


      alert(
        "Não foi possível realizar sua inscrição. Verifique sua conexão e tente novamente."
      );

    }


    finally {

      restaurarBotao(
        submitButton,
        originalButtonHTML
      );

    }

  }
);


/* =========================================================
   07. ENVIO — COMERCIAL
========================================================= */

commercialForm?.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();


    if (
      !commercialForm.checkValidity()
    ) {

      commercialForm.reportValidity();

      return;

    }


    const submitButton =
      commercialForm.querySelector(
        'button[type="submit"]'
      );


    const originalButtonHTML =
      ativarBotaoEnviando(
        submitButton
      );


    try {

      const formData =
        new FormData(
          commercialForm
        );


      const resposta =
        await chamarGoogle({

          action:
            "cadastrarComercial",

          empresa:
            formData.get("empresa") ||
            "",

          responsavel:
            formData.get("responsavel") ||
            "",

          email:
            formData.get("email") ||
            "",

          telefone:
            formData.get("telefone") ||
            "",

          segmento:
            formData.get("segmento") ||
            "",

          tipo:
            formData.get("tipo") ||
            "",

          patrocinio:
            formData.get("patrocinio") ||
            "",

          espaco:
            formData.get("espaco") ||
            "",

          mensagem:
            formData.get("mensagem") ||
            ""

        });


      console.log(
        "RESPOSTA COMERCIAL:",
        resposta
      );


      if (
        resposta?.sucesso === true &&
        resposta?.status ===
        "COMERCIAL_OK"
      ) {

        commercialForm.reset();

        mostrarSucesso(
          "comercial"
        );

        return;

      }


      throw new Error(
        resposta?.mensagem ||
        "Não foi possível enviar o interesse comercial."
      );

    }


    catch (error) {

      console.error(
        "ERRO COMERCIAL:",
        error
      );


      alert(
        "Não foi possível enviar seu interesse. Verifique sua conexão e tente novamente."
      );

    }


    finally {

      restaurarBotao(
        submitButton,
        originalButtonHTML
      );

    }

  }
);


/* =========================================================
   08. VOLTAR DO "JÁ INSCRITO"
========================================================= */

alreadyBack?.addEventListener(
  "click",
  () => {


    if (alreadyRegistered) {

      alreadyRegistered.hidden =
        true;

    }


    if (success) {

      success.hidden =
        true;

    }


    if (formHeading) {

      formHeading.style.display =
        "";

    }


    visitorForm
      ?.classList
      .add("active");


    commercialForm
      ?.classList
      .remove("active");


    const emailInput =
      visitorForm
        ?.querySelector(
          '[name="email"]'
        );


    if (emailInput) {

      emailInput.value = "";

      emailInput.setCustomValidity(
        ""
      );

    }


    setTimeout(() => {

      visitorForm
        ?.scrollIntoView({

          behavior: "smooth",
          block: "start"

        });


      emailInput?.focus();

    }, 100);

  }
);


/* =========================================================
   09. MAPA INTERATIVO
========================================================= */

const mapZones =
  document.querySelectorAll(
    ".map-zone"
  );


const mapModal =
  document.getElementById(
    "map-modal"
  );


const mapModalNumber =
  document.getElementById(
    "map-modal-number"
  );


const mapModalTitle =
  document.getElementById(
    "map-modal-title"
  );


const mapModalText =
  document.getElementById(
    "map-modal-text"
  );


const mapModalClose =
  document.querySelector(
    ".map-modal-close"
  );


const mapModalAction =
  document.getElementById(
    "map-modal-action"
  );


/* =========================================================
   LIMPAR ÁREAS DO MAPA
========================================================= */

function clearMapZones() {

  mapZones.forEach((zone) => {

    zone.classList.remove(
      "map-zone-active"
    );

  });

}


/* =========================================================
   ATIVAR ÁREA
========================================================= */

function activateMapZone(zone) {

  clearMapZones();


  if (!zone) {
    return;
  }


  zone.classList.add(
    "map-zone-active"
  );

}


/* =========================================================
   ABRIR MODAL DO MAPA
========================================================= */

function openMapModal(zone) {

  if (
    !zone ||
    !mapModal
  ) {

    return;

  }


  activateMapZone(zone);


  if (mapModalNumber) {

    mapModalNumber.textContent =
      zone.dataset.mapNumber ||
      "";

  }


  if (mapModalTitle) {

    mapModalTitle.textContent =
      zone.dataset.mapTitle ||
      "";

  }


  if (mapModalText) {

    mapModalText.textContent =
      zone.dataset.mapText ||
      "";

  }


  mapModal.dataset.tone =
    zone.dataset.mapTone ||
    "";


  if (
    typeof mapModal.showModal ===
    "function"
  ) {

    mapModal.showModal();

  }

}


/* =========================================================
   INTERAÇÃO DAS ÁREAS DO MAPA
========================================================= */

mapZones.forEach(
  (zone, index) => {


    zone.style.setProperty(
      "--zone-delay",
      `${index * 100}ms`
    );


    zone.classList.add(
      "map-zone-ready"
    );


    /* DESKTOP */

    zone.addEventListener(
      "mouseenter",
      () => {

        activateMapZone(zone);

      }
    );


    zone.addEventListener(
      "mouseleave",
      () => {

        zone.classList.remove(
          "map-zone-active"
        );

      }
    );


    /* MOBILE */

    zone.addEventListener(
      "touchstart",
      () => {

        activateMapZone(zone);

      },
      {
        passive: true
      }
    );


    /* MODAL */

    zone.addEventListener(
      "click",
      () => {

        openMapModal(zone);

      }
    );

  }
);


/* =========================================================
   MAPA — MOVIMENTO MOBILE
========================================================= */

document.addEventListener(
  "touchmove",
  (event) => {

    if (!mapZones.length) {
      return;
    }


    const touch =
      event.touches[0];


    if (!touch) {
      return;
    }


    const element =
      document.elementFromPoint(
        touch.clientX,
        touch.clientY
      );


    const zone =
      element?.closest(
        ".map-zone"
      );


    if (zone) {

      activateMapZone(zone);

    }

  },
  {
    passive: true
  }
);


document.addEventListener(
  "touchend",
  () => {

    if (!mapZones.length) {
      return;
    }


    setTimeout(
      clearMapZones,
      200
    );

  },
  {
    passive: true
  }
);


/* =========================================================
   10. LEGENDA DO MAPA
========================================================= */

document
  .querySelectorAll(
    "[data-map-jump]"
  )
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const name =
          button.dataset.mapJump;


        const zone =
          document.querySelector(
            `[data-map-zone="${name}"]`
          );


        if (!zone) {
          return;
        }


        activateMapZone(zone);


        zone.classList.add(
          "map-zone-pulse"
        );


        zone.scrollIntoView({

          behavior: "smooth",
          block: "center",
          inline: "center"

        });


        setTimeout(
          () => {

            zone.classList.remove(
              "map-zone-pulse"
            );

          },
          1200
        );

      }
    );

  });


/* =========================================================
   FECHAR MODAL DO MAPA
========================================================= */

mapModalClose?.addEventListener(
  "click",
  () => {

    mapModal?.close();

  }
);


mapModalAction?.addEventListener(
  "click",
  () => {

    mapModal?.close();

  }
);


/* =========================================================
   11. MODAIS — CLICAR FORA
========================================================= */

function closeDialogOnBackdrop(
  dialog
) {

  if (!dialog) {
    return;
  }


  dialog.addEventListener(
    "click",
    (event) => {

      if (
        event.target === dialog
      ) {

        dialog.close();

      }

    }
  );

}


closeDialogOnBackdrop(
  experienceModal
);


closeDialogOnBackdrop(
  mapModal
);


/* =========================================================
   MODAIS — ESC
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Escape"
    ) {

      return;

    }


    if (
      experienceModal?.open
    ) {

      experienceModal.close();

    }


    if (
      mapModal?.open
    ) {

      mapModal.close();

    }

  }
);


/* =========================================================
   12. PROGRAMAÇÃO
========================================================= */

const scheduleTabs =
  document.querySelectorAll(
    "[data-schedule]"
  );


const schedulePanels =
  document.querySelectorAll(
    "[data-schedule-panel]"
  );


/* =========================================================
   TROCAR DIA
========================================================= */

function changeSchedule(day) {

  scheduleTabs.forEach(
    (tab) => {

      const active =
        tab.dataset.schedule ===
        day;


      tab.classList.toggle(
        "active",
        active
      );


      tab.setAttribute(
        "aria-selected",
        active
          ? "true"
          : "false"
      );

    }
  );


  schedulePanels.forEach(
    (panel) => {

      const active =
        panel.dataset.schedulePanel ===
        day;


      panel.classList.toggle(
        "active",
        active
      );


      panel.hidden =
        !active;

    }
  );

}


/* =========================================================
   BOTÕES DA PROGRAMAÇÃO
========================================================= */

scheduleTabs.forEach(
  (tab) => {

    tab.addEventListener(
      "click",
      () => {

        changeSchedule(
          tab.dataset.schedule
        );

      }
    );

  }
);


/* =========================================================
   ESTADO INICIAL DA PROGRAMAÇÃO
========================================================= */

if (
  scheduleTabs.length &&
  schedulePanels.length
) {

  const initialTab =
    document.querySelector(
      "[data-schedule].active"
    ) ||
    scheduleTabs[0];


  if (initialTab) {

    changeSchedule(
      initialTab.dataset.schedule
    );

  }

}


/* =========================================================
   13. FAQ

   A página FAQ usa:
   <details>
   <summary>

   Portanto não precisa de JavaScript específico.
========================================================= */


/* =========================================================
   FIM — INSPIRA FAM EXPERIENCE 2026
========================================================= */