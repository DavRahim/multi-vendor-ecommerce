import { useEffect, useState } from "react";
import { BsImages } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/Io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_category } from "../../store/reducers/categoryReducer";
import { add_product } from "../../store/reducers/productReducer";
import { PropagateLoader } from "react-spinners";
import { overRightStyle } from "../../utils/utils";
import toast from "react-hot-toast";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { successMessage, errorMessage, loader } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(
      get_category({
        searchValue: "",
        parPage: "",
        page: "",
      })
    );
  }, [dispatch]);

  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    stock: "",
    discount: "",
  });
  const [cateShow, setCateShow] = useState(false);
  const [categorys, setCategorys] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let srcValue =
        allCategory &&
        allCategory?.filter(
          (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
      setAllCategory(srcValue);
    }
    if (!value) {
      setAllCategory(categorys);
    }
  };

  const [image, setImage] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;

    if (length > 0) {
      setImage([...image, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = image;
      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImage([...tempImages]);
    }
  };

  const removeImage = (ind) => {
    const filterImage = image.filter((img, index) => index !== ind);
    const filterUrl = imageShow.filter((img, index) => index !== ind);

    setImage(filterImage);
    setImageShow(filterUrl);
  };

  useEffect(() => {
    setAllCategory(category);
  }, [category]);

  const add = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("description", state.description);
    formData.append("price", state.price);
    formData.append("stock", state.stock);
    formData.append("category", categorys);
    formData.append("discount", state.discount);
    formData.append("shopName", "Rahim sports");
    formData.append("brand", state.brand);

    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
      // console.log(image[i]);
    }

    dispatch(add_product(formData));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
    if (successMessage) {
      toast.success(successMessage);
      setState({
        name: "",
        description: "",
        price: "",
        brand: "",
        stock: "",
        discount: "",
      });
      setImageShow([]);
      setImage([]);
      setCategorys("");
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md ">
        <div className="flex justify-between items-center pb-4 ">
          <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Product</h1>
          <Link
            className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg hover:text-white rounded-md px-7 py-2 my-2"
            to={"/seller/dashboard/products"}
          >
            Products
          </Link>
        </div>
        <div>
          <form onSubmit={add}>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="flex flex-col w-full  gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  placeholder="product name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex flex-col w-full  gap-1">
                <label htmlFor="brand">brand</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  placeholder="brand name"
                  name="brand"
                  id="brand"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="flex flex-col w-full  gap-1 relative ">
                <label htmlFor="category">Category</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  value={categorys}
                  type="text"
                  placeholder="----select category----"
                  id="category"
                />
                <div
                  className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
                    cateShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      onChange={categorySearch}
                      value={searchValue}
                      type="text"
                      placeholder="search"
                      className="px-3 py-2 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                    {allCategory &&
                      allCategory.length > 0 &&
                      allCategory?.map((c, i) => (
                        <span
                          className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover w-full cursor-pointer ${
                            category === c.name && "bg-indigo-500"
                          } `}
                          onClick={() => {
                            setCateShow(false);
                            setCategorys(c.name);
                            setSearchValue("");
                            setAllCategory(category);
                          }}
                          key={i}
                        >
                          {c.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full  gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                  onChange={inputHandle}
                  value={state.stock}
                  type="number"
                  placeholder="Product Stock"
                  name="stock"
                  id="stock"
                  min={0}
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="flex flex-col w-full  gap-1">
                <label htmlFor="price">Price</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                  onChange={inputHandle}
                  value={state.price}
                  type="number"
                  placeholder="product price"
                  name="price"
                  id="price"
                  min={0}
                />
              </div>
              <div className="flex flex-col w-full  gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                  onChange={inputHandle}
                  value={state.discount}
                  type="number"
                  placeholder="product Discount"
                  name="discount"
                  id="discount%"
                  min={0}
                />
              </div>
            </div>
            <div className="flex flex-col w-full  gap-1 text-[#d0d2d6] mb-5">
              <label htmlFor="description">Description</label>
              <textarea
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] "
                onChange={inputHandle}
                value={state.description}
                type="number"
                rows={5}
                placeholder="product description"
                name="description"
                id="description"
                min={0}
              ></textarea>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 xs:gap-4 gap-3 w-full  text-[#d0d2d6] mb-4">
              {imageShow &&
                imageShow.length > 0 &&
                imageShow?.map(
                  (img, ind) => (
                    console.log(img?.url),
                    (
                      <div className="h-[180px] relative " key={ind}>
                        <label htmlFor={ind}>
                          <img
                            className="w-full h-full rounded-sm"
                            src={img?.url}
                            alt="url"
                          />
                        </label>
                        <input
                          onChange={(e) => changeImage(e.target.files[0], ind)}
                          type="file"
                          id={ind}
                          className="hidden"
                        />
                        <span
                          onClick={() => removeImage(ind)}
                          className="p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-sla/50 text-white absolute top-1 right-1 rounded-full"
                        >
                          <IoMdCloseCircle />
                        </span>
                      </div>
                    )
                  )
                )}
              <label
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]"
                htmlFor="image"
              >
                <span>
                  <BsImages />
                </span>
                <span>Select image</span>
              </label>
              <input
                onChange={imageHandle}
                multiple
                type="file"
                id="image"
                className="hidden"
              />
            </div>
            <div className="flex ">
              <button
                disabled={loader ? true : false}
                className="bg-blue-500 w-[145px] hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-5"
              >
                {loader ? (
                  <PropagateLoader color="#fff" cssOverride={overRightStyle} />
                ) : (
                  "Add Product"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
