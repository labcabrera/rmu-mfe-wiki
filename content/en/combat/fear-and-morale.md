---
title: Fear, morale and rallying
summary: When a side breaks, what each fear state does and how to rally it, with objective triggers for fights between players.
order: 30
source: es@0d90fec73ca916
---

# Fear, morale and rallying

In a long fight not everyone fights to the last breath: some hesitate, some back off and some run. The rules cover that, but they leave **when** to roll and **who** rolls to the GM. In a normal game that is fine. When **two players pit their factions against each other**, that call turns into an argument.

This page:

- sums up what the books say;
- separates what is objective from what is the GM's judgement;
- proposes **objective house triggers**;
- explains what the app does today;
- ends with ideas for automating more in combat mode.

> References such as "Core Law §14.3" point to the section of the book with the full rule. Anything marked as a **house rule** is our proposal, not rules text.

## 1. What the rules say {#rules}

### The fear roll (Core Law §14.3 and §5.6) {#fear-rr}

- It is a **fear RR**: a resistance roll with the character's fear bonus (from Self Discipline), against a **fright level** that acts as the attack level. On a success nothing happens. On a failure, **how much it fails by** sets the result.
- Wounds and fatigue **do not penalize** this roll.
- **Leader bonus:** someone under the orders of a present leader adds the leader's Leadership **ranks**. They must acknowledge the leader and know the leader is there and active.
- Supernatural horrors bring their own level. For everything else, **Table 14-3a** gives the level by situation:

| Level   | Situation (summarized)                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| 1       | Immediate danger                                                                                                    |
| 3       | An armed foe is trying to harm you                                                                                  |
| 5       | The fight is going badly, you are outnumbered, half your allies are down or fled, or it is a lethal ambush          |
| 10      | You are outnumbered and being surrounded, a superior force is overrunning your position, or more than half are down |
| 15      | A dangerous foe you cannot harm, or more than three quarters are down                                               |
| 20      | An unstoppable threat, or more than 90% are down                                                                    |
| +3 / +5 | If there are powerful or unfamiliar supernatural or magical elements (+5 if both)                                   |

### The four fear states {#fear-states}

| Fails by | State          | What they do                                                                                                                                      | When rallying |
| -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 1-25     | **Balking**    | Does not advance or pursue, but fights back if someone comes for them                                                                             | +0            |
| 26-50    | **Retreating** | Backs away under control, without turning their back. If they cannot, they surrender when surrender is cheap                                      | −20           |
| 51-99    | **Routed**     | Flees at least at a run until exhausted or safe. Attacks whoever blocks the way. If they cannot flee, they surrender unless surrender means death | −50           |
| 100+     | **Broken**     | Flees at top speed, drops whatever slows them down and ignores anyone trying to stop them. If they cannot flee, they surrender no matter what     | −100          |

### Morale and rallying (Core Law §14.3) {#morale-rally}

- **Morale:** decides whether an NPC follower obeys an order.
  - A maneuver is rolled with the leader's Leadership bonus and the follower's fear RR.
  - The difficulty depends on how reasonable the order looks.
  - For a group, the average of their bonuses is used (Table 14-3b).
  - **Players decide for their own characters**: morale is for NPCs.
- **Rallying:** a leader can try to remove the fear of someone who failed, if that person can **see and hear them**.
  - The modifier of the group's **worst state** (table above) applies, plus **−10 for every 10 followers** (rounding up).
  - The result lowers fear by **1, 2 or 3 steps**, or raises it by one on a disaster (Table 14-3c).
  - Character Companion adds that rallying costs **2 to 4 AP**.
- **Mounts and pets** roll their own fear RR. To force them into something frightening, Riding or Animal Handling is used instead of Leadership.

### Other rules with concrete numbers {#other-sources}

- **Intimidation** (Core Law, social skills): once real violence is involved, the intimidator's **ranks** are the fright level.
- **Talents:**
  - Look of Eagles: more Leadership, and +2 per tier to the followers' fear RR;
  - Fearless and Composure (Character Companion): bonus against fear.
- **Flaws:**
  - Revulsion: a fear RR every round while they see someone bleeding;
  - Panicky: −10 to the RR, and a roll when the situation turns deadly;
  - Phobia, with fixed levels by distance;
  - Post-Battle Panic.
- **Fighting styles** (Character Companion):
  - Brave Legion: +20 against fear with an ally beside them, +30 with one on each side;
  - Aspect of Fear: −10 to the RR of nearby enemies.
- **Creatures** (Creature Law):
  - each one has its fear RR bonus and, if it is frightening, its fright level;
  - talents such as Fear Aura, Fear Cry and Wave of Fear (a group of 10 or more forces a roll against level 10);
  - Steadfast: +30 against ordinary fear;
  - Mindless: unaffected by natural fear.
- **Criticals:** some results call for a fear RR at a given level, and others give ±20 to a side's morale.
- **Spells:** fear lists (Fear, Terror, Panic…) and courage lists (Courage, Calm Spirits). Fear spells usually use the realm RR, unless the spell says otherwise.

## 2. What is left to the GM {#subjective}

| Point                                                    | Why it is subjective                                   |
| -------------------------------------------------------- | ------------------------------------------------------ |
| When to call for the check, and who rolls                | The book says "when the GM sees fit"                   |
| "The fight is going badly", "a superior force"           | There is no measure of how the fight is going          |
| "Being surrounded"                                       | It says neither how many foes nor from where           |
| "A foe you cannot harm", "an unstoppable threat"         | It depends on what the character believes              |
| Half the allies: counting heads?                         | A level 8 captain and a level 1 recruit count the same |
| How long fear lasts                                      | The book does not say: it only goes away by rallying   |
| Creature behaviour (timid, jumpy, aggressive…)           | It is descriptive, with no numbers                     |
| "Flees if badly wounded", "backs off if things go badly" | Same                                                   |
| Criticals that just say "morale check"                   | They do not say against which level                    |

## 3. House rules: objective triggers {#house-triggers}

The idea is that **neither player has to call for the check**: the situation triggers it by itself, the same for both sides.

### Strength of a side {#strength}

- The **strength** of a side is the **sum of the levels** of its members still standing (minimum level 1). Losing the level 8 captain weighs more than losing two level 1 recruits.
- **Down** means dead, dying, unconscious, incapacitated, paralyzed, routed or broken.
- It is compared with the strength the side had **when the fight began**.

### When it is checked {#when}

- At the **end of each round**, during upkeep.
- Each trigger fires **once per side and fight**. It only fires again if the situation gets worse, to a higher level.
- If several fire at once, **the highest level** is used, with **a single roll** per member.
- Fear never improves by rolling again: everyone keeps their worst state.

### Group triggers {#group-triggers}

| Trigger                                                             | Fright level                                |
| ------------------------------------------------------------------- | ------------------------------------------- |
| Strength standing ≤ 50%                                             | 5                                           |
| Strength standing < 50%                                             | 10                                          |
| Strength standing < 25%                                             | 15                                          |
| Strength standing < 10%                                             | 20                                          |
| The enemy's standing strength **doubles** your own                  | 5                                           |
| The enemy's standing strength **triples** it                        | 10                                          |
| **The leader falls**                                                | 5, and from then on nobody gets their bonus |
| **Two rounds in a row** without anyone on the side harming an enemy | 15 ("we cannot hurt it")                    |
| An enemy with its own fright level appears                          | Its level, the first time it is seen        |
| Any of the above involves powerful magic or the supernatural        | +3 or +5, as in the table                   |

### Individual triggers {#individual-triggers}

| Trigger                                                                                                | Fright level |
| ------------------------------------------------------------------------------------------------------ | ------------ |
| **Surrounded:** attacked in the same round by 3 or more different foes, or from the flank and the rear | 10           |
| **Alone:** the last one standing on their side                                                         | 10           |
| **The comrade beside them falls:** an ally fighting the same foe goes down                             | 3            |
| **Badly wounded** (optional): drops below 25% of their hits                                            | 5            |

![Strength of two sides as a sum of levels: bars at the start and after each round, with the 50%, 25% and 10% thresholds marked.](images/combat/fear-casualties.svg)

### Who rolls {#who-rolls}

- **The NPCs of each faction**, always.
- **Player characters** only against supernatural fear (creatures, spells), or if the table agrees on it before starting. Otherwise the player decides and roleplays it.

### How long fear lasts {#duration}

The book only removes it by rallying. As a house rule:

- **Balking** and **Retreating** end when the side **wins a round** (deals more casualties, in levels, than it takes), when someone rallies them or when the fight ends.
- **Routed** and **Broken** only end by rallying or when they leave the fight. Someone who flees and does not come back counts as down for their side.

### Example: Maela's company {#example}

Maela's faction: Maela (level 8, leader, 10 ranks of Leadership), sergeant Iven (level 4) and three level 2 soldiers. Strength **18**. Facing them, Gorth's band, with strength 16.

| Round | What happens                   | Strength standing | Trigger                                                                                                     | Counting heads (the app today) |
| ----- | ------------------------------ | ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 1     | A soldier falls                | 16/18 (89%)       | None                                                                                                        | 1/5 down: none                 |
| 2     | Maela falls                    | 8/18 (44%)        | Strength < 50% (level 10) and the leader falls (level 5): roll against **10**, **without** the leader bonus | 2/5: none                      |
| 3     | Iven takes command and rallies | —                 | —                                                                                                           | —                              |

- In round 2, Iven and the two soldiers still standing roll a fear RR against level 10, without Maela's +10. One soldier ends up **Balking** and the other **Retreating**. Iven passes.
- In round 3, Iven rallies the two soldiers.
  - Modifiers: −20 for the worst state (Retreating) and −10 for the group (2 followers).
  - He adds his Leadership bonus. On a success, fear drops two steps: both are free.
  - From now on Iven only gives his bonus if the soldiers acknowledge him as leader.
- **Counting heads**, nothing would have fired by round 2, and Maela's fall would have weighed no more than a soldier's.

![Surrounded: a soldier attacked from the front, the flank and the rear in the same round.](images/combat/fear-surrounded.svg)

## 4. What the app does today {#app}

- **Fear states:** Balking, Retreating, Routed and Broken. The worst one is kept, and they **do not expire**: they go away by rallying or by hand.
  - **Routed or Broken:** they can only move (at Run or faster), dodge or take free actions. They neither attack nor heal.
  - **Broken:** there is a **Drop items** button.
  - **Retreating:** cannot charge, and moving faster than Jog only gives a warning.
  - **Balking:** warnings only.
  - Without a map, the app does not check **which way** they move.
- **Psychology dialog**, in the round header, with the **Fear**, **Morale** and **Rally** tabs:
  - the GM picks factions or actors, the leader and whether they are acknowledged;
  - the fright level can be a number, an NPC's level or someone's Intimidation ranks;
  - rolls left empty are rolled by the server;
  - the leader bonus and Look of Eagles are included; the dead and unconscious do not roll.
- **Automatic fear check warning:**
  - at the end of each round it works out the share of each faction that is down, **counting heads**;
  - thresholds: half (level 5), more than half (10), more than three quarters (15), more than 90% (20);
  - down means dead, unconscious, routed or broken; the dying, incapacitated and paralyzed do **not** count;
  - each threshold warns **once per game and faction**;
  - the warning **rolls nothing**: clicking it opens the dialog already filled in.
- **Revulsion warning** for anyone with that flaw, with the level based on the blood they see.
- **Morale:** stores the modifier of the result on the leader; nothing changes for the followers, and the GM decides what they do.
- **Rally:** lowers the fear of each frightened follower according to the result, with the modifier for the worst state and for the group size.
- **Individual fear RR:** a button on the actor's sheet, to apply the result to one actor.

## 5. Comparison {#comparison}

| Situation                 | Rules                                    | House rule                                                         | The app today                              |
| ------------------------- | ---------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------ |
| When to check             | GM's judgement                           | At the end of each round, by triggers                              | Warning on casualties; the rest, the GM    |
| Casualties of a side      | Half, three quarters, 90%                | By **sum of levels**                                               | By heads, once per game                    |
| Who counts as down        | Not specified                            | Dead, dying, unconscious, incapacitated, paralyzed, routed, broken | Dead, unconscious, routed, broken          |
| Enemy superiority         | "You are outnumbered"                    | Double (5) or triple (10) strength                                 | No                                         |
| The leader falls          | The bonus is lost if they cannot be seen | Level 5 and no bonus                                               | Manual (the GM unticks the leader)         |
| Surrounded                | "Being surrounded"                       | 3 attackers, or flank and rear                                     | No                                         |
| Foe that cannot be harmed | GM's judgement                           | 2 rounds without harming it                                        | No                                         |
| Frightening creature      | Its level                                | Same, the first time                                               | The NPC's level in the dialog              |
| Effects of each state     | Results table                            | Same                                                               | Action limits and warnings                 |
| How long fear lasts       | Not stated                               | Until winning a round or rallying                                  | Until rallied or removed by hand           |
| Rallying                  | Worst state, −10 per 10                  | Same                                                               | Works it out                               |
| Morale (orders)           | Group average                            | Same                                                               | Works it out; applies nothing to followers |

## 6. Ideas for combat mode {#ideas}

Proposals for automating the house rules, with no date:

- **Strength by levels:** work out casualties by adding up levels, and also count the dying, incapacitated and paralyzed.
- **Superiority:** compare each faction's standing strength with its enemies' and warn when it is doubled or tripled.
- **Faction leader:** mark the leader of each faction in the game. When they fall, warn of the level 5 check and remove their bonus automatically.
- **Surrounded:** count the different attackers of each actor in the round, and whether any attacked from the flank or rear (already stored in the attack modifiers).
- **Foe that cannot be harmed:** detect two rounds in a row in which a side's attacks deal no damage.
- **First sight of a creature** with a fright level: warn in its first round.
- **Game options:**
  - turn on the house triggers;
  - roll automatically for NPCs (players still decide for their characters).
- **More useful warnings:** warn again if the situation gets worse instead of only once per game, and one warning per side with every trigger.
- **End of fear:** on winning a round, offer to remove Balking and Retreating.
- **More NPC data:**
  - use their outlook: timid or jumpy ones check sooner, and berserk or mindless ones do not check;
  - apply the morale result to the followers.
- **Fighting styles:** add Brave Legion and Aspect of Fear to the RR.

Without a map, "beside" and "seeing" are approximated: the comrade beside you is the one fighting the same foe, and the GM marks the rest.
