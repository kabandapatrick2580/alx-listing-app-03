export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string;
}

export interface LayoutProps {
    children: React.ReactNode;
}

export interface PillProps {
    label: string;
    onClick?: () => void; // function that takes no arguments and returns void
}