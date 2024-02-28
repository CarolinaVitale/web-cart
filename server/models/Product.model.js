const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required.']
        },

        price: {
            type: Number,
            required: [true, 'Name is required.']
        },
        
        description: String
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const Product = model("Product", productSchema);

module.exports = Product;