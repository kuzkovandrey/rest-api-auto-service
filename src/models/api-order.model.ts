import { Schema as MongooseSchema } from 'mongoose';

export interface ApiOrder {
  cost: number;
  personId?: string;
  partsId?: string[];
  priceListId?: string;
  client: {
    name: string;
    email: string;
  };
  car: {
    stateNumber: string;
    model: string;
    year: number;
  };
  date?: Date;
  orderId?: string;
}

const mock: ApiOrder = {
  "cost": 100,
  "personId": "61a13a80876822827fcb9c7d",
  "partsId": [
    "61a229c0a4a448e152065614",
    "61a22a01a4a448e152065615"
  ],
  "priceListId": "61a22b44a4a448e152065618",
  "client": {
    "name": "Test1 name",
    "email": "Test1@mail.com"
  },
  "car": {
    "stateNumber": "Test1 state number",
    "model": "Test1 car model",
    "year": 1995
  }
};
