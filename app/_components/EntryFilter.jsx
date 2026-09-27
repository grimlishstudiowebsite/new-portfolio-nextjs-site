function EntryFilter({ category }) {
  return (
    <form
      action="/entries"
      method="get"
      className="mb-4 flex items-center justify-around tab-sm:justify-evenly"
    >
      <label htmlFor="category">Category</label>
      <select name="category" id="category" defaultValue={category}>
        <option value="">All Categories</option>
        <option value="movie">Movies</option>
        <option value="music">Music</option>
        <option value="sport">Sport</option>
      </select>
      <button
        className="rounded bg-primary px-1 py-0.5 text-primary-light"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default EntryFilter;
