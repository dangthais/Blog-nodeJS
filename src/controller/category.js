import Category from "../models/category"

export const readCate = async (req, res) => {
    try {
      const id = req.params.id;
      const category = await Category.findOne({ _id: id });
      res.status(200).json({
        data: category,
      });
    } catch (error) {
      res.status(400).json({ message: "Error" });
    }
  };

export const listCate = async (req, res) => {
    try {
      const category = await Category.find();
      res.status(200).json({
        data: category,
      });
    } catch (error) {
      res.status(400).json({ message: "Error" });
    }
  };


  export const addCate = async (req, res) => {
    try {
      const body = req.body
      const category = await new Category(body).save()
      res.status(200).json({
          data : category
      })
    } catch (error) {
      res.status(400).json({ message: "Error" });
    }
  };

  export const updateCate = async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body
      const category = await Category.findOneAndUpdate({ _id : id }, body, { new : true })
      res.status(200).json({
          data : category
      })
    } catch (error) {
      res.status(400).json({ message: "Error" });
    }
  };

  export const removeCate = async (req, res) => {
    try {
      const id = req.params.id;
      const category = await Category.findOneAndRemove({ _id : id})
      res.status(200).json({
        data : category
      })
    } catch (error) {
      res.status(400).json({ message: "Error" });
    }
  };