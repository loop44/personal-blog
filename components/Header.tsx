import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
    <div className="flex items-center space-x-2">
      <Link href="/">
        <Image
          className="rounded-full object-cover"
          width={50}
          height={50}
          src="https://avatars.githubusercontent.com/u/99007503?v=4"
          alt="logo"
        />
      </Link>
      <p>LOOP</p>
    </div>
    <div>
      <Link
        href="https://github.com/loop44"
        className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        target="_blank"
      >
        Follow me on Github
      </Link>
    </div>
  </header>
);

export default Header;
