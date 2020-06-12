<template lang='pug'>
  div
    section.intro.margin-menu.hero.is-fullheight
      .columns
        .description.column.has-text-centered
          .container
            div
              p.t1 ¡Hola!
              p.t2 Yo soy
              p.t3 Lee Palacios
              p.t4 @vitualizz
            p.info-text
              | Un joven desarrollador de 17 años, amante de la tecnología,
              | emprendedor y con muchas ganas de cambiar el mundo.
              | Me encanta divertirme aprendiendo,
              | de igual manera conocer personas
              | y me deleita escribir código, analizarlo y entenderlo.
              br
              | ❤
        .img.column(:style="{ backgroundImage: `url(${imageMe})`}")
    section.history.hero
      .hero-body
        .container
          p
            | Esta será una pequeña historia donde contaré
            | mi travesia que me llevó por el camino de la tecnología.
          p
            | Todo comenzo en una ciudad de Perú, por la parte de la sierra
            | en una ciudad llamada Cerro de Pasco
          p
            | Cuando era pequeño, siempre me metieron a la cabeza que
            | tenia que ser bueno en todo, mi vida ya estaba planeada,
            | todo estaba friamente calculado.
            br
            | Yo solo seguia y hacia caso a las personas mayores,
            | como cualquier niño...
            | Pero poco a poco fui creciendo, me empezé a dar cuenta
            | de muchas cosas.
            br
            | Pero lo más importante fue que me di cuenta como
            | el mundo se movia demasiado rápido.
            | Aunque en mi ciudad no pasaban muchas cosas en avance
            | tecnológico, yo sabia que algún dia todo iba a cambiar.
          p
            | Toda mi primaria fue super recta y nunca me gusto romper las reglas,
            | era un niño super antisocial y podria decirse que un poco falso,
            | suena algo feo, pero es el siglo XXI,
            | ¡los niños no son como todos pensamos!.
            | Pero bueno eso será para un articulo que escribiré,
            | mi secundaria es donde más cambié, desde
            | personalidad hasta ideología, me di cuenta que mi vida
            | no se iba a basar en una rectitud, sino la queria enfocar
            | en romper barreras.
          p
            | Mi familia siempre fue cerrada de mente,
            | hasta que un familiar pudo romper algunas y me enseño que si
            | podia tener otro estilo de vida.
            br
            | !No todo era como me lo dijeron¡.
            br
            | Me di cuenta que podia:
            ol
              li Trabajar con horas flexibles
              li No siempre tenia que ir con terno a un trabajo
              li No hacia falta ir a la Universidad para ser alguien en la vida
            | Ese último punto es demasiado debatible
            | depende de la carrera y de la opinión de cada uno.
            | Pero pronto haré un articulo sobre esto también.
          p
            | Bueno volviendo al tema, yo era muy bueno con la computadora
            | podia estar 24 horas en una (de ser posible) :v
            br
            | Mi tutor @videmor, me éduco, me enseñó todo lo que sabia
            | y actualmente lo sigue haciendo, como sabremos
            |
            strong Uno nunca deja de aprender.
            br
            | Y así nació mi amor por la tecnología. No fue una historia
            | tan impresionante, pero el como fue mi camino después de descubrir
            | lo que queria hacer, es otra cosa.
            br
            | Ahí tienen la línea de tiempo de mi vida :D
    section.hero
      .hero-body
        .container.has-text-centered
          Timeline(
            :line='timeline'
          )
</template>

<script>
export default {
  data () {
    return {
      imageMe: require('@/assets/images/resources/photo_me.png'),
      timeline: [
        { date: '09-29-2002', content: 'Nació un pequeño programador' },
        { date: '09-30-2002', content: 'Me dierón en adopción... ¡Es broma!' },
        { date: '07-23-2009', head: 'Gamer', content: 'Instalé mi primer juego' },
        { date: '10-07-2009', head: 'Youtube', content: 'Intenté volverme ser Youtuber' },
        { date: '04-05-2012', head: 'Programador', content: 'Primera vez bucando como crear una pagina web' },
        { date: '12-05-2012', content: 'Terminé mi primera pagina web' },
        { date: '07-20-2013', content: 'Casi le dije que me gustaba a una chica :c' },
        { date: '12-23-2013', content: 'Terminé la escuela' },
        { date: '05-27-2017', content: 'Tuve mi primera enamorada' },
        { date: '09-13-2017', head: 'Mi primer framework', content: 'Conocí Ruby on Rails' },
        { date: '04-05-2018', head: 'Mi primer trabajo', content: 'Una empresa de tecnología me recibió como practicante' },
        { date: '05-08-2018', head: 'Mi primer commit a PRD', content: 'Como olvidar mi primer commit' },
        { date: '12-01-2019', content: 'Terminé el colegio' },
        { date: '03-12-2019', head: 'Aprendí un poco más de la vida', content: 'Un año donde los golpes duros dejaron experiencias inolvidables' },
        { date: '01-03-2020', content: 'Comienzan mis clases en la Cibertec' },
        { date: '04-14-2020', content: 'Decido dejar la Cibertec y compro Platzi Expert' }
      ]
    }
  }
}
</script>

<style scoped lang='sass'>
p
  letter-spacing: 1.5px
br
  line-height: 90%
.intro
  .columns
    min-height: inherit
    margin: 0px
    .column
      min-height: inherit
      &.img
        background-size: cover
        background-position: center
        background-repeat: no-repeat
      &.description
        display: flex
        .container
          margin: auto
          max-width: 60vh
          p
            font-weight: bold
            &.t1
              font-size: 10vh
              line-height: 30%
            &.t2
              font-size: 5vh
            &.t3
              font-size: 6.5vh
              line-height: 70%
            &.t4
              font-size: 4.5vh
            &.info-text
              width: 30vh
              margin: 20px auto 0 !important
              font-size: 2.5vh
.history
  p
    font-weight: 400
    word-spacing: 3px
    line-height: calc(100% + 20px)
    font-size: 1.5rem
    margin: 30px 0px
</style>
