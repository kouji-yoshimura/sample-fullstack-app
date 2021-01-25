import { User } from "../domain/entities/user"
import { UserId } from "../domain/valueObjects"

export interface IUserRepo {
  create(user: User): Promise<void>
  findOneByPk(pk: UserId, options?: UserFindAllOption): Promise<User | undefined>
}

export interface UserFindAllOption {

}
