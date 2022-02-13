import services from '../__mock__/mock';
import React from 'react';
import { useState } from 'react';
import { ListHeight, Logo } from '../ServiceList/service.styles';
import {
  MyItemFlex,
  MyListItem,
  MyListItemButton,
  MyP,
  MyLink
} from '../ServiceList/ServiceListElement/serviceListElement.styles';
import { MySearch } from './filter.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faDoorOpen,
  faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons';

function Filter() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(services);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = services.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(services);
    }
    setName(keyword);
  };

  return (
    <div>
      <MySearch
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search service"
      />

      <div>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <MyLink to={`/services/${user.id}`}>
              <MyListItemButton>
                <Logo>{React.createElement(user.icon)}</Logo>
                <MyListItem>
                  <h2>{user.name}</h2>
                </MyListItem>
                <MyItemFlex>
                  <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" />
                  <MyP>{user.spec}</MyP>
                </MyItemFlex>
                <MyItemFlex>
                  <FontAwesomeIcon icon={faDoorOpen} size="2x" />
                  <MyP> {user.open}</MyP>
                </MyItemFlex>
                <MyItemFlex>
                  <FontAwesomeIcon icon={faAt} size="2x" />
                  <MyP>{user.email}</MyP>
                </MyItemFlex>
              </MyListItemButton>
            </MyLink>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Filter;
