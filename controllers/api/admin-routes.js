const router = require("express").Router();
const { Admin } = require("../../models");
const withAuth = require("../../utils/auth");
// Decide if withAuth is needed/where to put it

// GET all admins
router.get(`/`, (req, res) => {
    Admin.findAll({

    })
        .then(dbAdminData => res.json(dbAdminData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// GET a single admin by "id"
router.get(`/`, (req, res) => {
    Admin.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbAdminData => {
            if (!dbAdminData) {
                res.status(404).json({ message: `No admin found with this id` });
                return;
            }
            res.json(dbAdminData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// Create an admin
router.post(`/`, (req, res) => {
    Admin.create({
        name: req.body.name,
        // is_Admin will be true by default
        // Does the extended User info apply here as well?
        // (first_name, last_name, email, password)
        // Or do we still have to define that in Admin.js
    })
        .then(dbAdminData => res.json(dbAdminData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update an admin
router.put(`/`, (req, res) => {
    Admin.update({
        name: req.body.name
        // Does the extended User info apply here as well?
        // (first_name, last_name, email, password)
        // Or do we still have to define that in Admin.js
    })
        .then(dbAdminData => {
            if (!dbAdminData) {
                res.status(404).json({ message: `No admin found with this id` });
                return;
            }
            res.json(dbAdminData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete an admin
router.delete(`/`, (req, res) => {
    Admin.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbAdminData => {
            if (!dbAdminData) {
                res.status(404).json({ message: `No admin found with this id` });
                return;
            }
            res.json(dbAdminData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;