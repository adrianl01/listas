import algoliasearch from "algoliasearch"

const client = algoliasearch("BTTD31H87B", "9f389d4b28114bdc0da0270648aa2597")
const productIndex = client.initIndex("products")

export { productIndex }