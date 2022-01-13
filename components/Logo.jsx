import * as React from "react";
import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  return (
        <Link href="/" passHref><a>
          <Image
            src="/logo.png"
            alt="logo"
            width="1025"
            height="200"
            layout="responsive"
          />
        </a></Link>
  );
};

export default Logo;
