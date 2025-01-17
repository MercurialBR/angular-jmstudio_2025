import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-hamburguer',
  templateUrl: './btn-hamburguer.component.html',
  styleUrls: ['./btn-hamburguer.component.scss']
})
export class BtnHamburguerComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
