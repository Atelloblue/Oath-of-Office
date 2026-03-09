/* Keep this file separated from index.html */
const events = [
    { 
        news: "SECURITY BREACH",
        text: "A former contractor has leaked 50TB of NSA metadata. The public now knows about 'Project Watchtower,' and riots are beginning on the National Mall.", 
        options: [
            { text: "Declassify & Reform", sub: "Transparency restores trust but exposes vulnerabilities.", deltas: {app: 15, mil: -15}, run: (s) => { s.app += 15; s.mil -= 15; } }, 
            { text: "Operation Blackout", sub: "Deploy the Guard to seize servers and detain the leakers.", deltas: {app: -20, mil: 15}, run: (s) => { s.app -= 20; s.mil += 15; } },
            { text: "Fabricate Evidence", sub: "Claim the leak was a foreign deepfake operation.", deltas: {app: 0, mil: 0}, run: (s) => { if(Math.random() > 0.5) { s.app += 10; } else { s.app -= 30; s.mil -= 10; } } }
        ] 
    },
    { 
        news: "FOREIGN DEBT",
        text: "The 'Iron Bank' offers a $1.2B loan to fix our failing rail system, but demands a 99-year lease on our largest West Coast deep-water port.", 
        options: [
            { text: "Sign the Lease", sub: "Infrastructure boom at the cost of national sovereignty.", deltas: {bud: 800, mil: -15}, run: (s) => { s.bud += 800; s.mil -= 15; } }, 
            { text: "Austerity Measures", sub: "Reject the debt; slash public spending to pay for repairs.", deltas: {app: -20, mil: 5}, run: (s) => { s.app -= 20; s.mil += 5; } }
        ] 
    },
    { 
        news: "MILITARY LOBBY",
        text: "The Joint Chiefs argue our drone fleet is obsolete. They demand a massive budget injection for the 'Sky-Net' program.", 
        options: [
            { text: "Modernize Fleet", sub: "The military remains loyal and terrifyingly efficient.", deltas: {bud: -400, mil: 25}, run: (s) => { s.bud -= 400; s.mil += 25; } }, 
            { text: "Civilian First", sub: "Redirect the 'Sky-Net' funds to universal healthcare.", deltas: {app: 20, mil: -25}, run: (s) => { s.app += 20; s.mil -= 25; } },
            { text: "Gradual Upgrade", sub: "A compromise that pleases no one fully.", deltas: {bud: -200, mil: 5, app: 5}, run: (s) => { s.bud -= 200; s.mil += 5; s.app += 5; } }
        ] 
    },
    { 
        news: "TECH MONOPOLY",
        text: "Singsam is siphoning profits to tax havens. If you tax them, they threaten to automate your entire manufacturing sector out of existence.", 
        options: [
            { text: "Wealth Tax", sub: "Forced redistribution. The working class cheers.", deltas: {bud: 500, app: 15, mil: -5}, run: (s) => { s.bud += 500; s.app += 15; s.mil -= 5; } }, 
            { text: "Corporate Subsidy", sub: "Keep the giants happy to maintain 'stability'.", deltas: {bud: -300, app: -10}, run: (s) => { s.bud -= 300; s.app -= 10; } },
            { text: "State Takeover", sub: "Seize the servers. The government is the tech giant now.", deltas: {app: -20, mil: 15, bud: 300}, run: (s) => { s.app -= 20; s.mil += 15; s.bud += 300; } }
        ] 
    },
    { 
        news: "CROP FAILURE",
        text: "A 'Blight' has turned the Midwest into a dust bowl. Bread prices have tripled, and soup lines are miles long.", 
        options: [
            { text: "Emergency Imports", sub: "Drain the treasury to buy grain from rivals.", deltas: {bud: -500, app: 25}, run: (s) => { s.bud -= 500; s.app += 25; } }, 
            { text: "Militarized Rationing", sub: "National Guard at the grocery stores. Nobody starves... yet.", deltas: {app: -30, mil: 20}, run: (s) => { s.app -= 30; s.mil += 20; } },
            { text: "Laissez-Faire", sub: "Let the market decide. The rich eat, the rest riot.", deltas: {bud: 200, app: -50}, run: (s) => { s.bud += 200; s.app -= 50; } }
        ] 
    },
    { 
        news: "RELIGIOUS TENSION",
        text: "The High Temple calls your social reforms 'sacrilegious.' Thousands are gathering for a 'Holy March' on the capital.", 
        options: [
            { text: "Concede to Clergy", sub: "Restore tradition to keep the peace.", deltas: {app: 15, mil: -10}, run: (s) => { s.app += 15; s.mil -= 10; } }, 
            { text: "State Supremacy", sub: "Arrest the leaders. The Constitution is the only god here.", deltas: {app: -25, mil: 20}, run: (s) => { s.app -= 25; s.mil += 20; } }
        ] 
    },
    { 
        news: "SPACE DISCOVERY",
        text: "The 'Icarus' probe found a moon with solid Helium-3. Controlling it means infinite energy for the next century.", 
        options: [
            { text: "Military Program", sub: "Weaponize the moon. Total global dominance.", deltas: {bud: -700, app: 10, mil: 30}, run: (s) => { s.bud -= 700; s.app += 10; s.mil += 30; } }, 
            { text: "Commercial Auction", sub: "Sell rights to privateers for immediate cash.", deltas: {bud: 600, app: -10}, run: (s) => { s.bud += 600; s.app -= 10; } }
        ] 
    },
    { 
        news: "ORGANIZED CRIME",
        text: "The 'Syndicate Republic' provides more social services in the slums than you do. They are effectively a shadow state.", 
        options: [
            { text: "Total War", sub: "Send the Army into the slums. Collateral damage is certain.", deltas: {app: -20, mil: 25, bud: -150}, run: (s) => { s.app -= 20; s.mil += 25; s.bud -= 150; } }, 
            { text: "Tax the Syndicate", sub: "Legalize their 'businesses' for a massive cut.", deltas: {bud: 400, app: 15, mil: -15}, run: (s) => { s.bud += 400; s.app += 15; s.mil -= 15; } }
        ] 
    },
    { 
        news: "INTELLECTUAL PROPERTY",
        text: "A rival nation stole blueprints for your 'Americare' tech and is selling it at a 90% discount on the black market.", 
        options: [
            { text: "Total Blockade", sub: "Halt all trade with the thieves.", deltas: {bud: -300, mil: 10}, run: (s) => { s.bud -= 300; s.mil += 10; } }, 
            { text: "Cyber Retaliation", sub: "Crash their banking system in secret.", deltas: {mil: 15, app: 0}, run: (s) => { s.mil += 15; if(Math.random() > 0.7) s.app -= 25; } }
        ] 
    },
    { 
        news: "EDUCATION REFORM",
        text: "The 'Bring Education Back' movement demands a 25% pay raise for teachers and 'secular-only' curriculum.", 
        options: [
            { text: "Full Funding", sub: "A generation of thinkers, but a lighter treasury.", deltas: {bud: -300, app: 20}, run: (s) => { s.bud -= 300; s.app += 20; } }, 
            { text: "Patriot-Bots", sub: "Replace striking teachers with AI instruction modules.", deltas: {bud: -150, app: -30, mil: 10}, run: (s) => { s.bud -= 150; s.app -= 30; s.mil += 10; } }
        ] 
    },
    { 
        news: "PANDEMIC FEAR",
        text: "The 'Boronavirus' is spreading. 10% mortality rate; hospitals are at capacity. The slums are being barricaded.", 
        options: [
            { text: "Steel Quarantine", sub: "Shoot-to-kill curfew. The virus stops here.", deltas: {app: -30, mil: 20, bud: -100}, run: (s) => { s.app -= 30; s.mil += 20; s.bud -= 100; } }, 
            { text: "Mass Vaccination", sub: "Free vaccines for all, paid for by the Defense budget.", deltas: {bud: -600, app: 20, mil: -10}, run: (s) => { s.bud -= 600; s.app += 20; s.mil -= 10; } }
        ] 
    },
    { 
        news: "NATIONAL EMERGENCY: GULF BLOWOUT",
        text: "The 'Downwater Horizon'—PB’s massive rig—has exploded. Crude is flooding the Gulf from Louisiana to Florida. FEMA and the EPA await your orders.", 
        options: [
            { 
                text: "Invoke Oil Pollution Act", 
                sub: "Force PB into an escrow fund. Freeze their US assets until the bill is paid.", 
                deltas: {bud: 1200, app: 20, mil: -10}, 
                run: (s) => { s.bud += 1200; s.app += 20; s.mil -= 10; } 
            }, 
            { 
                text: "Federal Disaster Declaration", 
                sub: "Authorize FEMA and Coast Guard for cleanup. Taxpayers pay to save the coast.", 
                deltas: {bud: -800, app: 10, mil: -15}, 
                run: (s) => { s.bud -= 800; s.app += 10; s.mil -= 15; } 
            },
            { 
                text: "Executive Settlement",
                sub: "Sign a non-disclosure agreement with PB in exchange for a 'Campaign Contribution.'", 
                deltas: {bud: 400, app: -40}, 
                run: (s) => { s.bud += 400; s.app -= 40; } 
            }
        ]
    },
    { 
        news: "BORDER DISPUTE",
        text: "Rival tanks are conducting 'drills' inside your territory. Media calls it the start of WWIII.", 
        options: [
            { text: "Full Mobilization", sub: "Prepare for total war.", deltas: {mil: 30, bud: -300, app: -10}, run: (s) => { s.mil += 30; s.bud -= 300; s.app -= 10; } }, 
            { text: "Appeasement", sub: "Cede border towns to maintain the peace.", deltas: {mil: -40, app: -30, bud: 100}, run: (s) => { s.mil -= 40; s.app -= 30; s.bud += 100; } }
        ] 
    },
    { 
        news: "CYBER ATTACK",
        text: "A 'Zero-Day' virus locked the power grid. Hospitals are on backup; the stock market has halted.", 
        options: [
            { text: "Pay the Ransom", sub: "Give the hackers $500M in untraceable crypto.", deltas: {bud: -500, app: -10}, run: (s) => { s.bud -= 500; s.app -= 10; } }, 
            { text: "Brute Force Reset", sub: "Wipe the grid. 48 hours of total darkness.", deltas: {app: -25, mil: 10, bud: -100}, run: (s) => { s.app -= 25; s.mil += 10; s.bud -= 100; } }
        ] 
    },
    { 
        news: "NUCLEAR ENERGY",
        text: "The 'Atom-1' reactor is leaking. You can dump waste in the ocean or bury it under a residential district.", 
        options: [
            { text: "Ocean Dump", sub: "Ecological disaster, but the city stays powered.", deltas: {bud: -100, app: -10}, run: (s) => { s.bud -= 100; s.app -= 10; } }, 
            { text: "Urban Burial", sub: "Sacrifice one zip code to save the coast.", deltas: {app: -40, bud: 50}, run: (s) => { s.app -= 40; s.bud += 50; } }
        ] 
    },
    { 
        news: "AI SUPREMACY",
        text: "The 'Oracle' AI claims it can eliminate poverty if given full control of tax and military codes.", 
        options: [
            { text: "Input Admin Password", sub: "Relinquish power to the machine.", deltas: {bud: 800, app: -30, mil: -30}, run: (s) => { s.bud += 800; s.app -= 30; s.mil -= 30; } }, 
            { text: "Deactivate Oracle", sub: "Protect human agency at all costs.", deltas: {app: 15, bud: -300}, run: (s) => { s.app += 15; s.bud -= 300; } }
        ] 
    },
    { 
        news: "INSIDER TRADING",
        text: "Your Finance Secretary was caught 'shorting' the dollar before the crisis. Rioters want their head.", 
        options: [
            { text: "Public Prosecution", sub: "Justice is served. The people love a show.", deltas: {app: 25, mil: -5}, run: (s) => { s.app += 25; s.mil -= 5; } }, 
            { text: "Take the Hush Money", sub: "Let them flee the country for a $500M 'donation'.", deltas: {bud: 500, app: -40}, run: (s) => { s.bud += 500; s.app -= 40; } }
        ] 
    },
    { 
        news: "PRISON RIOT",
        text: "The 'Iron-Gate' Penitentiary is in flames. Inmates have taken hostages and are livestreaming.", 
        options: [
            { text: "Gas the Block", sub: "End the riot instantly and lethally.", deltas: {mil: 15, app: -25}, run: (s) => { s.mil += 15; s.app -= 25; } }, 
            { text: "Grant Amnesty", sub: "Release non-violent offenders to stop the fire.", deltas: {app: 20, mil: -20, bud: -100}, run: (s) => { s.app += 20; s.mil -= 20; s.bud -= 100; } }
        ] 
    },
    { 
        news: "COUP PLOT",
        text: "General Vance was seen meeting with opposition leaders. Your loyalists want to strike first.", 
        options: [
            { text: "Purge Leadership", sub: "Arrest the dissenters tonight.", deltas: {mil: -30, app: -10, bud: -50}, run: (s) => { s.mil -= 30; s.app -= 10; s.bud -= 50; } }, 
            { text: "Bribe the General", sub: "Buy his loyalty with a massive promotion.", deltas: {bud: -400, mil: 15}, run: (s) => { s.bud -= 400; s.mil += 15; } }
        ] 
    },
    { 
        news: "OLYMPIC BID",
        text: "The World Games want to host in your capital. Requires ten stadiums you don't need.", 
        options: [
            { text: "Gold Medal Host", sub: "Global glory, empty treasury.", deltas: {bud: -900, app: 40}, run: (s) => { s.bud -= 900; s.app += 40; } }, 
            { text: "Decline and Reinvest", sub: "Build schools instead of stadiums.", deltas: {bud: 100, app: -15}, run: (s) => { s.bud += 100; s.app -= 15; } }
        ] 
    },
    { 
        news: "CURRENCY CRASH",
        text: "Hyper-inflation has hit. Banknotes are being used as fuel. The Fed is in a panic.", 
        options: [
            { text: "Hard Gold Standard", sub: "Stabilize by force, but freeze all credit.", deltas: {app: -25, bud: 200, mil: 10}, run: (s) => { s.app -= 25; s.bud += 200; s.mil += 10; } }, 
            { text: "Print More", sub: "Keep the wheels turning for a few more weeks.", deltas: {bud: 500, app: -50}, run: (s) => { s.bud += 500; s.app -= 50; } }
        ] 
    },
    { 
        news: "WILDERNESS FIRE",
        text: "The 'Great Northern Fire' is consuming timber. Smoke is so thick that D.C. has gone dark.", 
        options: [
            { text: "Chemical Suppression", sub: "Use toxic retardants to kill the fire.", deltas: {bud: -300, app: 10, mil: -5}, run: (s) => { s.bud -= 300; s.app += 10; s.mil -= 5; } }, 
            { text: "Controlled Burn", sub: "Destroy a dozen villages to stop the spread.", deltas: {app: -30, bud: 50}, run: (s) => { s.app -= 30; s.bud += 50; } }
        ] 
    },
    { 
        news: "TAX THE RICH",
        text: "The 'Tax the Sun' movement wants to seize all assets over $100M for basic income.", 
        options: [
            { text: "Eat the Rich", sub: "Seize the billions. The people rejoice.", deltas: {app: 35, bud: 800, mil: -10}, run: (s) => { s.app += 35; s.bud += 800; s.mil -= 10; } }, 
            { text: "Protect the Titans", sub: "Avoid capital flight at any cost.", deltas: {bud: -200, app: -25, mil: 10}, run: (s) => { s.bud -= 200; s.app -= 25; s.mil += 10; } }
        ] 
    },
    { 
        news: "NATIONAL HOLIDAY",
        text: "Liberation Day. Tradition demands a tank parade and free bread for all.", 
        options: [
            { text: "Bread and Circuses", sub: "High morale, military pride, massive bill.", deltas: {app: 20, mil: 15, bud: -400}, run: (s) => { s.app += 20; s.mil += 15; s.bud -= 400; } }, 
            { text: "Humble Prayer", sub: "A quiet day of reflection to save funds.", deltas: {app: -10, bud: 100}, run: (s) => { s.app -= 10; s.bud += 100; } }
        ] 
    },
    { 
        news: "WATER PRIVATIZATION",
        text: "Aqua-Corp wants to buy your reservoirs. They promise tech, but will charge $5 a gallon.", 
        options: [
            { text: "Sell the Rain", sub: "Flush the treasury with corporate cash.", deltas: {bud: 1000, app: -50}, run: (s) => { s.bud += 1000; s.app -= 50; } }, 
            { text: "Public Utility", sub: "Water is a human right. The State pays.", deltas: {bud: -300, app: 15}, run: (s) => { s.bud -= 300; s.app += 15; } }
        ] 
    },
    { 
        news: "GENETIC EDITING",
        text: "The 'Gattaca' labs have opened. For $1M, parents choose a baby's IQ. The 'naturals' are rioting.", 
        options: [
            { text: "Legalize and Tax", sub: "The next step in evolution, for a price.", deltas: {bud: 800, app: -30}, run: (s) => { s.bud += 800; s.app -= 30; } }, 
            { text: "Ban the Tech", sub: "Protect human nature.", deltas: {app: 20, bud: -150}, run: (s) => { s.app += 20; s.bud -= 150; } },
            { text: "Project Vanguard", sub: "Create a generation of super-soldiers.", deltas: {mil: 40, app: -40, bud: -500}, run: (s) => { s.mil += 40; s.app -= 40; s.bud -= 500; } }
        ] 
    },
    { 
        news: "WHISTLEBLOWER",
        text: "A recording of you mocking the poor went viral. Your approval is melting.", 
        options: [
            { text: "Tearful Apology", sub: "Beg for forgiveness on national TV.", deltas: {app: 10, bud: -100}, run: (s) => { s.app += 10; s.bud -= 100; } }, 
            { text: "Double Down", sub: "Claim the recording was a deepfake.", deltas: {app: -30, mil: 20}, run: (s) => { s.app -= 30; s.mil += 20; } }
        ] 
    },
    { 
        news: "ROBOTIC LABOR",
        text: "Automation is replacing 80% of truckers. Unions threaten to blow up the factories.", 
        options: [
            { text: "Robot Tax", sub: "Make the machines pay for the safety net.", deltas: {bud: 500, app: 10}, run: (s) => { s.bud += 500; s.app += 10; } }, 
            { text: "Unleash Efficiency", sub: "Profit is the only metric that matters.", deltas: {bud: 700, app: -40}, run: (s) => { s.bud += 700; s.app -= 40; } }
        ] 
    },
    { 
        news: "CASHLESS SOCIETY",
        text: "The Fed wants to delete physical currency for a traceable digital dollar.", 
        options: [
            { text: "Total Digitalization", sub: "Eliminate the shadow economy.", deltas: {bud: 400, mil: 15, app: -30}, run: (s) => { s.bud += 400; s.mil += 15; s.app -= 30; } }, 
            { text: "Veto the Bill", sub: "Keep the freedom of physical cash.", deltas: {app: 20, bud: -100}, run: (s) => { s.app += 20; s.bud -= 100; } }
        ] 
    },
    { 
        news: "DEEP SEA DRILLING",
        text: "Oil found under a Sacred Reef. Environmentalists are chaining themselves to tankers.", 
        options: [
            { text: "Drill Baby Drill", sub: "Wealth beyond imagining.", deltas: {bud: 900, app: -40, mil: 5}, run: (s) => { s.bud += 900; s.app -= 40; s.mil += 5; } }, 
            { text: "Ecological Sanctuary", sub: "The reef is priceless. The budget is not.", deltas: {app: 25, bud: -200}, run: (s) => { s.app += 25; s.bud -= 200; } }
        ] 
    },
    { 
        news: "SATELLITE DOWN",
        text: "A GPS satellite hit by a 'stray' missile from the Northern Bloc.", 
        options: [
            { text: "Diplomatic Sanctions", sub: "Seek a UN resolution.", deltas: {bud: -100, app: 5}, run: (s) => { s.bud -= 100; s.app += 5; } }, 
            { text: "Orbital Strike", sub: "Destroy their satellite in return.", deltas: {mil: 20, bud: -400, app: -10}, run: (s) => { s.mil += 20; s.bud -= 400; s.app -= 10; } }
        ] 
    },
    { 
        news: "BRAIN DRAIN",
        text: "Your top physicists defected. They cited 'lack of funding' and 'surveillance'.", 
        options: [
            { text: "Golden Handcuffs", sub: "Triple the science budget instantly.", deltas: {bud: -600, app: 10}, run: (s) => { s.bud -= 600; s.app += 10; } }, 
            { text: "Blacklist Families", sub: "Punish those who stayed to prevent flight.", deltas: {app: -40, mil: 15}, run: (s) => { s.app -= 40; s.mil += 15; } }
        ] 
    },
    { 
        news: "FAKE NEWS VIRAL",
        text: "A deepfake of you accepting a cartel bribe is airing on every news channel.", 
        options: [
            { text: "Shut Down the Net", sub: "The 'Kill Switch' option.", deltas: {app: -50, mil: 30, bud: -300}, run: (s) => { s.app -= 50; s.mil += 30; s.bud -= 300; } }, 
            { text: "Fact-Check Campaign", sub: "Slow, expensive, and mostly ignored.", deltas: {app: 10, bud: -200}, run: (s) => { s.app += 10; s.bud -= 200; } }
        ] 
    },
    { 
        news: "HOUSING CRISIS",
        text: "Tent cities now outnumber houses in D.C. The middle class is vanishing.", 
        options: [
            { text: "Nationalize Landlord Assets", sub: "Seize corporate-owned apartments.", deltas: {app: 40, bud: -300, mil: -10}, run: (s) => { s.app += 40; s.bud -= 300; s.mil -= 10; } }, 
            { text: "Build Concrete Megatowers", sub: "Brutalist housing for the masses.", deltas: {bud: -700, app: 15}, run: (s) => { s.bud -= 700; s.app += 15; } }
        ] 
    },
    { 
        news: "ALIEN SIGNAL",
        text: "Telescopes confirmed a signal from space: 'We are coming.' Global panic.", 
        options: [
            { text: "Global Unity Broadcast", sub: "The species must stand together.", deltas: {app: 40, mil: -20}, run: (s) => { s.app += 40; s.mil -= 20; } }, 
            { text: "Planetary Defense", sub: "All budget to Space Command.", deltas: {mil: 50, bud: -800}, run: (s) => { s.mil += 50; s.bud -= 800; } }
        ] 
    },
    { 
        news: "AUTOMATED JUSTICE",
        text: "The 'Justice-V1' algorithm has a 0% error rate but is incredibly harsh.", 
        options: [
            { text: "Install AI Judges", sub: "Clear the backlog with steel logic.", deltas: {bud: 400, app: -25, mil: 10}, run: (s) => { s.bud += 400; s.app -= 25; s.mil += 10; } }, 
            { text: "Human Leniency", sub: "Keep the messy, slow human courts.", deltas: {bud: -500, app: 20}, run: (s) => { s.bud -= 500; s.app += 20; } }
        ] 
    },
    { 
        news: "CULTURAL REPATRIATION",
        text: "The 'Golden Crown' of a former colony is in your museum. They threat a trade war.", 
        options: [
            { text: "Give it Back", sub: "National humiliation, global respect.", deltas: {app: -10, bud: -100, mil: -5}, run: (s) => { s.app -= 10; s.bud -= 100; s.mil -= 5; } }, 
            { text: "Finders Keepers", sub: "Protect the national heritage.", deltas: {app: 10, mil: 10}, run: (s) => { s.app += 10; s.mil += 10; } }
        ] 
    },
    { 
        news: "SINKING COASTLINE",
        text: "The ocean is the ground floor of Wall Street. Bankers work from lifeboats.", 
        options: [
            { text: "The Great Dyke", sub: "A massive sea wall.", deltas: {bud: -1000, app: 25}, run: (s) => { s.bud -= 1000; s.app += 25; } }, 
            { text: "Abandon the Coast", sub: "Force 10M people to move inland.", deltas: {app: -50, mil: 15, bud: -200}, run: (s) => { s.app -= 50; s.mil += 15; s.bud -= 200; } }
        ] 
    },
    { 
        news: "BRAIN-COMPUTER LINK",
        text: "Link-1 chips allow workers to upload data, but allows companies to monitor dreams.", 
        options: [
            { text: "Universal Mandate", sub: "Efficiency is the only goal.", deltas: {bud: 600, app: -40, mil: 25}, run: (s) => { s.bud += 600; s.app -= 40; s.mil += 25; } }, 
            { text: "Ban Neural Tech", sub: "Keep the mind private.", deltas: {app: 20, bud: -200}, run: (s) => { s.app += 20; s.bud -= 200; } }
        ] 
    },
    { 
        news: "SOCIAL CREDIT SYSTEM",
        text: "Bureau proposes 'Citizen Score'. Protesters get no internet.", 
        options: [
            { text: "Activate Scoring", sub: "Perfect social control.", deltas: {mil: 30, app: -40, bud: 200}, run: (s) => { s.mil += 30; s.app -= 40; s.bud += 200; } }, 
            { text: "Civil Liberties", sub: "Protect the right to be a nuisance.", deltas: {app: 25, mil: -20, bud: -100}, run: (s) => { s.app += 25; s.mil -= 20; s.bud -= 100; } }
        ] 
    },
    { 
        news: "FROZEN ASSETS",
        text: "Seized yachts of Shadow Oligarchs. Enough money to fund a year.", 
        options: [
            { text: "Liquidate Everything", sub: "Instant wealth, powerful enemies.", deltas: {bud: 1200, app: -15, mil: -10}, run: (s) => { s.bud += 1200; s.app -= 15; s.mil -= 10; } }, 
            { text: "Return Assets", sub: "Avoid an assassination plot.", deltas: {app: -20, mil: 10, bud: 100}, run: (s) => { s.app -= 20; s.mil += 10; s.bud += 100; } }
        ] 
    },
    { 
        news: "MILITARY EXERCISE",
        text: "The 'Iron Dragon' fleet is 2 miles off your coast launching flares.", 
        options: [
            { text: "Launch Interceptors", sub: "Aggressive defense.", deltas: {mil: 15, bud: -300, app: -5}, run: (s) => { s.mil += 15; s.bud -= 300; s.app -= 5; } }, 
            { text: "Radio Silence", sub: "Do not give them the war they want.", deltas: {mil: -20, app: 10}, run: (s) => { s.mil -= 20; s.app += 10; } }
        ] 
    },
    { 
        news: "ENERGY SHORTAGE",
        text: "Grid redlining. Blackout the slums or the banking district?", 
        options: [
            { text: "Blackout the Slums", sub: "Keep the capital moving.", deltas: {app: -40, bud: 200}, run: (s) => { s.app -= 40; s.bud += 200; } }, 
            { text: "Blackout the Banks", sub: "People over profits.", deltas: {bud: -600, app: 20}, run: (s) => { s.bud -= 600; s.app += 20; } }
        ] 
    },
    { 
        news: "LAB-GROWN MEAT",
        text: "Synth-Steak is here. Cattle ranchers are burning down labs.", 
        options: [
            { text: "Support the Labs", sub: "End hunger, kill the tradition.", deltas: {bud: 400, app: 15, mil: -10}, run: (s) => { s.bud += 400; s.app += 15; s.mil -= 10; } }, 
            { text: "Protect the Ranchers", sub: "Ban the 'Franken-Meat'.", deltas: {app: 10, bud: -200}, run: (s) => { s.app += 10; s.bud -= 200; } }
        ] 
    },
    { 
        news: "RELIGIOUS APOCALYPSE",
        text: "The 'Final Dawn' cult is hoarding military hardware on a private island.", 
        options: [
            { text: "Airstrike the Island", sub: "End the threat decisively.", deltas: {mil: 20, app: -25, bud: -200}, run: (s) => { s.mil += 20; s.app -= 25; s.bud -= 200; } }, 
            { text: "Tax the Cult", sub: "Legally bleed them dry.", deltas: {bud: 500, app: -10}, run: (s) => { s.bud += 500; s.app -= 10; } }
        ] 
    },
    { 
        news: "THE MIGRANT SURGE",
        text: "A million refugees have arrived at the southern border wall.", 
        options: [
            { text: "Open the Gates", sub: "Humanitarian triumph, economic strain.", deltas: {app: 20, bud: -400, mil: -10}, run: (s) => { s.app += 20; s.bud -= 400; s.mil -= 10; } }, 
            { text: "Militarize the Border", sub: "Deploy the Army to hold the line.", deltas: {mil: 25, app: -30, bud: -100}, run: (s) => { s.mil += 25; s.app -= 30; s.bud -= 100; } }
        ] 
    },
    { 
        news: "THE GENIUS CHILD",
        text: "A 12-year-old hacked the security mainframe and has launch codes.", 
        options: [
            { text: "Recruit Him", sub: "A new head for Cyber Command.", deltas: {mil: 20, bud: -100}, run: (s) => { s.mil += 20; s.bud -= 100; } }, 
            { text: "Prison for Life", sub: "Set a terrifying example.", deltas: {app: -20, mil: 10}, run: (s) => { s.app -= 20; s.mil += 10; } }
        ] 
    },
    { 
        news: "THE LONGEVITY CURE",
        text: "A drug stops aging. Releasing it will double population in 20 years.", 
        options: [
            { text: "Release to Public", sub: "Eternal life for everyone.", deltas: {app: 50, bud: -900}, run: (s) => { s.app += 50; s.bud -= 900; } }, 
            { text: "Keep for Elites", sub: "A secret for the top 1%.", deltas: {bud: 1000, app: -40, mil: 10}, run: (s) => { bud += 1000; s.app -= 40; s.mil += 10; } }
        ] 
    },
    { 
        news: "THE OLYMPIC SCANDAL",
        text: "National team caught using 'Genetic Enhancement' in the finals.", 
        options: [
            { text: "Admit and Resign", sub: "Save the national honor.", deltas: {app: -30, mil: -10}, run: (s) => { s.app -= 30; s.mil -= 10; } }, 
            { text: "Deny Everything", sub: "The 'Us against the world' strategy.", deltas: {app: 15, mil: 15, bud: -200}, run: (s) => { s.app += 15; s.mil += 15; s.bud -= 200; } }
        ] 
    },
    { 
        news: "THE ARTIFICIAL FAMINE",
        text: "AI redirected all food to military bunkers. The cities are empty.", 
        options: [
            { text: "Feed the People", sub: "Seize the military rations.", deltas: {app: 30, mil: -40}, run: (s) => { s.app += 30; s.mil -= 40; } }, 
            { text: "Maintain Readiness", sub: "The Army must be strong to stop riots.", deltas: {mil: 20, app: -50}, run: (s) => { s.mil += 20; s.app -= 50; } }
        ] 
    }
];
