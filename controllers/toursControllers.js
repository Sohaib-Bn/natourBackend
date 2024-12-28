const Tours = require("../models/toursModel");

exports.getTours = async (req, res) => {
  try {
    const tours = await Tours.find();
    res.status(200).json({
      message: "success",
      data: {
        tours: tours
      }
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err.message });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tours.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: {
        tours: tour
      }
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err.message });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tours.create(req.body);
    res.status(201).json({
      message: "success",
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: "Invalid data is sent!" });
  }
};

exports.updatedTour = (req, res) => {
  res.status(200).json({
    message: "success"
    // data: {
    //   tour: newTour
    // }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({ message: "Tour deleted", status: 204 });
};
