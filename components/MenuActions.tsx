import Link from "next/link";
import React from "react";
import { FaTripadvisor, FaInstagram } from "react-icons/fa";

import styles from "../styles/components.module.scss";

interface MenuActionsProps {
  id: string
}

const MenuActions: React.FC<MenuActionsProps> = ({ id }) => {
  return (
    <div className={styles.actionsContainer}>
      <Link href="https://www.instagram.com/terracodaalta/">
        <div className={styles.action}>
          <FaInstagram /> Instagram
        </div>
      </Link>
      <Link href="https://www.tripadvisor.co.uk/UserReviewEdit-g189143-d8830261-Terraco_da_Alta-Coimbra_Coimbra_District_Central_Portugal.html">
        <div className={styles.action}>
          <FaTripadvisor /> Make a Review
        </div>
      </Link>
    </div>
  );
};

export default MenuActions;