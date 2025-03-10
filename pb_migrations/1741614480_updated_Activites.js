/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3666696966",
    "max": 0,
    "min": 0,
    "name": "Titre_A",
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
    "id": "date400603577",
    "max": "",
    "min": "",
    "name": "Date_A",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_249896144",
    "hidden": false,
    "id": "relation1189814951",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Invite_associe_R",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2452428166",
    "hidden": false,
    "id": "relation3431918411",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Invite_associe_I",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // remove field
  collection.fields.removeById("text3666696966")

  // remove field
  collection.fields.removeById("date400603577")

  // remove field
  collection.fields.removeById("relation1189814951")

  // remove field
  collection.fields.removeById("relation3431918411")

  return app.save(collection)
})
