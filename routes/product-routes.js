const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel.js');

router.post('/create',
    (req, res) => {

        ProductModel
        .create(
            {
                package: req.body.package
            }
        )
        .then(
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }
);

// the following code is just a template and needs to be changed for the product (package, description, price)
// http://www.myapp.com/product/update
router.post('/update',
    (req, res) => {

        ProductModel
        .findOneAndUpdate(
            { 'model': 'iPhone 12' },
            {
                $set: {
                   'price': 3800 
                }
            }
        )
         // If the item is found in the database...
         .then(
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        // If the item is NOT found in the database...
        .catch(
            (error) => {
                console.log('mongoose error', error);
            }
        );

    }
);

// the following code is just a template and is not working yet. Delete has to be implemented.
// http://www.myapp.com/product/update
router.post('/delete',
    (req, res) => {

        ProductModel
        .findOneAndUpdate(
            { 'model': 'iPhone 12' },
            {
                $set: {
                   'price': 3800 
                }
            }
        )
         // If the item is found in the database...
         .then(
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        // If the item is NOT found in the database...
        .catch(
            (error) => {
                console.log('mongoose error', error);
            }
        );

    }
);

module.exports = router;