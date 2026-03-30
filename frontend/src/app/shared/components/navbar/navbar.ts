import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavbarItem } from './navbar-item/navbar-item';

export interface MenuItem {
  label:string;
  route:string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NavbarItem],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected menu:MenuItem[] = [
    { label: 'Ranking', route: '/ranking' },
    { label: 'Arena', route: '/arena' },
    { label: 'Especies', route: '/species' }
  ];
}
