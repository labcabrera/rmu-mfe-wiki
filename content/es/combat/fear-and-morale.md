---
title: Miedo, moral y reagrupar
summary: Cuándo un bando se viene abajo, qué hace cada estado de miedo y cómo reagruparlo, con disparadores objetivos para combates entre jugadores.
order: 30
---

# Miedo, moral y reagrupar

En un combate largo no todo el mundo lucha hasta el último aliento: hay quien duda, quien se retira y quien sale corriendo. El reglamento tiene reglas para eso, pero deja a criterio del máster **cuándo** se tira y **quién** tira. En una partida normal no pasa nada. Cuando **dos jugadores enfrentan sus facciones**, esa decisión acaba en discusión.

Esta página:

- resume lo que dicen los libros;
- separa lo que es objetivo de lo que es criterio del máster;
- propone **disparadores objetivos de la casa**;
- explica qué hace hoy la app;
- termina con ideas para automatizar más en el modo de combate.

> Las referencias del tipo «Core Law §14.3» apuntan a la sección del libro donde está la regla completa. Lo marcado como **regla de la casa** es una propuesta nuestra, no texto del reglamento.

## 1. Lo que dice el reglamento {#rules}

### La tirada de miedo (Core Law §14.3 y §5.6) {#fear-rr}

- Es una **TR de miedo**: una tirada de resistencia con la bonificación de miedo del personaje (sale de Self Discipline), contra un **nivel de susto** que hace de nivel de ataque. Si la supera, no pasa nada. Si falla, **cuánto falla** decide el resultado.
- Las heridas y la fatiga **no penalizan** esta tirada.
- **Bono de líder:** quien está a las órdenes de un líder presente suma los **rangos** de Leadership del líder. Hace falta que le reconozca como líder y que sepa que está ahí y activo.
- Los horrores sobrenaturales traen su propio nivel. Para el resto, la **Tabla 14-3a** da el nivel según la situación:

| Nivel   | Situación (resumida)                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| 1       | Peligro inmediato                                                                                          |
| 3       | Un enemigo armado intenta hacerte daño                                                                     |
| 5       | La lucha va mal, os superan en número, han caído o huido la mitad de los aliados, o es una emboscada letal |
| 10      | Os superan y os están rodeando, una fuerza superior arrolla vuestra posición, o han caído más de la mitad  |
| 15      | Un enemigo peligroso al que no puedes dañar, o han caído más de tres cuartos                               |
| 20      | Una amenaza imparable, o han caído más del 90 %                                                            |
| +3 / +5 | Si hay elementos sobrenaturales o mágicos poderosos o desconocidos (+5 si son las dos cosas)               |

### Los cuatro estados de miedo {#fear-states}

| Falla por | Estado            | Qué hace                                                                                                                                          | Al reagrupar |
| --------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1-25      | **Titubea**       | No avanza ni persigue, pero se defiende si vienen a por él                                                                                        | +0           |
| 26-50     | **En retirada**   | Se aleja con control, sin dar la espalda. Si no puede, se rinde cuando rendirse sale barato                                                       | −20          |
| 51-99     | **En desbandada** | Huye al menos corriendo hasta agotarse o ponerse a salvo. Ataca a quien le corte el paso. Si no puede huir, se rinde salvo que rendirse sea morir | −50          |
| 100+      | **Quebrado**      | Huye a toda velocidad, suelta lo que le estorbe e ignora a quien intente pararlo. Si no puede huir, se rinde pase lo que pase                     | −100         |

### Moral y reagrupar (Core Law §14.3) {#morale-rally}

- **Moral:** decide si un seguidor PNJ obedece una orden.
  - Se tira una maniobra con la bonificación de Leadership del líder y la TR de miedo del seguidor.
  - La dificultad depende de lo razonable que parezca la orden.
  - Para un grupo se usa la media de sus bonificaciones (Tabla 14-3b).
  - **Los jugadores deciden por sus personajes**: la moral es para PNJ.
- **Reagrupar:** un líder puede intentar quitar el miedo a quien ha fallado, si este puede **verle y oírle**.
  - Se aplica el modificador del **peor estado** del grupo (tabla anterior) y **−10 por cada 10 seguidores** (redondeando hacia arriba).
  - El resultado baja el miedo **1, 2 o 3 grados**, o lo sube uno si sale fatal (Tabla 14-3c).
  - Character Companion añade que reagrupar cuesta **de 2 a 4 PA**.
- **Monturas y mascotas** tiran su propia TR de miedo. Para obligarlas a meterse en algo que da miedo se usa Riding o Animal Handling en lugar de Leadership.

### Otras reglas con cifras concretas {#other-sources}

- **Intimidation** (Core Law, habilidades sociales): una vez hay violencia de verdad, los **rangos** del que intimida son el nivel de susto.
- **Talentos:**
  - Look of Eagles: más Leadership y +2 por grado a la TR de miedo de los seguidores;
  - Fearless y Composure (Character Companion): bono contra el miedo.
- **Defectos:**
  - Revulsion: TR de miedo cada asalto mientras ve sangrar a alguien;
  - Panicky: −10 a la TR y tirada cuando la situación se vuelve mortal;
  - Phobia, con niveles fijos según la distancia;
  - Post-Battle Panic.
- **Estilos de lucha** (Character Companion):
  - Brave Legion: +20 contra el miedo con un aliado al lado, +30 con uno a cada lado;
  - Aspect of Fear: −10 a la TR de los enemigos cercanos.
- **Criaturas** (Creature Law):
  - cada una tiene su bonificación de TR de miedo y, si asusta, su nivel de susto;
  - talentos como Fear Aura, Fear Cry y Wave of Fear (un grupo de 10 o más obliga a tirar contra nivel 10);
  - Steadfast: +30 contra el miedo normal;
  - Mindless: no le afecta el miedo natural.
- **Críticos:** algunos resultados piden una TR de miedo con un nivel concreto, y otros dan ±20 a la moral de un bando.
- **Hechizos:** listas de miedo (Fear, Terror, Panic…) y de valor (Courage, Calm Spirits). Los de miedo suelen usar la TR del reino, salvo que el hechizo diga otra cosa.

## 2. Qué queda a criterio del máster {#subjective}

| Punto                                                              | Por qué es subjetivo                                        |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| Cuándo pedir el chequeo y a quién                                  | El libro dice «cuando el máster lo crea oportuno»           |
| «La lucha va mal», «una fuerza superior»                           | No hay una medida de cómo va la lucha                       |
| «Os están rodeando»                                                | No dice cuántos enemigos ni desde dónde                     |
| «Un enemigo al que no puedes dañar», «una amenaza imparable»       | Depende de lo que crea el personaje                         |
| La mitad de los aliados, ¿contando cabezas?                        | Un capitán de nivel 8 y un recluta de nivel 1 cuentan igual |
| Cuánto dura el miedo                                               | El libro no lo dice: solo se quita reagrupando              |
| El comportamiento de las criaturas (tímida, asustadiza, agresiva…) | Es descriptivo, sin cifras                                  |
| «Huye si está malherida», «se retira si le va mal»                 | Igual                                                       |
| Las críticas que solo dicen «chequeo de moral»                     | No dicen contra qué nivel                                   |

## 3. Reglas de la casa: disparadores objetivos {#house-triggers}

La idea es que **ninguno de los dos jugadores tenga que pedir el chequeo**: la situación lo dispara sola, igual para los dos bandos.

### La fuerza del bando {#strength}

- La **fuerza** de un bando es la **suma de los niveles** de sus miembros en pie (nivel mínimo 1). Así, perder al capitán de nivel 8 pesa más que perder a dos reclutas de nivel 1.
- **Caído** es quien está muerto, moribundo, inconsciente, incapacitado, paralizado, en desbandada o quebrado.
- Se compara con la fuerza que tenía el bando **al empezar el combate**.

### Cuándo se comprueba {#when}

- Al **final de cada asalto**, en el mantenimiento.
- Cada disparador salta **una vez por bando y combate**. Solo vuelve a saltar si la situación empeora a un nivel mayor.
- Si saltan varios a la vez se usa **el nivel más alto**, con **una sola tirada** por miembro.
- El miedo nunca mejora por tirar otra vez: cada uno se queda con su peor estado.

### Disparadores de grupo {#group-triggers}

| Disparador                                                              | Nivel de susto                             |
| ----------------------------------------------------------------------- | ------------------------------------------ |
| Fuerza en pie ≤ 50 %                                                    | 5                                          |
| Fuerza en pie < 50 %                                                    | 10                                         |
| Fuerza en pie < 25 %                                                    | 15                                         |
| Fuerza en pie < 10 %                                                    | 20                                         |
| La fuerza enemiga en pie **dobla** la propia                            | 5                                          |
| La fuerza enemiga en pie la **triplica**                                | 10                                         |
| **Cae el líder**                                                        | 5, y desde ese momento nadie tiene su bono |
| **Dos asaltos seguidos** sin que nadie del bando haga daño a un enemigo | 15 («no podemos dañarle»)                  |
| Aparece un enemigo con nivel de susto propio                            | El suyo, la primera vez que se le ve       |
| Lo anterior incluye magia o lo sobrenatural poderoso                    | +3 o +5, como en la tabla                  |

### Disparadores individuales {#individual-triggers}

| Disparador                                                                                             | Nivel de susto |
| ------------------------------------------------------------------------------------------------------ | -------------- |
| **Rodeado:** atacado en el mismo asalto por 3 o más enemigos distintos, o desde el flanco y la espalda | 10             |
| **Solo:** es el último en pie de su bando                                                              | 10             |
| **Cae el compañero de al lado:** cae un aliado que luchaba contra el mismo enemigo                     | 3              |
| **Herido grave** (opcional): baja del 25 % de su vida                                                  | 5              |

![Fuerza de dos bandos por suma de niveles: barras al empezar y tras cada asalto, con los umbrales del 50 %, 25 % y 10 % marcados.](images/combat/fear-casualties.svg)

### Quién tira {#who-rolls}

- **Los PNJ de cada facción**, siempre.
- **Los personajes jugadores** solo ante el miedo sobrenatural (criaturas, hechizos) o si la mesa lo acuerda antes de empezar. Si no, el jugador decide y lo interpreta.

### Cuánto dura el miedo {#duration}

El libro solo lo quita reagrupando. Como regla de la casa:

- **Titubea** y **En retirada** se quitan cuando el bando **gana un asalto** (causa más bajas, en niveles, de las que sufre), cuando le reagrupan o cuando acaba el combate.
- **En desbandada** y **Quebrado** solo se quitan reagrupando o cuando sale del combate. Quien huye y no vuelve cuenta como baja para su bando.

### Ejemplo: la compañía de Maela {#example}

La facción de Maela: Maela (nivel 8, líder, Leadership 10 rangos), el sargento Iven (nivel 4) y tres soldados de nivel 2. Fuerza **18**. Enfrente, la banda de Gorth, con fuerza 16.

| Asalto | Qué pasa                      | Fuerza en pie | Disparador                                                                                      | Contando cabezas (la app hoy) |
| ------ | ----------------------------- | ------------- | ----------------------------------------------------------------------------------------------- | ----------------------------- |
| 1      | Cae un soldado                | 16/18 (89 %)  | Ninguno                                                                                         | 1/5 caídos: ninguno           |
| 2      | Cae Maela                     | 8/18 (44 %)   | Fuerza < 50 % (nivel 10) y cae el líder (nivel 5): se tira contra **10**, **sin** bono de líder | 2/5: ninguno                  |
| 3      | Iven toma el mando y reagrupa | —             | —                                                                                               | —                             |

- En el asalto 2, Iven y los dos soldados en pie tiran TR de miedo contra nivel 10, sin los +10 de Maela. Un soldado queda **Titubea** y el otro **En retirada**. Iven la supera.
- En el asalto 3, Iven reagrupa a los dos soldados.
  - Modificadores: −20 por el peor estado (En retirada) y −10 por el grupo (2 seguidores).
  - Suma su bonificación de Leadership. Con un éxito, el miedo baja dos grados: los dos quedan libres.
  - Iven solo da su bono a partir de ahora si los soldados le reconocen como líder.
- **Contando cabezas** no habría saltado nada hasta el asalto 2, y la caída de Maela no habría pesado más que la de un soldado.

![Rodeado: un soldado atacado por el frente, el flanco y la espalda en el mismo asalto.](images/combat/fear-surrounded.svg)

## 4. Qué hace hoy la app {#app}

- **Estados de miedo:** Titubea, En retirada, En desbandada y Quebrado. Se guarda el peor y **no caducan**: se quitan reagrupando o a mano.
  - **En desbandada o Quebrado:** solo puede moverse (a Carrera o más rápido), esquivar o hacer acciones libres. No ataca ni cura.
  - **Quebrado:** tiene un botón para **Soltar objetos**.
  - **En retirada:** no puede cargar, y moverse más rápido que al Trote solo da un aviso.
  - **Titubea:** solo avisos.
  - Sin mapa, la app no comprueba **hacia dónde** se mueve.
- **Diálogo de psicología**, en el encabezado del asalto, con las pestañas **Miedo**, **Moral** y **Reagrupar**:
  - el máster elige facciones o actores, el líder y si le reconocen;
  - el nivel de susto puede ser un número, el de un PNJ o los rangos de Intimidation de alguien;
  - las tiradas que se dejan vacías las tira el servidor;
  - se incluyen el bono de líder y Look of Eagles; los muertos e inconscientes no tiran.
- **Aviso automático de chequeo de miedo:**
  - al final de cada asalto calcula la proporción de caídos de cada facción, **contando cabezas**;
  - umbrales: la mitad (nivel 5), más de la mitad (10), más de tres cuartos (15), más del 90 % (20);
  - caídos son los muertos, inconscientes, en desbandada y quebrados; **no** cuentan los moribundos, incapacitados ni paralizados;
  - cada umbral avisa **una vez por partida y facción**;
  - el aviso **no tira nada**: al pulsarlo se abre el diálogo ya relleno.
- **Aviso de Revulsion** para quien tiene ese defecto, con el nivel según la sangre que ve.
- **Moral:** guarda el modificador del resultado en el líder; a los seguidores no les cambia nada, y el máster decide qué hacen.
- **Reagrupar:** baja el miedo de cada seguidor asustado según el resultado, con el modificador del peor estado y el del tamaño del grupo.
- **TR de miedo individual:** botón en la ficha del actor, para aplicar el resultado a uno solo.

## 5. Comparativa {#comparison}

| Situación                     | Reglamento                       | Regla de la casa                                                                         | La app hoy                                       |
| ----------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Cuándo chequear               | A criterio del máster            | Al final de cada asalto, por disparadores                                                | Aviso por bajas; el resto, el máster             |
| Bajas del bando               | Mitad, tres cuartos, 90 %        | Por **suma de niveles**                                                                  | Por cabezas, una vez por partida                 |
| Quién cuenta como caído       | No lo precisa                    | Muertos, moribundos, inconscientes, incapacitados, paralizados, en desbandada, quebrados | Muertos, inconscientes, en desbandada, quebrados |
| Superioridad enemiga          | «Os superan en número»           | Doble (5) o triple (10) de fuerza                                                        | No                                               |
| Cae el líder                  | Se pierde el bono si no se le ve | Nivel 5 y sin bono                                                                       | Manual (el máster desmarca al líder)             |
| Rodeado                       | «Os están rodeando»              | 3 atacantes, o flanco y espalda                                                          | No                                               |
| Enemigo que no se puede dañar | A criterio                       | 2 asaltos sin hacerle daño                                                               | No                                               |
| Criatura que asusta           | Su nivel                         | Igual, la primera vez                                                                    | Nivel del PNJ en el diálogo                      |
| Efectos de cada estado        | Tabla de resultados              | Igual                                                                                    | Límites de acciones y avisos                     |
| Cuánto dura el miedo          | No lo dice                       | Hasta ganar un asalto o reagrupar                                                        | Hasta reagrupar o quitarlo a mano                |
| Reagrupar                     | Peor estado, −10 por 10          | Igual                                                                                    | Lo calcula                                       |
| Moral (órdenes)               | Media del grupo                  | Igual                                                                                    | Lo calcula; no aplica nada a los seguidores      |

## 6. Ideas para el modo de combate {#ideas}

Propuestas para automatizar las reglas de la casa, sin fecha:

- **Fuerza por niveles:** calcular las bajas sumando niveles, y contar también a moribundos, incapacitados y paralizados.
- **Superioridad:** comparar la fuerza en pie de cada facción con la de sus enemigas y avisar al doblarla o triplicarla.
- **Líder de facción:** marcar el líder de cada facción en la partida. Cuando cae, avisar del chequeo de nivel 5 y quitar su bono automáticamente.
- **Rodeado:** contar los atacantes distintos de cada actor en el asalto y si alguno atacó desde el flanco o la espalda (ya se guarda en los modificadores del ataque).
- **Enemigo que no se puede dañar:** detectar dos asaltos seguidos en que los ataques de un bando no hacen daño.
- **Primera vista de una criatura** con nivel de susto: avisar en su primer asalto.
- **Opciones de la partida:**
  - activar los disparadores de la casa;
  - tirar automáticamente por los PNJ (los jugadores siguen decidiendo por sus personajes).
- **Avisos más útiles:** volver a avisar si la situación empeora en lugar de una sola vez por partida, y un solo aviso por bando con todos los disparadores.
- **Fin del miedo:** al ganar un asalto, proponer quitar Titubea y En retirada.
- **Más datos de los PNJ:**
  - usar su forma de ser: las tímidas o asustadizas chequean antes, y las enloquecidas o sin mente no chequean;
  - aplicar el resultado de moral a los seguidores.
- **Estilos de lucha:** sumar Brave Legion y Aspect of Fear a la TR.

Sin mapa, «al lado» y «ver» se aproximan: el compañero de al lado es el que lucha contra el mismo enemigo, y el resto lo marca el máster.
