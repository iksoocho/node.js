module.exports = {
    customerList : `SELECT * FROM customers`,
    customerInfo : `SELECT * FROM customers WHERE id = ?`,
    customerInsert: `INSERT INTO customers SET ?`,
    customerUpdate: `UPDATE CUSTOMERS SET ? WHERE id = ?`,
    customerDelete: `DELETE FROM customers WHERE id = ?`,

    customerDelete2:`DELETE FROM customers WHERE id = ? AND name = ?`  //조건 2개로 삭제하기(내가 해봄)
}