import { atom } from "recoil";

export const EmailAtom = atom({
    key: 'EmailAtom',
    default: ""
})
export const FirstNameAtom = atom({
    key: 'FirstNameAtom',
    default: ""
})
export const LastNameAtom = atom({
    key: 'LastNameAtom',
    default: ""
})
export const passwordAtom = atom({
    key: 'passwordAtom',
    default: ""
})
export const authAtom = atom({
    key: 'authAtom',
    default: false
})