import React, { ReactNode } from "react";
import styles from "./modal.module.css";

type Props = {
  children: ReactNode;
};

function Modal({ children }: Props) {
  return (
    <>
      <div className={styles.backdrop} />
      <dialog open={true} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
