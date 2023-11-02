import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Commentaire extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() 
  public nom: string

  @column ()
  public content: string

  @column ()
  public note: number

  @column()
  public status: boolean
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
