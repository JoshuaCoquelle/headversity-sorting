import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import JournalFactory from 'Database/factories/JournalFactory'

export default class extends BaseSeeder {
  public async run() {
    await JournalFactory.createMany(50)
  }
}
