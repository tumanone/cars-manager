import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Owner} from "./shared/interfaces/owner.interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const owners = [
      {
        id: 11,
        last_name: 'Петров',
        first_name: 'Виктор',
        middle_name: 'Иванович',
        cars: [
          {
            num_plate: 'AA0000AA',
            manufacturer: 'Mazda',
            model: 'RX-7',
            production_year: 1998
          },
          {
            num_plate: 'AB0101BO',
            manufacturer: 'Suzuki',
            model: 'Vitara',
            production_year: 2011
          }
        ]
      },
      {
        id: 12,
        last_name: 'Иванов',
        first_name: 'Петр',
        middle_name: 'Михайлович',
        cars: [
          {
            num_plate: 'AX2525HP',
            manufacturer: 'Subaru',
            model: 'BRZ',
            production_year: 2015
          }
        ]
      },
      {
        id: 13,
        last_name: 'Ветров',
        first_name: 'Максим',
        middle_name: 'Игоревич',
        cars: [
          {
            num_plate: 'AA1234AC',
            manufacturer: 'Volkswagen',
            model: 'Passat',
            production_year: 2002
          }
        ]
      }
    ];
    return {owners}
  }

  genId(owners: Owner[]): number {
    return owners.length > 0 ? Math.max(...owners.map(owner => owner.id)) + 1 : 11;
  }
}

