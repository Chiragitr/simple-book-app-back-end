import * as mysql from 'mysql';

let poolArr:any = {};


export class Pool {

    connection:any;

    constructor(
        host: string,
        user: string,
        password: string,
        database: string 
    ) {
        if(!poolArr[user+'|'+database]){
            poolArr[user+'|'+database] = mysql.createPool({
                connectionLimit: 20,
                host,
                user,
                password,
                database,
            });
        }
        this.connection = poolArr[user+'|'+database];
    }

    
     queryAsync(query:string):Promise<any>{
        return new Promise((resolve,reject)=>{
            this.connection.query(query, function (error:any, results:any, fields:any) {
                if (error) {
                    resolve([]);
                }
                resolve(results);
            });
        })
    }

     query(query:string) {
         this.connection.query(query, function (error:any, results:any, fields:any) {
         });
    }
    
}


