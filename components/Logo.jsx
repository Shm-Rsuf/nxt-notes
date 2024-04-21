import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div class='hidden lg:flex'>
      <Link aria-label='Home' href='/'>
        <Image src='/logo.svg' alt='Logo' width={100} height={24} priority />
      </Link>
    </div>
  );
};

export default Logo;