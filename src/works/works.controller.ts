import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WorksService } from './works.service';
import { Work } from './schemas/works.schema';
import { CreateWorksDto } from './dto/create-works.dto';
import { UpdateWorksDto } from './dto/update-works.dto';

@Controller('works')
export class WorksController {
  constructor(private worksServices: WorksService) {}

  @Get()
  async getAllWorks(): Promise<Work[]> {
    return this.worksServices.findAll();
  }

  @Post()
  async createWorks(
    @Body()
    work: CreateWorksDto,
  ): Promise<Work> {
    return this.worksServices.create(work);
  }

  @Get(':id')
  async getWork(
    @Param('id')
    id: string,
  ): Promise<Work> {
    return this.worksServices.findById(id);
  }

  @Put(':id')
  async updateWorks(
    @Param('id')
    id: string,
    @Body()
    work: UpdateWorksDto,
  ): Promise<Work> {
    return this.worksServices.updateById(id, work);
  }

  @Delete(':id')
  async deleteWork(
    @Param('id')
    id: string,
  ): Promise<Work> {
    return this.worksServices.deleteById(id);
  }
}
