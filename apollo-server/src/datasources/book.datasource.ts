import { RESTDataSource } from '@apollo/datasource-rest';
import { environment } from '../config/environment';
class OpenLibraryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.OPEN_LIBRARY_API_URL;
  }

  // Fetch book data by ISBN
  async getBookByISBN(isbn: string) {
    const response = await this.get(`api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
    const bookData = response[`ISBN:${isbn}`];

    return {
      title: bookData.title || 'Unknown Title',
      authors: bookData.authors?.map((author: any) => author.name) || ['Unknown Author'],
      publishers: bookData.publishers?.map((publisher: any) => publisher.name) || ['Unknown Publisher'],
      publish_date: bookData.publish_date || 'Unknown Date',
      cover: bookData.cover?.large || '',
    };
  }
}

export default OpenLibraryAPI;
