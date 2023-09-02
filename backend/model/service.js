const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your service name!"]
    },
    description:{
        type: String,
        required: [true, "Please enter your service description!"]
    },
    category:{
        type: String,
        required: [true, "Please enter your service category!"]
    },
    tags:{
        type: String,
    },
    staffNumber:{
        type: Number,
        required: [true, "Please enter number of staffs!"]
    },
    operationYears:{
        type: Number,
        required: [true, "Please enter number of years in operation!"]
    },
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    shopId:{
        type: String,
        required: true,
    },
    shop:{
        type: Object,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Service", serviceSchema);