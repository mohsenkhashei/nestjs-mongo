import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class UserRepository {
  private readonly logger = new Logger(UserRepository.name);
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findOne(userFilerQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(userFilerQuery);
  }
  find(userFilerQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(userFilerQuery);
  }
  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    this.logger.log(newUser);
    return newUser.save();
  }
  async findOneAndUpdate(
    userFilterQuery: FilterQuery<User>,
    user: Partial<User>,
  ): Promise<User> {
    this.logger.log(userFilterQuery, user);
    return this.userModel.findOneAndUpdate(userFilterQuery, user, {
      new: true,
    });
  }
}
