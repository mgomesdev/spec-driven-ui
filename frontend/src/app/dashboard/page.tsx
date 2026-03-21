import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="w-full">
      <aside data-testid="sidebar" className="w-full md:max-w-65">
        <Image
          data-testid="sidebar-logo"
          width={76}
          height={23}
          src="/images/logo.png"
          alt=""
        />
      </aside>
    </div>
  );
}
