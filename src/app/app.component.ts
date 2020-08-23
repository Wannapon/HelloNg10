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

  readData(value) {
    const regex = /[0-9]/g
    const newString = value.replace(regex, '')

    console.log(`Fullname : ${newString}`)
    if (newString == '') {
      alert('Please enter Charector Only !!!')
    } else {
      alert(`Fullname : ${newString}`)
    }
  }

  ngOnInit(): void {
  }

}
