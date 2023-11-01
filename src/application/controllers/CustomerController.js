class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }

    async registerCustomer(req, res) {
        // Extract data from the request
        const customerData = req.body;

        try {
            // Call the use case
            const newCustomer = await this.customerService.registerCustomer(customerData);

            // Send the response
            res.status(201).json(newCustomer);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = CustomerController;