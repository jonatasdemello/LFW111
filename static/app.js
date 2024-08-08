// app.js

const API = "http://localhost:3000/";

// add route category
const populateProducts = async (category) => {
	const products = document.querySelector('#products')
	products.innerHTML = ''

	// allows selecting a category
	const res = await fetch(`${API}/${category}`)
	const data = await res.json()

	for (const product of data) {
		const item = document.createElement('product-item')
		for (const key of ['name', 'rrp', 'info']) {
			const span = document.createElement('span')
			span.slot = key
			span.textContent = product[key]
			item.appendChild(span)
		}
		products.appendChild(item)
	}
}

const category = document.querySelector('#category')

category.addEventListener('input', async ({ target }) => {
	await populateProducts(target.value)
})

customElements.define('product-item', class Item extends HTMLElement {
	constructor() {
		super()
		const itemTmpl = document.querySelector('#item').content
		this.attachShadow({ mode: 'open' }).appendChild(itemTmpl.cloneNode(true))
	}
})