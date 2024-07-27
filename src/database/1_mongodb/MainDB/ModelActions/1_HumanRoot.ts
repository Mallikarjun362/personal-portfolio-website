import { getMainDBModels } from "../Connection";
import { mainDbDebugErrorLog } from "../Utils";
import { MyMongoDBModel } from "../../Utils";
import { Query } from "mongoose";
import {
  EHumanRole,
  IHumanRoot,
  IInterest,
  ILocation,
} from "../../Schemas/Core/1_HumanRoot";

// HUMAN ROOT
// 1. [X] Get Identification
// 2. [X] Create
// 3. [X] Update
// 4. [X] Delete
// 5. [X] Add Interest
// 6. [X] Get Complete Details

export class HumanRootModelActions {
  static HumanRootModel: MyMongoDBModel<IHumanRoot>;

  // =====================================================================================================
  static isUserNameExists = async (userName: string): Promise<boolean> => {
    const result = await (await this.getModel())
      .findOne({ userName })
      .select({ _id: true })
      .lean()
      .exec();
    return !!result;
  };

  // =====================================================================================================
  static getModel = async (): Promise<MyMongoDBModel<IHumanRoot>> => {
    if (!HumanRootModelActions.HumanRootModel) {
      const { HumanRootModel } = await getMainDBModels();
      HumanRootModelActions.HumanRootModel = HumanRootModel;
    }
    return HumanRootModelActions.HumanRootModel;
  };

  // =====================================================================================================
  static getCompleteDetails = async (dbId: string): Promise<IHumanRoot> =>
    (await (await this.getModel()).findById(dbId).lean().exec()) as IHumanRoot;

  // =====================================================================================================
  static getIdentification = async ({
    userName,
    email,
    dbId,
  }: {
    userName?: string;
    email?: string;
    dbId?: string;
  }): Promise<{
    role: EHumanRole;
    userName: string;
    email: string;
    dbId: string;
  } | null> => {
    try {
      let query: Query<IHumanRoot, any> | undefined;
      if (dbId) {
        query = (await this.getModel()).findById(dbId);
      } else if (userName) {
        query = (await this.getModel()).findOne({ userName });
      } else if (email) {
        query = (await this.getModel()).findOne({ email });
      }
      if (query) {
        const doc = await query
          .select({ userName: true, email: true, role: true, _id: true })
          .lean()
          .exec();
        return doc
          ? {
              dbId: (doc as any)._id,
              email: doc.email,
              userName: doc.userName,
              role: doc.role,
            }
          : null;
      }
    } catch (e) {
      mainDbDebugErrorLog("Error at getIdentification function");
      return null;
    }
    return null;
  };

  // =====================================================================================================
  static createBaseUser = async ({
    role = EHumanRole.BASE,
    displayName = "",
    email,
  }: {
    displayName?: string;
    role?: EHumanRole;
    email: string;
  }): Promise<IHumanRoot> => {
    return await (
      await this.getModel()
    ).create({
      displayName,
      email,
      role,
    });
  };

  // =====================================================================================================
  static setUniqueUsername = async ({}: {
    username: string;
    dbId: string;
  }) => {};

  // =====================================================================================================
  static delete = async ({
    userName,
    email,
    dbId,
  }: {
    userName?: string;
    email?: string;
    dbId?: string;
  }) => {
    if (email) {
      await (await this.getModel()).findOneAndDelete({ email });
    } else if (userName) {
      await (await this.getModel()).findOneAndDelete({ userName });
    } else if (dbId) {
      await (await this.getModel()).findByIdAndDelete(dbId);
    }
  };

  // =====================================================================================================
  static addInterest = async ({
    interest,
    userName,
    email,
    dbId,
  }: {
    interest: IInterest;
    userName?: string;
    email?: string;
    dbId?: string;
  }) => {
    if (!dbId) {
      if (email || userName) {
        dbId = (await this.getIdentification({ email, userName }))?.dbId!;
      } else {
        return null;
      }
    }
    await (
      await this.getModel()
    ).findByIdAndUpdate(dbId, {
      $push: {
        interests: {
          skillLevel: interest.skillLevel,
          loveLevel: interest.loveLevel,
          title: interest.title,
        },
      },
    });
  };

  // =====================================================================================================
  static update = async ({
    displayName,
    location,
    userName,
    email,
    dbId,
    bio,
    dob,
  }: {
    displayName: string;
    location: ILocation;
    userName?: string;
    email?: string;
    dbId?: string;
    bio: string;
    dob: Date;
  }) => {
    if (!dbId) {
      if (email || userName) {
        dbId = (await this.getIdentification({ email, userName }))?.dbId!;
      } else {
        return null;
      }
    }
    return await (
      await this.getModel()
    )
      .findByIdAndUpdate(dbId, {
        displayName,
        bio,
        dob,
        location: {
          l3District: location.l3District,
          l1Country: location.l1Country,
          l0Planet: location.l0Planet,
          l2State: location.l2State,
          long: location.long,
          lat: location.lat,
        },
      })
      .exec();
  };
}
