import Link from "next/link";
import "./styles.css";

interface Route {
  href: string;
  text: string;
}

interface NavLinksProps {
  routes: Route[];
}

export const NavLinks = ({ routes }: NavLinksProps) => {
  return (
    <div className="links">
      {routes.map((item: Route) => (
        <Link href={item.href} key={item.text}>
          {item.text}
        </Link>
      ))}
    </div>
  );
};
