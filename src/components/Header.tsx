import { FC } from "react";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <header className="bg-white px-6 py-4">
      <nav className="mx-auto max-w-5xl">
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
