import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from '../../services/gifs.service';

interface MenuOption{
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu-option',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-option.html',
})
export class SideMenuOption {

  gifService = inject(GifService);

  menuOption: MenuOption[] = [
    {
      icon:'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
     {
      icon:'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      route: '/dashboard/search',
    }
  ];


}
