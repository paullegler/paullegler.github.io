import sys
import openpyxl
import os

def transfer(sheet, f):
    row = 2
    while (str(sheet["A" + str(row)].value) != "None"):
        x = str(sheet["A" + str(row)].value);
        y = str(sheet["B" + str(row)].value);
        result = str(sheet["C" + str(row)].value);
        f.write(x + " " + y + " " + result + "\n");
        row = row + 1

directory = "players/excel/"

for filename in os.listdir(directory):
    wb = openpyxl.load_workbook(directory + filename);
    sheet = wb.get_sheet_by_name('Sheet1');
    name = str("players/text/" + sheet['A1'].value) + "_" + str(sheet['B1'].value) + ".txt";
    f= open(name,"w+");
    transfer(sheet, f);
    f.close();
