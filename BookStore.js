class BookStore {
  api() {
    return fetch("http://localhost:3005/books/").then((response) => {
      return response.json();
    });
  }
}
export default BookStore;
