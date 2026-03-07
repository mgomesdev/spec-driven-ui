import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          Matheus<span className="text-primary">.dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground transition-colors">
          <Link href="#projetos" className="hover:text-foreground">Projetos</Link>
          <Link href="#skills" className="hover:text-foreground">Skills</Link>
          <Link href="#experiencia" className="hover:text-foreground">Experiência</Link>
          <Link 
            href="mailto:contato@exemplo.com" 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};
