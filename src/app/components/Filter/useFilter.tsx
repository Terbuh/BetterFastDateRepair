import services from '../__mock__/mock';
import React, { useState } from 'react';
import { MySearch } from './filter.styles';
import { ServiceList } from '../ServiceList/serviceList';

export function useFilter() {
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
            <ServiceList>{user.description}</ServiceList>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}
