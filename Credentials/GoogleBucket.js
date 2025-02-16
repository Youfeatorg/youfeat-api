import {Storage} from "@google-cloud/storage"


const storage = new Storage({
  projectId: "youfeat",
  keyFilename: "../youfeat.json"
})

const bucket = storage.bucket("youfea-tvideo_bucketcom");

export default bucket