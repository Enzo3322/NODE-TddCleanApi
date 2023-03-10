import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
	async hash(): Promise<string> {
		return new Promise(resolve => resolve('hash'))
	}
}))

const makeSut = (): BcryptAdapter => {
	return new BcryptAdapter(12)
}

describe('BcryptAdapter', () => {
	test('Should call bcrypt with correct value', async () => {
		const sut = makeSut()
		const hashSpy = jest.spyOn(bcrypt, 'hash')
		await sut.encrypt('any_value')
		expect(hashSpy).toHaveBeenCalledWith('any_value', 12)
	})

	test('Should return a hash on success', async () => {
		const sut = makeSut()
		const hash = await sut.encrypt('any_value')
		expect(hash).toBe('hash')
	})
})
