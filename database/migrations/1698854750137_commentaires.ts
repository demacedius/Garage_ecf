import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Commentaire extends BaseSchema {
    protected tableName = 'commentaire'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id')
            table.string('nom').notNullable()
            table.text('content').notNullable()
            table.integer('note').notNullable()
            table.integer('status').notNullable().defaultTo(false)
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}