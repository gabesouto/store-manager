const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  console.log('model result', result);
  return result;
};

const getById = (productId) => {
const [[product]] = connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?',
  [productId],
);

return product;
};
module.exports = {
  getAll,
  getById,
};