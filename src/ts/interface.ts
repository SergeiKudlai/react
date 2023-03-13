export interface IProps {
    children: JSX.Element[];
    className: string;
}

export interface IData {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    rating: {
        count: number;
        rate: number;
    };
}
