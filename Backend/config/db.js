import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://ammch101:XwNPNgCp7GawJEsD@lms101.zd8ok.mongodb.net/"
  );
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectDB;
