/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text814225084",
    "max": 0,
    "min": 0,
    "name": "Nom_I",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3565770779",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Photo_I",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor2289812834",
    "maxSize": 0,
    "name": "Biographie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_91977388",
    "hidden": false,
    "id": "relation3688196753",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Film_associe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2427533966",
    "hidden": false,
    "id": "relation2126714546",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Activite_associe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // remove field
  collection.fields.removeById("text814225084")

  // remove field
  collection.fields.removeById("file3565770779")

  // remove field
  collection.fields.removeById("editor2289812834")

  // remove field
  collection.fields.removeById("relation3688196753")

  // remove field
  collection.fields.removeById("relation2126714546")

  return app.save(collection)
})
