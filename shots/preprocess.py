import sys
import openpyxl
import os

def transfer(sheet, f):
    results = {"paint": [float(0), float(0)], "mid": [float(0),float(0)], "three": [float(0),float(0)]}

    row = 2
    while (str(sheet["A" + str(row)].value) != "None"):
        x = sheet["A" + str(row)].value;
        y = sheet["B" + str(row)].value;
        result = str(sheet["C" + str(row)].value);

        shot, result = classify(x, y, result)
        if (result == "make"):
            results[shot][0] += 1
        else:
            results[shot][1] += 1

        f.write(str(x) + " " + str(y) + " " + result + "\n");
        row = row + 1

    f.write("three " + str(results["three"][0] / (results["three"][0] + results["three"][1])) + "\n")
    f.write("mid " + str(results["mid"][0] / (results["mid"][0] + results["mid"][1])) + "\n")
    f.write("paint " + str(results["paint"][0] / (results["paint"][0] + results["paint"][1])) + "\n")

directory = "players/excel/"

equations = {}
equations[0] = [-0.0094, 2.5736, 106.87]
equations[1] = [0.0035, 1.6339, 143.9]
equations[2] = [-0.0017, 1.0033, 198]
equations[3] = [-0.0013, 0.785, 228]
equations[4] = [0, 0, 347]
equations[5] = [-0.0006, 0.28, 318.11]
equations[6] = [-0.0011, 0.4721, 314]
equations[7] = [-0.0035, 2.5248, -122.87]
equations[8] = [-0.0094, 8.498, -1635.8]

rangeEnds = [92.5, 160, 220, 280, 310, 370, 430, 497.5, 565]

def classify(x, y, result):
    if isThree(x, y):
        if (result == "make"): return ["three", "make"]
        else: return ["three", "miss"]
    if inPaint(x, y):
        if (result == "make"): return ["paint", "make"]
        else: return ["paint", "miss"]

    if (result == "make"): return ["mid", "make"]
    return ["mid", "miss"]

# returns whether the given point is in the key
# input 1 and 2: x and y coordinates
# return boolean
def inPaint(x, y):
    if (x > 200 and x < 390):
        return y < 225
    return False

# returns whether the given point is a 3 pointer or not
# input 1 and 2: x and y coordinates
# return boolean
def isThree(x, y):
    if (x < 25):
        return True
    eqNum = 0
    while eqNum < 9:
        if (x < rangeEnds[eqNum]):
            calcy = x*x*equations[eqNum][0] + x*equations[eqNum][1] + equations[eqNum][2]
            return y >= calcy
        eqNum += 1
    return True

leftCornerThree = [0, 25]
rightCornerThree = [565, 590]

for filename in os.listdir(directory):
    if (filename != '.DS_Store'):
        wb = openpyxl.load_workbook(directory + filename);
        sheet = wb.get_sheet_by_name('Sheet1');
        name = str("players/text/" + sheet['A1'].value) + "_" + str(sheet['B1'].value) + ".txt";
        f= open(name,"w+");
        transfer(sheet, f);
        f.close();
