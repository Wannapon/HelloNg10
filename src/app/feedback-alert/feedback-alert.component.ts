import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-feedback-alert',
  templateUrl: './feedback-alert.component.html',
  styleUrls: ['./feedback-alert.component.css']
})

export class FeedbackAlertComponent implements OnInit {

  mDataArray: any[] = []

  constructor(private http: HttpClient) {

  }

  getFeedback() {
    this.http.get<any>('http://localhost:3000/api').subscribe(result => {
      // alert(JSON.stringify(result))
      this.mDataArray = result.data
    })
  }

  onSubmit(data) {
    this.http.post<any>('http://localhost:3000/api', data).subscribe(result => {
      alert(JSON.stringify(result))
      this.getFeedback()
    })
  }

  ngOnInit(): void {
    this.getFeedback
  }

}
