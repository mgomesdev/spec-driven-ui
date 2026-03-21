import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="w-full">
      <aside
        data-testid="sidebar"
        className="w-full md:max-w-65 px-6 py-5 bg-(--color-bg-secondary)"
      >
        <Image
          data-testid="sidebar-logo"
          width={76}
          height={23}
          src="/images/logo.png"
          alt=""
        />

        <ul>
          {nav_items.map((item) => (
            <li data-testid="sidebar-nav-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

type NAV_ITEMS = "Dashboard" | "Analytics" | "Reports" | "Settings";

const nav_items: NAV_ITEMS[] = [
  "Dashboard",
  "Analytics",
  "Reports",
  "Settings",
];
