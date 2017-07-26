import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbar = [
    {title: 'Home', href: '#'},
    {title: 'Summary', href: '#'},
    {title: 'Article', href: '#'},
    {title: 'Diary', href: '#'},
    {title: 'About', href: '#'}
  ];
  currentIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  navbarClicked(event, nav, index) {
    event.preventDefault();
    this.currentIndex = index;
    console.log(event, nav)
  }

}
