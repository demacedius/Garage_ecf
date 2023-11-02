import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Services extends BaseSchema {
    protected tableName = 'services'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id')
            table.bigInteger('nom').notNullable()
            table.bigInteger('description').notNullable()
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}