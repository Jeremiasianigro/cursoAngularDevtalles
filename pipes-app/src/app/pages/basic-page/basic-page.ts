import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe

  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  localService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID))

  nameLower = signal('jeremias');
  nameUpper = signal('JEREMIAS');
  fullName = signal('JeReMiAs iNiGRO');


  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

  changeLocale(locale: AvailableLocale){
    console.log({locale});

    this.localService.changeLocale(locale);

  }

}
