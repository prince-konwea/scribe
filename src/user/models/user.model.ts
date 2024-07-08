import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type userDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({type: String, default: null})
    firstName: string;
    @Prop({type: String, default: null})
    lastName: string;
    @Prop({type: String, default: null })
    occupation: string;
    @Prop({type: String, default: null})
    salary: number
}

export const UserSchema = SchemaFactory.createForClass(User)