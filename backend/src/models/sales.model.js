const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
     FROM StoreManager.sales AS s
     JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id`,
  );
  
  console.log('model result 2', result);
  const formattedRows = result.map((row) => ({
    saleId: row.sale_id,
    date: row.date,
    productId: row.product_id,
    quantity: row.quantity,
  }));
  return formattedRows;
  };  
  const getById = async (salesId) => {
    const [rows] = await connection.execute(
      `SELECT s.date, sp.product_id, sp.quantity
       FROM StoreManager.sales AS s
       JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id
       WHERE sp.sale_id = ?;`,
      [salesId],
    );
  
    const formattedRows = rows.map((row) => ({
      date: row.date,
      productId: row.product_id,
      quantity: row.quantity,
    }));

    return formattedRows;
  };
  
  const insertSale = async () => {
    const insertSaleQuery = 'INSERT INTO StoreManager.sales(date) VALUES (NOW())';
    const [result] = await connection.execute(insertSaleQuery);
    const { insertId } = result;
    return insertId;
  };
  
  const insertSaleProduct = async (insertId, { productId, quantity }) => {
    const insertSaleProductQuery = `
      INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)
    `;
  
    // Executar a consulta de inserção de um produto vendido
  const [result2] = await connection
  .execute(insertSaleProductQuery, [insertId, productId, quantity]);

  const saleId = result2.insertId;
  
    const selectSaleQuery = 'SELECT * FROM StoreManager.sales WHERE id = ?';
    const [[insertedSaleData]] = await connection.execute(selectSaleQuery, [saleId]);
  
    console.log('Inserted sale:', insertedSaleData);
    return insertedSaleData;
  };

  const deleteSale = async (id) => {
    const deleteSaleQuery = 'DELETE FROM StoreManager.sales WHERE id = ?';
    const result = await connection.execute(deleteSaleQuery, [id]);
  
    return result;
  };

  const updateSale = async (id, quantity) => {
    const updateSaleQuery = 'UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ?';
    await connection.execute(updateSaleQuery, [quantity, id]);

    const [rows] = await connection.execute(
      `SELECT s.date, sp.product_id, sp.quantity
       FROM StoreManager.sales AS s
       JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id
       WHERE sp.sale_id = ?;`,
      [id],
    );

    return rows;
  };
  
module.exports = {
  getAll,
  getById,
  insertSale,
  insertSaleProduct,
  deleteSale,
  updateSale,

};
// "saleId": 1,
// "date": "2021-09-09T04:54:29.000Z",
// "productId": 1,
// "quantity": 2
// },

// saleId', 'productId', 'quantity', 'date