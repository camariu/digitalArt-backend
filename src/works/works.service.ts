import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Work } from './schemas/works.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class WorksService {
  constructor(
    @InjectModel(Work.name)
    private workModel: mongoose.Model<Work>,
  ) {}

  async findAll(): Promise<Work[]> {
    const works = await this.workModel.find();
    return works;
  }

  async create(works: Work): Promise<Work> {
    const res = await this.workModel.create(works);
    return res;
  }
  async findById(id: string): Promise<Work> {
    const work = await this.workModel.findById(id);
    if (!work) {
      throw new NotFoundException('Work not found');
    }
    return work;
  }

  async updateById(id: string, work: Work): Promise<Work> {
    return await this.workModel.findByIdAndUpdate(id, work, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Work> {
    return await this.workModel.findByIdAndDelete(id);
  }
}
