import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

// by default NestJS will automaticlly managed and create the collection asigned to a given schema,
// it'll create singular user we create here and manageing user collection
// if you want to overwrite that behaviour pass the object to schema directory @Schema({ collection: 'asdf'})

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop([String])
  favorites: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
