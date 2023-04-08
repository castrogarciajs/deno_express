import mongoose from "npm:mongoose";

try {
  await mongoose.connect("mongodb://127.0.0.1/mydeno");
  console.log("succesfully");
} catch (error) {
  console.log(error.message);
}
