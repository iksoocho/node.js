const mysql = require('mysql');
const sql = require('./db/sql.js');

console.log(sql.empSQL.empList);

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT  
})

const query = async(alias, values)=>{
    return new Promise((resolve, reject)=>{
        pool.query(sql.empSQL[alias], values, (err,results)=>{     //sql[alias] > 넘길 쿼리문, values > 쿼리문과 함께 넘길 데이터
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
        })
    })
}

module.exports = {
    query
}