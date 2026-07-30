import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <>
      <div className="section-heading">
        <div>
          <h2>Our Products</h2>
          <p>Choose from our available products</p>
        </div>

        <span>3 products</span>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
