class CustomerService {
    constructor(db) {
        this.db = db;
    }

    async registerCustomer(customerData) {
        const { first_name, last_name, location, contact_number, id_number, email, id_photo } = customerData;

        try {
            // basic validation
            if (!first_name || !last_name || !contact_number || !id_number) {
                throw new Error("Invalid input data");
            }

            const query =
                "INSERT INTO customers (first_name, last_name, location, contact_number,id_number, email, id_photo) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const values = [first_name, last_name, location, contact_number, id_number, email, id_photo];
                
            // Execute the SQL query using the database connection
            const [result] = await this.db.execute(query, values);

            return result;
        } catch (error) {
            throw new Error("Customer registration failed", error);
        }
    }
}