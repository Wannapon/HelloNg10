import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'helloNg10';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    // let data = { username: 'Wannapon', feedback: "I love it" }
    // this.http.post<any>('http://localhost:3000/api', data).subscribe(result => {
    //   alert(JSON.stringify(result))
    // })
  }

}
