import sys
import openpyxl

file_name = sys.argv[1];
wb = openpyxl.load_workbook(file_name);
print wb.get_sheet_names();
sheet = wb.get_sheet_by_name('Sheet1');
print sheet['D4'].value;
print sheet['D4'];
print sheet['D4'];
