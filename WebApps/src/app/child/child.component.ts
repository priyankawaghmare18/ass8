import { Component, OnInit, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output () public myEvent=new EventEmitter();
 public message=document.getElementById("msg").value;
  constructor() { }

  ngOnInit(): void {
  }
public send()
{
  this.myEvent.emit();
}
}
