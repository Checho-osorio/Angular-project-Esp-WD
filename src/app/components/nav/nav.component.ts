import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('mainNav') mainNav!: ElementRef;
  isNavbarShrink = false;

  constructor() {}

  ngOnInit(): void {
    this.navbarShrink();
  }

  navbarShrink(): void {
    this.isNavbarShrink = window.scrollY !== 0;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.navbarShrink();
  }

  toggleNavbar(): void {
    const navbarToggler = document.body.querySelector('.navbar-toggler') as HTMLElement;
    const navbarResponsive = document.body.querySelector('#navbarResponsive') as HTMLElement;
    if (navbarToggler && navbarResponsive) {
      navbarToggler.classList.toggle('collapsed');
      navbarResponsive.classList.toggle('show');
    }
  }
}
