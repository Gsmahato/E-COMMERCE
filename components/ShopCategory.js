import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ShopCategory = ({ products }) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const updateDisplayedProducts = () => {
      const currentTimestamp = new Date().getTime();
      const index =
        Math.floor(currentTimestamp / (30 * 60 * 1000)) % products.length;
      const displayed = [
        products[index],
        products[(index + 1) % products.length],
        products[(index + 2) % products.length],
      ];
      setDisplayedProducts(displayed);
    };

    updateDisplayedProducts();
    const intervalId = setInterval(updateDisplayedProducts, 30 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [products]);
  return (
    <>
      <div className="section">
        <div className="cat-container">
          <div className="row">
            <div className="ShopCategory">
              {displayedProducts.map((product) => (
                <div className="shop" key={product.id}>
                  <div className="shop-img">
                    <Image
                      className="imj"
                      src={`https://www.getfromnepal.com/${product.image}`}
                      alt="pro"
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="shop-body">
                    <h3>
                      {product.category_name}
                      <br />
                      Collection
                    </h3>
                    <Link href="/AllCategories" className="cta-button">
                      Shop now
                      <i>
                        <FaArrowAltCircleRight />
                      </i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
