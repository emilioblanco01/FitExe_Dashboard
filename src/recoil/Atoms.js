import { atom } from "recoil";

export const textState = atom({
    key: 'textState',
    default: ''
});

// atom de recoil para controlar el estado de desplegado a compacto del sidebar
export const sidebarState = atom({
    key: 'sidebarState',
    default: true
});