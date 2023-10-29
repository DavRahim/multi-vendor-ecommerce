import { adminRouts } from "./adminRoutes";
import { sellerRouts } from "./sellerRoutes";

export const privateRoutes = [
    ...adminRouts,
    ...sellerRouts
]