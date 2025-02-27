import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-excel-import',
  templateUrl: './excel-import.component.html',
})
export class ExcelImportComponent {
  selectedFile: File | null = null;
  apiUrl = 'http://localhost:8080/license'; 

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadData() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append("file", this.selectedFile);

    this.http.post(`${this.apiUrl}/import`, formData).subscribe({
      next: (res) => alert("Upload successful"),
      error: (err) => alert("Upload failed"),
    });
  }

  downloadSample() {
    window.location.href = `${this.apiUrl}/export-template`;
  }
}
