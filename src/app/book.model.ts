export class Book {
    constructor(
      public id: number,
      public name: string,
      public author: string,
      public genre: string,
      public rate: number,
      public status: string
    ) {}
  }