import { MongoClient } from "mongodb"

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}
export const MongoHelper = {
	client: null as MongoClient,

	async connect (uri: string) {
		this.client = await MongoClient.connect(uri, options)
	},

	async disconnect (): Promise<void>  {
		await this.client.close()
	},

	async getCollection (name: string): Promise<any> {
		return this.client.db().collection(name)
	},

	map (collection: any): any {
		const { _id, ...collectionWithoutId } = collection
		return Object.assign({}, collectionWithoutId, { id: _id })
	}
}
