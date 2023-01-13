'use client';

import Link from 'next/link';

const ClienSideRoute = ({ children, route }: { children: React.ReactNode; route: string }) => (
  <Link href={route}>{children}</Link>
);

export default ClienSideRoute;
