interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <header className="w-full h-16 bg-[#101828] flex items-center justify-between px-6 md:px-8">
    <div className="flex items-center">
      {children}
    </div>
    <button
      type="button"
      aria-label="Alternar tema"
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
    </button>
  </header>
);
