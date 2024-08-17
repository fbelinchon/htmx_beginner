const createEditTemplate = (book) => /*html*/`
  <form hx-put="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML">
    <input 
      type="text"
      name="title"
      placeholder="title"
      required
      value="${book.title}"
    >
    <input 
      type="text"
      name="author"
      placeholder="author"
      required
      value="${book.author}"
    >
    <button>Guardar</button>
  </form>
`
export default createEditTemplate;
