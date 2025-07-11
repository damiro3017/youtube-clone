// REACT
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import { Home } from "../pages/Home";
import { SearchResults } from "../components/SearchResults";
import { VideoDetail } from "../components/VideoDetail";
import { MainLayout } from "../layouts/MainLayout";

export const AppRoutes = () => {
    return (
        <MainLayout >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/search/:query" element={<SearchResults />} />
            </Routes>
        </MainLayout>
    )
}