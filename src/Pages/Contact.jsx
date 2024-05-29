// import React, { useRef } from "react";
// import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "../components/ContactForm";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const form = useRef();

//   const sendEmail = (data, e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         `${process.env.REACT_APP_SERVICE_ID}`,
//         `${process.env.REACT_APP_TEMPLATE_ID}`,
//         form.current,
//         `${process.env.REACT_APP_PUBLIC_KEY}`
//       )

//       .then(
//         (result) => {
//           toast.success("Your inquiry has been submitted successfully.");
//         },
//         (error) => {
//           toast.error(
//             "There was an issue submitting your inquiry. Please try again."
//           );
//         }
//       );
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="max-w-lg w-full mx-auto mt-10 p-4 border rounded shadow-lg bg-white">
//         <h2 className="text-3xl font-bold mb-4 text-center text-primary ">
//           Contact Us
//         </h2>
//         <form
//           ref={form}
//           onSubmit={handleSubmit(sendEmail)}
//           className="space-y-4"
//         >
//           <div>
//             <label className="block font-medium mb-1" htmlFor="name">
//               Name
//             </label>
//             <input
//               id="name"
//               {...register("name", { required: "Name is required" })}
//               className="input input-bordered w-full"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium mb-1" htmlFor="email">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                   message: "Invalid email address",
//                 },
//               })}
//               className="input input-bordered w-full"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium mb-1" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               {...register("message", { required: "Message is required" })}
//               className="input input-bordered w-full"
//               rows="5"
//             ></textarea>
//             {errors.message && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.message.message}
//               </p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="btn bg-primary hover:bg-primary hover:opacity-90 w-full text-2xl font-bold text-white"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// New
// import React, { useRef, useState } from "react";
// import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
// import {
//   GoogleReCaptchaProvider,
//   useGoogleReCaptcha,
// } from "react-google-recaptcha-v3";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const form = useRef();
//   const { executeRecaptcha } = useGoogleReCaptcha();
//   const [captchaToken, setCaptchaToken] = useState(null);

//   const sendEmail = async (data, e) => {
//     e.preventDefault();

//     if (!executeRecaptcha) {
//       toast.error("Recaptcha has not been loaded");
//       return;
//     }

//     const token = await executeRecaptcha("contactForm");
//     setCaptchaToken(token);

//     emailjs
//       .sendForm(
//         `${process.env.REACT_APP_SERVICE_ID}`,
//         `${process.env.REACT_APP_TEMPLATE_ID}`,
//         form.current,
//         `${process.env.REACT_APP_PUBLIC_KEY}`
//       )
//       .then(
//         (result) => {
//           toast.success("Your inquiry has been submitted successfully.");
//         },
//         (error) => {
//           toast.error(
//             "There was an issue submitting your inquiry. Please try again."
//           );
//         }
//       );
//   };

//   return (
//     <GoogleReCaptchaProvider
//       reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
//     >
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="max-w-lg w-full mx-auto mt-10 p-4 border rounded shadow-lg bg-white">
//           <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
//           <form
//             ref={form}
//             onSubmit={handleSubmit(sendEmail)}
//             className="space-y-4"
//           >
//             <div>
//               <label className="block font-medium mb-1" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 {...register("name", { required: "Name is required" })}
//                 className="input input-bordered w-full"
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.name.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <label className="block font-medium mb-1" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                     message: "Invalid email address",
//                   },
//                 })}
//                 className="input input-bordered w-full"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <label className="block font-medium mb-1" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 {...register("message", { required: "Message is required" })}
//                 className="input input-bordered w-full"
//                 rows="5"
//               ></textarea>
//               {errors.message && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.message.message}
//                 </p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="btn bg-primary hover:bg-primary hover:opacity-90 w-full text-2xl font-bold text-white"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </GoogleReCaptchaProvider>
//   );
// };

// export default Contact;

const Contact = () => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
  >
    <ContactForm />
  </GoogleReCaptchaProvider>
);

export default Contact;
