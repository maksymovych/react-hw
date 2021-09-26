import React from "react";
import Modal from "../../ui/Modal/Modal";
import s from "./ShowModal.module.css";

function ShowModal({ setIsActive, isActive, userCard }) {
  return (
    <Modal setIsActive={setIsActive} isActive={isActive}>
      <h2 className={s.title}>{userCard.name}</h2>
      <div className={s.cardInfo}>
        <div className={s.imgWrapper}>
          <img className={s.img} src={userCard.picture} alt={userCard.name} />
        </div>
        <div className={s.userField}>
          <p>email: {userCard.email}</p>
          <p>Age: {userCard.age}</p>
          <p>Gender: {userCard.gender}</p>
          <p>Salary: {userCard.balance}</p>
        </div>
      </div>
    </Modal>
  );
}

export default ShowModal;
