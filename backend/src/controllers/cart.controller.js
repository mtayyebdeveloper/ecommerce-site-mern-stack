import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

const createCartController = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({ message: "Inavlid Path..." });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found..." });
    }

    const cart = await Cart.create({
      name: product.name,
      image: product.frontImage,
      price: product.price,
      discount: product.discountPrice,
      deliveryPrice: product.deliveryPrice,
      product: product._id,
      user: req.user._id,
      color: product.color,
      size: product.size,
      quantity: 0,
    });

    if (!cart) {
      return res.status(404).json({ message: "Error..." });
    }

    return res.status(200).json({ message: "Cart Added Successfully." });
  } catch (error) {
    next(error);
  }
};

const getCartController = async (req, res, next) => {
  try {
    const carts = await Cart.find({ _id: req.user._id });

    if (!carts) {
      return res.status(404).json({ message: "Not found." });
    }

    return res.status(200).json({ message: "Carts found.", data: carts });
  } catch (error) {
    next(error);
  }
};

const deleteCartController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const carts = await Cart.findByIdAndDelete(id);

    if (!carts) {
      return res.status(404).json({ message: "Not found." });
    }

    return res.status(200).json({ message: "Cart Deleted Successfully." });
  } catch (error) {
    next(error);
  }
};

const updateCartController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { quantity } = req.body;

    if (!quantity) {
      return res.status(404).json({ message: "Qunatity not found." });
    }

    const carts = await Cart.findByIdAndUpdate(id, {
      quantity,
    });

    if (!carts) {
      return res.status(404).json({ message: "Not found." });
    }

    return res.status(200).json({ message: "Cart Updated Successfully." });
  } catch (error) {
    next(error);
  }
};

export {
  getCartController,
  createCartController,
  deleteCartController,
  updateCartController,
};
