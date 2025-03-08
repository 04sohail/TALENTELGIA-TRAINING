type User = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: {
        hnumber: string;
        street: string;
        city: string;   
        pincode: string;
    },
    company: {
        companyname: string;
        companywebsite: string;
        role: string;
    },
    password: string;
};
