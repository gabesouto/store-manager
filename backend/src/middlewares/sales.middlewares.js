function productIdValidation(req, res, next) {
  const data = req.body;
  const hasProductId = data.map((item) => item.productId).every((productId) => productId);
  if (!hasProductId) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
}
function quantityValidation(req, res, next) {
  const data = req.body;
  console.log(data);
  const hasQuantity = data.every((item) => item.quantity);
  console.log(hasQuantity);
  if (data.some((item) => item.quantity <= 0)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (hasQuantity === false) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
}
async function validateSingleProductId(req, res, next) {
  // const { id } = req.params;

  // const product = await productsService.getById(id);
  // console.log('aa', product);
  // if (product.type) {
  //   return res.status(404).json({ message: 'Product not found' });
  // }
  next();
}
// function validateMultipleProductIds(req, res, next) {
//   const data = req.body.items;
  
//   data.forEach((item) => {
//     const { productId } = item;
//     // Realize uma consulta no banco de dados para verificar se o productId existe
//     const product = salesController.getById(productId);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//   });
//   next();
// }
module.exports = {
  productIdValidation,
  quantityValidation,
  validateSingleProductId,
};