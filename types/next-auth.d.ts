import { EHumanRole } from "@/database/1_mongodb/Schemas/Core/1_HumanRoot";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name: string;
      image: any;
      custome_data: {
        role: EHumanRole;
        userName: string;
        dbId: string;
      };
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    custome_data?: {
      userName: string;
      role: EHumanRole;
      dbId: string;
    };
  }
}
