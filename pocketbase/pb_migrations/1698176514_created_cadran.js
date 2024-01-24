/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yg75xia4kdskoq6",
    "created": "2023-10-24 19:41:54.206Z",
    "updated": "2023-10-24 19:41:54.206Z",
    "name": "cadran",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pfocl8za",
        "name": "rectangle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dny7rryo",
        "name": "rond",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "od7yflze",
        "name": "ovale",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yg75xia4kdskoq6");

  return dao.deleteCollection(collection);
})
