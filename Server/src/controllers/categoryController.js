const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(name);
    return successResponse(res, {
      statusCode: 200,
      message: `Category created successfully`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createCategory;
