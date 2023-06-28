import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PetFactory from 'Database/factories/PetFactory'

export default class extends BaseSeeder {
  public async run() {
    await PetFactory.createMany(5)
  }
}
