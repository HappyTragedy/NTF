import React from 'react'

const FAQ = () => {


    let palabras = {
        nombres: ["LILLIAN PERKINS", "MAGGIE FLEMING", "SEAN WELLS"],
        texto: [
          `Yes, I was once a Jedi Knight the same as your father. I wish I'd known him. Our ships have completed their scan of the area and found nothing. If the Millennium Falcon went into light-speed, it will be on the other side of the galaxy by now.`,
          `If you end your training now, if you choose the quick and easy path, as Vader did, you will become an agent of evil. Our ships have completed their scan of the area and found nothing. If the Millennium Falcon went into light-speed.`,
          `He says he is the property of Obi-Wan Kenobi, a resident of these parts. Yes, I was once a Jedi Knight the same as your father. I wish I did known him.`,
        ],
      };
    
      const testimoniogeneral = document.getElementById("#testimonio");
      let testimonioposition = 0;
    
      function testimonio(num) {
        //el parametro va a valer 1 o -1, por lo que suma o resta dependiendo lo que se le pase. la idea es un onclick pasa 1 y el otro -1
        testimonioposition = testimonioposition + num;
        if (
          testimonioposition >= palabras.nombres.length &&
          testimonioposition >= palabras.texto.length
        ) {
          testimonioposition = 0;
        }
        if (testimonioposition < 0) {
          testimonioposition = palabras.nombres.length - 1;
          testimonioposition = palabras.texto.length - 1;
        }
    
        document.getElementById("nombredetestimonio").dangerouslySetInnerHTML =
          palabras.nombres[testimonioposition];
        document.getElementById("textodetestimonio").dangerouslySetInnerHTML =
          palabras.texto[testimonioposition];
      }
    
      if (testimoniogeneral) {
        testimonio(0);
      }

  return (
    <section id="preguntas">
      <div className="titulo">
        <h1>Preguntas Frecuentes</h1>
        <button class="flechaespecial" onclick={testimonio(-1)}>
          <img src="assets/iconos/arrow-left-icon.svg" alt="" />
        </button>
        <button onclick={testimonio(1)}>
          <img src="assets/iconos/arrow-right-icon.svg" alt="" />
        </button>
      </div>
      <div id="divsdetestimonio">
        <article>
          <div className="divimagenesdetestimonio">
            <img
              id="imgtestimonio"
              src="assets/imagenes/mujerroja.jpg"
              width=""
              height=""
              alt="mujer roja"
            />
          </div>
          <div>
            <h2 id="nombredetestimonio">LILLIAN PERKINS</h2>
            <p id="textodetestimonio">
              Yes, I was once a Jedi Knight the same as your father. I wish I'd
              known him. Our ships have completed their scan of the area and
              found nothing. If the Millennium Falcon went into light-speed,
              it'll be on the other side of the galaxy by now.
            </p>
            <a
              id="botondetestimonio"
              className="bt01"
              href="https://twitter.com/GordooMx/status/1194953353664573440"
            >
              Elastic Themes
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default FAQ