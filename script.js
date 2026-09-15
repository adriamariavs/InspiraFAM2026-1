/* =========================================================
   SCRIPT.JS — INSPIRA FAM EXPERIENCE 2026
========================================================= */


/* =========================================================
   01. REVEAL AO ROLAR
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


if (
  "IntersectionObserver"
  in window
) {

  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }

<<<<<<< HEAD
=======
          entry.target.classList.add(
            "visible"
          );
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

            entry.target
              .classList
              .add(
                "visible"
              );


            revealObserver
              .unobserve(
                entry.target
              );

          }
        );

      },
      {
        threshold: 0.12
      }
    );


  revealElements
    .forEach(
      (element, index) => {

        element.style
          .transitionDelay =
          `${Math.min(
            index % 5,
            4
          ) * 70}ms`;

<<<<<<< HEAD
=======
      revealObserver.observe(
        element
      );
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

        revealObserver
          .observe(
            element
          );

<<<<<<< HEAD
      }
    );
=======
} else {

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "visible"
      );

    }
  );
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

}

else {

  revealElements
    .forEach(
      (element) => {

        element.classList
          .add(
            "visible"
          );

      }
    );

}


/* =========================================================
   02. VOLTAR AO TOPO
========================================================= */

document
  .querySelectorAll(
    'a[href="#top"], .back-to-top'
  )
  .forEach(
    (link) => {

      link.addEventListener(
        "click",
        (event) => {

          event
            .preventDefault();


          window.scrollTo({

            top: 0,

            left: 0,

            behavior:
              "smooth"

          });

        }
      );

    }
  );


/* =========================================================
   03. EXPERIÊNCIAS
========================================================= */

const stageMascot =
  document.querySelector(
    ".stage-mascot"
  );


const experienceItems =
  document.querySelectorAll(
    ".experience-item"
  );


<<<<<<< HEAD
experienceItems
  .forEach(
    (item) => {


      /* DESKTOP */

      item.addEventListener(
        "mouseenter",
        () => {


          if (!stageMascot) {

            return;

          }


          let rotation = 5;


          switch (
            item.dataset.tone
          ) {

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


          stageMascot
            .style
            .transform =
            `scale(1.18) rotate(${rotation}deg)`;

        }
      );


      item.addEventListener(
        "mouseleave",
        () => {


          if (!stageMascot) {

            return;

          }


          stageMascot
            .style
            .transform =
            "";

        }
      );


      /* MOBILE */

      item.addEventListener(
        "touchstart",
        () => {

          item.classList
            .add(
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

          setTimeout(
            () => {

              item.classList
                .remove(
                  "touch-active"
                );

            },
            180
          );

        },
        {
          passive: true
        }
      );


    }
  );


=======
experienceItems.forEach(
  (item) => {


    /* DESKTOP */

    item.addEventListener(
      "mouseenter",
      () => {

        if (!stageMascot) {
          return;
        }


        let rotation = 5;


        switch (
          item.dataset.tone
        ) {

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

        stageMascot.style.transform =
          "";

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

        setTimeout(
          () => {

            item.classList.remove(
              "touch-active"
            );

          },
          180
        );

      },
      {
        passive: true
      }
    );


  }
);



>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
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

    title:
      "Experiências interativas",

    text:
      "Ativações, dinâmicas e ações para participar de verdade. Aqui, você não fica só olhando: experimenta, testa, interage e descobre."

  },


  exposicoes: {

    number: "02",

    title:
      "Exposições",

    text:
      "Projetos, trabalhos e ideias ganham espaço para serem vistos de perto. Um convite para conhecer novas criações e diferentes olhares."

  },


  gastronomia: {

    number: "03",

    title:
      "Foodtrucks & gastronomia",

    text:
      "Sabores também fazem parte da experiência. Aproveite as opções gastronômicas e os momentos de pausa ao longo do evento."

  },


  networking: {

    number: "04",

    title:
      "Networking",

    text:
      "Um espaço para encontrar pessoas, trocar ideias e aproximar estudantes, visitantes, profissionais, marcas e oportunidades."

  },


  musica: {

    number: "05",

    title:
      "Música & apresentações",

    text:
      "Momentos ao vivo, atrações e apresentações ajudam a criar o ritmo de cada noite do Inspira FAM."

  },


  marcas: {

    number: "06",

    title:
      "Marcas & projetos",

    text:
      "Conheça expositores, parceiros, negócios, produtos e iniciativas que fazem parte da experiência."

  },


  /* COMPATIBILIDADE */

  expositores: {

    number: "06",

    title:
      "Marcas & projetos",

    text:
      "Conheça expositores, parceiros, negócios, produtos e iniciativas que fazem parte da experiência."

  },


  atividades: {

    number: "01",

    title:
      "Experiências interativas",

    text:
      "Ativações, dinâmicas e ações especiais para participar, experimentar e descobrir."

  }

};


/* =========================================================
   ABRIR MODAL
========================================================= */

document
  .querySelectorAll(
    "[data-experience]"
  )
  .forEach(
    (item) => {

      item.addEventListener(
        "click",
        () => {


          const key =
            item.dataset
              .experience;


<<<<<<< HEAD
          const content =
            experienceContent[
              key
            ];


          if (
            !content ||
            !experienceModal
          ) {

            return;

          }


          if (
            experienceNumber
          ) {

            experienceNumber
              .textContent =
              content.number;

          }


          if (
            experienceTitle
          ) {

            experienceTitle
              .textContent =
              content.title;

          }


          if (
            experienceText
          ) {

            experienceText
              .textContent =
              content.text;

          }


          experienceModal
            .dataset
            .tone =
            item.dataset
              .tone || "";


          if (
            typeof
              experienceModal
                .showModal ===
            "function"
          ) {

            experienceModal
              .showModal();

          }

=======
        if (
          !content ||
          !experienceModal
        ) {
          return;
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
        }
      );

    }
  );


experienceClose
  ?.addEventListener(
    "click",
    () => {

      experienceModal
        ?.close();

    }
  );


experienceContinue
  ?.addEventListener(
    "click",
    () => {

      experienceModal
        ?.close();

    }
  );


/* =========================================================
   05. INSCRIÇÕES
========================================================= */

const formSection =
  document.getElementById(
    "forms"
  );


const visitorForm =
  document.getElementById(
    "visitor-form"
  );


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


<<<<<<< HEAD
=======
/* NOVA TELA — JÁ INSCRITO */

>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
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
   ABRIR FORMULÁRIO
========================================================= */

function openForm(type) {


  if (!formSection) {

    return;

  }


  const isCommercial =
    type ===
    "commercial";


  formSection
    .classList
    .remove(
      "is-hidden"
    );


  formSection
    .setAttribute(
      "aria-hidden",
      "false"
    );


  /* ESCONDER SUCESSO */

  if (success) {

    success.hidden =
      true;

  }


  if (
    alreadyRegistered
  ) {

    alreadyRegistered
      .hidden =
      true;

  }


  /* ESCONDER JÁ INSCRITO */

  if (alreadyRegistered) {

    alreadyRegistered.hidden =
      true;

  }


  if (formHeading) {

<<<<<<< HEAD
    formHeading
      .style
      .display =
=======
    formHeading.style.display =
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
      "";

  }


  visitorForm
    ?.classList
    .toggle(
      "active",
      !isCommercial
    );


  commercialForm
    ?.classList
    .toggle(
      "active",
      isCommercial
    );


  /* COMERCIAL */

  if (isCommercial) {


    if (formTitle) {

      formTitle.innerHTML =
        `
          INTERESSE<br>
          <i>COMERCIAL.</i>
        `;

    }


    if (
      formDescription
    ) {

      formDescription
        .textContent =
        "Conte um pouco sobre sua marca e como gostaria de participar.";

    }

  }

<<<<<<< HEAD
=======
  }

>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

  /* VISITANTE */

  else {


    if (formTitle) {

      formTitle.innerHTML =
        `
          INSCRIÇÃO<br>
          <i>VISITANTE.</i>
        `;

    }


    if (
      formDescription
    ) {

      formDescription
        .textContent =
        "Preencha seus dados para participar do evento.";

    }

  }


  setTimeout(
    () => {

      formSection
        .scrollIntoView({

          behavior:
            "smooth",

          block:
            "start"

        });

    },
    70
  );

}


/* =========================================================
   BOTÕES DE ESCOLHA
========================================================= */

choiceButtons
  .forEach(
    (button) => {


      button.addEventListener(
        "click",
        () => {

          openForm(
            button.dataset
              .form
          );

        }
      );


<<<<<<< HEAD
      button.addEventListener(
        "touchstart",
        () => {
=======
    /* EFEITO MOBILE */

    button.addEventListener(
      "touchstart",
      () => {
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

          button
            .classList
            .add(
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

          setTimeout(
            () => {

              button
                .classList
                .remove(
                  "touch-hover"
                );

            },
            200
          );

        },
        {
          passive: true
        }
      );


    }
  );


/* =========================================================
   06. GOOGLE SHEETS
========================================================= */

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxbSTueVdVNfdViHDP-6d4dbNetiok3GNjG8w5axyjhwZ6ui2hI89c8EG1awpvVl8bQ/exec";


/* =========================================================
   VERIFICAR E-MAIL
========================================================= */

function verificarEmailVisitante(
  email
) {


  return new Promise(
    (
      resolve,
      reject
    ) => {


      const callbackName =
        "__inspiraCheck_" +
        Date.now() +
        "_" +
        Math.floor(
          Math.random() *
          100000
        );


      const script =
        document
          .createElement(
            "script"
          );


      const timeout =
        setTimeout(
          () => {


            limpar();


            reject(
              new Error(
                "Tempo esgotado ao verificar o e-mail."
              )
            );


          },
          15000
        );


      function limpar() {


        clearTimeout(
          timeout
        );


        script.remove();


        try {

          delete window[
            callbackName
          ];

        }

        catch (erro) {

          window[
            callbackName
          ] =
            undefined;

        }

      }


      window[
        callbackName
      ] =
        function (
          resposta
        ) {


          limpar();


          resolve(
            resposta
          );

        };


      script.onerror =
        function () {


          limpar();


          reject(
            new Error(
              "Não foi possível consultar o e-mail."
            )
          );

        };


      const parametros =
        new URLSearchParams({

          action:
            "checkEmail",

          email:
            email,

          callback:
            callbackName,

          _:
            Date.now()

        });


      script.src =
        GOOGLE_SCRIPT_URL +
        "?" +
        parametros
          .toString();


      document
        .head
        .appendChild(
          script
        );


    }
  );

}


/* =========================================================
   ENVIO DOS FORMULÁRIOS
========================================================= */

[
  visitorForm,
  commercialForm
]
.forEach(
  (form) => {


    if (!form) {

      return;

    }


    form.addEventListener(
      "submit",
      async (
        event
      ) => {


        event
          .preventDefault();


        /* VALIDAÇÃO */

        if (
          !form
            .checkValidity()
        ) {

          form
            .reportValidity();

          return;

        }


        const isCommercial =
          form.id ===
          "commercial-form";


        const submitButton =
          form
            .querySelector(
              'button[type="submit"]'
            );


        const originalButtonHTML =
          submitButton
            ? submitButton
                .innerHTML
            : "";


        if (
          submitButton
        ) {


          submitButton
            .disabled =
            true;


          submitButton
            .setAttribute(
              "aria-busy",
              "true"
            );


          submitButton
            .innerHTML =
            `
              ENVIANDO...
              <span>↗</span>
            `;

        }


        try {


          /* =================================================
             VISITANTE — VERIFICAR E-MAIL
          ================================================= */

          if (
            !isCommercial
          ) {


            const emailInput =
              form
                .querySelector(
                  '[name="email"]'
                );


            if (
              !emailInput
            ) {

              throw new Error(
                "Campo de e-mail não encontrado."
              );

            }


            const email =
              emailInput
                .value
                .trim()
                .toLowerCase();


            const resposta =
              await
                verificarEmailVisitante(
                  email
                );


            if (
              !resposta ||
              resposta.sucesso !==
                true
            ) {

              throw new Error(
                resposta
                  ?.mensagem ||
                "Não foi possível verificar o e-mail."
              );

            }


            /* ===============================================
               JÁ CADASTRADO
            =============================================== */

            if (
              resposta.existe ===
              true
            ) {


              visitorForm
                ?.classList
                .remove(
                  "active"
                );


              commercialForm
                ?.classList
                .remove(
                  "active"
                );


              if (
                formHeading
              ) {

                formHeading
                  .style
                  .display =
                  "none";

              }


              if (
                success
              ) {

                success.hidden =
                  true;

              }


              if (
                alreadyRegistered
              ) {

                alreadyRegistered
                  .hidden =
                  false;

              }


              setTimeout(
                () => {


                  alreadyRegistered
                    ?.scrollIntoView({

                      behavior:
                        "smooth",

                      block:
                        "center"

                    });


                },
                100
              );


              return;

            }

          }


          /* =================================================
             PREPARAR DADOS
          ================================================= */

          const dados =
            new FormData(
              form
            );


          dados.append(
            "tipoFormulario",
            isCommercial
              ? "comercial"
              : "visitante"
          );


          dados.append(
            "enviadoEm",
            new Date()
              .toISOString()
          );


          /* =================================================
             ENVIAR
          ================================================= */

          await fetch(
            GOOGLE_SCRIPT_URL,
            {

              method:
                "POST",

              body:
                dados,

              mode:
                "no-cors"

            }
          );


          /* =================================================
             ESCONDER FORMULÁRIOS
          ================================================= */

          visitorForm
            ?.classList
            .remove(
              "active"
            );


          commercialForm
            ?.classList
            .remove(
              "active"
            );


          if (
            formHeading
          ) {

            formHeading
              .style
              .display =
              "none";

          }


          if (
            alreadyRegistered
          ) {

            alreadyRegistered
              .hidden =
              true;

          }


          /* =================================================
             SUCESSO
          ================================================= */

          if (success) {

            success.hidden =
              false;

          }


          /* COMERCIAL */

          if (
            isCommercial
          ) {


            if (
              successMascot
            ) {

              successMascot
                .src =
                "ativos/brand/mascote-explosao.png";

            }


            if (
              successKicker
            ) {

              successKicker
                .textContent =
                "interesse recebido!";

            }


            if (
              successTitle
            ) {

              successTitle
                .innerHTML =
                `
                  Vamos conversar<br>
                  sobre sua marca.
                `;

            }


            if (
              successDescription
            ) {

              successDescription
                .textContent =
                "Recebemos seu interesse comercial. Nossa equipe analisará as informações e entrará em contato com os próximos passos.";

            }

          }


          /* VISITANTE */

          else {


            if (
              successMascot
            ) {

              successMascot
                .src =
                "ativos/brand/mascote-estrela.png";

            }


            if (
              successKicker
            ) {

              successKicker
                .textContent =
                "inscrição confirmada!";

            }


            if (
              successTitle
            ) {

              successTitle
                .innerHTML =
                `
                  Você está<br>
                  no Inspira FAM.
                `;

            }


            if (
              successDescription
            ) {

              successDescription
                .textContent =
                "Sua inscrição como visitante foi registrada. Agora é só se preparar para viver a experiência.";

            }

          }


          form.reset();


          setTimeout(
            () => {


              success
                ?.scrollIntoView({

                  behavior:
                    "smooth",

                  block:
                    "center"

                });


            },
            120
          );


        }


        catch (error) {


          console.error(
            "Erro no formulário:",
            error
          );


          alert(
            "Não foi possível verificar ou enviar sua inscrição. Verifique sua conexão e tente novamente."
          );


        }


        finally {


          if (
            submitButton
          ) {


            submitButton
              .disabled =
              false;


            submitButton
              .removeAttribute(
                "aria-busy"
              );


            submitButton
              .innerHTML =
              originalButtonHTML;


          }


        }


      }
    );


  }
);


/* =========================================================
<<<<<<< HEAD
   VOLTAR DO "JÁ INSCRITO"
=======
   06. GOOGLE SHEETS
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
========================================================= */

alreadyBack
  ?.addEventListener(
    "click",
    () => {


<<<<<<< HEAD
      if (
        alreadyRegistered
      ) {

        alreadyRegistered
          .hidden =
          true;
=======

/* =========================================================
   VERIFICAR SE O E-MAIL JÁ EXISTE
========================================================= */

function verificarEmailVisitante(
  email
) {


  return new Promise(
    (resolve, reject) => {


      /*
         O Google Apps Script devolve
         a resposta através de JSONP.
      */

      const callbackName =
        "__inspiraEmail_" +
        Date.now() +
        "_" +
        Math.floor(
          Math.random() *
          100000
        );


      const script =
        document.createElement(
          "script"
        );


      /* LIMITE DE ESPERA */

      const timeout =
        setTimeout(
          () => {

            limpar();

            reject(
              new Error(
                "Tempo esgotado ao verificar o e-mail."
              )
            );

          },
          10000
        );



      /* =====================================================
         LIMPEZA
      ===================================================== */

      function limpar() {


        clearTimeout(
          timeout
        );


        script.remove();


        try {

          delete window[
            callbackName
          ];

        }

        catch (error) {

          window[
            callbackName
          ] =
            undefined;

        }

      }



      /* =====================================================
         RESPOSTA DO GOOGLE
      ===================================================== */

      window[
        callbackName
      ] =
        function (resposta) {


          limpar();


          if (
            !resposta ||
            resposta.sucesso !== true
          ) {

            reject(
              new Error(
                "Resposta inválida do servidor."
              )
            );

            return;

          }


          resolve(
            resposta.existe ===
            true
          );

        };



      /* =====================================================
         ERRO DE CONEXÃO
      ===================================================== */

      script.onerror =
        function () {


          limpar();


          reject(
            new Error(
              "Não foi possível consultar o e-mail."
            )
          );

        };



      /* =====================================================
         URL DE VERIFICAÇÃO
      ===================================================== */

      const parametros =
        new URLSearchParams({

          action:
            "checkEmail",

          email:
            email,

          callback:
            callbackName,

          _:
            Date.now()

        });


      script.src =
        GOOGLE_SCRIPT_URL +
        "?" +
        parametros.toString();


      document.body.appendChild(
        script
      );


    }
  );

}



/* =========================================================
   ENVIO DOS FORMULÁRIOS
========================================================= */

[
  visitorForm,
  commercialForm
]
.forEach((form) => {


  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    async (event) => {


      event.preventDefault();



      /* =====================================================
         VALIDAR FORMULÁRIO
      ===================================================== */

      if (
        !form.checkValidity()
      ) {

        form.reportValidity();

        return;
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

      }


      if (
        success
      ) {

<<<<<<< HEAD
        success.hidden =
          true;
=======


      /* =====================================================
         BOTÃO ENVIANDO
      ===================================================== */

      const submitButton =
        form.querySelector(
          'button[type="submit"]'
        );


      const originalButtonHTML =
        submitButton
          ? submitButton.innerHTML
          : "";


      if (submitButton) {


        submitButton.disabled =
          true;


        submitButton.setAttribute(
          "aria-busy",
          "true"
        );


        submitButton.innerHTML =
          `
            ENVIANDO...
            <span>↗</span>
          `;
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

      }


<<<<<<< HEAD
      if (
        formHeading
      ) {

        formHeading
          .style
          .display =
          "";

      }


      visitorForm
        ?.classList
        .add(
          "active"
        );


      commercialForm
        ?.classList
        .remove(
          "active"
        );


      const emailInput =
        visitorForm
          ?.querySelector(
            '[name="email"]'
          );


      if (
        emailInput
      ) {
=======

      try {


        /* ===================================================
           VISITANTE — VERIFICAR E-MAIL
        =================================================== */

        if (!isCommercial) {


          const emailInput =
            form.querySelector(
              '[name="email"]'
            );


          if (!emailInput) {

            throw new Error(
              "Campo de e-mail não encontrado."
            );

          }


          const email =
            emailInput
              .value
              .trim()
              .toLowerCase();


          /*
             Consulta a planilha antes
             de cadastrar.
          */

          const emailExiste =
            await verificarEmailVisitante(
              email
            );



          /* =================================================
             E-MAIL JÁ CADASTRADO
          ================================================= */

          if (emailExiste) {


            visitorForm
              ?.classList
              .remove(
                "active"
              );


            commercialForm
              ?.classList
              .remove(
                "active"
              );


            if (formHeading) {

              formHeading.style.display =
                "none";

            }


            if (success) {

              success.hidden =
                true;

            }


            if (
              alreadyRegistered
            ) {

              alreadyRegistered.hidden =
                false;

            }


            setTimeout(
              () => {

                alreadyRegistered
                  ?.scrollIntoView({

                    behavior:
                      "smooth",

                    block:
                      "center"

                  });

              },
              100
            );


            return;

          }


        }



        /* ===================================================
           MONTAR DADOS
        =================================================== */

        const dados =
          new FormData(
            form
          );


        dados.append(
          "tipoFormulario",
          isCommercial
            ? "comercial"
            : "visitante"
        );


        dados.append(
          "enviadoEm",
          new Date()
            .toISOString()
        );



        /* ===================================================
           ENVIAR PARA O GOOGLE SHEETS
        =================================================== */

        await fetch(
          GOOGLE_SCRIPT_URL,
          {

            method:
              "POST",

            body:
              dados,

            mode:
              "no-cors"

          }
        );



        /* ===================================================
           ESCONDER FORMULÁRIOS
        =================================================== */

        visitorForm
          ?.classList
          .remove(
            "active"
          );


        commercialForm
          ?.classList
          .remove(
            "active"
          );


        if (formHeading) {

          formHeading.style.display =
            "none";

        }


        if (
          alreadyRegistered
        ) {

          alreadyRegistered.hidden =
            true;

        }



        /* ===================================================
           MOSTRAR SUCESSO
        =================================================== */

        if (success) {

          success.hidden =
            false;

        }



        /* ===================================================
           SUCESSO COMERCIAL
        =================================================== */

        if (isCommercial) {


          if (successMascot) {

            successMascot.src =
              "ativos/brand/mascote-explosao.png";

          }


          if (successKicker) {

            successKicker.textContent =
              "interesse recebido!";

          }


          if (successTitle) {

            successTitle.innerHTML =
              `
                Vamos conversar<br>
                sobre sua marca.
              `;

          }


          if (
            successDescription
          ) {

            successDescription.textContent =
              "Recebemos seu interesse comercial. Nossa equipe analisará as informações e entrará em contato com os próximos passos.";

          }


        }



        /* ===================================================
           SUCESSO VISITANTE
        =================================================== */

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

            successTitle.innerHTML =
              `
                Você está<br>
                no Inspira FAM.
              `;

          }


          if (
            successDescription
          ) {

            successDescription.textContent =
              "Sua inscrição como visitante foi registrada. Agora é só se preparar para viver a experiência.";

          }


        }



        /* ===================================================
           LIMPAR FORMULÁRIO
        =================================================== */

        form.reset();



        /* ===================================================
           ROLAR ATÉ SUCESSO
        =================================================== */

        setTimeout(
          () => {

            success
              ?.scrollIntoView({

                behavior:
                  "smooth",

                block:
                  "center"

              });

          },
          120
        );


      }


      catch (error) {


        console.error(
          "Erro no formulário:",
          error
        );


        alert(
          "Não foi possível verificar ou enviar sua inscrição. Verifique sua conexão e tente novamente."
        );


      }


      finally {


        /* ===================================================
           RESTAURAR BOTÃO
        =================================================== */

        if (submitButton) {


          submitButton.disabled =
            false;


          submitButton.removeAttribute(
            "aria-busy"
          );


          submitButton.innerHTML =
            originalButtonHTML;


        }
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

        emailInput.value =
          "";

        emailInput
          .setCustomValidity(
            ""
          );

      }


      setTimeout(
        () => {


          visitorForm
            ?.scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });


          emailInput
            ?.focus();


        },
        100
      );


    }
  );


/* =========================================================
<<<<<<< HEAD
   07. MAPA
=======
   VOLTAR DO "JÁ INSCRITO"
========================================================= */

alreadyBack
  ?.addEventListener(
    "click",
    () => {


      /* ESCONDE A TELA */

      if (
        alreadyRegistered
      ) {

        alreadyRegistered.hidden =
          true;

      }


      if (success) {

        success.hidden =
          true;

      }


      /* MOSTRA CABEÇALHO */

      if (formHeading) {

        formHeading.style.display =
          "";

      }


      /* MOSTRA FORMULÁRIO VISITANTE */

      visitorForm
        ?.classList
        .add(
          "active"
        );


      commercialForm
        ?.classList
        .remove(
          "active"
        );


      /* LIMPAR SOMENTE E-MAIL */

      const emailInput =
        visitorForm
          ?.querySelector(
            '[name="email"]'
          );


      if (emailInput) {

        emailInput.value =
          "";

        emailInput.setCustomValidity(
          ""
        );

      }


      setTimeout(
        () => {


          visitorForm
            ?.scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });


          emailInput
            ?.focus();


        },
        100
      );


    }
  );



/* =========================================================
   07. MAPA INTERATIVO
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
========================================================= */

const mapZones =
  document
    .querySelectorAll(
      ".map-zone"
    );


const mapModal =
  document
    .getElementById(
      "map-modal"
    );


const mapModalNumber =
  document
    .getElementById(
      "map-modal-number"
    );


const mapModalTitle =
  document
    .getElementById(
      "map-modal-title"
    );


const mapModalText =
  document
    .getElementById(
      "map-modal-text"
    );


const mapModalClose =
  document
    .querySelector(
      ".map-modal-close"
    );


const mapModalAction =
  document
    .getElementById(
      "map-modal-action"
    );


<<<<<<< HEAD
function clearMapZones() {

=======

/* =========================================================
   LIMPAR ÁREAS DO MAPA
========================================================= */

function clearMapZones() {


  mapZones.forEach(
    (zone) => {
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

  mapZones
    .forEach(
      (zone) => {

        zone.classList
          .remove(
            "map-zone-active"
          );

      }
    );

}


<<<<<<< HEAD
function activateMapZone(
  zone
) {
=======

/* =========================================================
   ATIVAR ÁREA DO MAPA
========================================================= */

function activateMapZone(zone) {
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c


  clearMapZones();


  if (!zone) {

    return;

  }


<<<<<<< HEAD
  zone.classList
    .add(
      "map-zone-active"
    );
=======
  zone.classList.add(
    "map-zone-active"
  );
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

}


function openMapModal(
  zone
) {


  if (
    !zone ||
    !mapModal
  ) {
    return;
  }


  activateMapZone(
    zone
  );
<<<<<<< HEAD
=======


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
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c


  if (
    mapModalNumber
  ) {

    mapModalNumber
      .textContent =
      zone.dataset
        .mapNumber ||
      "";

  }

<<<<<<< HEAD

  if (
    mapModalTitle
  ) {

    mapModalTitle
      .textContent =
      zone.dataset
        .mapTitle ||
      "";

  }


  if (
    mapModalText
  ) {

    mapModalText
      .textContent =
      zone.dataset
        .mapText ||
      "";

  }


  mapModal.dataset
    .tone =
    zone.dataset
      .mapTone ||
    "";


  if (
    typeof
      mapModal.showModal ===
    "function"
  ) {

    mapModal
      .showModal();

  }

}


mapZones
  .forEach(
    (
      zone,
      index
    ) => {
=======
}



/* =========================================================
   INTERAÇÃO DAS ÁREAS
========================================================= */

mapZones.forEach(
  (zone, index) => {
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c


      zone.style
        .setProperty(
          "--zone-delay",
          `${index * 100}ms`
        );


      zone.classList
        .add(
          "map-zone-ready"
        );


<<<<<<< HEAD
      zone.addEventListener(
        "mouseenter",
        () => {

          activateMapZone(
            zone
          );

        }
      );


      zone.addEventListener(
        "mouseleave",
        () => {

          zone.classList
            .remove(
              "map-zone-active"
            );

        }
      );


      zone.addEventListener(
        "touchstart",
        () => {

          activateMapZone(
            zone
          );

        },
        {
          passive: true
        }
      );


      zone.addEventListener(
        "click",
        () => {

          openMapModal(
            zone
          );

        }
      );


    }
  );


document
  .addEventListener(
    "touchmove",
    (event) => {


      if (
        !mapZones.length
      ) {

        return;
=======
    /* DESKTOP */

    zone.addEventListener(
      "mouseenter",
      () => {

        activateMapZone(
          zone
        );
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

      }


      const touch =
        event.touches[0];


      if (!touch) {

        return;

      }


      const element =
        document
          .elementFromPoint(
            touch.clientX,
            touch.clientY
          );


      const zone =
        element
          ?.closest(
            ".map-zone"
          );


      if (zone) {

        activateMapZone(
          zone
        );

      }


<<<<<<< HEAD
    },
    {
      passive: true
    }
  );


document
  .addEventListener(
    "touchend",
    () => {


      if (
        !mapZones.length
      ) {

        return;
=======
    /* MOBILE */

    zone.addEventListener(
      "touchstart",
      () => {

        activateMapZone(
          zone
        );

      },
      {
        passive: true
      }
    );


    /* MODAL */

    zone.addEventListener(
      "click",
      () => {

        openMapModal(
          zone
        );
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

      }


      setTimeout(
        clearMapZones,
        200
      );


<<<<<<< HEAD
    },
    {
      passive: true
=======
    const zone =
      element?.closest(
        ".map-zone"
      );


    if (zone) {

      activateMapZone(
        zone
      );

>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
    }
  );


/* =========================================================
   09. LEGENDA DO MAPA
========================================================= */

document
  .querySelectorAll(
    "[data-map-jump]"
  )
  .forEach(
    (button) => {


      button.addEventListener(
        "click",
        () => {


          const name =
            button.dataset
              .mapJump;


          const zone =
            document
              .querySelector(
                `[data-map-zone="${name}"]`
              );


          if (!zone) {

            return;

          }


          activateMapZone(
            zone
          );


<<<<<<< HEAD
          zone.classList
            .add(
=======
        if (!zone) {
          return;
        }


        activateMapZone(
          zone
        );


        zone.classList.add(
          "map-zone-pulse"
        );


        zone.scrollIntoView({

          behavior:
            "smooth",

          block:
            "center",

          inline:
            "center"

        });


        setTimeout(
          () => {

            zone.classList.remove(
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
              "map-zone-pulse"
            );


          zone
            .scrollIntoView({

              behavior:
                "smooth",

              block:
                "center",

              inline:
                "center"

            });


          setTimeout(
            () => {

              zone.classList
                .remove(
                  "map-zone-pulse"
                );

            },
            1200
          );


        }
      );


    }
  );


mapModalClose
  ?.addEventListener(
    "click",
    () => {

      mapModal
        ?.close();

    }
  );


mapModalAction
  ?.addEventListener(
    "click",
    () => {

      mapModal
        ?.close();

    }
  );


/* =========================================================
   11. MODAIS
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
        event.target ===
        dialog
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


document
  .addEventListener(
    "keydown",
    (event) => {


<<<<<<< HEAD
      if (
        event.key !==
        "Escape"
      ) {

        return;

      }


      if (
        experienceModal
          ?.open
      ) {

        experienceModal
          .close();

      }


      if (
        mapModal
          ?.open
      ) {

        mapModal
          .close();

      }


=======
    if (
      event.key !==
      "Escape"
    ) {
      return;
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c
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


<<<<<<< HEAD
function changeSchedule(
  day
) {
=======

/* =========================================================
   TROCAR DIA
========================================================= */

function changeSchedule(day) {
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c


  scheduleTabs
    .forEach(
      (tab) => {


        const active =
          tab.dataset
            .schedule ===
          day;


        tab.classList
          .toggle(
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


  schedulePanels
    .forEach(
      (panel) => {


        const active =
          panel.dataset
            .schedulePanel ===
          day;


        panel.classList
          .toggle(
            "active",
            active
          );


        panel.hidden =
          !active;


      }
    );

}


scheduleTabs
  .forEach(
    (tab) => {


      tab.addEventListener(
        "click",
        () => {

          changeSchedule(
            tab.dataset
              .schedule
          );

        }
      );


    }
  );

<<<<<<< HEAD
=======
/* =========================================================
   ESTADO INICIAL DA PROGRAMAÇÃO
========================================================= */
>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

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
      initialTab.dataset
        .schedule
    );

  }

}


/* =========================================================
   FAQ

   Utiliza <details> e <summary>.
   Não precisa de JavaScript específico.
========================================================= */

<<<<<<< HEAD
=======
/*
   A página FAQ usa:

   <details>
   <summary>

   Portanto não precisa de JavaScript
   para abrir e fechar as perguntas.
*/


>>>>>>> e610b9a5603a6cf82156da131e4fd37bfd0c521c

/* =========================================================
   FIM — INSPIRA FAM EXPERIENCE 2026
========================================================= */