/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hz6mdx95hqurs3w")

  // remove
  collection.schema.removeField("llkpps1u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bk5nz69e",
    "name": "hexa_couleur",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hz6mdx95hqurs3w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "llkpps1u",
    "name": "hexa_couleur",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("bk5nz69e")

  return dao.saveCollection(collection)
})
