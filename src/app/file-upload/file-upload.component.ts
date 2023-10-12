// src/app/file-upload/file-upload.component.ts

import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  excelData: any;

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.readExcelData(file);
    }
  }

  private readExcelData(file: File): void {
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const binaryString: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });
      const sheetName: string = workbook.SheetNames[0]; // Assuming the data is in the first sheet

      const excelData: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      this.excelData = excelData;
    };

    reader.readAsBinaryString(file);
  }
}
