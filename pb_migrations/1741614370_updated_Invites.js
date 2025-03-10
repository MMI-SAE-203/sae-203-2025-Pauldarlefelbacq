/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

  // remove field
  collection.fields.removeById("relation3688196753")

  // remove field
  collection.fields.removeById("relation2126714546")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2452428166")

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
})
