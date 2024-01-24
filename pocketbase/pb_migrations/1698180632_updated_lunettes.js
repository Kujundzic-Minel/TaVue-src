/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x30u3b8wcsfb3gy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbmk6ed0",
    "name": "Nom",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tltpptsn",
    "name": "Prix",
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
  const collection = dao.findCollectionByNameOrId("x30u3b8wcsfb3gy")

  // remove
  collection.schema.removeField("kbmk6ed0")

  // remove
  collection.schema.removeField("tltpptsn")

  return dao.saveCollection(collection)
})
