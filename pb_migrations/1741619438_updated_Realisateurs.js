/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_249896144")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool3728534004",
    "name": "Est_Invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_249896144")

  // remove field
  collection.fields.removeById("bool3728534004")

  return app.save(collection)
})
