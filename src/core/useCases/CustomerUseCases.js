class CustomerUseController {
    constructor(CustomerService) {
        this.CustomerService = CustomerService;
    }

    async registerCustomer(customerData) {

        try {
            // Call the use case
            const newCustomer = await this.CustomerService.registerCustomer(customerData);

            return newCustomer;

        } catch (error) {
            throw new Error("User registration failed");
        }
    }
}