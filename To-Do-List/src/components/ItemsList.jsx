const ItemsList = ({ todos, onDelete }) => {
    return (
        <div>
            {todos.length === 0 && <p className="text-muted">No tasks found.</p>}

            {todos.length > 0 && (
                <ul className="list-group">
                    {todos.map((todo, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{todo}</span>
                            <div>
                                <button className="btn btn-sm btn-outline-danger" 
                                onClick={() => onDelete(index)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemsList;
