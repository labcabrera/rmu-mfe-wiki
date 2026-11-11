---
title: Parrying with two weapons and multiple attacks
summary: How OB is shared by someone who attacks and parries in the same round, why you cannot attack with one weapon and parry with the other for free, and what the app does.
order: 20
source: es@1143d299d86aeb
---

# Parrying with two weapons and multiple attacks

Attacking and parrying come out of the same pool: the **OB of the round**. The rules are clear with one weapon, but they do not say how it is shared when the character carries two (or attacks with shield, fist and kick). This page explains the book rule, the gap it leaves, the **house rule** the app uses to close it, and how it fits with katas and with the opponent's multiple attacks.

> References such as "Core Law §9.6" point to the section of the book with the full rule. Anything marked as a **house rule** is an interpretation made by the app, not rules text.

## 1. What the rules say {#rules}

**Parrying** (Core Law §9.6, _Parrying_):

- Parrying is **trading OB for DB**, point for point, against one specific foe. That DB counts against **every attack from that foe** in the round.
- Without OB, because you already spent it attacking or parrying others, you cannot parry. Penalties (wounds, pace…) do not reduce the parry itself, but they lower the available OB and, with it, the most you can parry.
- If you have **several attacks** in the round, the parry lowers the OB of **all of them by the same amount**, and it is added to DB **only once**.
- Parrying **more than one foe** requires a Combat Training maneuver for each foe after the first; if it fails, that parry does not count.
- If the OB of an attack drops to 0 before it is resolved, **that attack is not made**.
- You can only parry if the last AP you spent went to a melee action (see [Parrying an incoming attacker](closing-and-melee.md#parry-incoming)).

**Katas** (Core Law §9.7, _Katas_): several attacks in a single action, each with its own limb (one hand, the other hand, a leg…).

- Two attacks at once: **−75 to each**, and −25 more for each extra attack. **−20** to all of them for each foe after the first.
- The off-hand weapon takes **−20** unless the character has the Ambidextrous talent. Light weapons give a small bonus that offsets part of the penalty.
- The **Combat Expertise: Multiple Attacks** skill offsets those penalties, without turning them into a bonus.
- Those penalties are **roll modifiers**, not OB spent: they do not change what you have left to parry.

**Defending with the other hand**: the book already has its own ways, and they have a cost.

- A weapon you **use neither to attack nor to parry** gives **+5 DB** against one melee attack (Core Law §9.6, _Weapons and Items as "Shields"_).
- The **Defensive Ward** ability (Character Companion, two-weapon styles) turns the off-hand weapon into a kind of shield, at the price of **not attacking with it** that round.

## 2. The gap: two weapons, two OBs {#the-gap}

The book talks about "the OB" as if there were only one. With two weapons each one has its own: Sorel carries a **sword +100** in the main hand and a **dagger +80** in the off hand. What happens if he attacks with one and parries with the other?

| Reading                                                         | Sorel attacks with the sword using all its OB (100)  | Problem                                                                                                                                                    |
| --------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Each weapon has its own OB** and only spends its own          | The dagger keeps +80 and Sorel **parries 80**        | A full attack **and** an almost full parry, without paying the kata penalty or the cost of Defensive Ward. Nobody would want to fight with a single weapon |
| **Everything used is added up** and subtracted from each weapon | Kata at 70 and 50: he would be left with −20 and −40 | He pays for the reserve twice: with a kata he could never parry                                                                                            |

Neither comes from the text, and both break the balance. The app uses a third one.

## 3. The house rule: one OB margin per round {#house-rule}

**A character has a single OB margin in the round, not one per weapon.** What they spend attacking, with any weapon, and what they spend parrying comes out of the same budget.

- **Attack with a single weapon:** the margin is **your best OB minus what you used**. Attacking with the dagger does not leave you without your sword: you spend from the budget of the best one. Attack plus parry **never add up to more than your best OB**.
- **Kata (several attacks in the action):** the margin is **what is left over by the attack with the least left over** (each weapon's OB minus what it uses).
- The margin **caps the OB of all your attacks**, whether you used them or not: weapons, shield bash, unarmed and natural attacks.
- The weapon you used also loses what it spent itself, so you cannot use the same OB again in another action.
- The margin **lasts the whole round**: if you attack in two different actions, the second one starts from what the first left.
- **Parrying** still subtracts from every weapon at once, as the book says. The most you can parry is the OB of your best melee weapon left, with penalties applied.
- OB never drops below 0. A weapon at 0 does not attack.

### Examples with Sorel (sword +100, dagger +80) {#examples}

| What Sorel does                                                  | OB left (sword / dagger)                                                  | Can parry        |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------- |
| Kata: sword using 70, dagger using 50                            | 30 / 30                                                                   | 30               |
| Unbalanced kata: sword 70, dagger 30                             | 30 / 30 (the dagger had 50 left, but the sword's leftover sets the limit) | 30               |
| Kata with everything: sword 100, dagger 50                       | 0 / 0                                                                     | 0                |
| Sword only, using 60                                             | 40 / 40                                                                   | 40               |
| Dagger only, using 60                                            | 40 / 20                                                                   | 40               |
| **Sword only, using 100** (the abuse)                            | 0 / 0                                                                     | **0**            |
| Parries 30, then kata at 70 and 50                               | 0 / 0                                                                     | 0                |
| Parries 90 before attacking                                      | 10 / 0: the dagger can no longer attack                                   | 10               |
| Phase 2: sword using 40; phase 4: another action with the dagger | After phase 2: 60 / 60. The dagger attacks with 60 at most                | 60 after phase 2 |

The underlying idea: **whoever wants to defend with the other hand has to pay for it**, as in the book: with Defensive Ward (giving up the attack with it) or with the passive +5 of a weapon they do not use. The kata is still the best way to deal more damage, but it leaves less to parry with.

![Sorel with sword and dagger: the OB of each weapon and the shared margin after attacking with the sword at 60.](images/combat/shared-ob-margin.svg)

## 4. When spent OB counts {#when-it-counts}

Another **house rule**, because the book does not say at what exact moment of the phase the OB counts as spent:

- **A parry counts from the moment it is declared**, even if the opponent's attack has not been resolved yet. Declaring it again replaces the previous one.
- **An attack counts from the moment it is rolled**. An attack that is only prepared reserves nothing: the book allows parrying with that OB and leaving the attack without it.
- If you parry with OB that an attack of yours **already prepared** had, that attack **drops** to the OB you have left, with a warning. If it is left at 0, it cannot be rolled: use **Change attack** to prepare it again with what is left (the number of attacks changes the kata penalty) or delete the action.
- Deleting the attacker's action gives back the OB your parries against it had reserved. What has already been applied is not given back.

This closes three tricks: declaring a parry and attacking with all your OB before it is applied; rolling an attack with everything and then parrying; and giving all your OB to the parry against each of two foes.

![Order in the phase: the declared parry already takes OB even though the opponent's attack has not been applied.](images/combat/parry-commit.svg)

## 5. Parrying someone who attacks several times {#parry-vs-multiple}

- One parry counts against **every attack from that foe** in the round: if a wolf bites and claws in the same action, you parry once and the DB counts against both.
- If the foe attacks you again **in another action** of the same round, the parry you already paid for **carries over**: you do not spend OB again or have to declare it again.
- Against a **second foe** you have to split: each parry subtracts from your OB separately, and from the second foe on you need the Combat Training maneuver.

**Example.** Sorel (OB 100 with the sword) faces an orc and a wolf at once.

- He parries the orc with **40**: 60 left.
- The wolf bites and claws: he parries **30** and rolls the Combat Training maneuver (it is the second foe). If he succeeds, +30 DB against bite and claw; 30 left.
- On his turn he attacks with the sword at 30 at most. If the orc attacks again in another action, he still has +40 against it without spending more.

## 6. In the app {#app}

- **Target step of the attack:** for each weapon you see the OB it uses and the OB it has, and for the whole action "OB left for the rest of the round and to parry". In a kata you can see that lowering only one weapon does not raise the margin until you lower the other as well.
- **Weapon without OB:** it shows no target selector, with the reason. The API rejects an attack with OB 0.
- **Parry step:** it tells how each weapon ends up if you give that parry. The second parry of the round against another foe asks for the Combat Training roll, with **Medium** difficulty by default (the book does not set one; it is a house decision) or the result the GM marks.
- **Board:** the **OB available** bar, above fatigue, shows what is left of the round with parries and attacks already counted.
- **Fighting styles:** Improved Parry and Unarmed Parry do apply to the DB of the parry.
- **Carried-over parry:** the app offers it when the foe's earlier action has already been applied. If their second attack was prepared before that, it may offer a new parry: in that case do not give it again, repeat the one you already gave.

## 7. Comparison: rules, house rule and app {#comparison}

| Situation                                             | Rules                                                       | House rule                            | The app                                                        |
| ----------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------- | -------------------------------------------------------------- |
| Parry with several attacks of your own                | Lowers the OB of all of them equally, adds to DB once       | Same                                  | Works it out                                                   |
| OB left with two weapons                              | Not covered                                                 | One margin shared per round           | Works it out                                                   |
| Attacking with one weapon and parrying with the other | Not covered; Defensive Ward and the passive +5 are for that | Not free: they share the margin       | Works it out                                                   |
| Two attack actions in the round                       | Not covered                                                 | They share the margin                 | Works it out                                                   |
| When OB is spent                                      | Not covered                                                 | Parry on declaring, attack on rolling | Works it out                                                   |
| Parry against every attack from one foe               | Yes                                                         | Same                                  | Works it out, carried-over parry included                      |
| Maneuver to parry another foe                         | Absolute Combat Training                                    | Medium difficulty by default          | Roll in the parry step                                         |
| Kata, off-hand and light weapon modifiers             | Table 9-7b                                                  | Same                                  | Works it out                                                   |
| Passive +5 of an unused weapon                        | Yes                                                         | —                                     | **No**: the GM adds it in the modifiers                        |
| Defensive Ward                                        | Yes (Character Companion)                                   | —                                     | **Not implemented**: marked by hand                            |
| Having to continue the action after parrying          | Yes                                                         | —                                     | **No**: the action can be deleted; the table has to respect it |
| OB or parry reduced by having fewer AP                | Mentioned (_Staggered_)                                     | —                                     | **No**: missing AP only penalize the roll                      |
| Deleting an attack already applied                    | —                                                           | —                                     | Does not give back the OB spent                                |
