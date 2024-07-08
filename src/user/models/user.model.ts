import { Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type userDocument = HydratedDocument<User>;

@Schema()
