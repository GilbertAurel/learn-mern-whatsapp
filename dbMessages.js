import mongoose from "mongoose";

// data schema
const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

// collections
export default mongoose.model("messagecontents", whatsappSchema);
