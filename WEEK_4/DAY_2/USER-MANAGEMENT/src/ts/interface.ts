interface Users {
    "UID": string,
    "first_name": string
    "last_name": string,
    "email": string,
    "phone": string,
    "address": {
        "hnumber": string,
        "street": string,
        "city": string,
        "pincode": string
    },
    "company": {
        "companyname": string,
        "role": string,
        "companywebsite": string
    },
    "password": string
}


export { Users }