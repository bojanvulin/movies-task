import { Repository } from "typeorm";
import { User } from "./user.entity";

export class UserRepo {
    constructor(private repo: Repository<User>) {}

    validateUser() {}
}