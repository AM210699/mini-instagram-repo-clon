import { MenuOption } from "../types/MenuOption.type"


const menu: Array<MenuOption> = [
    {
        icono: "bi-house",
        titulo: "Home",
        ruta: ['/search']
    },
    {
        icono: "bi-search",
        titulo: "Search",
        ruta: ['/explore']
    },
    {
        icono: "bi-film",
        titulo: "Reels",
        ruta: ['/reels']
    },
    {
        icono: "bi-envelope",
        titulo: "Messages",
        ruta: ['/messages']
    },
    {
        icono: "bi-heart",
        titulo: "Notifications",
        ruta: ['/notifications']
    },
    {
        icono: "bi-plus-square",
        titulo: "Create",
        ruta: ['/create']
    },
    {
        icono: "bi-person-bounding-box",
        titulo: "Profile",
        ruta: ['/profile']
    },
];

export default menu