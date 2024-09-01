const packageModel = require("../models/Package");
const serviceModel = require("../models/Service");

class PackageController {
    get(id = null) {
        return new Promise((resolve, reject) => {
            try {
                if (id === null) {
                    // If no id is provided, find all documents
                    packageModel.find().populate({path: 'services', select: 'name -_id' })
                        .then((result) => {
                            if (result.length > 0) {
                                resolve(result); // Return all documents
                            } else {
                                resolve("No packages found");
                            }
                        })
                        .catch((error) => {
                            reject(error);
                        });
                } else {
                    // If an id is provided, find the document by id
                    packageModel.findById(id).populate({path: 'services', select: 'name -_id' })
                        .then((result) => {
                            if (result) {
                                resolve(result); // Return the found document
                            } else {
                                resolve("No package found with the given ID");
                            }
                        })
                        .catch((error) => {
                            reject(error);
                        });
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    async store(data) {
        try {
            const Package = new packageModel({
                ...data
            });

            await Package.save(); // No more callback, using await here
            return "Package Created";
        } catch (error) {
            console.error("Error in store method:", error); // Log the error
            throw "Unable to Create a Package";
        }
    }
}

module.exports = PackageController;
