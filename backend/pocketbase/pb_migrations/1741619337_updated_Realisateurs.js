/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_249896144")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date1253733297",
    "max": "",
    "min": "",
    "name": "Date_naissance_R",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_249896144")

  // remove field
  collection.fields.removeById("date1253733297")

  return app.save(collection)
})
