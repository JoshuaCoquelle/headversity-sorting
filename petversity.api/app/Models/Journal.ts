import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Pet from 'App/Models/Journal'

export default class Journal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public energy?: number

  @column()
  public appetite?: number

  @column()
  public walks?: number

  @column()
  public sleep?: number

  @column()
  public petId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Pet)
  public pet: BelongsTo<typeof Pet>
}
