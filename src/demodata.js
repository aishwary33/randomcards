import faker from "faker";
import washingMachine from "./assets/images/washing-machine.jpg";
import refrigerator from "./assets/images/refrigerator.jpg";
import airConditioner from "./assets/images/air-conditioner.jpg";
const prodName = faker.commerce;
// const prodImage = faker.image;
const prodPrice = faker.commerce;
const prodSent = faker.lorem;

export const demodata = [
  {
    id: 1,
    name: prodName.productName(),
    image: washingMachine,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 2,
    name: prodName.productName(),
    image: refrigerator,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 3,
    name: prodName.productName(),
    image: airConditioner,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 4,
    name: prodName.productName(),
    image: airConditioner,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 5,
    name: prodName.productName(),
    image: washingMachine,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 6,
    name: prodName.productName(),
    image: refrigerator,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 7,
    name: prodName.productName(),
    image: washingMachine,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 8,
    name: prodName.productName(),
    image: refrigerator,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 9,
    name: prodName.productName(),
    image: airConditioner,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 10,
    name: prodName.productName(),
    image: washingMachine,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 11,
    name: prodName.productName(),
    image: refrigerator,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 12,
    name: prodName.productName(),
    image: airConditioner,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 13,
    name: prodName.productName(),
    image: washingMachine,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 14,
    name: prodName.productName(),
    image: refrigerator,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 15,
    name: prodName.productName(),
    image: airConditioner,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 16,
    name: prodName.productName(),
    image: washingMachine,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 17,
    name: prodName.productName(),
    image: refrigerator,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 18,
    name: prodName.productName(),
    image: airConditioner,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 19,
    name: prodName.productName(),
    image: airConditioner,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
  {
    id: 20,
    name: prodName.productName(),
    image: washingMachine,
    price: prodPrice.price(),
    text: prodSent.sentence(),
  },
];
