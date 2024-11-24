import Link from "next/link";
import Image from "next/image";

import headerImg from "../../static/header.jpeg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.subcontainer}>
        <div className={styles.title}>PreyAPI</div>

        <ul className={styles.list__container}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link href="/documentation">Documentation</Link>
          </li>
        </ul>
      </div>

      <Image className={styles.img} src={headerImg} alt="prey" />
    </div>
  );
};

export default Header;
