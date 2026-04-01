const multer = require('multer');
const Image = require('../models/Images'); // Adjust the path as needed

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Controller to handle image uploads
exports.createImage = async (req, res) => {
    upload.fields([{ name: 'image', maxCount: 1 }, { name: 'customerId', maxCount: 1 }])(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: err.message });
        } else if (err) {
            return res.status(500).json({ error: err.message });
        }



        const customerIdKey = Object.keys(req.body).find(key => key.trim() === 'customerId');
        const customerIdValue = customerIdKey ? req.body[customerIdKey].trim() : null;

        if (!customerIdValue) {
            return res.status(400).json({ error: 'Customer ID is required' });
        }

        // Check if the image file was uploaded
        const imageFile = req.files.image && req.files.image.length > 0 ? req.files.image[0] : null;

        if (!imageFile) {
            return res.status(400).json({ error: 'Image file is required' });
        }

        // Create a new image document
        const image = new Image({
            customerId: customerIdValue, // Use the trimmed customerIdValue
            imageUrl: imageFile.path, // Save the file path
        });

        // Save the image document to the database using async/await
        try {
            const savedImage = await image.save();
            res.status(201).json({ message: 'Image uploaded successfully', savedImage });
        } catch (err) {
            console.error('Error saving image:', err); // Log the error
            return res.status(500).json({ error: 'Error saving image to the database' });
        }
    });
};
