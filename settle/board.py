import numpy as np
import tile as tile

l = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11]
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"]
neighbors = {0: [11, 12, 2, "", "", ""], 1: [12, 13, 3, "", "", 0], 2: [13, 3, "", "", "", 1], 3: [14, 4, "", "", 2, 13], 4: [5, "", "", "", 3, 14], 5: [6, "", "", 4, 14, 15], 6: ["", "", "", 5, 15, 7], 7: ["", "", 6, 15, 16, 8], 8: ["", "", 7, 16, 9, ""], 9: ["", 8, 16, 17, 10, ""], 10: ["", 9, 17, 11, "", ""], 11: [10, 17, 12, 0, "", ""], 12: [17, 18, 13, 1, 0, 11], 13: [18, 14, 3, 2, 1, 12], 14: [15, 5, 4, 3, 13, 18], 15: [7, 6, 5, 14, 19, 16], 16: [8, 7, 15, 18, 17, 9], 17: [9, 16, 18, 12, 11, 10], 18: [16, 15, 14, 13, 12, 17]} # map from tile index to neighbor indexes in counter clockwise order starting in top left
settlement_locations = [] # there are 53 possible locations

class Board():
    def __init__(self):
        self.tiles = []
        self.generate_initial_positions()
        self.settlements = []
        self.roads = []
        self.cities = []

    """ Initialize the board positions """
    def generate_initial_positions(self):
        brick = ["brick"] * 3
        ore = ["ore"] * 3
        wheat = ["wheat"] * 4
        wood = ["wood"] * 4
        sheep = ["sheep"] * 4
        desert = ["desert"]
        resources = np.concatenate((brick, ore, wheat, wood, sheep, desert))
        np.random.shuffle(resources)

        index = 0
        for i in len(range(resources)):
            if resources[i] != "desert":
                t = tile.Tile(neighbors[i], l[index])
                self.tiles.append(t)
                index = index + 1
            else:
                t = tile.Tile(neighbors[i], 0)
                self.tiles.append(t)
