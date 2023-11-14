const { model, Schema } = require('mongoose');
const categorySchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Category name is required'],
			trim: true,
			minlength: [3, 'Category name can be minimum of 3 character'],
			maxlength: [30, 'Category name can be maximum of  30 character'],
		},
		slug: {
			type: String,
			required: [true, 'Category slug is required'],
			unique: true,
			lowercase: true,
		},
	},
	{ timestamps: true }
);

const Category = model('Category', categorySchema);

module.exports = Category;

// user model for mongodb
