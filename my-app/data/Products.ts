import { ProductProps } from "../components/Product";
import { CATEGORIES } from "./Categories";
import uuid from 'react-native-uuid';



export const products: ProductProps[] = [
    {
        id:  uuid.v4(),
        name: "pan",
        category: CATEGORIES.bakery,
        udPrice: 2,
        quantity: 3,
        isObtained: false

    },
    {
        id:  uuid.v4(),
        name: "Elmo",
        category: CATEGORIES.others,
        udPrice: 100000,
        quantity: 1,
        isObtained: true

    },
    {
        id:  uuid.v4(),
        name: "Pera",
        category: CATEGORIES.fruitsVegetables,
        udPrice: 1,
        quantity: 1,
        isObtained: false

    }
]