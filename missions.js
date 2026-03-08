const missions = [
    { 
        news: "SECURITY BREACH",
        text: "A massive data leak has exposed government secrets. The public is furious and demands transparency.", 
        options: [
            { text: "Admit Fault & Declassify", sub: "Boosts trust, weakens security", deltas: {app: 15, mil: -15}, run: (s) => { s.app += 15; s.mil -= 15; } }, 
            { text: "Censor & Detain", sub: "Iron-fisted stability", deltas: {app: -20, mil: 15}, run: (s) => { s.app -= 20; s.mil += 15; } },
            { text: "Blame a Scapegoat", sub: "Risky 50/50 gamble", deltas: {app: '?', mil: '?'}, run: (s) => { if(Math.random() > 0.5) { s.app += 5; } else { s.app -= 25; s.mil -= 10; } } }
        ] 
    },
    { 
        news: "FOREIGN DEBT",
        text: "A foreign power offers a massive loan to fix infrastructure, but they want permanent control of your ports.", 
        options: [
            { text: "Accept the Loan", sub: "Immediate wealth, lost sovereignty", deltas: {bud: 800, mil: -15}, run: (s) => { s.bud += 800; s.mil -= 15; } }, 
            { text: "Reject & Austerity", sub: "High public pain", deltas: {app: -15, mil: 5}, run: (s) => { s.app -= 15; s.mil += 5; } }
        ] 
    },
    { 
        news: "MILITARY LOBBY",
        text: "The military high command demands a 20% budget increase for 'strategic modernization'.", 
        options: [
            { text: "Grant Full Funding", sub: "Strong defense, empty pockets", deltas: {bud: -400, mil: 20}, run: (s) => { s.bud -= 400; s.mil += 20; } }, 
            { text: "Reallocate to Social", sub: "Popular with voters", deltas: {app: 15, mil: -20}, run: (s) => { s.app += 15; s.mil -= 20; } },
            { text: "Compromise (10%)", sub: "Keep both sides lukewarm", deltas: {bud: -200, mil: 5, app: 5}, run: (s) => { s.bud -= 200; s.mil += 5; s.app += 5; } }
        ] 
    },
    { 
        news: "TECH MONOPOLY",
        text: "A major tech giant is under investigation for tax evasion. They threaten to move operations abroad.", 
        options: [
            { text: "Seize Assets", sub: "The populist route", deltas: {bud: 500, app: 10, mil: -5}, run: (s) => { s.bud += 500; s.app += 10; s.mil -= 5; } }, 
            { text: "Offer Tax Breaks", sub: "Keep the jobs, lose the cash", deltas: {bud: -300, app: -5}, run: (s) => { s.bud -= 300; s.app -= 5; } },
            { text: "Nationalize Platform", sub: "Total state control", deltas: {app: -15, mil: 15, bud: 200}, run: (s) => { s.app -= 15; s.mil += 15; s.bud += 200; } }
        ] 
    },
    { 
        news: "CROP FAILURE",
        text: "Severe drought has decimated the harvest. Food prices are skyrocketing.", 
        options: [
            { text: "Import & Subsidize", sub: "Keep the people fed", deltas: {bud: -450, app: 20}, run: (s) => { s.bud -= 450; s.app += 20; } }, 
            { text: "Food Rationing", sub: "Order via the military", deltas: {app: -25, mil: 15}, run: (s) => { s.app -= 25; s.mil += 15; } },
            { text: "Export anyway", sub: "Greed over people", deltas: {bud: 300, app: -40}, run: (s) => { s.bud += 300; s.app -= 40; } }
        ] 
    },
    { 
        news: "RELIGIOUS TENSION",
        text: "A controversial law has sparked religious protests in the capital.", 
        options: [
            { text: "Repeal the Law", sub: "Apologize to the masses", deltas: {app: 15, mil: -5}, run: (s) => { s.app += 15; s.mil -= 5; } }, 
            { text: "Enforce Secularism", sub: "Assert state authority", deltas: {app: -20, mil: 15}, run: (s) => { s.app -= 20; s.mil += 15; } }
        ] 
    },
    { 
        news: "SPACE DISCOVERY",
        text: "Deep space probes have found rare minerals on a nearby moon. A race begins.", 
        options: [
            { text: "Launch Expedition", sub: "Massive cost, huge prestige", deltas: {bud: -600, app: 15, mil: 10}, run: (s) => { s.bud -= 600; s.app += 15; s.mil += 10; } }, 
            { text: "Sell Mining Rights", sub: "Quick cash injection", deltas: {bud: 400, app: -5}, run: (s) => { s.bud += 400; s.app -= 5; } }
        ] 
    },
    { 
        news: "ORGANIZED CRIME",
        text: "A powerful cartel has infiltrated the police force in the southern district.", 
        options: [
            { text: "Martial Law", sub: "Extreme military force", deltas: {app: -15, mil: 20, bud: -100}, run: (s) => { s.app -= 15; s.mil += 20; s.bud -= 100; } }, 
            { text: "Legalize & Tax", sub: "Undercut the cartel", deltas: {bud: 300, app: 10, mil: -10}, run: (s) => { s.bud += 300; s.app += 10; s.mil -= 10; } },
            { text: "Negotiate", sub: "Peace at a dark price", deltas: {app: -5, bud: 100, mil: -10}, run: (s) => { s.app -= 5; s.bud += 100; s.mil -= 10; } }
        ] 
    },
    { 
        news: "INTELLECTUAL PROPERTY",
        text: "A neighboring nation is blatantly cloning your country's proprietary medical tech.", 
        options: [
            { text: "Trade Sanctions", sub: "Economic warfare", deltas: {bud: -200, mil: 5}, run: (s) => { s.bud -= 200; s.mil += 5; } }, 
            { text: "Cyber Sabotage", sub: "Deniable operations", deltas: {mil: 10, app: '?'}, run: (s) => { s.mil += 10; if(Math.random() > 0.7) s.app -= 20; } },
            { text: "Do Nothing", sub: "Maintain peace", deltas: {mil: -10, app: -5}, run: (s) => { s.mil -= 10; s.app -= 5; } }
        ] 
    },
    { 
        news: "EDUCATION REFORM",
        text: "Teachers are on strike for higher wages and better facilities.", 
        options: [
            { text: "Meet Demands", sub: "Invest in the future", deltas: {bud: -300, app: 20}, run: (s) => { s.bud -= 300; s.app += 20; } }, 
            { text: "Replace with AI", sub: "Efficiency over humans", deltas: {bud: -100, app: -25, mil: 5}, run: (s) => { s.bud -= 100; s.app -= 25; s.mil += 5; } },
            { text: "Ignore Strike", sub: "The hardline stance", deltas: {app: -15}, run: (s) => { s.app -= 15; } }
        ] 
    }
];
