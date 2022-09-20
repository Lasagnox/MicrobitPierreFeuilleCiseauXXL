def ciseaux():
    basic.show_leds("""
        # . . # #
                . # . # #
                . . # . .
                . # . # #
                # . . # #
    """)
def pierre():
    basic.show_leds("""
        . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
    """)
def papier():
    basic.show_leds("""
        . . # # #
                . # # . #
                # # # . #
                # . . . #
                # # # # #
    """)

def on_button_pressed_a():
    global choix
    choix += 1
    if choix > 2:
        choix = 0
    afficher()
input.on_button_pressed(Button.A, on_button_pressed_a)

def afficher_vainqueur():
    if choix_j2 == choix_j1:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . . .
                        . # # # .
                        . . . . .
        """)
    elif choix_j1 - choix_j2 == -1 or choix_j1 - choix_j2 == 2:
        basic.show_string("1")
    else:
        basic.show_string("2")
def afficher():
    if choix == 0:
        papier()
    elif choix == 1:
        pierre()
    else:
        ciseaux()

def on_button_pressed_b():
    global choix_j1, choix, choix_j2
    if choix_j1 == -1:
        choix_j1 = choix
        choix = randint(0, 2)
        afficher()
    else:
        choix_j2 = choix
        afficher_vainqueur()
        choix_j1 = -1
input.on_button_pressed(Button.B, on_button_pressed_b)

choix_j2 = 0
choix = 0
choix_j1 = 0
choix_j1 = -1
choix = randint(0, 2)
afficher()

def on_forever():
    pass
basic.forever(on_forever)
