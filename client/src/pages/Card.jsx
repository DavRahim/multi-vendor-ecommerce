import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/Footer";
import product1 from "../assets/products/1.webp";
import product2 from "../assets/products/2.webp";
import product3 from "../assets/products/3.webp";
import product4 from "../assets/products/4.webp";
import product5 from "../assets/products/5.webp";
import product6 from "../assets/products/6.webp";
import product7 from "../assets/products/7.webp";

const Card = () => {

  const navigate = useNavigate();
  const redirect = () =>{
    navigate("/shipping", {
      state: {
        products: card_products,
        price: 10,
        shipping_fee: 40,
        items: 780,
        // price: price,
        // shipping_fee: shipping_fee,
        // items: buy_product_item,
      },
    });
  }


  const card_products = [
    product1,
    product2,
    
  ];
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
  ];
  const outofstock_products = [product1, product2];

  return (
    <div>
      <Header />
      <section className='bg-[url("http://localhost:5173/card.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90] mx-auto py-16">
          {card_products.length > 0 || outofstock_products.length > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%] md-lg:w-full">
                <div className="pr-3 md-lg:pr-0">
                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-4">
                      <h2 className="text-md text-green-500 font-semibold">
                        Stock Products {card_products.length}
                      </h2>
                    </div>
                    {card_products.map((p, i) => (
                      <div key={i} className="flex bg-white p-4 flex-col gap-2">
                        <div className="flex justify-start items-center">
                          <h2 className="text-md text-slate-600">
                            {/* {p.shopName} */}
                            ALi abab
                          </h2>
                        </div>
                        {products.map((pt, i) => (
                          <div key={i} className="w-full flex flex-wrap">
                            <div className="flex sm:w-full gap-2 w-7/12">
                              <div className="flex gap-2 justify-start items-center">
                                <img
                                  className="w-[80px] h-[80px]"
                                  src={pt}
                                  alt="product image"
                                />
                                <div className="pr-4 text-slate-600">
                                  <h2 className="text-md">
                                    {/* {pt.productInfo.name} */}
                                    Combo Offer of Jeanne Arthes Guipure And
                                  </h2>
                                  <span className="text-sm">
                                    {/* Brand : {pt.productInfo.brand} */}
                                    Brand : Arthes Guipure
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                              <div className="pl-4 sm:pl-0">
                                <h2 className="text-lg text-orange-500">
                                  $ 50
                                  {/* {pt.productInfo.price -
                                    Math.floor(
                                      (pt.productInfo.price *
                                        pt.productInfo.discount) /
                                        100
                                    )}{" "} */}
                                </h2>
                                <p className="line-through">
                                  {/* {pt.productInfo.price} */}
                                  70
                                </p>
                                {/* <p>-{pt.productInfo.discount}%</p> */}
                                <p>-60 %</p>
                              </div>
                              <div className="flex gap-2 flex-col">
                                <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                                  <div
                                    // onClick={() => dec(pt.quantity, pt._id)}
                                    className="px-3 cursor-pointer"
                                  >
                                    -
                                  </div>
                                  <div className="px-3">7</div>
                                  <div
                                    // onClick={() =>
                                    //   inc(
                                    //     pt.quantity,
                                    //     pt.productInfo.stock,
                                    //     pt._id
                                    //   )
                                    // }
                                    className="px-3 cursor-pointer"
                                  >
                                    +
                                  </div>
                                </div>
                                <button
                                  //   onClick={() =>
                                  //     dispatch(delete_card_product(pt._id))
                                  //   }
                                  className="px-5 py-[3px] bg-red-500 text-white"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                    {outofstock_products.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <div className="bg-white p-4">
                          <h2 className="text-md text-red-500 font-semibold">
                            {/* Out of Stock {outofstock_products.length} */}
                            Out of Stock 70
                          </h2>
                        </div>
                        <div className="bg-white p-4">
                          {outofstock_products.map((p, i) => (
                            <div key={i} className="w-full flex flex-wrap">
                              <div className="flex sm:w-full gap-2 w-7/12">
                                <div className="flex gap-2 justify-start items-center">
                                  <img
                                    className="w-[80px] h-[80px]"
                                    src={p}
                                    alt="product image"
                                  />
                                  <div className="pr-4 text-slate-600">
                                    <h2 className="text-md">
                                      {/* {p.products[0].name} */}
                                      Awasoime t-shirtr
                                    </h2>
                                    <span className="text-sm">
                                      {/* Brand : {p.products[0].brand} */}
                                      Brand : Essay
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                <div className="pl-4 sm:pl-0">
                                  <h2 className="text-lg text-orange-500">
                                    $ 80
                                    {/* {p.products[0].price -
                                      Math.floor(
                                        (p.products[0].price *
                                          p.products[0].discount) /
                                          100
                                      )}{" "} */}
                                  </h2>
                                  <p className="line-through">
                                    {/* {p.products[0].price} */}
                                    60
                                  </p>
                                  {/* <p>-{p.products[0].discount}%</p> */}
                                  <p>-70%</p>
                                </div>
                                <div className="flex gap-2 flex-col">
                                  <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                                    <div
                                      //   onClick={() => dec(p.quantity, p._id)}
                                      className="px-3 cursor-pointer"
                                    >
                                      -
                                    </div>
                                    {/* <div className="px-3">{p.quantity}</div> */}
                                    <div className="px-3">7</div>
                                    <div
                                      //   onClick={() =>
                                      //     dec(
                                      //       p.quantity,
                                      //       p.products[0].stock,
                                      //       p._id
                                      //     )
                                      //   }
                                      className="px-3 cursor-pointer"
                                    >
                                      +
                                    </div>
                                  </div>
                                  <button
                                    // onClick={() =>
                                    //   dispatch(delete_card_product(p._id))
                                    // }
                                    className="px-5 py-[3px] bg-red-500 text-white"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[33%] md-lg:w-full">
                <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                  {card_products.length > 0 && (
                    <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                      <h2 className="text-xl font-bold">Order Summary</h2>
                      <div className="flex justify-between items-center">
                        {/* <span>{buy_product_item} Item</span> */}
                        <span>6 Item</span>
                        <span>$ 90</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Shipping Fee</span>
                        {/* <span>${shipping_fee}</span> */}
                        <span>$ 90</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-green-500 rounded-sm"
                          type="text"
                          placeholder="Input Vauchar Coupon"
                        />
                        <button className="px-5 py-[1px] bg-blue-500 text-white rounded-sm uppercase text-sm">
                          Apply
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total ------- </span>
                        <span className="text-lg text-orange-500">
                          {/* ${price + shipping_fee} */}$ 9
                        </span>
                      </div>
                      <button
                        onClick={redirect}
                        className="px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg bg-orange-500 text-sm text-white uppercase"
                      >
                        {/* Proceed to checkout {buy_product_item} */}
                        Proceed to checkout 9
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link className="px-4 py-1 bg-indigo-500 text-white" to="/shops">
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Card;
