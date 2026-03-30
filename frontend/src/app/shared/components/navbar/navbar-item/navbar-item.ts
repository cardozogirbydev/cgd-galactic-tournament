import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { MenuItem } from '../navbar';

@Component({
  selector: 'app-navbar-item',
  imports: [RouterLink],
  templateUrl: './navbar-item.html',
})
export class NavbarItem {
  menuItem = input.required<MenuItem>();
}
