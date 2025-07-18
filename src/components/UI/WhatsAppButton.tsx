
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  floating?: boolean;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your woodworking services.", 
  className = "",
  floating = false 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const baseClasses = `
    inline-flex items-center justify-center gap-2 px-6 py-3 
    bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg 
    transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
  `;

  const floatingClasses = `
    fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-2xl
    animate-pulse hover:animate-none md:w-auto md:h-auto md:rounded-lg md:px-6 md:py-3
  `;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${floating ? floatingClasses : ''} ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className={`${floating ? 'w-6 h-6 md:w-5 md:h-5' : 'w-5 h-5'}`} />
      <span className={floating ? 'hidden md:inline' : ''}>
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
