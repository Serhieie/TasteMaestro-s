document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filterForm');
    const keywordInput = document.getElementById('keywordInput');
    const categorySelect = document.getElementById('categorySelect');
    const productsList = document.getElementById('productsList');

    const filters = { keyword: null, category: null, page: 1, limit: 9 };

    filterForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        filters.keyword = keywordInput.value;
        filters.category = categorySelect.value === 'Show all' ? null : categorySelect.value;
        filters.page = 1;
        await fetchProducts();
    });

    const fetchProducts = async () => {
        try {
            const url = `https://food-boutique.b.goit.study/api/products?page=${filters.page}&limit=${filters.limit}`;
            const response = await axios.get(url);
            const data = response.data;
            displayProducts(data.results);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const displayProducts = (products) => {
        productsList.innerHTML = '<h2>Products</h2><ul>' +
            products.map(product =>
                `<li>
                    <img src="${product.img}" alt="${product.name}" />
                    <p>${product.name}</p>
                    <p>Price: $${product.price}</p>
                </li>`
            ).join('') +
            '</ul>';
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://food-boutique.b.goit.study/api/products/categories');
            const data = response.data;
            categories = ['Show all', ...data];
            displayCategories(categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const displayCategories = (categories) => {
        categorySelect.innerHTML = categories.map(category =>
            `<option value="${category}">${category}</option>`
        ).join('');
    };

    fetchCategories();
    fetchProducts();
});
