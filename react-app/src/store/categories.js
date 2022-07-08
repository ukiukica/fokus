const VIEW_CATEGORIES = "categories/VIEW_CATEGORIES";

const view = (categories) => ({
    type: VIEW_CATEGORIES,
    categories,
});

export const getCategories = () => async (dispatch) => {
    const response = await fetch("/api/categories");

    if (response.ok) {
        const categories = await response.json();
        console.log("CATEGORIES FROM THUNK", categories)
        dispatch(view(categories));
    }
}

const categoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_CATEGORIES:
            const normalizedCategories = {};
            action.categories.categories.forEach((category) => {
                normalizedCategories[category.id] = category;
            });
            return { ...normalizedCategories };
        default:
            return state;
    }
}

export default categoriesReducer;
