---
title: Lo que aprendí en mi Primer Empleo
description: Conseguí mi primer empleo a los 15 años, te contaré las experiencias y conocimientos que obtuve al trabajar ahí como Junior Developer
published: true
category: development
image: https://res.cloudinary.com/vitualizz/image/upload/v1594451143/Blog/Posts/Mi%20primer%20empleo/Cover.png
created_at: 10 de julio del 2020
updated_at: 10 de julio del 2020
---
# Cosas que aprendi en mi primer empleo

<div class="columns is-multiline">
<div class="column is-full is-half-desktop">
<p class='is-size-4 is-size-2-desktop'>
Conseguí mi primer empleo a los 15 años, como Junior Developer (back-end).
Una muy grande experiencia, hizo que me dé cuenta que
no solo es escribir código y que funcione. Hay todo un trasfondo.
Aquí compartiré algunas experiencias y conocimientos contigo,
de todo lo que me hubiera gustado saber antes de entrar a trabajar.
Uno nunca para de aprender 🤓
</p>
</div>
<div class="column is-full is-half-desktop">

<img-load src='https://res.cloudinary.com/vitualizz/image/upload/v1594451143/Blog/Posts/Mi%20primer%20empleo/Cover.png'></img-load>

</div>
</div>

<br></br>
## ¡El estilo del código es importante!
Escribir código ordenado y con estilo es demasiado tedioso al inicio,
pero luego te das cuenta que te ayuda a comprender mejor, aparte de que
es placentero visualmente verlo ordenado.
Recuerda siempre indentarlo y leer la guía de estilos del lenguaje.

<div class="columns is-multiline">
<div class="column is-full is-half-desktop">
<span>Bad Code</span>

```ruby
if salary == 0 || salary.nil?
return 'No money :('
else
if salary >= 1000
return 'Money money money :)'
else
return 'No money, no money, no money :('
end
end
```

</div>
<div class="column is-full is-half-desktop">
<span>Good Code</span>

```ruby
if salary == 0 || salary.nil?
  return 'No money :('
else
  if salary >= 1000
    return 'Money money money :)'
  else
    return 'No money, no money, no money :('
  end
end
```

</div>
</div>

## Escribir código que puedan interpretar las personas.
El código deberia ser lo mas fácil de leer 💻  
Esta es una habilidad que aun estoy desarrollando, demasiado difícil
pero super importante al escribir código.  

<div class="columns is-multiline">
<div class="column is-full is-half-desktop">
<span>Bad Code</span>

```ruby
if salary == 0 || salary.nil?
  return 'No money :('
else
  if salary >= 1000
    return 'Money money money :)'
  else
    return 'No money, no money, no money :('
  end
end
```

</div>
<div class="column is-full is-half-desktop">
<span>Good Code</span>

```ruby
return 'No money :(' if salary.not?
if salary.is_good?
  return 'Money money money :)'
else
  return 'No money, no money, no money :('
end
```

</div>
</div>

## ¡DevOps es importante!
Esta metodología implica aprender nuevos conceptos
y a utilizar diferentes herramientas. Con el tiempo
iremos aprendiendo pero es bueno tenerlo en cuenta.
Una de las cosas por la que te recomiendo comenzar es **GIT** y **DOCKER**. 😎

## La arquitectura es demasiado importante
Normalmente para trabajos personales o que no tengan gran escala,
puedes usar cualquier tipo de Arquitectura (Aunque siempre es bueno
tener en consideración tener una buena arquitectura, por si alguna vez
queremos crecer, además es bueno acostumbrarse en estás practicas).  
Tener un sistema escalable es lo mejor, por si uno se empieza a expandir. 🤓

## Ningún lenguaje es mejor que otro
Esté es un tema muy debatido, cada programador
tiene un romance con un lenguaje
es muy normal, yo estoy templado de RUBY.  
Pero cada vez que leemos sobre los diferentes lenguajes, nos damos cuenta que
tienen sus pros y contras.  
Recuerda que los lenguajes se utilizan dependiendo del contexto
y de los gustos. 💎

## ¡Conocer del negocio es muy importante!
Este es un punto que normalmente no lo tomamos en cuenta,
pero es uno de los más importantes a tomar en cuenta.  
Recordar que no solo es escribir código, sino también es
pensar porqué lo estás haciendo.  
Siempre preguntarte:  
¿En que ayuda? ¿Cómo puedes apoyar?
Tener esa mentalidad hace que dejes de escribir solo código,
sino ya empiezas a programar enserio. 💻


<br></br>

### GRACIAS POR LEER, SI TE GUSTÓ Y CREES QUE LE PUEDE SERVIR A ALGUIEN, ¡COMPÁRTELO!
