/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2974020989",
    "maxSelect": 1,
    "name": "Categorie_F",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Action",
      "Historique",
      "Surnaturel"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("select2974020989")

  return app.save(collection)
})
