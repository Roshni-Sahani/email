// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export const ContactUs = () => {
//   const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm("service_0wuzpsi", "template_461i3f2", form.current, {
//       publicKey: "JHmRBCSILCLTZZo-G",
//     })
//     .then(
//       () => {
//         console.log("SUCCESS!");
//       },
//       (error) => {
//         console.log("FAILED.. .", error.text);
//       }
//     );
// };

//   return (
//     <div className=" flex justify-center mx-auto w-[500px] container items-center min-h-screen">
//       <form ref={form} onSubmit={sendEmail} className=" w-full mx-auto">
//         <div className="w-full">
//           <div className="w-full">
//             <label>Name</label>
//           </div>
//           <input
//             type="text"
//             name="user_name"
//             className="border border-solid border-black h-[50px] w-full"
//           />
//         </div>
//         <div className="w-full">
//           <div className="w-full">
//             <label>Email</label>
//           </div>
//           <input
//             type="email"
//             name="user_email"
//             className="border border-solid border-black h-[50px] w-full"
//           />
//         </div>
//         <div className="w-full">
//           <div>
//             <label>Message</label>
//           </div>
//           <textarea
//             name="message"
//             className="border border-solid border-black !h-[80px] w-full resize-none"
//           />
//         </div>
//         <div className="w-full">
//           <input
//             type="submit"
//             value="Send"
//             className="bg-blue text-white cursor-pointer rounded-md px-5 py-3"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };
