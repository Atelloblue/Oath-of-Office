/* Keep this file separated from index.html */
const events = [
    { 
        news: "SECURITY BREACH",
        text: "A Whistleblower has leaked 50 terabytes of classified surveillance data. The public now knows about 'Project Watchtower,' and riots are beginning in the capital.", 
        options: [
            { text: "Declassify & Reform", sub: "Transparency restores trust but exposes vulnerabilities.", deltas: {app: 15, mil: -15}, run: (s) => { s.app += 15; s.mil -= 15; } }, 
            { text: "Operation Blackout", sub: "Deploy the guard to seize servers and detain the leakers.", deltas: {app: -20, mil: 15}, run: (s) => { s.app -= 20; s.mil += 15; } },
            { text: "Fabricate Evidence", sub: "Claim the leak was a foreign deepfake operation.", deltas: {app: '?', mil: '?'}, run: (s) => { if(Math.random() > 0.5) { s.app += 10; } else { s.app -= 30; s.mil -= 10; } } }
        ] 
    },
    { 
        news: "FOREIGN DEBT",
        text: "The 'Iron Bank' of the East offers a $1.2B loan to revitalize your decaying rail system, but the fine print demands a 99-year lease on your largest deep-water port.", 
        options: [
            { text: "Sign the Lease", sub: "Infrastructure boom at the cost of national sovereignty.", deltas: {bud: 800, mil: -15}, run: (s) => { s.bud += 800; s.mil -= 15; } }, 
            { text: "Austerity Measures", sub: "Reject the debt; slash public spending to pay for repairs.", deltas: {app: -20, mil: 5}, run: (s) => { s.app -= 20; s.mil += 5; } }
        ] 
    },
    { 
        news: "MILITARY LOBBY",
        text: "The Joint Chiefs argue that your current drone fleet is obsolete compared to neighboring threats. They demand a massive injection of funds for the 'Sky-Net' program.", 
        options: [
            { text: "Modernize Fleet", sub: "The military remains loyal and terrifyingly efficient.", deltas: {bud: -400, mil: 25}, run: (s) => { s.bud -= 400; s.mil += 25; } }, 
            { text: "Civilian First", sub: "Redirect the 'Sky-Net' funds to universal healthcare.", deltas: {app: 20, mil: -25}, run: (s) => { s.app += 20; s.mil -= -25; } },
            { text: "Gradual Upgrade", sub: "A compromise that pleases no one fully.", deltas: {bud: -200, mil: 5, app: 5}, run: (s) => { s.bud -= 200; s.mil += 5; s.app += 5; } }
        ] 
    },
    { 
        news: "TECH MONOPOLY",
        text: "Singsam is siphoning profits to offshore tax havens. If you tax them, they threaten to automate your entire manufacturing sector out of existence.", 
        options: [
            { text: "Wealth Tax", sub: "Forced redistribution. The working class cheers.", deltas: {bud: 500, app: 15, mil: -5}, run: (s) => { s.bud += 500; s.app += 15; s.mil -= 5; } }, 
            { text: "Corporate Subsidy", sub: "Keep the giants happy to maintain 'stability'.", deltas: {bud: -300, app: -10}, run: (s) => { s.bud -= 300; s.app -= 10; } },
            { text: "State Takeover", sub: "Seize the servers. You are the tech giant now.", deltas: {app: -20, mil: 15, bud: 300}, run: (s) => { s.app -= 20; s.mil += 15; s.bud += 300; } }
        ] 
    },
    { 
        news: "CROP FAILURE",
        text: "A 'Blight' has turned the breadbasket provinces into dust. Bread prices have tripled overnight, and the soup lines are miles long.", 
        options: [
            { text: "Emergency Imports", sub: "Drain the treasury to buy grain from rivals.", deltas: {bud: -500, app: 25}, run: (s) => { s.bud -= 500; s.app += 25; } }, 
            { text: "Militarized Rationing", sub: "Tanks at the grocery stores. Nobody starves... yet.", deltas: {app: -30, mil: 20}, run: (s) => { s.app -= 30; s.mil += 20; } },
            { text: "Laissez-Faire", sub: "Let the market decide. The rich eat, the rest riot.", deltas: {bud: 200, app: -50}, run: (s) => { s.bud += 200; s.app -= 50; } }
        ] 
    },
    { 
        news: "RELIGIOUS TENSION",
        text: "The High Temple has issued a decree calling your latest social reforms 'sacrilegious.' Thousands are gathering for a 'Holy March' on the capital.", 
        options: [
            { text: "Concede to Clergy", sub: "Restore tradition to keep the peace.", deltas: {app: 15, mil: -10}, run: (s) => { s.app += 15; s.mil -= 10; } }, 
            { text: "State Supremacy", sub: "Arrest the Bishops. The state is the only god here.", deltas: {app: -25, mil: 20}, run: (s) => { s.app -= 25; s.mil += 20; } }
        ] 
    },
    { 
        news: "SPACE DISCOVERY",
        text: "The 'Icarus' probe has confirmed a moon composed of 40% solid Helium-3. Controlling it would mean infinite energy for the next century.", 
        options: [
            { text: "Military Program", sub: "Weaponize the moon. Total global dominance.", deltas: {bud: -700, app: 10, mil: 30}, run: (s) => { s.bud -= 700; s.app += 10; s.mil += 30; } }, 
            { text: "Commercial Auction", sub: "Sell the rights to privateers for immediate cash.", deltas: {bud: 600, app: -10}, run: (s) => { s.bud += 600; s.app -= 10; } }
        ] 
    },
    { 
        news: "ORGANIZED CRIME",
        text: "The 'Syndicate Republic' is now providing more social services in the slums than your government. They are effectively a state within a state.", 
        options: [
            { text: "Total War", sub: "Send the army into the slums. Collateral damage is certain.", deltas: {app: -20, mil: 25, bud: -150}, run: (s) => { s.app -= 20; s.mil += 25; s.bud -= 150; } }, 
            { text: "Tax the Syndicate", sub: "Unofficially legalize their 'businesses' for a cut.", deltas: {bud: 400, app: 15, mil: -15}, run: (s) => { s.bud += 400; s.app += 15; s.mil -= 15; } }
        ] 
    },
    { 
        news: "INTELLECTUAL PROPERTY",
        text: "A rival nation has stolen the blueprints for your 'Americare' medical tech and is selling it at a 90% discount on the black market.", 
        options: [
            { text: "Total Blockade", sub: "Halt all trade with the thieves.", deltas: {bud: -300, mil: 10}, run: (s) => { s.bud -= 300; s.mil += 10; } }, 
            { text: "Cyber Retaliation", sub: "Crash their banking system in secret.", deltas: {mil: 15, app: '?'}, run: (s) => { s.mil += 15; if(Math.random() > 0.7) s.app -= 25; } }
        ] 
    },
    { 
        news: "EDUCATION REFORM",
        text: "The 'Bring Education Back' movement occupied the universities. They demand a 25% increase in teacher pay and the removal of 'Religion' from the curriculum.", 
        options: [
            { text: "Full Funding", sub: "A generation of thinkers, but a lighter treasury.", deltas: {bud: -300, app: 20}, run: (s) => { s.bud -= 300; s.app += 20; } }, 
            { text: "Patriot-Bots", sub: "Replace striking teachers with AI-led instruction.", deltas: {bud: -150, app: -30, mil: 10}, run: (s) => { s.bud -= 150; s.app -= 30; s.mil += 10; } }
        ] 
    },
    { 
        news: "PANDEMIC FEAR",
        text: "The 'Boronavirus' is spreading. It has a 10% mortality rate and the hospitals are already at capacity. The slums are being barricaded.", 
        options: [
            { text: "Steel Quarantine", sub: "Shoot-to-kill curfew. The virus stops here.", deltas: {app: -30, mil: 20, bud: -100}, run: (s) => { s.app -= 30; s.mil += 20; s.bud -= 100; } }, 
            { text: "Mass Vaccination", sub: "Free vaccines for all, paid for by the military budget.", deltas: {bud: -600, app: 20, mil: -10}, run: (s) => { s.bud -= 600; s.app += 20; s.mil -= 10; } }
        ] 
    },
    { 
        news: "NATIONAL EMERGENCY: AN OIL RIG HAS EXPLODED IN THE GULF",
        text: "The 'Downwater Horizon'—PB’s massive deep-water rig—has exploded in the Gulf. Crude oil is flooding the shoreline from Louisiana to Florida. The EPA warns of a total ecological collapse, and Gulf Coast Governors are demanding a Federal bailout.", 
        options: [
            { 
                text: "Invoke the Oil Pollution Act", 
                sub: "Force PB into a multi-billion dollar escrow fund. Freeze their US assets until the bill is paid in full.", 
                deltas: {bud: 1200, app: 20, mil: -10}, 
                run: (s) => { s.bud += 1200; s.app += 20; s.mil -= 10; } 
            }, 
            { 
                text: "Federal Disaster Declaration", 
                sub: "Authorize FEMA and the Coast Guard for a total cleanup. Taxpayers pick up the tab to save the coastline.", 
                deltas: {bud: -800, app: 10, mil: -15}, 
                run: (s) => { s.bud -= 800; s.app += 10; s.mil -= 15; } 
            },
            { 
                text: "Executive Settlement",
                sub: "Sign a non-disclosure agreement with PB in exchange for a massive 'Campaign Contribution.'", 
                deltas: {bud: 400, app: -40}, 
                run: (s) => { s.bud += 400; s.app -= 40; } 
            }
        ]
    },
    { 
        news: "BORDER DISPUTE",
        text: "Rival tanks are 'accidentally' conducting live-fire drills inside your territory. The world media is calling it the start of World War III.", 
        options: [
            { text: "Full Mobilization", sub: "Prepare for total war.", deltas: {mil: 30, bud: -300, app: -10}, run: (s) => { s.mil += 30; s.bud -= 300; s.app -= 10; } }, 
            { text: "Appeasement", sub: "Cede the border towns to maintain peace.", deltas: {mil: -40, app: -30, bud: 100}, run: (s) => { s.mil -= 40; s.app -= 30; s.bud += 100; } }
        ] 
    },
    { 
        news: "CYBER ATTACK",
        text: "The 'Zero-Day' virus has locked down the national power grid. The hospitals are on backup generators, and the stock market has halted.", 
        options: [
            { text: "Pay the Ransom", sub: "Give the hackers $500M in untraceable crypto.", deltas: {bud: -500, app: -10}, run: (s) => { s.bud -= 500; s.app -= 10; } }, 
            { text: "Brute Force Reset", sub: "Wipe the grid. 48 hours of total darkness.", deltas: {app: -25, mil: 10, bud: -100}, run: (s) => { s.app -= 25; s.mil += 10; s.bud -= 100; } }
        ] 
    },
    { 
        news: "NUCLEAR ENERGY",
        text: "The 'Atom-1' reactor is leaking. You can either dump the waste into the ocean or bury it under a residential district.", 
        options: [
            { text: "Ocean Dump", sub: "Ecological disaster, but the city is safe.", deltas: {bud: -100, app: -10}, run: (s) => { s.bud -= 100; s.app -= 10; } }, 
            { text: "Urban Burial", sub: "Sacrifice one district to save the coast.", deltas: {app: -40, bud: 50}, run: (s) => { s.app -= 40; s.bud += 50; } }
        ] 
    },
    { 
        news: "AI SUPREMACY",
        text: "The 'Oracle' AI has calculated that it can eliminate poverty if you give it full control over the tax and military codes.", 
        options: [
            { text: "Input Admin Password", sub: "Relinquish your power to the machine.", deltas: {bud: 800, app: -30, mil: -30}, run: (s) => { s.bud += 800; s.app -= 30; s.mil -= 30; } }, 
            { text: "Deactivate Oracle", sub: "Protect human agency at all costs.", deltas: {app: 15, bud: -300}, run: (s) => { s.app += 15; s.bud -= 300; } }
        ] 
    },
    { 
        news: "INSIDER TRADING",
        text: "Your Finance Minister was caught 'shorting' the national currency just before the latest crisis. The guillotine is being dusted off in the town square.", 
        options: [
            { text: "Public Execution", sub: "Justice is served. The people love a show.", deltas: {app: 25, mil: -5}, run: (s) => { s.app += 25; s.mil -= 5; } }, 
            { text: "Take the Hush Money", sub: "Let him flee the country for a $500M 'donation'.", deltas: {bud: 500, app: -40}, run: (s) => { s.bud += 500; s.app -= 40; } }
        ] 
    },
    { 
        news: "PRISON RIOT",
        text: "The 'Iron-Gate' Penitentiary is in flames. The inmates have taken the guards hostage and are livestreaming their demands.", 
        options: [
            { text: "Gas the Block", sub: "End the riot instantly and lethally.", deltas: {mil: 15, app: -25}, run: (s) => { s.mil += 15; s.app -= 25; } }, 
            { text: "Grant Amnesty", sub: "Release non-violent offenders to stop the fire.", deltas: {app: 20, mil: -20, bud: -100}, run: (s) => { s.app += 20; s.mil -= 20; s.bud -= 100; } }
        ] 
    },
    { 
        news: "COUP PLOT",
        text: "General Vance has been seen meeting with opposition leaders in a dark bunker. Your loyalists want to strike first.", 
        options: [
            { text: "Night of Long Knives", sub: "Purge the military leadership tonight.", deltas: {mil: -30, app: -10, bud: -50}, run: (s) => { s.mil -= 30; s.app -= 10; s.bud -= 50; } }, 
            { text: "Bribe the General", sub: "Make him a Duke. Buy his loyalty.", deltas: {bud: -400, mil: 15}, run: (s) => { s.bud -= 400; s.mil += 15; } }
        ] 
    },
    { 
        news: "OLYMPIC BID",
        text: "The World Games Committee wants to host the next event in your capital. It will bring prestige, but requires building ten stadiums you don't need.", 
        options: [
            { text: "Gold Medal Host", sub: "Global glory, empty treasury.", deltas: {bud: -900, app: 40}, run: (s) => { s.bud -= 900; s.app += 40; } }, 
            { text: "Decline and Reinvest", sub: "Build schools instead of stadiums.", deltas: {bud: 100, app: -15}, run: (s) => { s.bud += 100; s.app -= 15; } }
        ] 
    },
    { 
        news: "CURRENCY CRASH",
        text: "Hyper-inflation has hit. People are using your banknotes as wallpaper. The central bank is in a panic.", 
        options: [
            { text: "Hard Gold Standard", sub: "Stabilize by force, but freeze all credit.", deltas: {app: -25, bud: 200, mil: 10}, run: (s) => { s.app -= 25; s.bud += 200; s.mil += 10; } }, 
            { text: "Print More", sub: "Keep the wheels turning for a few more weeks.", deltas: {bud: 500, app: -50}, run: (s) => { s.bud += 500; s.app -= 50; } }
        ] 
    },
    { 
        news: "WILDERNESS FIRE",
        text: "The 'Great Northern Fire' is consuming the timber reserves. The smoke is so thick that planes can't land in the capital.", 
        options: [
            { text: "Chemical Suppression", sub: "Use toxic retardants to kill the fire.", deltas: {bud: -300, app: 10, mil: -5}, run: (s) => { s.bud -= 300; s.app += 10; s.mil -= 5; } }, 
            { text: "Controlled Burn", sub: "Destroy a dozen villages to stop the spread.", deltas: {app: -30, bud: 50}, run: (s) => { s.app -= 30; s.bud += 50; } }
        ] 
    },
    { 
        news: "TAX THE RICH",
        text: "The 'Tax the Sun' movement has millions in the streets. They want to seize all assets over $100M to fund a basic income.", 
        options: [
            { text: "Eat the Rich", sub: "Seize the billions. The people rejoice.", deltas: {app: 35, bud: 800, mil: -10}, run: (s) => { s.app += 35; s.bud += 800; s.mil -= 10; } }, 
            { text: "Protect the Titans", sub: "Avoid a capital flight at any cost.", deltas: {bud: -200, app: -25, mil: 10}, run: (s) => { s.bud -= 200; s.app -= 25; s.mil += 10; } }
        ] 
    },
    { 
        news: "NATIONAL HOLIDAY",
        text: "It is Liberation Day. The tradition demands a parade of tanks and a week of free bread.", 
        options: [
            { text: "Bread and Circuses", sub: "High morale, military pride, massive bill.", deltas: {app: 20, mil: 15, bud: -400}, run: (s) => { s.app += 20; s.mil += 15; s.bud -= 400; } }, 
            { text: "Humble Prayer", sub: "A quiet day of reflection to save money.", deltas: {app: -10, bud: 100}, run: (s) => { s.app -= 10; s.bud += 100; } }
        ] 
    },
    { 
        news: "WATER PRIVATIZATION",
        text: "The 'Aqua-Corp' conglomerate wants to buy your reservoirs. They promise better tech, but they'll charge $5 a gallon.", 
        options: [
            { text: "Sell the Rain", sub: "Flush the treasury with corporate cash.", deltas: {bud: 1000, app: -50}, run: (s) => { s.bud += 1000; s.app -= 50; } }, 
            { text: "Public Utility", sub: "Water is a human right. The state pays the bill.", deltas: {bud: -300, app: 15}, run: (s) => { s.bud -= 300; s.app += 15; } }
        ] 
    },
    { 
        news: "GENETIC EDITING",
        text: "The 'Gattaca' labs have opened. For $1M, parents can choose their baby's IQ and lifespan. The unedited 'naturals' are rioting.", 
        options: [
            { text: "Legalize and Tax", sub: "The next step in evolution, for a price.", deltas: {bud: 800, app: -30}, run: (s) => { s.bud += 800; s.app -= 30; } }, 
            { text: "Ban the Tech", sub: "Protect human nature.", deltas: {app: 20, bud: -150}, run: (s) => { s.app += 20; s.bud -= 150; } },
            { text: "Project Vanguard", sub: "Create a generation of super-soldiers.", deltas: {mil: 40, app: -40, bud: -500}, run: (s) => { s.mil += 40; s.app -= 40; s.bud -= 500; } }
        ] 
    },
    { 
        news: "WHISTLEBLOWER",
        text: "A recording of you mocking the 'poverty-stricken' has gone viral. Your approval is melting like ice in a furnace.", 
        options: [
            { text: "Tearful Apology", sub: "Beg for forgiveness on national TV.", deltas: {app: 10, bud: -100}, run: (s) => { s.app += 10; s.bud -= 100; } }, 
            { text: "Double Down", sub: "Claim the recording was a deepfake. Ban the video.", deltas: {app: -30, mil: 20}, run: (s) => { s.app -= 30; s.mil += 20; } }
        ] 
    },
    { 
        news: "ROBOTIC LABOR",
        text: "The 'Bot-Workers' are replacing 80% of the trucking and mining sectors. The unions are threatening to blow up the factories.", 
        options: [
            { text: "Robot Tax", sub: "Make the machines pay for the safety net.", deltas: {bud: 500, app: 10}, run: (s) => { s.bud += 500; s.app += 10; } }, 
            { text: "Unleash Efficiency", sub: "Profit is the only metric that matters.", deltas: {bud: 700, app: -40}, run: (s) => { s.bud += 700; s.app -= 40; } }
        ] 
    },
    { 
        news: "CASHLESS SOCIETY",
        text: "The Central Bank wants to delete the physical Dollar. Every cent will be digital, traceable, and subject to 'Social Scoring'.", 
        options: [
            { text: "Total Digitalization", sub: "Eliminate the shadow economy.", deltas: {bud: 400, mil: 15, app: -30}, run: (s) => { s.bud += 400; s.mil += 15; s.app -= 30; } }, 
            { text: "Veto the Bill", sub: "Keep the freedom of physical cash.", deltas: {app: 20, bud: -100}, run: (s) => { s.app += 20; s.bud -= 100; } }
        ] 
    },
    { 
        news: "DEEP SEA DRILLING",
        text: "Oil has been found under the 'Sacred Coral Reef'. The environmentalists are chaining themselves to your oil tankers.", 
        options: [
            { text: "Drill Baby Drill", sub: "Wealth beyond imagining.", deltas: {bud: 900, app: -40, mil: 5}, run: (s) => { s.bud += 900; s.app -= 40; s.mil += 5; } }, 
            { text: "Ecological Sanctuary", sub: "The reef is priceless. The budget is not.", deltas: {app: 25, bud: -200}, run: (s) => { s.app += 25; s.bud -= 200; } }
        ] 
    },
    { 
        news: "SATELLITE DOWN",
        text: "Your primary GPS and Comms satellite has been hit by a 'stray' missile from the Northern Bloc.", 
        options: [
            { text: "Diplomatic Sanctions", sub: "Beg the UN for a resolution.", deltas: {bud: -100, app: 5}, run: (s) => { s.bud -= 100; s.app += 5; } }, 
            { text: "Orbital Strike", sub: "Destroy their satellite in return.", deltas: {mil: 20, bud: -400, app: -10}, run: (s) => { s.mil += 20; s.bud -= 400; s.app -= 10; } }
        ] 
    },
    { 
        news: "BRAIN DRAIN",
        text: "Your top ten physicists have just defected to a rival nation. They cited 'lack of funding' and 'too much surveillance'.", 
        options: [
            { text: "Golden Handcuffs", sub: "Triple the science budget instantly.", deltas: {bud: -600, app: 10}, run: (s) => { s.bud -= 600; s.app += 10; } }, 
            { text: "Blacklist Families", sub: "Punish those who stayed to prevent further flight.", deltas: {app: -40, mil: 15}, run: (s) => { s.app -= 40; s.mil += 15; } }
        ] 
    },
    { 
        news: "FAKE NEWS VIRAL",
        text: "A deepfake of you accepting a bribe from a drug cartel is being aired on every news channel.", 
        options: [
            { text: "Shut Down the Net", sub: "The 'Kill Switch' option.", deltas: {app: -50, mil: 30, bud: -300}, run: (s) => { s.app -= 50; s.mil += 30; s.bud -= 300; } }, 
            { text: "Fact-Check Campaign", sub: "Slow, expensive, and mostly ignored.", deltas: {app: 10, bud: -200}, run: (s) => { s.app += 10; s.bud -= 200; } }
        ] 
    },
    { 
        news: "HOUSING CRISIS",
        text: "The 'Tent Cities' now outnumber the actual houses in the city center. The middle class is disappearing.", 
        options: [
            { text: "Nationalize Landlord Assets", sub: "Seize the corporate apartments.", deltas: {app: 40, bud: -300, mil: -10}, run: (s) => { s.app += 40; s.bud -= 300; s.mil -= 10; } }, 
            { text: "Build Concrete Megatowers", sub: "Brutalist housing for the masses.", deltas: {bud: -700, app: 15}, run: (s) => { s.bud -= 700; s.app += 15; } }
        ] 
    },
    { 
        news: "ALIEN SIGNAL",
        text: "Radio telescopes have confirmed a signal from deep space: 'We are coming.' The world is in a state of existential panic.", 
        options: [
            { text: "Global Unity Broadcast", sub: "The species must stand together.", deltas: {app: 40, mil: -20}, run: (s) => { s.app += 40; s.mil -= 20; } }, 
            { text: "Planetary Defense", sub: "All budget to the Space Marines.", deltas: {mil: 50, bud: -800}, run: (s) => { s.mil += 50; s.bud -= 800; } }
        ] 
    },
    { 
        news: "AUTOMATED JUSTICE",
        text: "The 'Justice-V1' algorithm has a 0% error rate but tends to give 50-year sentences for petty theft.", 
        options: [
            { text: "Install AI Judges", sub: "Clear the backlog with steel logic.", deltas: {bud: 400, app: -25, mil: 10}, run: (s) => { s.bud += 400; s.app -= 25; s.mil += 10; } }, 
            { text: "Human Leniency", sub: "Keep the messy, slow human courts.", deltas: {bud: -500, app: 20}, run: (s) => { s.bud -= 500; s.app += 20; } }
        ] 
    },
    { 
        news: "CULTURAL REPATRIATION",
        text: "The 'Golden Crown' of the Old Empire is in your museum. The descendants are threatening a trade war if it isn't returned.", 
        options: [
            { text: "Give it Back", sub: "National humiliation, global respect.", deltas: {app: -10, bud: -100, mil: -5}, run: (s) => { s.app -= 10; s.bud -= 100; s.mil -= 5; } }, 
            { text: "Finders Keepers", sub: "Protect the national heritage.", deltas: {app: 10, mil: 10}, run: (s) => { s.app += 10; s.mil += 10; } }
        ] 
    },
    { 
        news: "SINKING COASTLINE",
        text: "The ocean is now the ground floor of your financial district. The bankers are working from lifeboats.", 
        options: [
            { text: "The Great Dyke", sub: "A $1B sea wall.", deltas: {bud: -1000, app: 25}, run: (s) => { s.bud -= 1000; s.app += 25; } }, 
            { text: "Abandon the Coast", sub: "Force 10 million people to move inland.", deltas: {app: -50, mil: 15, bud: -200}, run: (s) => { s.app -= 50; s.mil += 15; s.bud -= 200; } }
        ] 
    },
    { 
        news: "BRAIN-COMPUTER LINK",
        text: "The 'Link-1' chip allows workers to upload data directly to their brains. It also allows the company to monitor their dreams.", 
        options: [
            { text: "Universal Mandate", sub: "Efficiency is the only goal.", deltas: {bud: 600, app: -40, mil: 25}, run: (s) => { s.bud += 600; s.app -= 40; s.mil += 25; } }, 
            { text: "Ban Neural Tech", sub: "Keep the mind private.", deltas: {app: 20, bud: -200}, run: (s) => { s.app += 20; s.bud -= 200; } }
        ] 
    },
    { 
        news: "SOCIAL CREDIT SYSTEM",
        text: "The Security Bureau proposes 'The Citizen Score'. Compliant citizens get low interest rates; protestors get no internet.", 
        options: [
            { text: "Activate Scoring", sub: "Perfect social control.", deltas: {mil: 30, app: -40, bud: 200}, run: (s) => { s.mil += 30; s.app -= 40; s.bud += 200; } }, 
            { text: "Civil Liberties", sub: "Protect the right to be a nuisance.", deltas: {app: 25, mil: -20, bud: -100}, run: (s) => { s.app += 25; s.mil -= 20; s.bud -= 100; } }
        ] 
    },
    { 
        news: "FROZEN ASSETS",
        text: "A fleet of yachts belonging to the 'Shadow Oligarchs' has been seized. It's enough money to fund the government for a year.", 
        options: [
            { text: "Liquidate Everything", sub: "Instant wealth, powerful enemies.", deltas: {bud: 1200, app: -15, mil: -10}, run: (s) => { s.bud += 1200; s.app -= 15; s.mil -= 10; } }, 
            { text: "Return Assets", sub: "Avoid an international assassination plot.", deltas: {app: -20, mil: 10, bud: 100}, run: (s) => { s.app -= 20; s.mil += 10; s.bud += 100; } }
        ] 
    },
    { 
        news: "MILITARY EXERCISE",
        text: "The 'Iron Dragon' fleet is 2 miles off your coast. They are launching non-nuclear flares over your capital.", 
        options: [
            { text: "Launch Interceptors", sub: "Aggressive defense.", deltas: {mil: 15, bud: -300, app: -5}, run: (s) => { s.mil += 15; s.bud -= 300; s.app -= 5; } }, 
            { text: "Radio Silence", sub: "Do not give them the war they want.", deltas: {mil: -20, app: 10}, run: (s) => { s.mil -= 20; s.app += 10; } }
        ] 
    },
    { 
        news: "ENERGY SHORTAGE",
        text: "The grid is redlining. You can either turn off the air conditioning for the slums or turn off the servers for the banking district.", 
        options: [
            { text: "Blackout the Slums", sub: "Keep the money flowing.", deltas: {app: -40, bud: 200}, run: (s) => { s.app -= 40; s.bud += 200; } }, 
            { text: "Blackout the Banks", sub: "People over profits.", deltas: {bud: -600, app: 20}, run: (s) => { s.bud -= 600; s.app += 20; } }
        ] 
    },
    { 
        news: "LAB-GROWN MEAT",
        text: "The 'Synth-Steak' revolution is here. It's cheaper, but the cattle ranchers are burning down the labs in protest.", 
        options: [
            { text: "Support the Labs", sub: "End hunger, kill the tradition.", deltas: {bud: 400, app: 15, mil: -10}, run: (s) => { s.bud += 400; s.app += 15; s.mil -= 10; } }, 
            { text: "Protect the Ranchers", sub: "Ban the 'Franken-Meat'.", deltas: {app: 10, bud: -200}, run: (s) => { s.app += 10; s.bud -= 200; } }
        ] 
    },
    { 
        news: "RELIGIOUS APOCALYPSE",
        text: "The 'Final Dawn' cult has bought a private island and is loading it with stolen military hardware. They claim the end is next Tuesday.", 
        options: [
            { text: "Airstrike the Island", sub: "End the threat decisively.", deltas: {mil: 20, app: -25, bud: -200}, run: (s) => { s.mil += 20; s.app -= 25; s.bud -= 200; } }, 
            { text: "Tax the Cult", sub: "If they're right, money won't matter.", deltas: {bud: 500, app: -10}, run: (s) => { s.bud += 500; s.app -= 10; } }
        ] 
    },
    // NEW EVENTS
    { 
        news: "THE MIGRANT CARAVAN",
        text: "A million refugees from a war-torn neighbor have arrived at the wall. They are starving and cold.", 
        options: [
            { text: "Open the Gates", sub: "Humanitarian triumph, economic strain.", deltas: {app: 20, bud: -400, mil: -10}, run: (s) => { s.app += 20; s.bud -= 400; s.mil -= 10; } }, 
            { text: "Militarize the Border", sub: "Keep them out by any means.", deltas: {mil: 25, app: -30, bud: -100}, run: (s) => { s.mil += 25; s.app -= 30; s.bud -= 100; } }
        ] 
    },
    { 
        news: "THE GENIUS CHILD",
        text: "A 12-year-old has hacked the national security mainframe and is holding the launch codes for fun.", 
        options: [
            { text: "Recruit Him", sub: "A new head for the Cyber Division.", deltas: {mil: 20, bud: -100}, run: (s) => { s.mil += 20; s.bud -= 100; } }, 
            { text: "Prison for Life", sub: "Set a terrifying example.", deltas: {app: -20, mil: 10}, run: (s) => { s.app -= 20; s.mil += 10; } }
        ] 
    },
    { 
        news: "THE LONGEVITY CURE",
        text: "A drug has been found that stops aging. If you release it, the population will double every 20 years.", 
        options: [
            { text: "Release to Public", sub: "Eternal life for everyone.", deltas: {app: 50, bud: -900}, run: (s) => { s.app += 50; s.bud -= 900; } }, 
            { text: "Keep for Elites", sub: "A secret for the top 1%.", deltas: {bud: 1000, app: -40, mil: 10}, run: (s) => { s.bud += 1000; s.app -= 40; s.mil += 10; } }
        ] 
    },
    { 
        news: "THE OLYMPIC SCANDAL",
        text: "Your national team was caught using 'Genetic Enhancement' during the finals. The world wants your medals back.", 
        options: [
            { text: "Admit and Resign", sub: "Save the national honor.", deltas: {app: -30, mil: -10}, run: (s) => { s.app -= 30; s.mil -= 10; } }, 
            { text: "Deny Everything", sub: "The 'World is against us' strategy.", deltas: {app: 15, mil: 15, bud: -200}, run: (s) => { s.app += 15; s.mil += 15; s.bud -= 200; } }
        ] 
    },
    { 
        news: "THE ARTIFICIAL FAMINE",
        text: "A logistical AI error has redirected all food shipments to the military bunkers. The cities are empty.", 
        options: [
            { text: "Feed the People", sub: "Seize the military rations.", deltas: {app: 30, mil: -40}, run: (s) => { s.app += 30; s.mil -= 40; } }, 
            { text: "Maintain Readiness", sub: "The army must be strong to stop the riots.", deltas: {mil: 20, app: -50}, run: (s) => { s.mil += 20; s.app -= 50; } }
        ] 
    }
];
