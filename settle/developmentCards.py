import numpy as np

class DevelopmentCards():
    def __init__(self):
        self.deck = self.intialize_developement_cards()

    """ Initialize the board positions """
    def intialize_developement_cards(self):
        knights = np.array(["knight"] * 14)
        victory_points = np.array(["victory point"] * 5)
        monopoly = np.array(["monopoly"] * 2)
        road_building = np.array(["road building"] * 2)
        year_of_plenty = np.array(["year of plenty"] * 2)
        deck = np.concatenate((knights, victory_points, monopoly, road_building, year_of_plenty))
        np.random.shuffle(deck)
        return list(deck)

    def draw_card(self):
        return self.deck.pop()
