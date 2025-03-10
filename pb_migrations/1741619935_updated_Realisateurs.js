/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_249896144")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file208411295",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Image_R",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_249896144")

  // remove field
  collection.fields.removeById("file208411295")

  return app.save(collection)
})
