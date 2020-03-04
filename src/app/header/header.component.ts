import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header implements OnInit {
  ngOnInit(): void {
    console.log('header works');
  }
}
