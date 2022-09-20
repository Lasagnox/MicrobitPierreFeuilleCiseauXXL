function ciseaux () {
    basic.showLeds(`
        # . . # #
        . # . # #
        . . # . .
        . # . # #
        # . . # #
        `)
}
function pierre () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
}
function papier () {
    basic.showLeds(`
        . . # # #
        . # # . #
        # # # . #
        # . . . #
        # # # # #
        `)
}
input.onButtonPressed(Button.A, function () {
    choix += 1
    if (choix > 2) {
        choix = 0
    }
    afficher()
})
function afficher_vainqueur () {
    if (choix_j2 == choix_j1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (choix_j1 - choix_j2 == -1 || choix_j1 - choix_j2 == 2) {
        basic.showString("1")
    } else {
        basic.showString("2")
    }
}
input.onButtonPressed(Button.AB, function () {
    if (choix_j1 == -1) {
        choix_j1 = choix
        choix = randint(0, 2)
        afficher()
    } else {
        choix_j2 = choix
        afficher_vainqueur()
        choix_j1 = -1
    }
})
function afficher () {
    if (choix == 0) {
        papier()
    } else if (choix == 1) {
        pierre()
    } else {
        ciseaux()
    }
}
input.onButtonPressed(Button.B, function () {
    choix += -1
    if (choix < 0) {
        choix = 2
    }
    afficher()
})
let choix_j2 = 0
let choix = 0
let choix_j1 = 0
choix_j1 = -1
choix = randint(0, 2)
afficher()
basic.forever(function () {
	
})
