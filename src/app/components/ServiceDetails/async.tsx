import services from '../__mock__/mock';
import { serviceType } from '../../types/service.type';

const mockData = services;

async function getDataUser(url: string): Promise<serviceType> {
  const res = await fetch(url);
  return res.json();
}

const mockDataX = getDataUser(mockData);


const render = async (): Promise<void> => {
  const data = await mockDataX;

  const template = '';


    users.forEach((user) => {
      if (company.uri === user.uris.company) {
        template += `
                  <table class="user">
                  <td>Name: ${user.name},</td>
                  <td>email: ${user.email}</td>
                  </table>`;
      }
    });
  });

  if (container3 != null) {
    container3.innerHTML = template;
  }
};
renderCompaniesAndItsUsers();
