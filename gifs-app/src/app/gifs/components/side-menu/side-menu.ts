import { Component } from '@angular/core';
import { SideMenuHeader } from '../side-menu-header/side-menu-header';
import { SideMenuOption } from '../side-menu-option/side-menu-option';

@Component({
  selector: 'app-side-menu',
  imports: [
     SideMenuHeader, SideMenuOption
  ],
  templateUrl: './side-menu.html',
})
export class SideMenu { }
