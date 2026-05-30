import React from "react";

export default function WhatsAppButton() {
  const whatsappNumber = "1234567890"; // Replace with actual number
  const message = encodeURIComponent("Hello Happy Paws! I would like to inquire about your services and products.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA56] text-white rounded-full shadow-2xl animate-whatsapp transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.07 1.033 11.455 1.03c-5.442 0-9.866 4.372-9.87 9.802 0 1.714.475 3.393 1.374 4.869l-.938 3.425 3.528-.925zm13.16-5.83c-.3-.15-1.77-.875-2.04-.972-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-1.125-.56-1.957-1.02-2.73-2.34-.1-.17 0-.32.07-.49.07-.15.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.25-.6-.5-.52-.67-.53-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.07 1.05-1.07 2.57 0 1.52 1.1 2.98 1.25 3.18.15.2 2.16 3.3 5.24 4.63.73.3 1.3.49 1.74.63.74.24 1.4.2 1.93.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
      {/* Visual notification dot */}
      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
    </a>
  );
}
