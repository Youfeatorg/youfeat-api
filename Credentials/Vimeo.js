import Vimeo from "@vimeo/vimeo"

// Replace these with your Vimeo API credentials
const CLIENT_ID = "e9630114f474e51c1045f84b9b978b67514bcf35";
const CLIENT_SECRET =
  "5uF8SBrSdqI/LkZMP+sp6r2AqB5GApyorxvOqL9jR0k8XihHof+1iNGgdwPsdcdqeqV4EWs77ZcfuDp6SjtNLOy/quVHJK8/6qtmwHiI+D0YpS9kEDVmzuhlWf2vaMUz";
const ACCESS_TOKEN = "ce08da22c18ddceeae427885826784bd";

// Initialize the Vimeo client
const vimeo = new Vimeo.Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

export default vimeo
