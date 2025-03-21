import Product from "../models/Products.js"; 

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { sku, name, price } = req.body;
    if (!sku || !name || !price) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Ensure images array is always defined
    const imageUrls = req.files && req.files.length > 0 ? req.files.map(file => file.path) : [];

    const newProduct = await Product.create({ sku, name, price, images: imageUrls });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error: error.message });
  }
};


const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { sku, name, price, images } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    await product.update({ sku, name, price, images });
    res.json({ message: "Product updated successfully!", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

export { getAllProducts, addProduct, updateProduct, deleteProduct };
