interface FooterProps {
  copyrightText?: string;
}

export const Footer = ({ copyrightText = '© 2026 matheusgomesdev.' }: FooterProps) => (
  <footer className="w-full h-16 bg-[#101828] flex items-center justify-between px-6 md:px-8">
    <div className="flex items-center gap-2 text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-yellow-400"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
      <span className="text-sm">{copyrightText}</span>
    </div>
  </footer>
);
