import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:7070/api/',
    timeout: 15000,
});

export default class ProductService {
    static async getHits() {
        const response = await instance.get('top-sales');
        return response.data;
    }

    static async getCategories() {
        const response = await instance.get('categories');
        return response.data;
    }

    static async getItems(category, searchInput) {
        const response = await instance.get(`items${category ? '?categoryId=' + category : ''}`);
        return response.data;
    }

    static async getMore(category, offset, searchInput) {
        let url = 'items';
        if (category) {
            url += '?categoryId=' + category;
            if (searchInput) url += '&q=' + searchInput;
            if (offset) url += '&offset=' + offset;
        }
        else {
            if (searchInput) {
                url += '?q=' + searchInput
                if (offset) url += '&offset=' + offset;
            } else {
                if (offset) url += '?offset=' + offset;
            };
        };

        const response = await instance.get(url);
        return response.data;
    }


    static async getCard(id) {
        const response = await instance.get('items/' + id);
        return response.data;
    }

    static async postOrder(order) {
        const response = await instance.post('order', order);
        return response;
    }
}