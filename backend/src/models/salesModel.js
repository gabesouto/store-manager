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
    console.log(' sale model result', formattedRows);
    return formattedRows;
  };
module.exports = {
  getAll,
  getById,
};
// "saleId": 1,
// "date": "2021-09-09T04:54:29.000Z",
// "productId": 1,
// "quantity": 2
// },

// saleId', 'productId', 'quantity', 'date