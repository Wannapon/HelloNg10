import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.css']
})
export class ClickCountComponent implements OnInit {

  constructor(private http: HttpClient) { }

  i: number = 0

  public clickCount() {
    this.i++
  }
  public deleteCount() {
    this.i--
  }
  public clearCount() {
    this.i = 0
  }

  ngOnInit(): void {
  }

}
