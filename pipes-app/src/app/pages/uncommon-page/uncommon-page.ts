import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Jeremias',
  gender: 'male',
  age: 39,
  address: 'Buenos Aires, Argentina'
};

const client2 = {
  name: 'Silvana',
  gender: 'female',
  age: 41,
  address: 'San Miguel, Argentina'
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {


  // i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }


  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
      this.client.set(client1);
    }

    // i18nPlural
    clients = signal<string[]>(['Maria', 'Pedro', 'Juan', 'Ana', 'Luis', 'Carlos']);
    clientsMap = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      '=2': 'tenemos dos clientes esperando.',
      other: 'tenemos # clientes esperando.'
    };

    deleteCliente() {
      this.clients.update((prev) => prev.slice(1) );
    }
 }
