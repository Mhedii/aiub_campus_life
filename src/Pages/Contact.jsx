import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [captchaToken, setCaptchaToken] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (data) => {
    if (!captchaToken) {
      setSubmitMessage("Please complete the CAPTCHA");
      return;
    }

    const formData = {
      ...data,
      "g-recaptcha-response": captchaToken,
    };

    try {
      const response = await fetch("https://formspree.io/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Your inquiry has been submitted successfully.");
      } else {
        setSubmitMessage(
          "There was an issue submitting your inquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmitMessage(
        "There was an issue submitting your inquiry. Please try again."
      );
    }
  };

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
    >
      <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="input input-bordered w-full"
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <GoogleReCaptcha onVerify={handleCaptchaVerify} />
          <button
            type="submit"
            className="btn bg-primary hover:bg-primary hover:opacity-90 w-full text-2xl font-bold text-white"
          >
            Submit
          </button>
        </form>
        {submitMessage && <p className="mt-4 text-center">{submitMessage}</p>}
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
