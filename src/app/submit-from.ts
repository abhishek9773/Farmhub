// pages/api/submit-form.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { recaptchaValue } = req.body;

  if (!recaptchaValue) {
    return res.status(400).json({ message: "CAPTCHA token is missing" });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaValue,
        },
      }
    );

    if (response.data.success) {
      return res.status(200).json({ message: "Form submission successful" });
    } else {
      return res.status(400).json({ message: "CAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("Error verifying CAPTCHA:", error);
    return res.status(500).json({ message: "Error verifying CAPTCHA" });
  }
}
