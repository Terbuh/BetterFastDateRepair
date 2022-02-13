import services from '../__mock__/mock';
import React from 'react';
import { useState } from 'react';
import { ListHeight, Logo } from '../ServiceList/service.styles';
import {
  MyItemFlex,
  MyListItem,
  MyListItemButton,
  MyP
} from '../ServiceList/ServiceListElement/serviceListElement.styles';
import { Link } from 'react-router-dom';

function Filter() {
  // the value of the search field
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(services);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = services.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(services);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search service"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <Link to={`/services/${user.id}`}>
              <MyListItemButton>
                <Logo>{React.createElement(user.icon)}</Logo>
                <MyListItem>
                  <h2>{user.name}</h2>
                </MyListItem>
                <MyItemFlex>
                  Main specialization in - <MyP>{user.spec}</MyP>
                </MyItemFlex>
                <MyListItem>Service is open at: {user.open}</MyListItem>
                <MyItemFlex>
                  Email to contact: <MyP>{user.email}</MyP>
                </MyItemFlex>
              </MyListItemButton>
            </Link>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Filter;
