export interface User {
    id: Number;
    name: String;
    username: String;
    email: String;
    address: String[] ; 
    telephone:Telephone[] ; 
}

export interface Telephone {
    cellphone: String ; 
    stable: String;
    ide: Number; 
} 

// this is the interface we use for the Users 