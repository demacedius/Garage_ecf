import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VoituresOccasion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nom_du_modèle: string

  @column()
  public option: string

  @column()
  public image: string

  @column()
  public kilometrage: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
