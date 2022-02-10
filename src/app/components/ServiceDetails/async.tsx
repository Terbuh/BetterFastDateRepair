import services from '../__mock__/mock';
import { serviceType } from '../../types/service.type';

// const mockData = services;

export async function GetServiceData(id: number): Promise<serviceType[]> {
  const userData = await services;
  return userData;
}
