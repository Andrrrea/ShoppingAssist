const express = require('express');
const router = express.Router();
const products = require('../../Products');
const uuid = require('uuid');

//get all products
router.get('/', (req, res) => res.json(products));

//get a single product
router.get('/:id', (req, res) => {
    //condition that lets us know if requested id even exists (returns true or false)
    const found = products.some(products => products.id === parseInt(req.params.id));
    if (found){
        res.json(products.filter(products => products.id == parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `Kein Produkt mit der id ${req.params.id} gefunden`});
    }
});

//create (add) a product
router.post('/', (req, res) => {
    const newProduct = {
        id: uuid.v4(),
        x: req.body.x,
        y: req.body.y,
        name: req.body.name
    }
    //check that required fields are filled
    if(!newProduct.x || !newProduct.y || !newProduct.name){
        res.status(400).json({msg: 'Bitte x, y und Name angeben!'});
    } else {
    //add this new product to array of Products
    products.push(newProduct);
    res.redirect('/');
    }
  
})

module.exports = router;