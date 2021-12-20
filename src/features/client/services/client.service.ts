import { ClientModel } from './../models/client.model';
import { ClientDto } from './../dto/client.dto';
import { Client, ClientDocument } from './../schemas/client.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>
  ) {}

  async createClient(client: ClientDto): Promise<ClientModel> {
    const createdClient = new this.clientModel({
      ...client,
      carId: new Types.ObjectId(client.carId)
    });
    return createdClient.save();
  }

  async getAllClients(): Promise<ClientModel[]> {
    return this.clientModel.find().exec();
  }

}
