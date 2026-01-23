// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { Mail, AlertCircle, Shield, ArrowLeft } from "lucide-react";
// import { forgotPassword } from "../api/auth.api"; // adjust path if needed

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       await forgotPassword({ email });

//       toast.success("Password reset link sent to your email", {
//         duration: 3000,
//         style: {
//           background: "#dbeafe",
//           border: "1px solid #3b82f6",
//           color: "#1e293b",
//         },
//       });

//       setTimeout(() => {
//         navigate("/login");
//       }, 1500);
//     } catch (err: any) {
//       const errorMessage =
//         err.response?.data?.message ||
//         "Failed to send reset link. Please try again.";
//       setError(errorMessage);
//       toast.error(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
        
//         {/* Left Side - Branding */}
//         <div className="bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-600 p-12 flex flex-col justify-between text-white">
//           <div>
//             <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
//               <Shield className="w-10 h-10 text-white" strokeWidth={2} />
//             </div>

//             <h1 className="text-5xl font-bold mb-6 leading-tight">
//               Forgot Your<br />Password?
//             </h1>

//             <p className="text-blue-100 text-lg leading-relaxed">
//               No worries. Enter your email and we’ll send you a secure password
//               reset link.
//             </p>
//           </div>

//           <div className="text-blue-100 text-sm">
//             Security-first password recovery
//           </div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="p-12 flex flex-col justify-center">
//           <div className="mb-8">
//             <h2 className="text-4xl font-bold text-gray-900 mb-3">
//               Reset Password
//             </h2>
//             <p className="text-gray-500 text-lg">
//               Enter your registered email address
//             </p>
//           </div>

//           {error && (
//             <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6 flex items-start gap-3">
//               <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
//               <span className="text-sm text-red-700">{error}</span>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 transition-all flex items-center justify-center gap-2"
//             >
//               {loading ? (
//                 <>
//                   <svg
//                     className="animate-spin h-5 w-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                     />
//                   </svg>
//                   Sending link...
//                 </>
//               ) : (
//                 "Send Reset Link"
//               )}
//             </button>
//           </form>

//           <button
//             onClick={() => navigate("/login")}
//             className="mt-8 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 font-semibold"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
