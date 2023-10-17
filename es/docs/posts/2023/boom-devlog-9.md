---
title: "5 Lecciones de 4 Reescrituras de mi Aplicación de Idiomas | Boom DevLog 9"
date: 2023-05-27
authors:
  - steve
categories:
  - Boom Languages
tags:
  - javascript
  - language
slug: boom-devlog-9
youtube: "xMP9EiUhOsQ"
---

Cuatro veces, desde cero.

Eso es cuántas veces he reescrito mi aplicación llamada Boom Languages. Cada vez que lo hice, aprendí muchísimo, y en este video, voy a compartir las 5 lecciones más valiosas que he aprendido en el camino.

<!-- more -->

![type:video](https://www.youtube.com/embed/xMP9EiUhOsQ)

¡Asegúrate de [registrarte](https://pagekey.io/boom/signup) para recibir una notificación cuando la última versión de Boom esté disponible!

## 1. Solo empieza.

Cualquier artículo enfocado en innovación o emprendimiento te dirá esto: Empieza hoy, porque si lo retrasas hasta mañana, entonces mañana nunca llegará. He leído este consejo muchas veces, y cuando finalmente lo apliqué a mi aplicación para aprender idiomas, el consejo resultó cierto.

Uno puede pasarse toda la vida preparándose, pero la realidad es que muchas de las lecciones que necesitas solo se aprenden en el camino. Tienes que lanzarte, incluso si estuvieras completamente desprevenido o carecieras de habilidades clave. Los aprenderás a medida que avances.

Para mí, esto implicó crear un plan aproximado para mi aplicación, abrir un editor de código, y escribir esos golpes de teclado fatídicos: `git init`. Si no hubiera hecho ese commit inicial finalmente el 28 de noviembre de 2020, los cientos que lo siguieron podrían nunca haber llegado a pasar.

Hasta ahora, he creado cuatro versiones de esta aplicación:

- La Versión 1 fue sólo para demostrar que podía publicar una aplicación en las tiendas de aplicaciones de iOS y Android. No había nada especial en ello; tenía una función de pruebas, pero casi todas las otras aplicaciones principales de aprendizaje de idiomas la tienen también.
- La versión 2 agregó una función que se convertiría en clave: el traductor de artículos. Es una herramienta que te permite descomponer un gran y denso cuerpo de texto intimidante, escrito en un idioma extranjero, en piezas manejables (oraciones) para que puedas avanzar sin sentirte abrumado.
- La versión 3 era exactamente la misma aplicación, pero reescrita desde cero (usando React Native en lugar de Flutter).
- Y ahora estoy trabajando en la Versión 4, que es otra reescritura completa desde cero.

Pero si nunca hubiera intentado, todavía estaría sin hacer nada, pensando en la siguiente gran idea.

¿Curioso por probar la nueva versión? Puedes registrarte [**aquí**](https://pagekey.io/boom/signup) para recibir una notificación cuando esté disponible. ¡Incluso hay una posibilidad de que seas seleccionado como un tester privado exclusivo!

## 2. No se trata solo de la idea.

Otro consejo clásico para emprendedores proviene de Derek Sivers, quien introdujo la idea de que [las ideas son un multiplicador de la ejecución](https://sive.rs/multiply). Básicamente, esto significa que la forma en que **ejecutas** una idea tiene mucho más impacto en si tienes éxito que la idea en sí misma. Esto sin mencionar que practicar tus habilidades para ejecutar ideas te hace mejor en ello, de manera que cuando otra "idea millonaria" llegue flotando en tu cabeza, estarás listo y capacitado para convertirla en realidad.

## 3. No simplemente lances tu idea.

Me inspiró profundamente el libro de Seth Godin "Linchpin". Uno de mis principales aprendizajes de ese libro fue el concepto de "lanzarla". Él dice que si no "lanzas" tus ideas y las pones a disposición del mundo, entonces todo el trabajo que les has dedicado es esencialmente inútil. Las ideas necesitan interactuar con el mundo para crecer y convertirse en algo valioso, y no pueden hacerlo hasta que presiones el botón de publicar. Al principio, abracé esto completamente, pero con el tiempo, me di cuenta de que la verdad es un poco más matizada de lo que parecía.

Cuando era joven, era un poco perfeccionista, tomando las cosas con calma y de forma constante cuando escribía un ensayo para la escuela o hacía la tarea, y revisando todo para asegurarme de que estuviera bien antes de entregarlo. La lectura de Linchpin me hizo cambiar mis hábitos, de revisar cuidadosamente a simplemente enviarlo.

Al principio, me hizo sentir incómodo, pero eventualmente, estaba enviando cosas sin pensarlo mucho, por todas partes. ¿Hay dificultades en un punto del vídeo que editas? ¿No encuentras la palabra adecuada? No hay problema, solo publícalo y pasa al siguiente. ¿Te quedaste atascado en un problema de programación? Haz la solución fácil y desordenada y pasa al siguiente problema.

Me propuse metas que se centraban en la finalización en lugar del esfuerzo o la calidad. Algunos ejemplos incluyeron trabajar en Boom durante cierta cantidad de tiempo cada día, o producir un video de YouTube cada semana sobre un tema técnico.

Llevándolo al siguiente extremo, en enero de 2023, me desafié a hacer un video de YouTube todos los días. Pude mantenerlo durante más de un mes, pero al final, estaba completamente agotado, y confundido sobre por qué gasté tanto tiempo, haciendo videos de tan baja calidad. Estaba cortando esquinas solo para cumplir con mi cuota diaria de "publicación".

Fue en ese momento que juré volver a una época anterior, antes de las métricas, antes de la cultura del "grindset", antes de "publicar", antes de la **cantidad**, y me di cuenta de que necesitaba centrarme en la **calidad**. Cuando recién estás comenzando, puede ser genial agitarse salvajemente, probar las aguas, y [hacer explotar algunas naves espaciales en el camino](https://www.youtube.com/watch?v=-1wcilQ58hI&t=2942s). Pero este enfoque tiene sus límites, y he decidido balancear el péndulo en la otra dirección, al menos para mí, por ahora.

## 4. Comience con lo más importante.

Cuando una aplicación tiene un servidor, es mucho más complicado que cuándo todo sucede localmente. Tienes que preocuparte por migrar tu base de datos, mantener un esquema y mantener sincronizada la API entre el cliente y el servidor. Incluso hay más dolores de cabeza cuando intentas implementarlo en dispositivos móviles, tienes que complacer a Apple (como vimos en [el último devlog](https://blog.pagekey.io/boom-devlog-8)).

Y encima de todo esto, estaba agregando funciones que no importaban (como inicio de sesión de usuario y tablas de clasificación) antes de encontrar un conjunto central de características que enseñaban efectivamente idiomas extranjeros y que eran divertidas y fáciles de usar. Cuando intenté implementar funciones que realmente importaban, me encontré enterrado bajo una montaña de deuda técnica y me  decidí comenzar de nuevo.

Esta vez, sin embargo, me concentraría primero en las características que importaban, y dejaría todo lo que no estuviera directamente relacionado con ellas. Si había una esquina que pudiera recortar, lo haría para poder construir las características principales más rápido y mejor. Si no era una característica principal, lo ignoraría.

Esto llevó al enfoque de tipo radical de construir la aplicación como un sitio web simple que utiliza el `localStorage` incorporado del navegador en lugar de depender de un servidor. Con este enfoque ágil, pude prototipar en un solo un fin de semana todas las características importantes de la aplicación principal, las cuales me llevaron meses para construir la primera vez.

Las limitaciones de este enfoque son inmensas, pero la velocidad con la que pude iterar fue invaluable. Docenas de veces borré el `localStorage` de mi navegador y comencé de nuevo con un nuevo esquema. Si tuviera que hacer estos cambios en una aplicación de producción, tendría que preocuparme por migrar los datos de los usuarios, cambiar el esquema, y todo tipo de otras preo cupaciones minuciosas.

Cuando yo soy el único usuario y comienzo desde cero, no tengo que preocuparme por arruinar nada - simplemente puedo hacerlo.

Este enfoque rápido y suelto parece contradecir mi punto sobre "calidad sobre cantidad", pero no creo que lo haga. El punto clave aquí es que no estoy publicando este prototipo sin pulir para que todos lo usen. En cambio, lo uso como una forma de descubrir las características y el diseño de la aplicación que son más efectivos, invirtiendo la menor cantidad de tiempo posible en ello. Probablemente descartaré este código de prototipo desordenado eventualmente, pero por ahora, sirve para el propósito.

## 5. Haz un lanzamiento adecuado.

La iteración es genial, pero la persona promedio que intenta usar una aplicación se irá después de 2 segundos si no está comprometida,
y nunca volverá. Y eso es solo si el diseño es feo. Si un botón no hace lo que se supone que debe hacer, o si aparece un error y no hay una forma obvia de solucionarlo, olvídalo. Se han ido, y no volverán.

En el pasado, quería tener la versión más reciente y avanzada de mi aplicación disponible para **todo el mundo**. Básicamente estaba diciendo, "¡Miren todos, estoy construyendo algo! No está terminado, pero pruébenlo y vean lo incompleto que está!" Pensaba que era una pérdida de tiempo y esfuerzo crear una marca para un producto que aún no estaba listo.

Construir una lista de personas entusiasmadas por usar algo que aún no existía me parecía pretencioso. Solo quería mostrar lo que se había hecho hasta ahora y obtener retroalimentación. No hay necesidad de ocultar nada, ¿verdad? Desde la perspectiva de un ingeniero, esto es lógico, pero es una mala estrategia de marketing. El mensaje que se envía es que no tenemos problema en lanzar algo que no funciona. 

Es por eso que esta vez voy a limitar severamente el número de personas  que tienen acceso a la última versión de Boom. Incluso podría quitar la versión anterior de la tienda de aplicaciones. Todavía documentaré el proceso y compartiré lo que yo aprenda, pero hasta que tenga algo que esté seguro es impresionante y útil para los estudiantes de idiomas, lo mantendré en secreto.

Siempre aprendo mucho observando a familiares o amigos que prueban mi aplicación. Es por eso que voy a observar por encima del hombro cuando pueda, y de lo contrario, evitaré que la gente sufra tratando de usar algo 
que no funciona.

## Demo: Prototipo de la Versión 4

Si quieres ver una demostración del prototipo que contruí para Boom v4, ve el video que acompaña este artículo. La demostración comience a los [12:08](https://youtu.be/xMP9EiUhOsQ?t=728).

## Lo que sigue

Entonces, ¿qué sigue para esta aplicación Boom?

Hay cuatro elementos simples en mi plan a medida que avanzo:

1. **Construir** algo que yopersonalmente quiera usar todos los días
para aprender idiomas. Esto se centrará en agregar características que encuentro útiles, y que de todas formas realizo a través de otros medios. Quiero que Boom sea una solución integrada, para que no tengas que saltar entre pestañas de Google Translate, sesiones de revisión de Anki y videos aleatorios de YouTube para progresar en tu viaje del lenguaje.

2. **Involucrar a otros.** Haz que algunas personas lo usen y haz que **ellos** también quieran usarlo todos los días. Esto puede suceder al mismo tiempo que el paso anterior. Trabajaré con unos pocos seleccionados para ver cómo responden a la aplicación. Esto me ayudará a descubrir cuestiones de usabilidad que surgen de ser la única persona que escribió todo el código. Cuando no puedes simplemente abrir el código y explorar su interior para ver qué está mal,las cosas definitivamente parecen diferentes. Así que estoy interesado en entender esa perspectiva.

**¡Escala!** Cuando se completen los pasos anteriores, tendré un concepto de prueba de calidad razonablemente alto de un sistema de aprendizaje útil y funcional. Luego será hora de llevar ese producto potencialmente útil a las manos de la mayor cantidad de personas posible. No tengo habilidades en ventas o marketing (aún) pero espero que si comienzo, pueda alcanzar el éxito a través del fracaso como lo hice al construir esta aplicación. **Por supuesto, sería mucho más fácil si tuviera a alguien con conocimientos comerciales para trabajar juntos** - si estás interesado, [envíame un correo electrónico](mailto:steve@pagekey.io)!

**Monetizar.** Una vez que suficientes personas usen la aplicación y las características sean estables, podremos buscar formas de ganar dinero con esta aplicación y convertirla en un negocio sostenible. He investigado sobre compras dentro de la aplicación, modelos de suscripción y licencias, pero tengo mucho más que aprender. Este es otro lugar donde probablemente necesitaré ayuda de personas inteligentes con buen conocimiento empresarial y buena ética.

Así que eso es todo para este derrame cerebral de Boom Languages. Espero que hayas obtenido algo útil de las lecciones que compartí. Si deseas recibir actualizaciones a medida que hago progresos, puedes [**suscribirte a la lista de correo**](https://pagekey.io/boom/signup) para recibir notificaciones cuando haya nuevas versiones disponibles, y suscribirte al canal de YouTube de PageKey Español para estar informado cuando publiquemos nuevos videos. ¡Gracias por leer!