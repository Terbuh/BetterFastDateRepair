import React, { useState } from 'react';
import services from '../__mock__/mock';
import { ListHeight } from './service.styles';
import { ServiceListElement } from './ServiceListElement/serviceListElement';
import { SearchBar } from '../Filter/searchBar';
import { serviceType } from '../../types/service.type';

export const ServiceList: React.FC = () => {
  const [foundUsers, setFoundUsers] = useState(services);

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = services.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      return results;
    } else {
      setFoundUsers(services);
    }
  };
  const filteredUsers = filter(foundUsers);

  return (
    <ListHeight>
      <SearchBar foundUsers={foundUsers} setFoundUsers={setFoundUsers} />
      {filteredUsers.map((serviceData: serviceType) => (
        <ServiceListElement serviceData={serviceData} key={serviceData.id} />
      ))}
    </ListHeight>
  );
};
// export const ServiceList: React.FC = () => {
//   const { search } = window.location;
//   const query = new URLSearchParams(search).get('s');
//   const [searchQuery, setSearchQuery] = useState(query || '');
//   const filterPosts = (services, query) => {
//     if (!query) {
//       return services;
//     }
//
//     return services.filter((post) => {
//       const postName = post.name.toLowerCase();
//       return postName.includes(query);
//     });
//   };
//   const filteredPosts = filterPosts(services, searchQuery);
//
//   return (
//     <ListHeight>
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       {filteredPosts.map((serviceData: serviceType) => (
//         <ServiceListElement serviceData={serviceData} key={serviceData.id} />
//       ))}
//     </ListHeight>
//   );
// };
