import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VoitureOccasion extends BaseSchema {
    protected tableName = 'voiture occasion'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id')
            table.string('nom_du_modèle').notNullable()
            table.string('option').notNullable()
            table.integer('prix').notNullable()
            table.string('image_galery').notNullable()
            table.integer('kilometrage').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}