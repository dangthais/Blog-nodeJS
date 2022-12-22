import Product from "../models/post";

export const list = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};

export const read = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};

export const add = async (req, res) => {
  try {
    const body = req.body
    const product = await new Product(body).save()
    res.status(200).json({
        data : product
    })
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};



export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body
    const product = await Product.findOneAndUpdate({ _id : id }, body, { new : true })
    res.status(200).json({
        data : product
    })
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};





export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndRemove({ _id : id})
    res.status(200).json({
        product
    })
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};
