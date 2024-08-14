import { Module } from '@nestjs/common';
import { WorksController } from './works.controller';
import { WorksService } from './works.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkSchema } from './schemas/works.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Work', schema: WorkSchema }])],
  controllers: [WorksController],
  providers: [WorksService],
})
export class WorksModule {}
