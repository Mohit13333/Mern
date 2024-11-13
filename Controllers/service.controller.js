import Service from "../models/service.model.js";

const service = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ message: "Service not found" });
    }
    res.status(200).send({ message: response });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export default service;
