import { Pool } from "../model/pool";
import Env from "../env";
import { resolve } from 'url';
// import {Row} from 'mysql'
export class CommonQueries {
  poolConnectionObj = new Pool(
    Env.db.host,
    Env.db.user,
    Env.db.password,
    Env.db.database
  );


  getBooks():Promise<any>{
    return new Promise(async (resolve, reject)=>{
      const result = await this.poolConnectionObj.queryAsync(
        `SELECT * FROM books`
      );
      resolve(result);
    })
  }

  getBookById(id:number):Promise<any>{
    return new Promise(async (resolve ,reject)=>{
      const result = await this.poolConnectionObj.queryAsync(
        `SELECT * FROM books WHERE id=${id}`
      );
      resolve(result);
    })
  }

  updateById(id:number,data:any):Promise<any>{
    return new Promise(async (resolve, reject)=>{
      const result = await this.poolConnectionObj.queryAsync(`
        UPDATE books SET book_name='${data.bookName}', author_name='${data.authorName}',year_published='${data.yearPublished}', price='${data.price}' WHERE id=${id}
      `);
      resolve(result);
    })
  }

  addBook(data:any): Promise<any> {
    return new Promise(async (resolve, reject)=>{
      const result = await this.poolConnectionObj.queryAsync(
        `INSERT INTO books (book_name, author_name, year_published, price) values ('${data.bookName}','${data.authorName}','${data.yearPublished}','${data.price}')`
      );
      resolve(result);
    });
  }

  deleteBookById(id:number):Promise<any>{
    return new Promise(async (resolve, reject)=>{
      const result = await this.poolConnectionObj.queryAsync(
        `DELETE FROM books WHERE id=${id}`
      );
      resolve(result);
    })
  }
}
