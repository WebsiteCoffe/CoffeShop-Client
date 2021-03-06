export const collections = {
	products: 'products',
	feedbacks: 'feedbacks',
	orders: 'orders',
	users: 'users',
	membership: 'memberships',
	types: 'types',
	carts: 'carts',
	rewards: 'rewards'
};

export const types_docs = {
	discounts: 'discounts',
	surcharges: 'surcharges',
	product_category: 'product_category',
	ratings: 'ratings',
	roles: 'roles',
	vips: 'vips',
	order_state: 'order_state',
	payment_method: 'payment_method'
};
export const sub_collections = {
	types: 'all',
	processing: 'all',
};
export const orders_docs = {
	processed: 'processed',
	processing: 'processing'
}


export const formatDate = 'DD/MM/YYYY'

export const orderx_docs = {
	processed: 'processed',
	processing: 'processing'
}

export const defaultIdState = 'Y8E2WTnlr7WRE3yeZoeO'
export const AbortIDState = 'pqVXUj9onmC07620vaZD'
export const paypal = 'DlmddFvkj5XdVfFPRVW7'
// 10,000 = 1d
export const calculateExtraPoint = priceTotal => Math.floor(priceTotal/10000) 
