import { Element } from "react-scroll"

const services = () => {
  return (
    <Element id="services" name="services">
        <section className="w-full">
          <div className="mx-10">
            <div className="w-full flex flex-col justify-center py-10 md:py-20">
              <h1 className="font-['Raleway'] mb-8 tracking-tighter  text-2xl text-center md:text-start font-bold md:text-5xl text-dark-gray">Services</h1>
              <div className="flex flex-wrap flex-row text-start -mx-4">
                <div className=" flex-shrink text-start px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                  <div className="py-8 px-12 mb-12 md:items-start items-center rounded-xl flex flex-col bg-text-white-1 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-dark-gray mb-4">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                          width="60" height="60"
                          viewBox="0 0 50 50">
                          <path d="M 5 2 C 3.355469 2 2 3.355469 2 5 L 2 35 C 2 36.644531 3.355469 38 5 38 L 19 38 L 19 40 L 10 40 C 9.96875 40 9.9375 40 9.90625 40 C 9.636719 40.027344 9.386719 40.160156 9.21875 40.375 L 4.21875 46.375 C 3.976563 46.675781 3.929688 47.085938 4.097656 47.433594 C 4.265625 47.78125 4.617188 48 5 48 L 45 48 C 45.382813 48 45.734375 47.78125 45.902344 47.433594 C 46.070313 47.085938 46.023438 46.675781 45.78125 46.375 L 40.78125 40.375 C 40.589844 40.136719 40.304688 40 40 40 L 31 40 L 31 38 L 45 38 C 46.644531 38 48 36.644531 48 35 L 48 5 C 48 3.355469 46.644531 2 45 2 Z M 5 4 L 45 4 C 45.554688 4 46 4.445313 46 5 L 46 35 C 46 35.554688 45.554688 36 45 36 L 5 36 C 4.445313 36 4 35.554688 4 35 L 4 5 C 4 4.445313 4.445313 4 5 4 Z M 6 6 L 6 34 L 44 34 L 44 6 Z M 8 8 L 42 8 L 42 32 L 8 32 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 21 38 L 29 38 L 29 42 L 21 42 Z M 10.46875 42 L 19 42 L 19 44 L 31 44 L 31 42 L 39.53125 42 L 42.875 46 L 7.125 46 Z"></path>
                      </svg>
                    </div>
                    <span className="text-black font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl">Web Development</span>
                    <p className="md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                      My services include website design, front-end and back-end development, content management systems, e-commerce development 
                      and ongoing maintenance and support. Whether you need a simple brochure website or a complex web-based application, I have the skills to bring your vision to life.
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                  <div className="py-8 px-12 mb-12 md:items-start items-center rounded-xl flex flex-col bg-text-white-1 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block  text-dark-gray mb-4">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 500 512"><path   d="M55.22 0h183.57C269.28 0 294 24.76 294 55.23v400.69c0 30.49-24.72 55.22-55.21 55.22H55.22C24.73 511.14 0 486.41 0 455.92V55.16C0 24.6 24.68 0 55.22 0zm-.35 272.26c-3.84 0-6.96-3.12-6.96-6.96s3.12-6.95 6.96-6.95h184.26c3.84 0 6.96 3.11 6.96 6.95 0 3.84-3.12 6.96-6.96 6.96H54.87zm0 38.06c-3.84 0-6.96-3.12-6.96-6.96s3.12-6.96 6.96-6.96h151.55c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96H54.87zm0 76.1c-3.84 0-6.96-3.11-6.96-6.95 0-3.84 3.12-6.96 6.96-6.96h48.41c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.95-6.96 6.95H54.87zm0-38.05c-3.84 0-6.96-3.12-6.96-6.96s3.12-6.95 6.96-6.95h77c3.84 0 6.96 3.11 6.96 6.95 0 3.84-3.12 6.96-6.96 6.96h-77zm122.72 37.6a5.874 5.874 0 1 1-7.74 8.84l-18.53-16.23a5.874 5.874 0 0 1-.55-8.29l.59-.59 18.49-16.2a5.874 5.874 0 0 1 8.29.56 5.883 5.883 0 0 1-.55 8.29l-13.49 11.81 13.49 11.81zm44.46 8.84a5.873 5.873 0 0 1-8.29-.55 5.874 5.874 0 0 1 .55-8.29l13.48-11.81-13.48-11.81a5.874 5.874 0 0 1-.55-8.29c2.13-2.45 5.85-2.69 8.29-.56l18.48 16.2.6.59a5.874 5.874 0 0 1-.56 8.29l-18.52 16.23zm-27.17-44.66c.73-3.16 3.9-5.13 7.07-4.4 3.16.74 5.14 3.91 4.4 7.07l-10.59 45.35a5.904 5.904 0 0 1-7.07 4.4c-3.17-.74-5.14-3.91-4.4-7.07l10.59-45.35zm32.52-190.7c-.81-.56-1.66-.76-2.59-.6-.93.17-1.68.65-2.24 1.45l-3.03 4.3c-1.1-.47-2.24-.84-3.42-1.15-1.17-.31-2.36-.54-3.55-.72l-.99-5.63c-.16-.95-.62-1.69-1.4-2.24-.78-.55-1.63-.73-2.58-.56l-7.08 1.23c-.9.16-1.63.62-2.2 1.4-.56.78-.75 1.64-.59 2.59l.9 5.15c-1.13.49-2.22 1.04-3.25 1.66-1.04.62-2 1.29-2.91 2.01l-4.76-3.3c-.76-.56-1.6-.77-2.54-.61-.93.16-1.66.65-2.23 1.44l-4.09 5.83c-.56.8-.76 1.66-.6 2.59.17.92.65 1.68 1.45 2.23l4.3 3.04c-.47 1.1-.84 2.23-1.15 3.41-.31 1.18-.54 2.37-.72 3.56l-5.63.98c-.95.16-1.7.63-2.24 1.41-.55.77-.73 1.63-.57 2.58l1.24 7.07c.16.91.62 1.64 1.4 2.21.78.55 1.63.75 2.58.58l5.16-.9c.49 1.14 1.04 2.22 1.66 3.25.62 1.04 1.3 2.03 2.02 2.98l-3.31 4.7c-.56.76-.77 1.59-.61 2.53.16.93.65 1.67 1.44 2.24l5.84 4.15c.79.52 1.65.69 2.57.53.93-.16 1.69-.62 2.25-1.37l3.03-4.37c1.09.46 2.23.84 3.41 1.14 1.18.31 2.36.55 3.55.72l.99 5.64c.16.95.63 1.69 1.4 2.24.78.54 1.64.73 2.59.56l7.07-1.23c.91-.16 1.64-.62 2.2-1.4.56-.78.76-1.64.59-2.59l-.9-5.16a25.39 25.39 0 0 0 3.25-1.65c1.04-.63 2.03-1.3 2.98-2.03l4.7 3.32c.76.56 1.6.77 2.55.6.97-.17 1.69-.65 2.21-1.43l4.16-5.84c.52-.8.69-1.65.53-2.58-.16-.93-.62-1.68-1.37-2.25l-4.38-3.02c.47-1.1.84-2.24 1.15-3.42.31-1.17.55-2.36.72-3.55l5.64-.98c.95-.17 1.69-.63 2.24-1.41.54-.77.73-1.63.56-2.58l-1.23-7.07c-.16-.91-.62-1.64-1.4-2.21-.78-.56-1.64-.75-2.59-.59l-5.16.9a29.54 29.54 0 0 0-1.65-3.21c-.63-1.06-1.3-2.04-2.02-2.94l3.31-4.77c.56-.76.77-1.6.6-2.54-.16-.92-.65-1.66-1.44-2.23l-5.82-4.09zm-20.22 18.56c1.63-.28 3.22-.24 4.78.12 1.55.37 2.96.99 4.21 1.87 1.25.88 2.31 1.99 3.19 3.33.86 1.35 1.44 2.83 1.72 4.46.29 1.62.25 3.21-.11 4.77-.37 1.55-1 2.96-1.87 4.21a12.4 12.4 0 0 1-3.34 3.19c-1.34.87-2.82 1.44-4.45 1.72-1.62.29-3.21.25-4.78-.11-1.55-.37-2.95-.99-4.21-1.87-1.25-.88-2.31-1.99-3.18-3.33-.87-1.35-1.45-2.83-1.73-4.46-.28-1.62-.24-3.21.12-4.77.37-1.56.99-2.96 1.87-4.22.88-1.24 1.99-2.3 3.33-3.18 1.35-.87 2.83-1.44 4.45-1.73zm-54.25-86.29c-.35-.35-.69-.6-1.02-.73-.31-.13-.69-.2-1.13-.2-.44 0-.83.07-1.15.2-.33.14-.67.38-.99.7l-6.8 6.78a3.248 3.248 0 0 1-4.15.35c-.77-.49-1.6-.97-2.47-1.45-.94-.5-1.86-.96-2.76-1.37-.94-.44-1.91-.84-2.86-1.21-.87-.34-1.87-.69-2.94-1.05a3.253 3.253 0 0 1-2.24-3.09V80.27c0-.46-.07-.86-.21-1.21a2.9 2.9 0 0 0-.65-.94 3 3 0 0 0-.94-.66c-.35-.13-.75-.2-1.21-.2h-13.04c-.42 0-.79.06-1.1.19-.35.15-.7.38-1.03.71-.3.29-.52.6-.65.93-.14.33-.21.73-.21 1.18v9.51c0 1.6-1.16 2.93-2.68 3.2-1.04.25-1.99.5-2.84.76-.96.3-1.93.64-2.88 1.01l-.16.06c-.87.33-1.75.71-2.65 1.13l-.16.06c-.87.41-1.7.83-2.5 1.26-1.28.7-2.83.44-3.82-.53l-7.58-7.47c-.29-.31-.6-.54-.91-.67-.3-.13-.66-.2-1.08-.2-.42 0-.8.08-1.12.21-.36.15-.71.4-1.05.73l-9.1 9.13c-.34.34-.59.68-.73 1.02-.13.32-.2.7-.2 1.14 0 .44.07.83.2 1.15.15.33.38.66.7.98l6.78 6.8c1.13 1.14 1.25 2.9.35 4.16-.49.76-.97 1.59-1.44 2.47-.51.94-.97 1.86-1.38 2.76a50.995 50.995 0 0 0-2.25 5.8 3.244 3.244 0 0 1-3.09 2.23l-10.39.01c-.46 0-.86.07-1.2.21-.34.13-.66.35-.95.64-.3.3-.51.61-.65.95-.14.35-.21.75-.21 1.21v13.04c0 .42.06.79.19 1.1.15.35.39.69.71 1.03.3.29.61.51.93.65.33.13.73.2 1.18.2h9.51c1.6 0 2.94 1.16 3.21 2.69.24 1.03.5 1.98.76 2.84.3.96.63 1.92 1 2.87l.08.23c.32.81.7 1.7 1.12 2.65.46 1.01.91 1.94 1.34 2.77.67 1.29.39 2.82-.58 3.8l-7.45 7.42c-.31.3-.54.6-.67.91-.13.31-.19.67-.19 1.08 0 .43.07.8.21 1.12.15.36.4.72.73 1.05l9.06 9.17c.32.3.67.53 1.01.66.35.13.75.21 1.21.21.46 0 .88-.08 1.23-.21l.1-.04c.3-.13.59-.33.86-.59l6.72-6.82c1.1-1.12 2.8-1.27 4.06-.46.85.54 1.72 1.06 2.59 1.53.94.51 1.86.96 2.76 1.38a57.964 57.964 0 0 0 5.8 2.25c1.37.45 2.24 1.72 2.24 3.09v10.38c0 .46.07.87.21 1.21l.05.12c.13.28.33.55.6.82.31.3.63.53.95.66.34.14.74.21 1.2.21h13.04c.42 0 .79-.07 1.1-.19.35-.15.7-.39 1.03-.71.3-.3.52-.61.65-.94.14-.33.21-.72.21-1.18v-9.51c0-1.6 1.16-2.93 2.68-3.2 1.05-.25 2.01-.51 2.88-.77.98-.31 1.94-.64 2.85-.99.91-.36 1.87-.76 2.86-1.21 1.02-.46 1.95-.91 2.77-1.33 1.29-.68 2.83-.4 3.8.58l7.43 7.44c.28.3.58.52.91.66l.16.08c.27.09.59.13.96.13.46 0 .85-.07 1.14-.2.33-.15.63-.37.91-.67l9.25-9.13c.3-.33.52-.67.65-1.01.14-.35.21-.76.21-1.21 0-.47-.07-.88-.21-1.23l-.04-.11c-.13-.29-.33-.59-.59-.86l-6.82-6.71a3.249 3.249 0 0 1-.45-4.07c.54-.84 1.05-1.71 1.52-2.59.51-.94.97-1.86 1.38-2.75.43-.95.83-1.91 1.21-2.87.34-.87.69-1.86 1.05-2.94a3.244 3.244 0 0 1 3.08-2.23h10.39c.46 0 .86-.08 1.2-.21l.13-.05c.29-.14.56-.34.82-.6.3-.3.52-.62.66-.95.13-.34.2-.75.2-1.21v-13.03c0-.42-.06-.79-.19-1.11-.15-.35-.39-.69-.71-1.03-.3-.29-.61-.51-.93-.64-.33-.14-.73-.21-1.18-.21h-9.51c-1.63 0-2.98-1.2-3.22-2.76-.22-.88-.48-1.8-.77-2.73-.28-.92-.61-1.88-.99-2.87l-.06-.17c-.36-.94-.73-1.84-1.12-2.69-.43-.93-.87-1.82-1.33-2.65-.69-1.28-.43-2.83.54-3.82l7.47-7.58c.31-.29.54-.6.67-.91.13-.3.19-.66.19-1.08 0-.42-.07-.8-.2-1.12-.16-.36-.4-.72-.73-1.05l-9.14-9.1zm1.5-6.7c1.15.48 2.19 1.19 3.1 2.1l9.16 9.15c.9.92 1.6 1.94 2.08 3.06.49 1.15.74 2.37.74 3.66 0 1.31-.26 2.54-.76 3.68-.49 1.12-1.21 2.11-2.12 2.99l-5.7 5.78.42.9c.46 1 .89 2.03 1.29 3.07l.07.16c.39 1.04.77 2.14 1.12 3.28l.27.89h7.03c1.3 0 2.52.24 3.67.72a9.37 9.37 0 0 1 3.04 2.08l.07.07c.89.92 1.57 1.93 2.03 3.04.47 1.15.71 2.35.71 3.59v13.03c0 1.3-.24 2.51-.7 3.65a9.646 9.646 0 0 1-2.07 3.09c-.86.85-1.8 1.5-2.83 1.97l-.28.12c-1.13.46-2.35.69-3.64.69h-8.09l-.39 1.01c-.42 1.08-.87 2.16-1.35 3.22a54.08 54.08 0 0 1-1.56 3.14l-.41.75 5.13 5.05c.81.86 1.44 1.82 1.88 2.86l.11.24c.44 1.13.67 2.33.67 3.59 0 1.25-.23 2.44-.67 3.57a9.885 9.885 0 0 1-1.96 3.08l-9.3 9.19c-.89.94-1.91 1.66-3.03 2.14-1.17.49-2.4.75-3.71.75-1.18 0-2.3-.21-3.36-.63l-.33-.12a9.227 9.227 0 0 1-3.04-2.15l-5.68-5.69-.95.44c-.99.45-2.06.9-3.19 1.33-1.1.43-2.2.81-3.29 1.15l-.96.27v7.01a9.274 9.274 0 0 1-2.79 6.72l-.07.07c-.92.89-1.94 1.57-3.04 2.02-1.16.47-2.35.71-3.59.71h-13.04c-1.29 0-2.51-.23-3.64-.69a9.34 9.34 0 0 1-3.11-2.08 9.551 9.551 0 0 1-1.95-2.83l-.12-.27c-.46-1.14-.7-2.35-.7-3.65v-8.09l-1-.38c-1.09-.42-2.16-.88-3.22-1.36-1.11-.51-2.17-1.03-3.14-1.55l-.75-.42-5.06 5.13c-.85.81-1.81 1.45-2.85 1.89l-.24.1a9.66 9.66 0 0 1-3.59.67c-1.25 0-2.44-.22-3.57-.67a9.578 9.578 0 0 1-3.09-1.96l-9.25-9.36c-.9-.92-1.6-1.94-2.08-3.06a9.243 9.243 0 0 1-.74-3.66c0-1.31.26-2.54.76-3.68a9.086 9.086 0 0 1 2.14-3l5.69-5.68-.45-.95c-.39-.89-.81-1.88-1.23-2.98l-.09-.21c-.42-1.07-.81-2.19-1.16-3.33l-.27-.92H55.4c-1.3 0-2.52-.24-3.67-.72-1.13-.47-2.14-1.17-3.05-2.08l-.06-.06c-.9-.93-1.57-1.94-2.03-3.05-.47-1.15-.7-2.34-.7-3.58v-13.04c0-1.3.23-2.52.69-3.65a9.292 9.292 0 0 1 2.07-3.08c.94-.94 1.97-1.63 3.11-2.1 1.13-.46 2.35-.69 3.64-.69h8.09l.39-1.01a50 50 0 0 1 1.36-3.22c.5-1.11 1.02-2.16 1.55-3.14l.43-.77-4.95-4.96a9.432 9.432 0 0 1-2.12-3.09 9.351 9.351 0 0 1-.74-3.66c0-1.27.25-2.49.74-3.65a9.742 9.742 0 0 1 2.1-3.09l9.15-9.17c.92-.9 1.94-1.6 3.06-2.08 1.16-.49 2.38-.74 3.66-.74 1.31 0 2.54.25 3.69.76 1.11.49 2.11 1.2 2.98 2.12l5.78 5.69.88-.42c.94-.43 1.96-.86 3.03-1.28l.14-.06c1.07-.42 2.19-.8 3.34-1.15l.92-.27v-7.01a9.274 9.274 0 0 1 2.79-6.72l.07-.07c.92-.89 1.94-1.56 3.04-2.02 1.16-.47 2.35-.71 3.59-.71h13.04c1.29 0 2.51.23 3.64.69 1.17.49 2.2 1.17 3.11 2.08.91.91 1.6 1.95 2.07 3.1.46 1.13.7 2.35.7 3.65v8.09l1 .38c1.08.42 2.17.88 3.22 1.36 1.11.51 2.17 1.03 3.14 1.55l.77.43 4.97-4.94c.91-.93 1.95-1.64 3.08-2.12 1.17-.49 2.4-.74 3.67-.74s2.49.24 3.65.74zm-29.92 26.57c3.53 1.53 6.6 3.58 9.15 6.14l.19.2c2.48 2.53 4.48 5.53 5.96 8.96l.1.28c1.43 3.49 2.15 7.24 2.15 10.96 0 3.81-.75 7.65-2.25 11.22v.03c-1.51 3.5-3.58 6.56-6.15 9.14-2.58 2.58-5.64 4.64-9.15 6.15l-.28.11a28.997 28.997 0 0 1-22.18-.11h-.03c-3.51-1.51-6.57-3.57-9.14-6.14-2.59-2.59-4.64-5.65-6.16-9.15l-.1-.28c-1.44-3.5-2.15-7.25-2.15-10.97 0-3.81.75-7.65 2.25-11.22v-.02c1.52-3.52 3.58-6.58 6.15-9.15 2.55-2.57 5.62-4.62 9.15-6.15l.28-.1c3.49-1.44 7.24-2.16 10.97-2.16 3.81 0 7.64.75 11.21 2.26h.03zm4.55 10.74c-1.98-1.98-4.36-3.58-7.12-4.77-2.71-1.15-5.68-1.72-8.67-1.72-2.93 0-5.83.54-8.49 1.63l-.19.09c-2.76 1.19-5.14 2.79-7.12 4.77-1.99 1.97-3.58 4.35-4.78 7.12-1.15 2.72-1.72 5.69-1.72 8.68 0 2.92.55 5.82 1.63 8.49l.09.19c1.2 2.77 2.79 5.15 4.76 7.12 1.98 1.98 4.37 3.58 7.14 4.77 2.71 1.15 5.68 1.72 8.68 1.72 2.92 0 5.82-.54 8.48-1.63l.19-.09c2.77-1.19 5.16-2.79 7.12-4.76 1.99-1.98 3.58-4.36 4.78-7.13 1.14-2.72 1.72-5.69 1.72-8.68 0-2.92-.55-5.82-1.64-8.49l-.08-.19c-1.17-2.69-2.7-5.02-4.6-6.96l-.18-.16zM19.02 434.43H274.9V54.7H19.02v379.73zm127.91 17.28c12.49 0 22.7 10.06 22.7 22.7 0 12.51-10.05 22.71-22.7 22.71-12.49 0-22.71-10.05-22.71-22.71 0-12.48 10.06-22.7 22.71-22.7z"/></svg>
                    </div>
                    <span className="text-black font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl">Mobile App Development</span>
                    <p className="md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                      My services include app design, front-end and back-end development and user experience (UX) 
                      design. I can work closely with clients to understand 
                      their unique requirements and develop a solution that meets their needs. My apps are built with
                      user experience in mind, user-friendly, and visually appealing.
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                  <div className="py-8 px-12 mb-12 md:items-start items-center rounded-xl flex flex-col bg-text-white-1 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block  text-dark-gray mb-4">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="60" height="60"
                        viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                      </svg>
                    </div>
                    <span className="text-black font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl">SEO Services</span>
                    <p className="md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                      My services include keyword research, on-page optimization, content creation, link building, and ongoing analysis 
                      and reporting. I can work closely with clients to understand their business goals and develop a strategy that will 
                      help them achieve their desired outcomes. Contact me to learn more about our SEO solutions.
                    </p>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                  <div className="py-8 px-12 mb-12 md:items-start items-center rounded-xl flex flex-col bg-text-white-1 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block  text-dark-gray mb-4">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 48 48"><g data-name="15-Online advertising_2"><path d="M45 48H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h42a3 3 0 0 1 3 3v42a3 3 0 0 1-3 3zM3 2a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M47 12H13a1 1 0 0 1-.707-.293L9.586 9H4.414l-2.707 2.707-1.414-1.414 3-3A1 1 0 0 1 4 7h6a1 1 0 0 1 .707.293L13.414 10H47zM18 36h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zm-3-2h2v-4h-2z"/><path d="M20 30h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zm-7-2h6v-6h-6z"/><path d="M31 36a1 1 0 0 1-.479-.122l-11-6A1 1 0 0 1 19 29v-8a1 1 0 0 1 .521-.878l11-6A1 1 0 0 1 32 15v20a1 1 0 0 1-1 1zm-10-7.594 9 4.909v-16.63l-9 4.909zM12 28H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-3-2h2v-2H9zM15 24h2v2h-2zM34 33v-2a6 6 0 0 0 0-12v-2a8 8 0 0 1 0 16z"/><path d="M34 29v-2a2 2 0 0 0 0-4v-2a4 4 0 0 1 0 8zM34 38h10v2H34zM36 42h8v2h-8zM42 5h2v2h-2zM38 5h2v2h-2z"/></g></svg>
                    </div>
                    <span className="text-black font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl">Digital Marketing</span>
                    <p className="md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                      My services include search engine optimization (SEO), pay-per-click (PPC) advertising, 
                      social media marketing, email marketing and more. I can work with clients to understand 
                      their business goals and develop a customized digital marketing plan that is aligned with 
                      their budget and targets the most relevant audience.
                    </p>
                  </div>
                </div>
                {/* 5 */}
                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                  <div className="py-8 px-12 mb-12 md:items-start items-center rounded-xl flex flex-col bg-text-white-1 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block  text-dark-gray mb-4">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 48 48"><g data-name="6-Data analysis"><path d="M28 46h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zm-7-2h6v-4h-6z"/><path d="M15 44h18v2H15zM24 28a11 11 0 1 1 11-11 11.013 11.013 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9zM1 30h46v2H1zM23 34h2v2h-2zM47 23h-7a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h7v2h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7z"/><path d="M38 21h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-3-2h2v-2h-2z"/><path d="M45 40H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h42a3 3 0 0 1 3 3v32a3 3 0 0 1-3 3zM3 4a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="m5.707 31.707-1.414-1.414L9 25.586V20a1 1 0 0 1 1-1h4v2h-3v5a1 1 0 0 1-.293.707zM36 13h-3v-2h2.586l4.707-4.707A1 1 0 0 1 41 6h6v2h-5.586l-4.707 4.707A1 1 0 0 1 36 13zM4 6h8v2H4zM4 10h4v2H4zM4 14h6v2H4zM24 18a.992.992 0 0 1-.485-.126l-9-5 .97-1.748 8.341 4.633 6.467-6.466 1.414 1.414-7 7A1 1 0 0 1 24 18z"/><path d="M23 17h2v10h-2z"/></g></svg>
                    </div>
                    <span className="text-black font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl">Marketing Analysis and Measurement</span>
                    <p className="md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                      I utilize cutting-edge tools and techniques to analyze marketing data from various 
                      sources such as website traffic, social media engagement, email marketing campaigns, 
                      and more. I can work with clients to identify (KPIs) and 
                      establish metrics that measure the effectiveness of their marketing efforts.
                    </p>
                  </div>
                </div>
                {/* 6 */}
                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                  <div className="py-8 px-12 mb-12 md:items-start items-center rounded-xl flex flex-col bg-text-white-1 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block  text-dark-gray mb-4">
                      {/* Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 32 32"><g data-name="vector 2"><path d="M17.6 6.78a2.1 2.1 0 0 0-3.2 0l-5.9 7.35a2.35 2.35 0 0 0-.43 2l2 8.06a1.84 1.84 0 0 0-1 1.65v2.3A1.85 1.85 0 0 0 10.85 30h10.3A1.85 1.85 0 0 0 23 28.15v-2.3a1.84 1.84 0 0 0-1-1.65l2-8.06a2.35 2.35 0 0 0-.43-2zM16 15a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm6 .66L20 24h-3a1 1 0 0 0 0 2h4v2H11v-2h2a1 1 0 0 0 0-2h-1l-2-8.34a.38.38 0 0 1 .05-.28L15 9.31V13a1 1 0 0 0 0 .17 3 3 0 1 0 1.94 0A1 1 0 0 0 17 13V9.23l4.94 6.15a.38.38 0 0 1 .06.28z"/><path d="M27.7 10a12.54 12.54 0 0 0-23.4 0 2.5 2.5 0 1 0 1.89.65 10.55 10.55 0 0 1 19.62 0A2.5 2.5 0 1 0 27.7 10zM4.5 13a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5zm23 0a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5z"/></g></svg>
                    </div>
                    <span className="text-black font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl">Graphic Designing</span>
                    <p className="md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                      My services include developing designs for logos, branding, advertising, packaging, and more.
                      I am able to work in various styles, including modern, minimalist, and classic, and able to create 
                      designs that are both creative and practical. I stays up-to-date with the latest trends and techniques 
                      in graphic design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Element>
  )
}

export default services
