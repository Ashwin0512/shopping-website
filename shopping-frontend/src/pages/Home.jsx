import CarouselCategory from "../components/home/CarouselCategory"
import LatestProducts from "../components/home/LatestProducts"
import Searchbar from "../components/home/Searchbar"
import TopCategories from "../components/home/TopCategories"
import { Navbar } from "../components/Navbar"

export default function Home() {
    return (
        <>
        <Navbar />
        <Searchbar />
        <TopCategories />
        <CarouselCategory/>
        <LatestProducts />
        </>
    ) 
}