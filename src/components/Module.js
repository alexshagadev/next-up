import Link from "next/link";

const Module = ({ title, link, className }) => {
  return (
    <Link href={link} passHref>
      <div className={`relative w-40 h-44 flex items-center justify-center text-center font-bold text-xl text-white hexagon ${className}`}>
        {title}
      </div>
    </Link>
  );
};

export default Module;
