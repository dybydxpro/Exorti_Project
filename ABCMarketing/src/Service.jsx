import http from "./http-common";

class Service {
    //Customer API Connection
    customerGetAll() {
        return http.get("/Customer");
    }

    customerGet(id) {
        return http.get(`/Customer/${id}`);
    }

    customerCreate(data) {
        return http.post("/Customer", data);
    }

    customerUpdate(data) {
        return http.put(`/Customer`, data);
    }

    customerDelete(id) {
        return http.delete(`/Customer/${id}`);
    }
    customerMaxId(){
        return http.get("/Customer/maxId");
    }

    //Contact API Connection
    contactGetAll() {
        return http.get("/Contact");
    }

    contactGet(id) {
        return http.get(`/Contact/${id}`);
    }

    contactCreate(data) {
        return http.post("/Contact", data);
    }

    contactUpdate(data) {
        return http.put(`/Contact`, data);
    }

    contactDelete(id) {
        return http.delete(`/Contact/${id}`);
    }

    contactGetByCustomerID(id){
        return http.get(`/Contact/getByCustomerID/${id}`);
    }

    contactDeleteByCustomerID(id){
        return http.delete(`/Contact/deleteByCustomerID/${id}`);
    }

    //Address API Connection
    addressGetAll() {
        return http.get("/Address");
    }

    addressGet(id) {
        return http.get(`/Address/${id}`);
    }

    addressCreate(data) {
        return http.post("/Address", data);
    }

    addressUpdate(data) {
        return http.put(`/Address`, data);
    }

    addressDelete(id) {
        return http.delete(`/Address/${id}`);
    }

    addressGetByCustomerID(id){
        return http.get(`/Address/getByCustomerID/${id}`);
    }

    addressDeleteByCustomerID(id){
        return http.delete(`/Address/deleteByCustomerID/${id}`);
    }
}

export default new Service();