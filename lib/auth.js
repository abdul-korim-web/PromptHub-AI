import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

export const auth = betterAuth({
    emailAndPassword:{
        enabled:true
    }
    ,
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  user:{
    additionalFields:{
      role:{
        typtype: "string",
        required: false,
        defaultValue: "user",
      },
      isWarned: {
        type: "boolean",
        required: false,
        defaultValue: false,
      },
      plan:{
         type: "string",
        required: false,
        defaultValue: "Free",
      }
    }
  }
});