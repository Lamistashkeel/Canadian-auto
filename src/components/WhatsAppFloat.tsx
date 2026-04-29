import { SITE } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-pulse fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M20 2C10.1 2 2 10.1 2 20C2 23.4 2.9 26.6 4.5 29.3L2 38L11 35.6C13.6 37.1 16.7 38 20 38C29.9 38 38 29.9 38 20C38 10.1 29.9 2 20 2ZM20 35C16.8 35 13.9 34 11.5 32.4L11 32.1L5.7 33.5L7.1 28.4L6.7 27.9C5 25.4 4 22.3 4 20C4 11.2 11.2 4 20 4C28.8 4 36 11.2 36 20C36 28.8 28.8 35 20 35Z" fill="white" />
        <path d="M28.5 23.5C28.1 23.3 25.9 22.2 25.5 22.1C25.1 21.9 24.8 21.9 24.5 22.3C24.2 22.7 23.3 23.7 23.1 24C22.9 24.3 22.6 24.3 22.2 24.1C20.4 23.3 19.1 22.1 18 20.3C17.7 19.8 18 19.5 18.2 19.2C18.4 18.9 18.7 18.5 18.9 18.2C19.1 17.9 19.1 17.7 19 17.4C18.9 17.1 18 14.8 17.7 14.1C17.4 13.4 17 13.4 16.7 13.4H15.9C15.6 13.4 15.1 13.5 14.7 14C14.3 14.4 13.2 15.5 13.2 17.6C13.2 19.7 14.8 21.8 15 22C15.2 22.2 18 26.6 22.4 28.4C26.8 30.2 26.8 29.7 27.6 29.6C28.4 29.5 29.9 28.5 30.2 27.5C30.5 26.5 30.5 25.7 30.3 25.5C30.1 25.3 29.4 25 28.5 23.5Z" fill="white" />
      </svg>
    </a>
  );
}
