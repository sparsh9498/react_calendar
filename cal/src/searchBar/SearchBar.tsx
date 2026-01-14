import React, { useState, useCallback } from 'react'
import { debounce } from './debounce';

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // API call
    const fetchResults = async (searchTerm: string) => {
        if (!searchTerm) {
            setResults([]);
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
            const data = await response.json();
            setResults(data.items || []);
        } catch (error) {
            console.error("Error fetching:", error);
        } finally {
            setLoading(false);
        }
    };

    // Debounced version of API call 
    // (Here its nothing but it will delay the API call by 2 seconds, will not fire API every millisecond)
    const debouncedFetch = useCallback(debounce(fetchResults, 2000), []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        debouncedFetch(value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search GitHub users..."
                style={{ padding: "8px", width: "250px" }}
            />
            {loading && <p>Loading...</p>}
            <ul>
                {results.map(user => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar
