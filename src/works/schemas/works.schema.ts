import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Work {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  image_url: string;
  @Prop()
  client_url: string;
  @Prop()
  status: boolean;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
