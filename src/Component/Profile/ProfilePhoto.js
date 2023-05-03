import React from 'react';
import personelImg from '/Users/macbookpro/my-app/src/Profilepic.jpg';
import styles from './ProfilePhoto.module.css';

function ProfilePhoto() {
  return (
    <img className={styles.rounded} src={personelImg} alt="Profile" />
  );
}

export default ProfilePhoto;
