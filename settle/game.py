import player as p
import board as b
import developmentCards as dev
import resourceCards as resource

class Game():
    def __init__(self, num_players):
        self.players = []

        self.developmentCards = dev.DevelopmentCards()

        self.resourceCards = resource.ResourceCards()

        self.board = b.Board()

        self.gameOver = False

        for i in range(num_players):
            self.players.append(p.Player())


    """ Return False if game isn't over, return Winner if it is """
    def is_game_over():
        for p in players:
            if p.points >= 10:
                return p
        return False


g = Game(3)
