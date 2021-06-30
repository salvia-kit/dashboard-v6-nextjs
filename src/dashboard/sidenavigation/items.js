import Link from 'next/link';
import { useRouter } from 'next/router';

import data from './data';

const style = {
  inactive: `text-gray-400`,
  active: `font-medium text-white`,
  link: `flex items-center justify-start my-2 p-4 text-sm w-full hover:text-white`,
};

export default function SidenavItems() {
  const { asPath } = useRouter();
  return (
    <ul className="md:pl-6">
      <li>
        {data.map((item) => (
          <Link href={item.link} key={item.title}>
            <a
              className={`${style.link} 
               ${item.link === asPath ? style.active : style.inactive}`}
            >
              <span>{item.icon}</span>
              <span className="mx-4">{item.title}</span>
            </a>
          </Link>
        ))}
      </li>
    </ul>
  );
}
