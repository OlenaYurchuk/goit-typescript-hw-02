export default function SearchBar() {
  return (
    <header>
      <form >
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  )
}