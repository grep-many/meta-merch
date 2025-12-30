import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.status(200).json({
    message: "hello from dalle routes",
  });
});

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(404).json({ message: "invalid request format!" });

  try {
    const { data } = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const photo = data[0].b64_json;
    return res.status(200).json({
      message: "Image genration successfull",
      photo,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong while generating image!" });
  }
});

export default router;
