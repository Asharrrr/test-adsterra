"use client";

import Script from "next/script";

export default function AdBanner() {
  return (
    <div className="w-full p flex justify-center my-6">
      <div className="flex justify-center items-center [&>iframe]:mx-auto [&>iframe]:block">
        {/* Inline script (ad configuration) */}
        <Script id="ad-options" strategy="beforeInteractive">
          {`
            atOptions = {
              'key' : 'fb9119ec58937491bae018dd991052c6',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `}
        </Script>

        {/* External ad script */}
        <Script
          src="//www.highperformanceformat.com/fb9119ec58937491bae018dd991052c6/invoke.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}


// "use client";

// import Script from "next/script";

// export default function AdBanner() {
//   return (
//     <div className="w-full flex justify-center my-4">
//       <div className="w-[728px] h-[90px] flex items-center justify-center">
//         {/* Inline script (ad configuration) */}
//         <Script id="ad-options" strategy="beforeInteractive">
//           {`
//             atOptions = {
//               'key' : 'fb9119ec58937491bae018dd991052c6',
//               'format' : 'iframe',
//               'height' : 90,
//               'width' : 728,
//               'params' : {}
//             };
//           `}
//         </Script>

//         {/* External ad script */}
//         <Script
//           src="//www.highperformanceformat.com/fb9119ec58937491bae018dd991052c6/invoke.js"
//           strategy="afterInteractive"
//         />
//       </div>
//     </div>
//   );
// }



//COMMENTED OUT AD BANNER FOR NOW
// "use client";

// import Script from "next/script";

// export default function AdBanner() {
//   return (
//     <div className="flex justify-center my-4">
//       {/* Inline script (ad configuration) */}
//       <Script id="ad-options" strategy="beforeInteractive">
//         {`
//           atOptions = {
//             'key' : 'fb9119ec58937491bae018dd991052c6',
//             'format' : 'iframe',
//             'height' : 90,
//             'width' : 728,
//             'params' : {}
//           };
//         `}
//       </Script>

//       {/* External ad script */}
//       <Script
//         src="//www.highperformanceformat.com/fb9119ec58937491bae018dd991052c6/invoke.js"
//         strategy="afterInteractive"
//       />
//     </div>
//   );
// }


// export default function Home() {
//   return (
//     <div>
//       <h1>
//         Welcome to the Next.js Application!
//       </h1>
//     </div>
//   );
// };