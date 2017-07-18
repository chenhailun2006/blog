import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbar = [
    {title: '首页', href: '#'},
    {title: '开发总结', href: '#'},
    {title: '技术文章', href: '#'},
    {title: '每日心语', href: '#'},
    {title: '关于我', href: '#'}
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
