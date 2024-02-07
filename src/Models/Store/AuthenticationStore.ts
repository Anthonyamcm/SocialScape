import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { IUser } from "../../Utils/interfaces"
import { USER_KEY, TOKEN_KEY } from '../../Utils/index';
import * as storage from "../../Utils/index"


const UserModel = types.model({
    user_id: types.number,
    first_name: types.string,
    last_name: types.string,
    email: types.string,
    profile_picture_url: types.maybeNull(types.string)
    // Add other user fields as needed
  });

export const AuthenticationStore = types
  .model("AuthenticationStore")
  .props({
    user: types.maybeNull(UserModel),
    authToken: types.maybeNull(types.string),
    
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    }
  }))
  .actions((store) => ({
    setUserAndToken: (user: IUser, token: string) => {
        store.authToken = token;
        store.user = UserModel.create(user); // Assuming 'user' is an object with id, name, and email
        storage.saveString(TOKEN_KEY, token)
        storage.save(USER_KEY, JSON.stringify(user))
      },
      clearUserAndToken: () => {
        store.authToken = null;
        store.user = null;
        storage.remove(TOKEN_KEY)
        storage.remove(USER_KEY)
      },
      loadUserAndToken: async () => {
        const token = await storage.loadString(TOKEN_KEY)
        const user = await storage.load(USER_KEY) as IUser
        if (token && user ) {
          store.authToken = token;
          store.user = UserModel.create(user); // Restore user data from JSON
        }
      },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStore> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStore> {}

// @demo remove-file
