/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hz6mdx95hqurs3w")

  // remove
  collection.schema.removeField("powqpnca")

  // remove
  collection.schema.removeField("guyhipzi")

  // remove
  collection.schema.removeField("q6d1s4zh")

  // remove
  collection.schema.removeField("ldmiqrox")

  // remove
  collection.schema.removeField("ufnblhgh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "abvxbskv",
    "name": "nom_couleur",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hz6mdx95hqurs3w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "powqpnca",
    "name": "blanc",
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
    "id": "guyhipzi",
    "name": "noir",
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
    "id": "q6d1s4zh",
    "name": "bleu",
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
    "id": "ldmiqrox",
    "name": "rose",
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
    "id": "ufnblhgh",
    "name": "jaune",
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

  // remove
  collection.schema.removeField("abvxbskv")

  // remove
  collection.schema.removeField("llkpps1u")

  return dao.saveCollection(collection)
})
