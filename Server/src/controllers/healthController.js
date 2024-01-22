const getHealth = (req, res, next) => {
  try {
    res.status(200).send({
      message: 'API is Healthy',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getHealth };

//dummy controller of health checker route
