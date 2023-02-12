import Link from 'next/link';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const StudioNavbar = (props: any) => (
  <div>
    <div className="flex items-center justify-between p-5">
      <Link href="/" className="text-[#f7ab0a] flex items-center">
        <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2" />
        Обратно на сайт
      </Link>
    </div>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.renderDefault(props)}
  </div>
);

export default StudioNavbar;
