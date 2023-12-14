import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import axios from "axios";

import { Product } from "~/types";

type ProductPageProps = {
  product: Product;
};

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 className="text-4xl font-bold text-slate-800">{product.title}</h1>
      </section>
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  ctx,
) => {
  const { params } = ctx;

  const id = params?.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const response = await axios.get<Product>(
    `https://fakestoreapi.com/products/${id}`,
  );

  return { props: { product: response.data } };
};
