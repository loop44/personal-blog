const Banner = () => (
  <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
    <div>
      <h1 className="text-7xl">LOOP&apos;s Daily Blog</h1>
      <h2 className="mt-5 md:mt-2">
        Добро пожалоть на{' '}
        <span className="underline decoration-4 decoration-[#f7ab0a]">самый классный</span> личный
        блог в интернете
      </h2>
    </div>
    <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
      Программирование и разработка | Последние новости технологий & многое другое!
    </p>
  </div>
);

export default Banner;
