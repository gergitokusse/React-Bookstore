function InputNewBook() {
  return (
    <div>
      <h2>Add new Book</h2>
      <form name="addnewbook" id="myform">
        <input type="text" />
        <select>
          <option value="" key="">Option-1</option>
          <option value="" key="">Option-1</option>
          <option value="" key="">Option-1</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default InputNewBook;
