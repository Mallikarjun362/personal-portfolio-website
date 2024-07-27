import { HumanRootModelActions } from "@/database/1_mongodb/MainDB/ModelActions/1_HumanRoot";
import { EHumanRole } from "@/database/1_mongodb/Schemas/Core/1_HumanRoot";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import {
  GOOGLE_OAUTH_CLIENT_SECRET,
  GOOGLE_OAUTH_CLIENT_ID,
  SERVER_SECRET,
  MASTER_EMAIL,
} from "@/utils/Constants";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  secret: SERVER_SECRET,
  providers: [
    GoogleProvider({
      httpOptions: {
        timeout: 10000,
      },
      clientId: GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
      async profile(user_profile) {
        let custome_data: { role: EHumanRole; userName: string; dbId: string };
        const email = user_profile.email;
        // CHECK IF THE USER EXISTS
        const theUser = await HumanRootModelActions.getIdentification({
          email,
        });
        if (theUser) {
          // USER ALREADY EXISTS
          custome_data = {
            userName: theUser.userName,
            dbId: theUser.dbId,
            role: theUser.role,
          };
        } else {
          // CREATING NEW USER
          let userRole =
            email === MASTER_EMAIL ? EHumanRole.MASTER : EHumanRole.BASE;
          const newUser = await HumanRootModelActions.createBaseUser({
            displayName: user_profile.name,
            email: user_profile?.email,
            role: userRole,
          });
          custome_data = {
            dbId: (newUser as any)?._id?.toString(),
            userName: newUser.userName,
            role: newUser.role,
          };
        }
        return { ...user_profile, id: user_profile.sub, custome_data };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.custome_data = (user as any)?.custome_data;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).custome_data = (token as any)?.custome_data;
      }
      return session;
    },
  },
};
