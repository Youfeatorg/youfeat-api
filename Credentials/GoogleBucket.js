import {Storage} from "@google-cloud/storage"


const storage = new Storage({
  projectId: "youfeat",
  keyFilename: "youfeat"
})

const bucket = storage.bucket("youfea-tvideo_bucketcom");

export default bucket