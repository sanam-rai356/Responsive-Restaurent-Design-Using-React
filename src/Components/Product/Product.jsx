import React from "react";
import "./Product.css";
import { ProductInfo } from "../../Data";

const Product = () => {
  return (
    <>
      <section className="ProductSection" id="product">
        <h3 className="heading">
          OUR <span>PRODUCTS</span>
        </h3>

        <div className="productDetail">
          {ProductInfo.map((pDetail, index) => {
            return (
              <>
                <div className="prodcutInfo" key={index}>
                  <img src={pDetail.img} />
                  <div className="product_inner_text">
                    <h4>Fresh Item</h4>
                    <div className="icons">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>
                      $15.99 <span className="check">20.99</span>
                    </p>

                    <div className="moreIcons">
                      <i class="fa-solid fa-cart-shopping"></i>
                      <i class="fa-solid fa-heart"></i>
                      <i class="fa-solid fa-eye"></i>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Product;
