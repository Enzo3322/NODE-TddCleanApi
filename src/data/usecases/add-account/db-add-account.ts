import { AddAccount, AddAccountModel } from "../../../domain/usecases/add-account"
import { AccountModel } from "../../../domain/models/account"
import { Encrypter } from "../../protocols/encrypter"

export class DbAddAccount implements AddAccount {
	constructor(
		private readonly encrypter: Encrypter,
	) { }

	async add(accountData: AddAccountModel): Promise<AccountModel> {
		await this.encrypter.encrypt(accountData.password)
		return new Promise(resolve => resolve(null))
	}
}