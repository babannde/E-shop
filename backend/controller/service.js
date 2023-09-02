const express = require("express");
const { isSeller, isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const Service = require("../model/service");
const Shop = require("../model/shop");
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");

// create product
router.post(
    "/create-service",
    catchAsyncErrors(async (req, res, next) => {
      try {
        const shopId = req.body.shopId;
        const shop = await Shop.findById(shopId);
        if (!shop) {
          return next(new ErrorHandler("Shop Id is invalid!", 400));
        } else {
          let images = [];
  
          if (typeof req.body.images === "string") {
            images.push(req.body.images);
          } else {
            images = req.body.images;
          }
        
          const imagesLinks = [];
        
          for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
              folder: "services",
            });
        
            imagesLinks.push({
              public_id: result.public_id,
              url: result.secure_url,
            });
          }
        
          const serviceData = req.body;
          serviceData.images = imagesLinks;
          serviceData.shop = shop;
  
          const service = await Service.create(serviceData);
  
          res.status(201).json({
            success: true,
            service,
          });
        }
      } catch (error) {
        return next(new ErrorHandler(error, 400));
      }
    })
  );


// get all services of a shop

router.get(
    "/get-all-shop-services/:id",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const services = await Service.find({ shopId: req.params.id });

            res.status(201).json({
                success: true,
                services,
            });
        } catch (error) {
            return next(new ErrorHandler(error, 400));
        }
    })
);

// delete product of a shop
router.delete(
    "/delete-shop-service/:id",
    isSeller,
    catchAsyncErrors(async (req, res, next) => {
      try {
        const service = await Service.findById(req.params.id);
  
        if (!service) {
          return next(new ErrorHandler("Service not found with this id", 404));
        }    
  
        for (let i = 0; 1 < service.images.length; i++) {
          const result = await cloudinary.v2.uploader.destroy(
            service.images[i].public_id
          );
        }
      
        await service.remove();
  
        res.status(201).json({
          success: true,
          message: "Service Deleted successfully!",
        });
      } catch (error) {
        return next(new ErrorHandler(error, 400));
      }
    })
  );

// get all services
router.get(
    "/get-all-services",
    catchAsyncErrors(async (req, res, next) => {
      try {
        const services = await Service.find().sort({ createdAt: -1 });
  
        res.status(201).json({
          success: true,
          services,
        });
      } catch (error) {
        return next(new ErrorHandler(error, 400));
      }
    })
  );

  // all service --- for admin
  router.get(
    "/admin-all-services",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(async (req, res, next) => {
      try {
        const services = await Service.find().sort({
          createdAt: -1,
        });
        res.status(201).json({
          success: true,
          services,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );


module.exports = router;