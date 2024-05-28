import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: User) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async listRecord() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    if (!id) {
      throw new NotFoundException('User not found');
    }
    const user = this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
  }

  async update(id: string, updateUserDTO: User) {
    const existingUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDTO, { new: true })
      .exec();
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    return existingUser;
  }

  async delete(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
  }

  async paginate(
    condition: any,
    paginationParam: { page: number; limit: number },
  ) {
    const { page, limit } = paginationParam;
    const skip = (page - 1) * limit;
    const [users, total] = await Promise.all([
      this.userModel.find(condition).skip(skip).limit(limit).exec(),
      this.userModel.countDocuments(condition).exec(),
    ]);
    return {
      list: users,
      total,
      pages: Math.ceil(total / limit),
      page,
    };
  }
}
