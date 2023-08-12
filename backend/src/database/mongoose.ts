import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://ruyter:ruyter@cluster0.cey81rd.mongodb.net/poolservice?retryWrites=true&w=majority"
    );
    console.log("[Server] => MongoDB connected!");
  } catch (error) {
    console.error(error);
  }
}
