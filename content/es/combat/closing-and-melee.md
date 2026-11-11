---
title: Acercarse, cargar y atacar cuerpo a cuerpo
summary: Cargar contra un enemigo, esperarle en guardia, huir o pasar a su lado: cómo se resuelve fase a fase con miniaturas.
order: 10
---

# Acercarse, cargar y atacar cuerpo a cuerpo

Cómo se resuelve en la mesa (y en la app) que un combatiente se acerque a otro, le ataque, le espere, huya o pase a su lado. Todo sale de Core Law, capítulos 8 y 9; aquí se explica con ejemplos propios y consejos para que el asalto no se eternice cuando se juega con miniaturas.

> Las referencias del tipo «Core Law §8.2» apuntan a la sección del libro donde está la regla completa.

## 1. El asalto en 30 segundos {#round}

- Un asalto son unos 5 segundos y se divide en **4 fases**. Cada combatiente tiene normalmente **4 puntos de acción (PA)** y gasta **1 PA en cada fase**, en orden de **iniciativa** (de mayor a menor). Los PA no se guardan: si te queda uno en una fase, lo gastas en algo (Core Law §8.3).
- Muchas acciones necesitan varios PA. Un **ataque cuerpo a cuerpo cuesta de 2 a 4 PA**: con 4 no hay penalización; con 3, −25; con 2, −50 (Core Law §8.1, tabla 8-1). Con 1 PA no se puede atacar.
- Una acción se **resuelve** (se tira) en la fase en que ya lleva bastantes PA y su dueño decide resolverla.
- **No hay una fase de declaración**: lo que haces se decide fase a fase, en tu turno de iniciativa. El objetivo de un ataque cuerpo a cuerpo se elige al resolverlo, y en ese momento tiene que estar a tu alcance (Core Law §8.3, _Melee Actions_).

La consecuencia importante: **un ataque no es «llegar y pegar»**. Es una acción que vas «cargando» fase a fase, y lo normal es empezar a cargarla mientras te acercas.

## 2. Atacar sin estar a alcance: la carga {#charge}

Puedes empezar un ataque cuerpo a cuerpo aunque el enemigo esté lejos. Mientras gastas PA en el ataque, puedes **moverte a la vez sin gastar PA** (movimiento libre), hasta paso de **Carrera**. El precio es una **penalización por paso** al ataque, según la mayor distancia que hayas recorrido en una sola fase mientras durase el ataque (Core Law §8.2):

| Paso          | Distancia por fase | Penalización si atacas mientras te mueves |
| ------------- | ------------------ | ----------------------------------------- |
| Arrastrarse   | 1/8 BMR            | 0                                         |
| Andar         | 1/4 BMR            | −25                                       |
| Trote         | 1/2 BMR            | −50                                       |
| Carrera       | 3/4 BMR            | −75                                       |
| Esprint o más | —                  | no se puede atacar                        |

- La habilidad **Combat Expertise: Footwork** reduce esa penalización en ataques cuerpo a cuerpo y arrojadizos.
- El ataque se puede resolver en cuanto **estés a alcance** y lleves **al menos 2 PA**. Decides tú si lo resuelves ya (con penalización por PA de menos) o esperas a tener más.
- Si en el asalto has recorrido **más de 2×BMR** antes de atacar, el ataque cuenta como **un tamaño mayor** (más de 4×BMR, dos tamaños) para la gravedad del crítico (Core Law §8.2, _Closing & Charging_, tabla 8-2). Correr a paso de Carrera también da +1 si la distancia supera 2×BMR.

### Ejemplo: Aldara carga contra un orco a 50' {#charge-example}

Aldara tiene BMR 20', así que a Carrera avanza 15' por fase.

| Fase | Aldara                                 | Distancia recorrida | PA en el ataque |
| ---- | -------------------------------------- | ------------------- | --------------- |
| 1    | Empieza el ataque y corre 15'          | 15'                 | 1               |
| 2    | Sigue el ataque y corre 15'            | 30'                 | 2               |
| 3    | Sigue el ataque y corre 15'            | 45'                 | 3               |
| 4    | Corre los 5' que faltan y **resuelve** | 50'                 | 4               |

- Penalización por PA: ninguna (4 PA).
- Penalización por paso: −75 (en las fases 1-3 corrió 15', paso de Carrera), menos lo que reste su Footwork.
- Carga: 50' es más de 2×BMR (40'): **+1 tamaño** al ataque.

![Aldara avanza 15' por fase y llega en la fase 4: posición de la miniatura al final de cada fase.](images/combat/charge-50ft.svg)

### Ejemplo: el orco está a 30'. ¿Correr o ir con calma? {#pace-example}

Con BMR 20' y el orco a 30', Aldara tiene varias opciones:

| Cómo se acerca                            | Llega en la fase     | Resuelve con | Penalización total                         |
| ----------------------------------------- | -------------------- | ------------ | ------------------------------------------ |
| Carrera (15'+15') y ataca nada más llegar | 2                    | 2 PA (−50)   | −125                                       |
| Carrera y espera una fase para atacar     | 2                    | 3 PA (−25)   | −100 (el paso lo marca la fase más rápida) |
| Trote (10' por fase)                      | 3                    | 3 PA (−25)   | −75                                        |
| Trote, y ataca en la fase 4               | 3                    | 4 PA (0)     | −50                                        |
| Andar (5' por fase)                       | no llega este asalto | —            | —                                          |

Es la decisión táctica de siempre: **llegar antes o pegar mejor**. Pagar el movimiento con PA en lugar de aceptar la penalización da cifras parecidas: el libro lo diseña para que ambas formas salgan equivalentes.

![Las cuatro formas de cubrir 30': en qué fase llega Aldara y con qué penalización ataca.](images/combat/approach-30ft.svg)

### En la app {#charge-app}

1. En la fase en que empieza a acercarse, Aldara declara **Ataque cuerpo a cuerpo** y **Movimiento libre**. El ataque suma 1 PA por fase sin hacer nada más.
2. Cuando la miniatura llega, se **resuelve primero el movimiento libre** con el paso que ha llevado, y después se **prepara el ataque**. El paso y la carga vienen ya rellenados, y el máster puede cambiarlos. Si preparas el ataque antes de resolver el movimiento, la app avisa de que la penalización por paso aún no cuenta.
3. La mesa manda: la app no conoce las distancias entre miniaturas. Si con 50' llegas, la miniatura se queda ahí.

## 3. Parar al que viene {#parry-incoming}

Para poder **parar** un ataque cuerpo a cuerpo basta con que **el último PA que gastaste fuera en una acción cuerpo a cuerpo**. No hace falta estar ya en melé, y moverse no rompe esa condición (Core Law §8.3, _Melee Actions_; §9.6, _Parrying_).

Por eso, si ves venir a alguien, lo normal es **ponerse en guardia**: empezar un ataque cuerpo a cuerpo aunque aún no tengas a quién pegar. Mientras lo cargas puedes parar a quien te ataque, y cuando llegue el enemigo ya tendrás PA acumulados para devolverle el golpe.

Ojo: quien ha parado con un ataque a medio cargar queda **comprometido** con él y debe terminarlo; no puede cambiar de acción (Core Law §8.3, _Action Phases_).

## 4. Iniciativa alta esperando contra iniciativa baja que llega corriendo {#waiting}

Esta es la situación que más dudas da. Bruna (iniciativa 18, con lanza) espera; Krag (iniciativa 7, BMR 20') viene corriendo desde 40'.

| Fase | Bruna (18), actúa primero                                  | Krag (7)                                                                                                                             |
| ---- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | Se pone en guardia: empieza un ataque (1 PA)               | Empieza un ataque y corre 15' (a 25')                                                                                                |
| 2    | Sigue el ataque (2 PA). Krag aún no está a alcance         | Sigue y corre 15' (a 10')                                                                                                            |
| 3    | Sigue el ataque (3 PA). Krag aún no ha llegado en su turno | Corre los 10' que faltan y **resuelve con 3 PA**: −25 por PA y −75 por paso. **Bruna para**, porque su último PA fue cuerpo a cuerpo |
| 4    | **Resuelve su ataque con 4 PA, sin penalización**          | Empieza otra acción                                                                                                                  |

![Bruna en guardia y Krag a la carrera: posiciones al final de cada fase.](images/combat/guard-vs-charge.svg)

- Que Krag golpee primero **es la regla**: llega en su turno de la fase 3 y en ese momento Bruna ya había actuado. A cambio, Bruna para, y Krag ataca con una penalización enorme.
- Bruna **sí contesta**: en la fase 4 actúa antes que nadie y resuelve su ataque a plena potencia.

### Si Krag llega en la fase 4 {#phase-4}

Si Krag empieza a 55', llega en la fase 4. En su turno de esa fase Bruna ya ha gastado sus 4 PA y no tenía a quién pegar, así que sin hacer nada más perdería el ataque. Tiene tres salidas:

1. **Retener la acción** (Core Law §8.3, _Conditional Actions_). Con todos los PA del ataque ya gastados, Bruna no lo resuelve y lo deja preparado con una condición: «cuando un enemigo entre en mi alcance». Cuando Krag llega, en el turno de Krag, la condición se cumple y Bruna **golpea antes de que Krag resuelva**. Mantener una acción retenida cuenta como concentración. En la app: **Retener** en la acción de ataque (necesita sus PA máximos) y resolverla cuando ocurra la condición.
2. **Rondas abiertas** (regla opcional, Core Law §8.3, _Open Rounds_). Si la campaña tiene activada «Rondas abiertas», el ataque de Bruna pasa al asalto siguiente con sus PA y lo resuelve en la fase 1.
3. **Parar** y empezar un ataque nuevo en el asalto siguiente. Es lo que pasa si no se hace ninguna de las dos anteriores.

![Acción retenida: Bruna golpea en cuanto Krag entra en el alcance de su lanza.](images/combat/hold-action.svg)

### El error típico: mover todo de golpe {#moving-all-at-once}

Si en la fase 1 se resuelve el movimiento libre de Krag con todo lo que correrá en el asalto, y se le deja atacar enseguida, parece que Krag cruza el campo de un salto, pega y Bruna se queda mirando. **El movimiento libre nunca pasa de 3/4 BMR por fase**. El ataque de Krag no se puede resolver antes de la fase en que su miniatura llega de verdad, ni con menos de 2 PA.

## 5. Retirarse, huir y pasar junto a alguien {#withdrawing}

### Retirarse con cuidado o darse la vuelta (Core Law §8.2, _Withdrawing_) {#withdrawing-rules}

- **Retirada cauta**: retrocedes de cara al enemigo a media velocidad (como mucho Trote). No te pueden golpear por eso; si el rival quiere seguir atacando, tiene que avanzar.
- **Darse la vuelta y correr**: tu rival elige.
  - Te **persigue**.
  - O, si **ya tenía al menos 1 PA en un ataque sin resolver** y le quedan PA, **gasta su siguiente PA y resuelve el ataque al momento**, con los PA que lleve (2 PA: −50) y la **bonificación por atacar por la espalda**. Ese PA es el de su siguiente fase.
  - Si huyes **antes** de que el rival haya puesto un solo PA en su ataque (por ejemplo, porque tienes más iniciativa y te vas en la fase 1), no hay ataque inmediato: tendrá que perseguirte.

**Ejemplo.** Tobías (iniciativa 9) está en melé con un orco (iniciativa 14).

- **Fase 1:** el orco empieza su ataque (1 PA). Tobías se da la vuelta y corre.
- **Ataque inmediato:** el orco gasta ya el PA de la fase 2 y ataca con 2 PA (−50), por la espalda.
- **Fase 2:** el orco ya ha gastado ese PA y no puede empezar nada nuevo hasta la fase 3.

![Retroceder de cara al enemigo frente a darse la vuelta y correr.](images/combat/withdrawal.svg)

### Pasar junto a un enemigo (Core Law §8.2, _Passing Through_) {#passing-through}

Si en una misma fase **entras y sales del alcance** de un enemigo, o le rodeas dentro de su alcance, el enemigo puede hacer dos cosas:

1. **Intentar cortarte el paso** con una maniobra enfrentada de Correr (u otra habilidad que encaje). El que se mueve es la parte activa. Es muy difícil frenar a alguien un tamaño mayor, e imposible si es dos o más tamaños mayor. Si te corta el paso, tu movimiento de esa fase acaba dentro de su alcance y no puedes pasar este asalto.
2. Si no te frena (o no lo intenta), cuentas como **alguien que se retira**. Si tenía un ataque cuerpo a cuerpo con al menos 1 PA y le quedan PA, puede gastar el siguiente en un **ataque inmediato por la espalda**.

![Pasar junto a un enemigo: trayectoria, su alcance y dónde se queda la miniatura si le cortan el paso.](images/combat/passing-through.svg)

### En la app {#withdrawing-app}

- El ataque inmediato se hace sobre el **ataque abierto** del rival: **Forzar resolución** con el motivo **Retirada** o **Paso a través**. Gasta su siguiente PA libre y aplica la penalización por los PA totales.
- La **posición por la espalda** se marca a mano en los modificadores del ataque.
- La maniobra para cortar el paso se tira como maniobra; si sale bien, la miniatura se queda en el alcance del rival.
- La app **no avisa sola** de que alguien huye o pasa cerca: no sabe dónde están las miniaturas. Lo tiene que ver la mesa.

## 6. Consejos para jugar con miniaturas sin eternizar el asalto {#tips}

- **Anuncia la intención y la fase de llegada.** Basta con decir «cargo contra el orco a Carrera, llego en la fase 3» y mover la miniatura lo que toque en cada fase. No hace falta tirar ni registrar nada hasta que llega.
- **Solo se para el juego cuando algo cambia**: alguien llega a alcance, pasa junto a un enemigo, huye o se queda sin línea de visión. Las fases en que todos solo «cargan» su ataque se pasan de golpe.
- **Marca quién está en guardia** (un ataque cuerpo a cuerpo empezado). Es quien puede parar, retener la acción o dar el golpe inmediato a quien huye o pasa cerca.
- **Los empates de iniciativa son simultáneos**: los dos ataques se resuelven y ninguno anula al otro (Core Law §8.3, _Initiative Phase_).
- **Bajar la iniciativa a propósito** es legal: puedes esperar a ver qué hace el otro, pero el resto del asalto sigues con la iniciativa rebajada.
- **Usa la acción retenida** para el clásico «le espero con la lanza». Es la herramienta del libro para que el que espera golpee primero.
- **Mira la lista de la app** de acciones pendientes de la fase y su orden por iniciativa: avisa si alguien de iniciativa baja va a resolver antes que otro de iniciativa más alta.

## 7. Asaltos rápidos (regla opcional) {#faster-rounds}

Core Law (§8.3, _Faster Rounds_) permite jugar con **2 fases** (hasta 2 PA en cada una) o con **una sola fase**, que es muy cómodo para el acercamiento inicial o para combates largos a distancia:

- Moverse **medio BMR** en la fase no cuesta nada. Cada **BMR completo** cuesta 1 PA. Equivale a la penalización por paso del sistema normal.
- Con menos fases hay más choques simultáneos. Se resuelven con **maniobras enfrentadas**.
- Quien aún no ha actuado puede **declarar al ser atacado** su parada, esquiva u otra defensa, incluidos los hechizos instantáneos.
- Se puede activar y desactivar según el momento. Para melés apretadas con muchos combatientes, las 4 fases siguen siendo lo más fluido.

**En la app:** las rondas de 2 fases o de 1 todavía no están soportadas. Si la mesa quiere usarlas para el acercamiento, se puede resolver ese tramo fuera de la app (o con movimientos y ajustes del máster) y volver a las 4 fases cuando empiece la melé.

## 8. Qué hace la app y qué se marca a mano {#app}

La app lleva los PA, las penalizaciones y los resultados, pero **no tiene mapa**: no sabe dónde está cada miniatura ni a qué distancia.

| Situación                                                           | La app lo calcula                           | Lo marca la mesa o el máster                                                    |
| ------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------- |
| PA acumulados por fase y penalización por PA de menos               | Sí                                          | —                                                                               |
| Paso y penalización del movimiento libre que coincide con el ataque | Sí (preseleccionado)                        | El paso real si la miniatura fue más despacio                                   |
| Carga (+1/+2 tamaño)                                                | Sí, por la distancia recorrida en el asalto | Corregirla si la miniatura no fue directa al objetivo                           |
| Si el objetivo está a alcance                                       | No                                          | Siempre                                                                         |
| Quién puede parar                                                   | Sí (último PA en cuerpo a cuerpo)           | —                                                                               |
| Retirada o paso cerca: ataque inmediato                             | No lo detecta                               | **Forzar resolución** (Retirada / Paso a través) en el ataque abierto del rival |
| Cortar el paso                                                      | No                                          | Maniobra enfrentada de Correr                                                   |
| Atacar por el flanco o por la espalda                               | No                                          | Posición en los modificadores del ataque                                        |
| Acción retenida                                                     | Guarda la acción con sus PA máximos         | Cuándo se cumple la condición                                                   |
| Orden de iniciativa dentro de la fase                               | Avisa si alguien resuelve fuera de orden    | Respetarlo                                                                      |
