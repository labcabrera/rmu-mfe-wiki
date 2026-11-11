---
title: Closing, charging and melee
summary: Charging an enemy, waiting on guard, fleeing or running past: how it plays out phase by phase with miniatures.
order: 10
source: es@05cf15da554c2b
---

# Closing, charging and melee

How a fight at the table (and in the app) handles a combatant who closes on another, attacks, waits, flees or runs past. Everything comes from Core Law, chapters 8 and 9; this page explains it with its own examples and with tips to keep the round from dragging when you play with miniatures.

> References such as "Core Law §8.2" point to the section of the book with the full rule.

## 1. The round in 30 seconds {#round}

- A round is about 5 seconds long and is split into **4 phases**. Each combatant usually has **4 action points (AP)** and spends **1 AP per phase**, in **initiative** order (highest first). AP cannot be saved: if you have one left in a phase, you spend it on something (Core Law §8.3).
- Many actions need several AP. A **melee attack costs 2 to 4 AP**: with 4 there is no penalty; with 3, −25; with 2, −50 (Core Law §8.1, table 8-1). With 1 AP you cannot attack.
- An action is **resolved** (rolled) in the phase where it already has enough AP and its owner chooses to resolve it.
- **There is no declaration phase**: what you do is decided phase by phase, on your initiative turn. The target of a melee attack is chosen when you resolve it, and at that moment it must be within your reach (Core Law §8.3, _Melee Actions_).

The key consequence: **an attack is not "arrive and hit"**. It is an action you build up phase by phase, and the usual thing is to start building it while you close in.

## 2. Attacking from out of reach: the charge {#charge}

You can start a melee attack while the enemy is still far away. While you spend AP on the attack, you can **move at the same time without spending AP** (free movement), up to **Run** pace. The price is a **pace penalty** on the attack, set by the longest distance you covered in a single phase while the attack lasted (Core Law §8.2):

| Pace             | Distance per phase | Penalty when attacking while moving |
| ---------------- | ------------------ | ----------------------------------- |
| Creep            | 1/8 BMR            | 0                                   |
| Walk             | 1/4 BMR            | −25                                 |
| Jog              | 1/2 BMR            | −50                                 |
| Run              | 3/4 BMR            | −75                                 |
| Sprint or faster | —                  | cannot attack                       |

- The **Combat Expertise: Footwork** skill reduces that penalty for melee and thrown attacks.
- The attack can be resolved as soon as **you are within reach** and have **at least 2 AP** in it. You choose whether to resolve it right away (with the penalty for missing AP) or to wait for more.
- If you covered **more than 2×BMR** in the round before attacking, the attack counts as **one size larger** (more than 4×BMR, two sizes) for the severity of the critical (Core Law §8.2, _Closing & Charging_, table 8-2). Moving at Run pace also gives +1 if the distance is over 2×BMR.

### Example: Aldara charges an orc 50' away {#charge-example}

Aldara has BMR 20', so at Run she covers 15' per phase.

| Phase | Aldara                              | Distance covered | AP in the attack |
| ----- | ----------------------------------- | ---------------- | ---------------- |
| 1     | Starts the attack and runs 15'      | 15'              | 1                |
| 2     | Keeps the attack going and runs 15' | 30'              | 2                |
| 3     | Keeps the attack going and runs 15' | 45'              | 3                |
| 4     | Runs the last 5' and **resolves**   | 50'              | 4                |

- AP penalty: none (4 AP).
- Pace penalty: −75 (in phases 1-3 she ran 15', Run pace), minus whatever her Footwork removes.
- Charge: 50' is more than 2×BMR (40'): **+1 size** to the attack.

![Aldara covers 15' per phase and arrives in phase 4: where the miniature stands at the end of each phase.](images/combat/charge-50ft.svg)

### Example: the orc is 30' away. Run or take it easy? {#pace-example}

With BMR 20' and the orc 30' away, Aldara has several options:

| How she closes in                   | Arrives in phase           | Resolves with | Total penalty                          |
| ----------------------------------- | -------------------------- | ------------- | -------------------------------------- |
| Run (15'+15') and attack on arrival | 2                          | 2 AP (−50)    | −125                                   |
| Run and wait one phase to attack    | 2                          | 3 AP (−25)    | −100 (the fastest phase sets the pace) |
| Jog (10' per phase)                 | 3                          | 3 AP (−25)    | −75                                    |
| Jog, and attack in phase 4          | 3                          | 4 AP (0)      | −50                                    |
| Walk (5' per phase)                 | does not arrive this round | —             | —                                      |

It is the usual tactical choice: **arrive sooner or hit harder**. Paying for the movement with AP instead of taking the penalty gives similar numbers: the book is designed so that both ways come out about the same.

![Four ways to cover 30': the phase Aldara arrives in and the penalty she attacks with.](images/combat/approach-30ft.svg)

### In the app {#charge-app}

1. In the phase she starts to close in, Aldara declares **Melee attack** and **Free movement**. The attack gains 1 AP per phase with nothing else to do.
2. When the miniature arrives, **resolve the free movement first** with the pace it used, then **prepare the attack**. The pace and the charge come filled in, and the GM can change them. If you prepare the attack before resolving the movement, the app warns that the pace penalty does not count yet.
3. The table decides: the app does not know the distances between miniatures. If you reach the enemy in 50', the miniature stays there.

## 3. Parrying an incoming attacker {#parry-incoming}

To **parry** a melee attack, all you need is that **the last AP you spent went to a melee action**. You do not have to be in melee already, and moving does not break that condition (Core Law §8.3, _Melee Actions_; §9.6, _Parrying_).

So when you see someone coming, the usual move is to **go on guard**: start a melee attack even though there is nobody to hit yet. While you build it up you can parry whoever attacks you, and when the enemy arrives you already have AP stored to hit back.

Careful: a combatant who parried with a half-built attack is **committed** to it and must finish it; they cannot switch to another action (Core Law §8.3, _Action Phases_).

## 4. High initiative waiting against low initiative running in {#waiting}

This is the case that raises the most questions. Bruna (initiative 18, with a spear) waits; Krag (initiative 7, BMR 20') runs in from 40'.

| Phase | Bruna (18), acts first                                              | Krag (7)                                                                                                                    |
| ----- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1     | Goes on guard: starts an attack (1 AP)                              | Starts an attack and runs 15' (25' away)                                                                                    |
| 2     | Keeps the attack going (2 AP). Krag is not within reach yet         | Keeps going and runs 15' (10' away)                                                                                         |
| 3     | Keeps the attack going (3 AP). Krag has not arrived yet on his turn | Runs the last 10' and **resolves with 3 AP**: −25 for AP and −75 for pace. **Bruna parries**, because her last AP was melee |
| 4     | **Resolves her attack with 4 AP, no penalty**                       | Starts another action                                                                                                       |

![Bruna on guard and Krag running: positions at the end of each phase.](images/combat/guard-vs-charge.svg)

- Krag hitting first **is the rule**: he arrives on his turn of phase 3, and by then Bruna had already acted. In exchange, Bruna parries, and Krag attacks with a huge penalty.
- Bruna **does answer**: in phase 4 she acts before anyone else and resolves her attack at full strength.

### If Krag arrives in phase 4 {#phase-4}

If Krag starts 55' away, he arrives in phase 4. By his turn in that phase Bruna has spent her 4 AP and had nobody to hit, so without doing anything else she would lose the attack. She has three ways out:

1. **Hold the action** (Core Law §8.3, _Conditional Actions_). With every AP of the attack spent, Bruna does not resolve it and keeps it ready with a condition: "when an enemy comes within my reach". When Krag arrives, on Krag's turn, the condition is met and Bruna **strikes before Krag resolves**. Keeping an action held counts as concentration. In the app: **Hold** on the attack action (it needs its maximum AP) and resolve it when the condition happens.
2. **Open rounds** (optional rule, Core Law §8.3, _Open Rounds_). If the campaign has "Open rounds" turned on, Bruna's attack carries over to the next round with its AP and she resolves it in phase 1.
3. **Parry** and start a new attack next round. This is what happens when neither of the above is used.

![Held action: Bruna strikes as soon as Krag comes within reach of her spear.](images/combat/hold-action.svg)

### The usual mistake: moving everything at once {#moving-all-at-once}

If Krag's free movement is resolved in phase 1 with everything he will run in the round, and he is allowed to attack right away, it looks as if Krag crosses the field in one leap, hits, and Bruna just watches. **Free movement never goes beyond 3/4 BMR per phase**. Krag's attack cannot be resolved before the phase in which his miniature really arrives, nor with fewer than 2 AP.

## 5. Withdrawing, fleeing and running past someone {#withdrawing}

### Backing off carefully or turning around (Core Law §8.2, _Withdrawing_) {#withdrawing-rules}

- **Careful withdrawal**: you back away facing the enemy at half speed (Jog at most). You cannot be struck for it; if your opponent wants to keep attacking, they must advance.
- **Turning around and running**: your opponent chooses.
  - They **chase** you.
  - Or, if they **already had at least 1 AP in an unresolved attack** and AP left, they **spend their next AP and resolve the attack at once**, with the AP it has (2 AP: −50) and the **bonus for attacking from behind**. That AP is the one of their next phase.
  - If you flee **before** your opponent has put a single AP into their attack (for example, because you have higher initiative and leave in phase 1), there is no immediate attack: they will have to chase you.

**Example.** Tobias (initiative 9) is in melee with an orc (initiative 14).

- **Phase 1:** the orc starts its attack (1 AP). Tobias turns around and runs.
- **Immediate attack:** the orc spends its phase 2 AP right now and attacks with 2 AP (−50), from behind.
- **Phase 2:** the orc has already spent that AP and cannot start anything new until phase 3.

![Backing off facing the enemy versus turning around and running.](images/combat/withdrawal.svg)

### Running past an enemy (Core Law §8.2, _Passing Through_) {#passing-through}

If in the same phase you **enter and leave the reach** of an enemy, or move around them inside their reach, the enemy can do one of two things:

1. **Try to block you** with an opposed Running maneuver (or another skill that fits). The one moving is the active side. Stopping someone one size larger is very hard, and impossible if they are two or more sizes larger. If you are blocked, your movement for that phase ends inside their reach and you cannot get past this round.
2. If they do not stop you (or do not try), you count as **someone withdrawing**. If they had a melee attack with at least 1 AP and AP left, they can spend the next one on an **immediate attack from behind**.

![Running past an enemy: the path, their reach, and where the miniature stays if it is blocked.](images/combat/passing-through.svg)

### In the app {#withdrawing-app}

- The immediate attack is made on the opponent's **open attack**: **Force resolution** with the reason **Withdrawal** or **Pass-through**. It spends their next free AP and applies the penalty for the total AP.
- The **attack from behind** is set by hand in the attack modifiers.
- The blocking maneuver is rolled as a maneuver; if it succeeds, the miniature stays within the opponent's reach.
- The app **does not notice by itself** that someone flees or runs past: it does not know where the miniatures are. The table has to see it.

## 6. Tips for playing with miniatures without dragging the round {#tips}

- **Announce the intent and the arrival phase.** Saying "I charge the orc at Run, I arrive in phase 3" and moving the miniature its distance each phase is enough. Nothing needs rolling or recording until it arrives.
- **Only stop the game when something changes**: someone comes within reach, runs past an enemy, flees or loses line of sight. Phases in which everyone is just building their attack can be skipped through at once.
- **Mark who is on guard** (a melee attack started). That is who can parry, hold the action or take the immediate attack on someone fleeing or running past.
- **Initiative ties are simultaneous**: both attacks are resolved and neither cancels the other (Core Law §8.3, _Initiative Phase_).
- **Lowering your initiative on purpose** is legal: you can wait to see what the other side does, but for the rest of the round you keep the lowered initiative.
- **Use the held action** for the classic "I wait for him with my spear". It is the book's tool for letting the one who waits strike first.
- **Check the app's list** of pending actions for the phase and their initiative order: it warns when someone with low initiative is about to resolve before someone with higher initiative.

## 7. Faster rounds (optional rule) {#faster-rounds}

Core Law (§8.3, _Faster Rounds_) allows playing with **2 phases** (up to 2 AP each) or with **a single phase**, which is very handy for the initial approach or for long ranged fights:

- Moving **half your BMR** in the phase is free. Each **full BMR** costs 1 AP. This stands in for the pace penalty of the normal system.
- With fewer phases there are more simultaneous clashes. They are settled with **opposed maneuvers**.
- Whoever has not acted yet can **declare when attacked** their parry, dodge or other defense, instant spells included.
- It can be switched on and off as the moment requires. For tight melees with many combatants, 4 phases are still the smoothest.

**In the app:** rounds of 2 phases or 1 are not supported yet. If the table wants them for the approach, that stretch can be played outside the app (or with GM movements and adjustments), going back to 4 phases when the melee starts.

## 8. What the app does and what you mark by hand {#app}

The app tracks AP, penalties and results, but **it has no map**: it does not know where each miniature is or how far apart they are.

| Situation                                                      | The app works it out                        | The table or the GM marks it                                                   |
| -------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------ |
| AP built up per phase and penalty for missing AP               | Yes                                         | —                                                                              |
| Pace and penalty of the free movement that overlaps the attack | Yes (preselected)                           | The real pace if the miniature moved slower                                    |
| Charge (+1/+2 size)                                            | Yes, from the distance covered in the round | Correct it if the miniature did not go straight at the target                  |
| Whether the target is within reach                             | No                                          | Always                                                                         |
| Who can parry                                                  | Yes (last AP in melee)                      | —                                                                              |
| Withdrawal or running past: immediate attack                   | Does not detect it                          | **Force resolution** (Withdrawal / Pass-through) on the opponent's open attack |
| Blocking the way                                               | No                                          | Opposed Running maneuver                                                       |
| Attacking from the flank or from behind                        | No                                          | Position in the attack modifiers                                               |
| Held action                                                    | Keeps the action with its maximum AP        | When the condition is met                                                      |
| Initiative order within the phase                              | Warns if someone resolves out of order      | Follow it                                                                      |
