import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'id' | 'email' | 'password'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  private _id: number;
  private _email: string;
  private _password: string;

  private readonly _createdAt!: Date;
  private readonly _updatedAt!: Date;

  public get id() {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get email() {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password() {
    return this._password;
  }

  public set password(value: string) {
    this.password = value;
  }

  public get createdAt() {
    return this._createdAt;
  }

  public get updatedAt() {
    return this._updatedAt;
  }

}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
