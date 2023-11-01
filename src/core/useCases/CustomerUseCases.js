class CustomerUseController {
    constructor(CustomerService) {
        this.CustomerService = CustomerService;
    }

    async registerCustomer(req, res) {
        // Extract data from the request
        const customerData = req.body;

        try {
            // Call the use case
            const newCustomer = await this.CustomerService.registerCustomer(customerData);

            return newCustomer;

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}