const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getById = async (productId) => {
const [[product]] = await connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?',
  [productId],
);

return product;
};
const insertProduct = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products(name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  
  // Obtém o ID do último registro inserido
  const insertedId = result.insertId;

  // Consulta os dados inseridos na tabela
  const selectQuery = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[insertedData]] = await connection.execute(selectQuery, [insertedId]);

  return insertedData;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  
};