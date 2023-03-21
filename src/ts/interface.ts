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

export interface IFuncProps {
    updateData: (params: string) => void;
}

export interface INewString {
    updateStringSearch: string;
}
