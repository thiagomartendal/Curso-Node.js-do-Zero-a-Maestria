import mysql from 'mysql'

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: '', // Informar o nome de usuário do servidor mysql
    password: '', // Informar a senha do servidor mysql
    database: 'nodemysql'
})

export default pool
