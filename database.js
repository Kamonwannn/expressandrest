const pgp = require('pg-promise')();
var db = pgp('postgres://mqvvplpgwkwaww:bbe283a5d4ce86d696c0794bfca51f66630f8553225b83bff3880b169880250a@ec2-54-243-147-162.compute-1.amazonaws.com:5432/ddhq6akm6qbbtp?ssl=true');

//PRODUCTS
//all products
function getAllsuppliers(req, res) {
    db.any('select * from Suppliers')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Suppliers'
                });
        })
        .catch(function (error) {
            res.status(500).json({
                status: 'failed',
                message: 'REST API is NOT working'
            });
        })
    }



module.exports = {
    getAllsuppliers,
   
   

};