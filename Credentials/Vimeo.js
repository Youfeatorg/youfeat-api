import Vimeo from "vimeo"

// Replace these with your Vimeo API credentials
const CLIENT_ID = process.env.VIMEO_CLIENT_ID
const CLIENT_SECRET = process.env.VIMEO_CLIENT_SECRET
const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN

// Initialize the Vimeo client
const vimeo = new Vimeo.Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

export default vimeo
