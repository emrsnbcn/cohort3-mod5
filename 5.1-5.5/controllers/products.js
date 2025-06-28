const express = require("express");
const router = express.Router();

let products = [
	{ id: 1, name: "Pen" },
	{ id: 2, name: "Notebook" },
];

//localhost:3000/products
router.get("/", (req, res) => {
	res.json(products);
});

router.post("/", (req, res) => {
	const newItem = products.push({ id: Date.now(), name: req.body.name });
	return res
		.status(201)
		.json({ msg: "Product added successfully", product: newItem });
});

router.delete("/:id", (req, res) => {
	let updatedProducts = products.filter(
		(product) => product.id != req.params.id
	);
	products = updatedProducts;

	return res.status(204).json({ msg: "Product deleted!", products });
});

module.exports = router;
