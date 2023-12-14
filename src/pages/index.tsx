import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import axios from "axios";

import { Product } from "~/types";
import { ProductCard, Filters } from "~/components";
import { useProducts } from "~/hooks";

type HomeProps = {
  products: Product[];
};

const Home: FC<HomeProps> = ({ products: initialProducts }) => {
  const { products, isLoading, refetch } = useProducts(initialProducts);

  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Главная" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="rounded-lg bg-slate-200 p-4">
        <Filters onFiltersChange={refetch} />
      </section>
      <section className="mt-4 grid grid-cols-3 justify-between gap-10 rounded-lg bg-slate-200 p-4">
        {!isLoading &&
          products.map((p) => <ProductCard key={p.id} product={p} />)}
      </section>
      <section className="mt-4 rounded-lg bg-slate-200 p-4">Pagination</section>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await axios.get<Product[]>(
    "https://fakestoreapi.com/products",
  );

  return { props: { products: response.data } };
};
