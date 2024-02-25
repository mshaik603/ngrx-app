export interface geo{
    lat:string,
    lng:string
}
export interface address{
    street:string,
    suite:string,
    city:string,
    zipCode:string,
    geo:geo
}
export interface company{
    name:string,
    catchPharse:string,
    bs:string
}
export interface userModel{
    id:number,
    name:string,
    username:string,
    email:string,
    address:address,
    phone:string,
    website:string,
    company:company
}