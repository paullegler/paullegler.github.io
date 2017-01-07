class Tile():
    def __init__(self, neighbors, value):
        self.neighbors = neighbors #start in top left and go clockwise - six possible
        self.value = value
