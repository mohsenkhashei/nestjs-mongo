import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';

@Injectable()
export class UserRepository extends EntityRepository<UserDocument> {
  private readonly logger = new Logger(UserRepository.name);
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
