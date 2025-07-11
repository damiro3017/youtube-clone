// REACT
import { useParams } from "react-router-dom"

export const SearchResults = () => {
    const { query } = useParams()
    return (
        <h1> Resultados de búsqueda para: {query}</h1>
    )
}