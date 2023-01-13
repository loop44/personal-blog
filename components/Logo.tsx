import Image from 'next/image';

const Logo = (props: any) => {
  const { renderDefault } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://avatars.githubusercontent.com/u/99007503?v=4"
        alt="logo"
      />
      {renderDefault(props)}
    </div>
  );
};

export default Logo;
