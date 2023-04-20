import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Item[] = [
    {
      id: 1,
      thumbnail: 'https://via.placeholder.com/150',
      title: 'Item 1',
      description: 'This is item 1',
      price: 10.99,
    },
    {
      id: 2,
      thumbnail: 'https://via.placeholder.com/150',
      title: 'Item 2',
      description: 'This is item 2',
      price: 20.99,
    },
  ];

  getAll(): Item[] {
    return this.items;
  }

  create(item: Item): void {
    this.items.push(item);
  }

  update(item: Item): void {
    const index = this.items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }

  delete(id: number): void {
    const index = this.items.findIndex((i) => i.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
