import { v4 as uuidv4 } from 'uuid';
// phone images
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";

const phoneData = [
    {
        id: uuidv4(),
        img: img1,
        name: "Смартфон Samsung Galaxy 10",
        price: "7 300 000 сум",
        creditPrice: "от 2 435 000 сум",
        gift: true,
        credit: true,
        exchange: false,
    },
    {
        id: uuidv4(),
        img: img2,
        name: "Смартфон Apple iPhone 11",
        price: "7 300 000 сум",
        creditPrice: "от 2 435 000 сум",
        gift: false,
        credit: false,
        exchange: true,
    },
    {
        id: uuidv4(),
        img: img3,
        name: "Наушники Apple Airpods 6",
        price: "7 300 000 сум",
        creditPrice: "от 2 435 000 сум",
        gift: false,
        credit: false,
        exchange: true,
    },
    {
        id: uuidv4(),
        img: img4,
        name: "Samsung Galaxy Z Fold 10",
        price: "7 300 000 сум",
        creditPrice: "от 2 435 000 сум",
        gift: true,
        credit: true,
        exchange: false,
    },
    {
        id: uuidv4(),
        img: img1,
        name: "Смартфон Samsung Galaxy 11",
        price: "7 300 000 сум",
        creditPrice: "от 2 435 000 сум",
        gift: true,
        credit: true,
        exchange: false,
    },
    {
        id: uuidv4(),
        img: img2,
        name: "Смартфон Apple iPhone 12",
        price: "7 300 000 сум",
        creditPrice: "от 2 435 000 сум",
        gift: false,
        credit: false,
        exchange: true,
    },
    {
        id: uuidv4(),
        img: img3,
        name: "Наушники Apple Airpods Pro",
        price: "7 300 000 сум",
        creditPrice: "от 2 435 000 сум",
        gift: false,
        credit: false,
        exchange: true,
    },
    {
        id: uuidv4(),
        img: img4,
        name: "Samsung Galaxy Z Fold 12",
        price: "7 300 000 сум",
        creditPrice: "от 2 435 000 сум",
        gift: true,
        credit: true,
        exchange: false,
    },
];

export default phoneData;