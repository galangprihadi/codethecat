//########################################################################
//  Game Setting (Gals Studio)
//
//  Update : June 18, 2025
//  Info   : Game setting for each game
//########################################################################


// ================================================================================= GAME SETTING

const gameSet = {
    tileSize   : 50,
    tileWidth  : 5,
    tileHeight : 5,
    moveDelay : 10,

    level1: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 4,
        player: {x:2, y:3, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:4, y:3, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs1-50.png"},
            obs2: {x:1, y:5, image:"images/sprites/obs2-50.png"},
            obs3: {x:2, y:4, image:"images/sprites/obs2-50.png"},
            obs4: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs5: {x:4, y:4, image:"images/sprites/obs2-50.png"},
            obs6: {x:5, y:1, image:"images/sprites/obs1-50.png"},
            obs7: {x:5, y:5, image:"images/sprites/obs2-50.png"},
        },
        inputType: 0
    },

    level2: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 5,
        player: {x:2, y:2, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:3, y:4, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs1-50.png"},
            obs2: {x:1, y:5, image:"images/sprites/obs1-50.png"},
            obs3: {x:2, y:3, image:"images/sprites/obs2-50.png"},
            obs4: {x:2, y:4, image:"images/sprites/obs2-50.png"},
            obs5: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs6: {x:5, y:1, image:"images/sprites/obs1-50.png"},
            obs7: {x:5, y:5, image:"images/sprites/obs1-50.png"},
        },
        inputType: 0
    },
    
    level3: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 6,
        player: {x:4, y:3, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:3, y:4, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs1-50.png"},
            obs2: {x:1, y:3, image:"images/sprites/obs1-50.png"},
            obs3: {x:1, y:5, image:"images/sprites/obs1-50.png"},
            obs4: {x:3, y:1, image:"images/sprites/obs1-50.png"},
            obs5: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs6: {x:4, y:4, image:"images/sprites/obs2-50.png"},
            obs7: {x:5, y:1, image:"images/sprites/obs1-50.png"},
            obs8: {x:5, y:5, image:"images/sprites/obs2-50.png"},
        },
        inputType: 0
    },

    level4: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 7,
        player: {x:1, y:4, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:3, y:2, image:"images/sprites/fish-50.png"},
            goal2: {x:5, y:3, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:2, image:"images/sprites/obs1-50.png"},
            obs2: {x:2, y:4, image:"images/sprites/obs2-50.png"},
            obs3: {x:3, y:1, image:"images/sprites/obs1-50.png"},
            obs4: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs5: {x:3, y:4, image:"images/sprites/obs2-50.png"},
            obs6: {x:4, y:4, image:"images/sprites/obs2-50.png"},
            obs7: {x:5, y:2, image:"images/sprites/obs1-50.png"},
        },
        inputType: 0
    },

    level5: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 5,
        player: {x:4, y:2, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:2, y:3, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs1-50.png"},
            obs2: {x:1, y:5, image:"images/sprites/obs1-50.png"},
            obs3: {x:2, y:2, image:"images/sprites/obs2-50.png"},
            obs4: {x:3, y:2, image:"images/sprites/obs2-50.png"},
            obs5: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs6: {x:5, y:1, image:"images/sprites/obs1-50.png"},
            obs7: {x:5, y:5, image:"images/sprites/obs1-50.png"},
        },
        inputType: 1
    },
    
    level6: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 6,
        player: {x:3, y:4, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:2, y:3, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs1-50.png"},
            obs2: {x:1, y:5, image:"images/sprites/obs2-50.png"},
            obs3: {x:2, y:4, image:"images/sprites/obs2-50.png"},
            obs4: {x:3, y:1, image:"images/sprites/obs1-50.png"},
            obs5: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs6: {x:5, y:1, image:"images/sprites/obs1-50.png"},
            obs7: {x:5, y:3, image:"images/sprites/obs1-50.png"},
            obs8: {x:5, y:5, image:"images/sprites/obs1-50.png"},
        },
        inputType: 1
    },

    level7: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 7,
        player: {x:2, y:1, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:4, y:3, image:"images/sprites/fish-50.png"},
            goal2: {x:3, y:5, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:2, y:2, image:"images/sprites/obs2-50.png"},
            obs2: {x:2, y:3, image:"images/sprites/obs2-50.png"},
            obs3: {x:2, y:4, image:"images/sprites/obs2-50.png"},
            obs4: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs5: {x:4, y:1, image:"images/sprites/obs1-50.png"},
            obs6: {x:4, y:5, image:"images/sprites/obs1-50.png"},
            obs7: {x:5, y:3, image:"images/sprites/obs1-50.png"},
        },
        inputType: 1
    },

    level8: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 5,
        player: {x:4, y:4, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:3, y:2, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs1-50.png"},
            obs2: {x:1, y:5, image:"images/sprites/obs1-50.png"},
            obs3: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs4: {x:4, y:2, image:"images/sprites/obs2-50.png"},
            obs5: {x:4, y:3, image:"images/sprites/obs2-50.png"},
            obs6: {x:5, y:1, image:"images/sprites/obs1-50.png"},
            obs7: {x:5, y:5, image:"images/sprites/obs1-50.png"},
        },
        inputType: 2
    },
    
    level9: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 6,
        player: {x:2, y:3, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:3, y:2, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs2-50.png"},
            obs2: {x:1, y:5, image:"images/sprites/obs1-50.png"},
            obs3: {x:2, y:2, image:"images/sprites/obs2-50.png"},
            obs4: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs5: {x:3, y:5, image:"images/sprites/obs1-50.png"},
            obs6: {x:5, y:1, image:"images/sprites/obs1-50.png"},
            obs7: {x:5, y:3, image:"images/sprites/obs1-50.png"},
            obs8: {x:5, y:5, image:"images/sprites/obs1-50.png"},
        },
        inputType: 2
    },

    level10: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 7,
        player: {x:5, y:2, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:3, y:4, image:"images/sprites/fish-50.png"},
            goal2: {x:1, y:3, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:4, image:"images/sprites/obs1-50.png"},
            obs2: {x:2, y:2, image:"images/sprites/obs2-50.png"},
            obs3: {x:3, y:2, image:"images/sprites/obs2-50.png"},
            obs4: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs5: {x:3, y:5, image:"images/sprites/obs1-50.png"},
            obs6: {x:4, y:2, image:"images/sprites/obs2-50.png"},
            obs7: {x:5, y:4, image:"images/sprites/obs1-50.png"},
        },
        inputType: 2
    },

    level11: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 5,
        player: {x:2, y:4, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:4, y:3, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs1-50.png"},
            obs2: {x:1, y:5, image:"images/sprites/obs1-50.png"},
            obs3: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs4: {x:3, y:4, image:"images/sprites/obs2-50.png"},
            obs5: {x:4, y:4, image:"images/sprites/obs2-50.png"},
            obs6: {x:5, y:1, image:"images/sprites/obs1-50.png"},
            obs7: {x:5, y:5, image:"images/sprites/obs1-50.png"},
        },
        inputType: 3
    },
    
    level12: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 6,
        player: {x:3, y:2, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:4, y:3, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:1, image:"images/sprites/obs1-50.png"},
            obs2: {x:1, y:3, image:"images/sprites/obs1-50.png"},
            obs3: {x:1, y:5, image:"images/sprites/obs1-50.png"},
            obs4: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs5: {x:3, y:5, image:"images/sprites/obs1-50.png"},
            obs6: {x:4, y:2, image:"images/sprites/obs2-50.png"},
            obs7: {x:5, y:1, image:"images/sprites/obs2-50.png"},
            obs8: {x:5, y:5, image:"images/sprites/obs1-50.png"},
        },
        inputType: 3
    },

    level13: {
        mapImage: "images/sprites/map-50.png",
        commandLength: 7,
        player: {x:4, y:5, image:"images/sprites/cat-50.png", direction:"down"},
        goals: {
            goal1: {x:2, y:3, image:"images/sprites/fish-50.png"},
            goal2: {x:3, y:1, image:"images/sprites/fish-50.png"},
        },
        obstacles: {
            obs1: {x:1, y:3, image:"images/sprites/obs1-50.png"},
            obs2: {x:2, y:1, image:"images/sprites/obs1-50.png"},
            obs3: {x:2, y:5, image:"images/sprites/obs1-50.png"},
            obs4: {x:3, y:3, image:"images/sprites/obs2-50.png"},
            obs5: {x:4, y:2, image:"images/sprites/obs2-50.png"},
            obs6: {x:4, y:3, image:"images/sprites/obs2-50.png"},
            obs7: {x:4, y:4, image:"images/sprites/obs2-50.png"},
        },
        inputType: 3
    },

}


// ================================================================================= GAME INIT

rpg.gameEngine = new RpgEngine();

rpg.gameDashboard = new RpgDashboard();
rpg.gameInput = new RpgInput();
//rpg.gameDashboard = new RpgDashboard(true);