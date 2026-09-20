import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../data/content';

export function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-neutral-200 shadow-lg">
      <div className="flex items-center">
        <a
          href={CONTACT.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold text-sm"
          aria-label="Call Dr P"
        >
          <Phone className="w-4 h-4" />
          Call Us
        </a>
        <a
          href={CONTACT.whatsappHref}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-success text-white font-semibold text-sm"
          aria-label="WhatsApp Dr P"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
