"use server";
import { HumanRootModelActions } from "@/database/1_mongodb/MainDB/ModelActions/1_HumanRoot";
import { getMainDBModels } from "@/database/1_mongodb/MainDB/Connection";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { toJSON } from "@/utils";
import {
  EHumanRole,
  IHumanRoot,
} from "@/database/1_mongodb/Schemas/Core/1_HumanRoot";

export const getCurrentUserDetails = async (): Promise<IHumanRoot | null> => {
  const session = await getServerSession(authOptions);
  return session
    ? toJSON(
        await HumanRootModelActions.getCompleteDetails(
          session.user.custome_data.dbId
        )
      )
    : null;
};

export const getCurrentUserDetailsPublic = async (
  userName: string
): Promise<IHumanRoot | null> => {
  const session = await getServerSession(authOptions);
  const { HumanRootModel } = await getMainDBModels();
  return session
    ? toJSON(
        await HumanRootModel.findOne({ userName })
          .select({
            email: true,
            _id: false,
            bio: true,
          })
          .lean()
          .exec()
      )
    : null;
};

export const checkIsUserNameExists = async (
  userName: string
): Promise<boolean> => {
  const result = await HumanRootModelActions.isUserNameExists(userName);
  return false;
};

const validateUserName = (s: string) => {
  const x = /^([a-z]|[A-Z]|[0-9]|_|\.)*$/.test(s);
  if (x && 3 <= s.length && s.length <= 30) {
    return true;
  }
  return false;
};

// SUCCESS OR FAILURE
export const setUserNameDB = async (userName: string): Promise<boolean> => {
  const session = await getServerSession(authOptions);
  if (!validateUserName(userName)) {
    return false;
  }
  if (!session) {
    return false;
  }
  if (session?.user?.custome_data?.userName) {
    return false;
  } else {
    try {
      const { HumanRootModel } = await getMainDBModels();
      await HumanRootModel.findByIdAndUpdate(session.user.custome_data.dbId, {
        userName: userName,
        ...(session.user.custome_data.role === EHumanRole.BASE
          ? { role: EHumanRole.HUMAN }
          : {}),
      });
      return true;
    } catch {
      return false;
    }
  }
};
