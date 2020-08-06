import { InMemoryDbService } from 'angular-in-memory-web-api';


import { ECommerceFakeDb } from './e-commerce';
import { CustomerFakeDb } from './customer'


export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            // Dashboards


            // E-Commerce
            'e-commerce-products': ECommerceFakeDb.products,
            'e-commerce-orders': ECommerceFakeDb.orders,

            //customer
            'customers': CustomerFakeDb.customers
        };
    }
}
