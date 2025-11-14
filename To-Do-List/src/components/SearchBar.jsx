const SearchBar = ({ value, onChange }) => {
    return (
        <div className="mb-3">
            <input type="text" 
            className="form-control" 
            placeholder="Search tasks..." 
            value={value} 
            onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};

export default SearchBar;
