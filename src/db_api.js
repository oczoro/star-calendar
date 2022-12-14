import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase.js';

export const createUser = async (uid, user, month) => {
  await setDoc(doc(db, 'users', uid), user);
  await setDoc(doc(db, 'users_calendar', uid), { months: [month] });
  await setDoc(doc(db, 'users_store', uid), { rewards: [] });
};

export const updateUserName = async (uid, username) => {
  return await updateDoc(doc(db, 'users', uid), { name: username });
};
export const updateUserIcon = async (uid, icon) => {
  return await updateDoc(doc(db, 'users', uid), { icon: icon });
};
export const updateUserBalance = async (uid, balance) => {
  return await updateDoc(doc(db, 'users', uid), { balance: balance });
};

export const getUser = async (uid) => {
  const snapDoc = await getDoc(doc(db, 'users', uid));
  if (snapDoc.exists()) {
    return snapDoc.data();
  } else {
    return console.log('No such user document!');
  }
};

export const getUserCalendar = async (uid) => {
  const snapDoc = await getDoc(doc(db, 'users_calendar', uid));
  if (snapDoc.exists()) {
    return snapDoc.data();
  } else {
    return console.log('No such users calendar document!');
  }
};

export const updateUserDate = async (uid, months) => {
  return await updateDoc(doc(db, 'users_calendar', uid), { months: months });
};
