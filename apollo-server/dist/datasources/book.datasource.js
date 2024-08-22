"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
const environment_1 = require("../config/environment");
class OpenLibraryAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = environment_1.environment.OPEN_LIBRARY_API_URL;
    }
    // Fetch book data by ISBN
    async getBookByISBN(isbn) {
        const response = await this.get(`api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
        const bookData = response[`ISBN:${isbn}`];
        return {
            title: bookData.title || 'Unknown Title',
            authors: bookData.authors?.map((author) => author.name) || ['Unknown Author'],
            publishers: bookData.publishers?.map((publisher) => publisher.name) || ['Unknown Publisher'],
            publish_date: bookData.publish_date || 'Unknown Date',
            cover: bookData.cover?.large || '',
        };
    }
}
exports.default = OpenLibraryAPI;
