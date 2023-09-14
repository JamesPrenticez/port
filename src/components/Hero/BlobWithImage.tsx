// import React from 'react';
// import { blobGenerator } from '../../utils/blobGenerator';
 

// // https://github.com/nghiepdev/react-svg-blob

// //https://www.blobmaker.app/

// const BlobWithImage = () => {
//   // const blobPath = "M62.5,-20.1C70,3,57.7,32.8,34.4,50.4C11.1,68.1,-23.2,73.6,-46.5,58C-69.8,42.5,-82.2,5.9,-72.7,-20C-63.1,-45.9,-31.5,-61,-2.1,-60.3C27.4,-59.7,54.9,-43.2,62.5,-20.1Z";
//   // const blobPath = generateBlobPath();

//   const generateBlobPath = ({ size = 400, growth = 6, edges = 6, seed = null } = {}) => {
//     const { path, seedValue } = blobGenerator({ size, growth, edges, seed });
//     return { path, seedValue };
//   };

//   const {path} = generateBlobPath({ size: 400, growth: 6, edges: 6 });
//   console.log(path)

//   return (
//       <div className="relative w-72 h-72">
//         <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <mask id="blobMask">
//               <rect x="0" y="0" width="100" height="100" fill="black" />
//               <path transform="translate(100 100)" d={path} fill="white" />
//             </mask>
//             <linearGradient id="myGradient" x1="0" x2="1" y1="1" y2="0">
//               <stop stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
//               <stop stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
//             </linearGradient>
//           </defs>
//           <path
//             fill="url(#myGradient)"
//             transform="translate(100 100)"
//             d={path}
//           />
//           <image
//             href="./me.webp"
//             x="15" y="20" width="150" height="150"
//             mask="url(#blobMask)"
//           />
//         </svg>
//       </div>
//     );
// };

// export default BlobWithImage;
