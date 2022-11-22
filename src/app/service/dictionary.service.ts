import { Injectable } from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: IWord[] = [
    {
      id: '1',
      word: 'hello',
      mean: 'Xin chào'
    },
    {
      id: '2',
      word: 'goodbye',
      mean: 'Tạm biệt'
    },
    {
      id: '3',
      word: 'go',
      mean: 'Đi'
    }
  ]
  constructor() { }
  getAll() {
    return this.dictionary;
  }
  findById(id: string) {
    return this.dictionary.find(item => item.id === id);
  }
}
