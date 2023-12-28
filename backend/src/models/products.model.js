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

const getByProductId = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE product_id = ?',
    [productId],
  );
  
  return product;
  };

const insertProduct = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products(name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  
  const insertedId = result.insertId;

  const selectQuery = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[insertedData]] = await connection.execute(selectQuery, [insertedId]);

  return insertedData;
};

const updateProduct = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);

  const selectQuery = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[updatedData]] = await connection.execute(selectQuery, [id]);

  return updatedData;
};

const deleteProduct = async (id) => {
  const deleteSaleQuery = 'DELETE FROM StoreManager.products WHERE id = ?';
  const result = await connection.execute(deleteSaleQuery, [id]);

  return result;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  getByProductId,
  deleteProduct,
  
};