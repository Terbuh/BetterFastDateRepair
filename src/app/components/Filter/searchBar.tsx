import { ReactComponentElement, ReactElement } from 'react';
import { serviceType } from '../../types/service.type';

interface Dupa {
  foundUsers: string;
}

export const SearchBar = ({ foundUsers, setFoundUsers }: Dupa) => (
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
