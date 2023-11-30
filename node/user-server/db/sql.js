module.exports = {
    userList : `SELECT * FROM t_user`,
    userInfo : `SELECT * FROM t_user WHERE user_id = ?`,
    userInsert: `INSERT INTO t_user SET ?`,
    userUpdate: `UPDATE t_user SET ? WHERE user_id = ?`,
    userDelete: `DELETE FROM t_user WHERE user_id = ?`,

    //customerDelete2:`DELETE FROM customers WHERE id = ? AND name = ?`  //조건 2개로 삭제하기(내가 해봄)
}