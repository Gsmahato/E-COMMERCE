import Head from "next/head";
import ShopCategory from "../../components/ShopCategory";
import NewProduct from "../../components/NewProduct";
import TopSelling from "../../components/TopSelling";
// import Store from "../../components/Store";
import ProPage from "../../components/ProPage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopSellingH from "../../components/TopSellingH";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home({ products,category}) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1470 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1470, min: 1220 },
      items: 3,
    },
    Smalldesktop: {
      breakpoint: { max: 1220, min: 824 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 824, min: 561 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 561, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Developed By GS Mahato" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <ToastContainer />


      <ShopCategory  products={products}/>
      <div className="container">
        <NewProduct />
        <div className="pro-item">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            ssr={true}
            focusOnSelect={true}
          >
            {products.map((product) => {
              return <ProPage key={product.id} product={product} />;
            })}
          </Carousel>
        </div>
      </div>
      <div className="container">
        <TopSellingH />
        <div className="pro-item">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
          >
            {products.map((product) => {
              return <ProPage key={product.id} product={product} />;
            })}
          </Carousel>
        </div>
      </div>
      {/* <div className="container">
        <div className="topsell-container">
          <div className="top-section">
            <TopSelling products={products} />
            <TopSelling products={products} />
            <TopSelling products={products} />
          </div>
        </div>
      </div> */}
    </>
  );
}



export async function getServerSideProps() {
  const res = await fetch("https://www.getfromnepal.com/productapi/");

  const products = await res.json();
  const category = [...new Set(products.map((product) => product.category))];


  return {
    props: {
      products,
      category,
    },
  };
}
