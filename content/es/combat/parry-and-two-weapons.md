---
title: Parar con dos armas y ataques múltiples
summary: Cómo comparte la BO quien ataca y para en el mismo asalto, por qué no se puede atacar con un arma y parar con la otra gratis, y qué hace la app.
order: 20
---

# Parar con dos armas y ataques múltiples

Atacar y parar salen de la misma bolsa: la **BO del asalto**. El reglamento lo deja claro con un arma, pero no dice cómo se reparte cuando el personaje lleva dos (o ataca con escudo, puño y patada). Esta página explica la regla del libro, el hueco que deja, la **regla de la casa** que usa la app para cerrarlo y cómo encaja con las katas y con los ataques múltiples del rival.

> Las referencias del tipo «Core Law §9.6» apuntan a la sección del libro donde está la regla completa. Lo marcado como **regla de la casa** es una interpretación de la app, no texto del reglamento.

## 1. Lo que dice el reglamento {#rules}

**Parar** (Core Law §9.6, _Parrying_):

- Parar es **cambiar BO por BD**, punto a punto, contra un enemigo concreto. Esa BD vale contra **todos los ataques de ese enemigo** en el asalto.
- Sin BO, porque ya la has gastado atacando o parando a otros, no puedes parar. Las penalizaciones (heridas, paso…) no restan de la parada en sí, pero bajan la BO disponible y, con ella, lo máximo que puedes parar.
- Si en el asalto tienes **varios ataques**, la parada baja la BO de **todos ellos en la misma cantidad**, y se suma a la BD **una sola vez**.
- Parar a **más de un enemigo** exige una maniobra de Combat Training por cada enemigo después del primero; si falla, esa parada no cuenta.
- Si la BO de un ataque llega a 0 antes de resolverlo, **ese ataque no se hace**.
- Solo puedes parar si el último PA que gastaste fue en una acción cuerpo a cuerpo (ver [Parar al que viene](closing-and-melee.md#parry-incoming)).

**Katas** (Core Law §9.7, _Katas_): varios ataques en una sola acción, cada uno con su miembro (una mano, otra mano, una pierna…).

- Dos ataques a la vez: **−75 a cada uno**, y −25 más por cada ataque extra. **−20** a todos por cada enemigo después del primero.
- El arma de la mano torpe lleva **−20** salvo con el talento Ambidextrous. Las armas ligeras dan un pequeño bono que compensa parte de la penalización.
- La habilidad **Combat Expertise: Multiple Attacks** compensa esas penalizaciones, sin llegar a convertirlas en bono.
- Esas penalizaciones son **modificadores de la tirada**, no BO gastada: no cambian lo que te queda para parar.

**Defenderse con la otra mano**: el libro ya tiene su forma, y tiene un coste.

- Un arma que **no usas ni para atacar ni para parar** da **+5 de BD** contra un ataque cuerpo a cuerpo (Core Law §9.6, _Weapons and Items as "Shields"_).
- La habilidad **Defensive Ward** (Character Companion, estilos de dos armas) convierte el arma de la mano torpe en una especie de escudo, a cambio de **no atacar con ella** ese asalto.

## 2. El hueco: dos armas, dos BO {#the-gap}

El libro habla de «la BO» como si fuera una. Con dos armas cada una tiene la suya: Sorel lleva **espada +100** en la mano buena y **daga +80** en la torpe. ¿Qué pasa si ataca con una y para con la otra?

| Lectura                                           | Sorel ataca con la espada usando toda su BO (100) | Problema                                                                                                                                            |
| ------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cada arma tiene su BO** y solo gasta la suya    | La daga sigue con +80 y Sorel **para 80**         | Ataque completo **y** parada casi completa, sin pagar la penalización de kata ni el coste de Defensive Ward. Nadie querría luchar con una sola arma |
| **Se suma todo lo usado** y se resta de cada arma | Kata a 70 y 50: le quedarían −20 y −40            | Paga dos veces la reserva: con una kata nunca podría parar                                                                                          |

Ninguna de las dos sale del texto, y las dos rompen el equilibrio. La app usa una tercera.

## 3. La regla de la casa: un margen de BO por asalto {#house-rule}

**Un personaje tiene un solo margen de BO en el asalto, no uno por arma.** Lo que gasta atacando, con cualquier arma, y lo que gasta parando sale del mismo presupuesto.

- **Ataque con una sola arma:** el margen es **tu mejor BO menos lo que has usado**. Atacar con la daga no te deja sin espada: gastas del presupuesto de la mejor. Ataque más parada **nunca suman más que tu mejor BO**.
- **Kata (varios ataques en la acción):** el margen es **lo que le sobre al ataque que menos sobre** (BO de cada arma menos lo que usa).
- El margen **limita la BO de todos tus ataques**, los hayas usado o no: armas, golpe de escudo, desarmado y ataques naturales.
- El arma que has usado pierde además lo que ella misma gastó, para que no puedas repetir con la misma BO en otra acción.
- El margen **dura todo el asalto**: si atacas en dos acciones distintas, la segunda parte de lo que dejó la primera.
- **Parar** sigue restando de todas las armas a la vez, como dice el libro. Lo máximo que puedes parar es la BO de tu mejor arma cuerpo a cuerpo que quede, con las penalizaciones aplicadas.
- La BO nunca baja de 0. Un arma con 0 no ataca.

### Ejemplos con Sorel (espada +100, daga +80) {#examples}

| Qué hace Sorel                                            | BO que le queda (espada / daga)                                         | Puede parar       |
| --------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- |
| Kata: espada usando 70, daga usando 50                    | 30 / 30                                                                 | 30                |
| Kata desequilibrada: espada 70, daga 30                   | 30 / 30 (a la daga le sobraban 50, pero manda lo que sobra a la espada) | 30                |
| Kata con todo: espada 100, daga 50                        | 0 / 0                                                                   | 0                 |
| Solo la espada, usando 60                                 | 40 / 40                                                                 | 40                |
| Solo la daga, usando 60                                   | 40 / 20                                                                 | 40                |
| **Solo la espada, usando 100** (el abuso)                 | 0 / 0                                                                   | **0**             |
| Para 30 y después kata a 70 y 50                          | 0 / 0                                                                   | 0                 |
| Para 90 antes de atacar                                   | 10 / 0: la daga ya no ataca                                             | 10                |
| Fase 2: espada usando 40; fase 4: otra acción con la daga | Tras la fase 2: 60 / 60. La daga ataca con 60 como mucho                | 60 tras la fase 2 |

La idea de fondo: **quien quiera defenderse con la otra mano tiene que pagarlo**, como en el libro: con Defensive Ward (renuncia a atacar con ella) o con el +5 pasivo de un arma que no usa. La kata sigue siendo la mejor forma de hacer más daño, pero deja menos para parar.

![Sorel con espada y daga: la BO de cada arma y el margen compartido tras atacar con la espada a 60.](images/combat/shared-ob-margin.svg)

## 4. Cuándo cuenta la BO gastada {#when-it-counts}

Otra **regla de la casa**, porque el libro no dice en qué momento exacto de la fase se considera gastada la BO:

- **La parada cuenta desde que se declara**, aunque el ataque del rival aún no se haya resuelto. Volver a declararla sustituye la anterior.
- **El ataque cuenta desde que se tira**. Un ataque solo preparado no reserva nada: el libro permite parar con esa BO y que el ataque se quede sin ella.
- Si paras con BO que tenía un ataque tuyo **ya preparado**, ese ataque **baja** a la BO que te queda, con un aviso. Si se queda en 0, no se puede tirar: usa **Cambiar ataque** para volver a prepararlo con lo que queda (el número de ataques cambia la penalización de kata) o borra la acción.
- Borrar la acción del atacante devuelve la BO que tus paradas contra ella tenían reservada. Lo ya aplicado no se devuelve.

Así se cierran tres trucos: declarar una parada y atacar con toda la BO antes de que se aplique; tirar un ataque con todo y luego parar; y dar toda la BO a la parada de cada uno de dos enemigos.

![Orden en la fase: la parada declarada ya resta de la BO aunque el ataque del rival no se haya aplicado.](images/combat/parry-commit.svg)

## 5. Parar contra alguien que ataca varias veces {#parry-vs-multiple}

- Una parada vale contra **todos los ataques de ese enemigo** en el asalto: si un lobo muerde y araña en la misma acción, paras una vez y la BD cuenta contra los dos.
- Si el enemigo vuelve a atacarte **en otra acción** del mismo asalto, la parada que ya pagaste **se arrastra**: no vuelves a gastar BO ni tienes que declararla de nuevo.
- Contra un **segundo enemigo** tienes que repartir: cada parada resta de tu BO por separado, y a partir del segundo enemigo hace falta la maniobra de Combat Training.

**Ejemplo.** Sorel (BO 100 con la espada) sufre a la vez un orco y un lobo.

- Para **40** al orco: le quedan 60.
- El lobo muerde y araña: para **30** y tira la maniobra de Combat Training (es el segundo enemigo). Si la supera, +30 de BD contra mordisco y zarpazo; le quedan 30.
- En su turno ataca con la espada como mucho a 30. Si el orco vuelve a atacar en otra acción, sigue teniendo +40 contra él sin gastar más.

## 6. En la app {#app}

- **Paso de objetivos del ataque:** por cada arma se ve la BO que usa y la que tiene, y para la acción entera «BO que queda para el resto del asalto y para parar». En una kata se ve que bajar una sola arma no sube el margen hasta bajar también la otra.
- **Arma sin BO:** aparece sin selector de objetivo y con el motivo. La API rechaza un ataque con BO 0.
- **Paso de parada:** dice cómo queda cada arma si das esa parada. La segunda parada del asalto contra otro enemigo pide la tirada de Combat Training, con dificultad **Media** por defecto (el libro no fija una; es decisión de la casa) o el resultado que marque el máster.
- **Tablero:** la barra **BO disponible**, encima de la fatiga, muestra lo que queda del asalto con las paradas y los ataques ya contados.
- **Estilos de lucha:** Improved Parry y Unarmed Parry sí se aplican a la BD de la parada.
- **Parada arrastrada:** la app la ofrece cuando la acción anterior del enemigo ya se ha aplicado. Si su segundo ataque se preparó antes, puede ofrecer una parada nueva: en ese caso no la des otra vez, repite la que ya diste.

## 7. Comparativa: reglamento, regla de la casa y app {#comparison}

| Situación                                          | Reglamento                                               | Regla de la casa                    | La app                                                    |
| -------------------------------------------------- | -------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------- |
| Parada con varios ataques propios                  | Baja la BO de todos por igual, suma a la BD una vez      | Igual                               | Lo calcula                                                |
| BO que queda con dos armas                         | No lo dice                                               | Un margen compartido por asalto     | Lo calcula                                                |
| Atacar con un arma y parar con la otra             | No lo dice; para eso están Defensive Ward y el +5 pasivo | No sale gratis: comparten margen    | Lo calcula                                                |
| Dos acciones de ataque en el asalto                | No lo dice                                               | Comparten el margen                 | Lo calcula                                                |
| Cuándo se gasta la BO                              | No lo dice                                               | Parada al declarar, ataque al tirar | Lo calcula                                                |
| Parada contra todos los ataques de un enemigo      | Sí                                                       | Igual                               | Lo calcula, también la parada arrastrada                  |
| Maniobra para parar a otro enemigo                 | Absoluta de Combat Training                              | Dificultad Media por defecto        | Tirada en el paso de parada                               |
| Penalizaciones de kata, mano torpe y armas ligeras | Tabla 9-7b                                               | Igual                               | Lo calcula                                                |
| +5 pasivo de un arma sin usar                      | Sí                                                       | —                                   | **No**: lo añade el máster en los modificadores           |
| Defensive Ward                                     | Sí (Character Companion)                                 | —                                   | **No implementado**: se marca a mano                      |
| Obligación de seguir la acción tras parar          | Sí                                                       | —                                   | **No**: la acción se puede borrar; que la mesa lo respete |
| BO o parada reducidas por tener menos PA           | Lo menciona (_Staggered_)                                | —                                   | **No**: los PA de menos solo penalizan la tirada          |
| Borrar un ataque ya aplicado                       | —                                                        | —                                   | No devuelve la BO gastada                                 |
