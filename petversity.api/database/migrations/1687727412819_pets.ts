import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pets extends BaseSchema {
  protected tableName = 'pets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('species').nullable()
      table.string('breed').nullable()
      table.string('gender').nullable()
      table.integer('age').nullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
