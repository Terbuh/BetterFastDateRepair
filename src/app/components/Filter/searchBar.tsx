export const SearchBar = ({ foundUsers, setFoundUsers }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search blog posts</span>
    </label>
    <input
      value={foundUsers}
      onChange={(e) => setFoundUsers(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);
