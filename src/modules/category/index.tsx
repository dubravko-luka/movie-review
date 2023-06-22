import React, { memo, useEffect, useState } from "react";
import { useQuery, gql } from '@apollo/client';
import { useRouter } from "next/router";

const CategoryContainer: React.FC = () => {

  const GET_PRODUCTS = gql`
    query GetProducts(
      $cateId: [ID!],
      $stateId: [ID!],
      $limit: Int!
    ) {
      getListProducts(
        cate_id: $cateId,
        state: $stateId
        offset: 0,
        limit: $limit,
      ) {
        total,
        items {
          id,
          title,
          slug,
          photos,
          feature_image,
          description,
          categories{
            cate_title
          },
          price {
            value,
            time
          },
          special_offer {
            value
            time
          },
          required_deposit,
          how_to_deliver,
          how_to_be_returned,
          availability,
          instanbook,
          loc,
          address,
          promotion_code,
          minimum_book,
          value,
          tags,
          author {
            first_name
            last_name
          },
          average_rate,
          number_rate,
          total_due_now,
          status,
          totalCountView,
          product_tags {
            tag_title
          },
          state {
            name
          },
          created,
          updated
        }
      }
    }
  `;

  const router = useRouter()


  const [cate, setCate] = useState(router?.query && router?.query?.category ? router?.query?.category : "")
  const [state, setState] = useState(router?.query && router?.query?.state ? router?.query?.state : "")
  const [limit, setLimit] = useState(16)

  const query: any = {
    limit: limit,
  };

  console.log('==============>', 'loading version');

  if (cate) {
    query.cateId = [cate]
  }

  if (state) {
    query.stateId = [state]
  }

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: query
  });

  useEffect(() => {
    if (router.query && router.query.category) {
      setCate(router?.query?.category)
    } else {
      setCate("")
    }
  }, [router.query?.category])

  useEffect(() => {
    if (router.query.state) {
      setState(router?.query?.state)
    } else {
      setState("")
    }
  }, [router.query?.state])

  useEffect(() => {
    if (router.query.limit) {
      setLimit(Number(router?.query?.limit))
    } else {
      setLimit(16)
    }
  }, [router.query?.limit])

  const handleCategoryQuery = async (e: any) => {
    const as: any = undefined;
    router.replace(
      {
        pathname: '/the-loai',
        query: {
          ...router.query,
          category: e.target.value,
        },
      },
      as,
      { shallow: true },
    );
  };

  const handleStateQuery = async (e: any) => {
    const as: any = undefined;
    router.replace(
      {
        pathname: '/the-loai',
        query: {
          ...router.query,
          state: e.target.value,
        },
      },
      as,
      { shallow: true },
    );
  };

  const handleLimitQuery = async (e: any) => {
    const as: any = undefined;
    router.replace(
      {
        pathname: '/the-loai',
        query: {
          ...router.query,
          limit: e.target.value,
        },
      },
      as,
      { shallow: true },
    );
  };

  return (
    <>
      <div className="text-white">
        <div className="mb-8 flex gap-6">
          <select className="text-black" value={router?.query?.category} onChange={handleCategoryQuery}>
            <option value="">---All---</option>
            <option value="60599df530dddf002f38f07f">appliances</option>
            <option value="60599e1830dddf002f38f080">baby & maternity</option>
            <option value="60599e3830dddf002f38f081">books & games</option>
            <option value="60599e5a30dddf002f38f082">clothes & jewellery</option>
            <option value="60599e7930dddf002f38f083">event equipment</option>
            <option value="60599ec230dddf002f38f085">home & garden</option>
            <option value="60599edb30dddf002f38f086">music & computer</option>
            <option value="60599ef630dddf002f38f087">outdoors</option>
            <option value="60599f1430dddf002f38f088">something unique</option>
            <option value="60599f3230dddf002f38f089">sports equipment</option>
            <option value="60599f5430dddf002f38f08a">tools & hardware</option>
          </select>

          <select className="text-black" value={router?.query?.state} onChange={handleStateQuery}>
            <option value="">---All---</option>
            <option value="63c8fc8b0a7420002051dd66">Victoria</option>
            <option value="63c8fcc00a7420002051dd6e">New South Wales</option>
            <option value="6407fb26134683002052da31">Queensland</option>
            <option value="6407fb61134683002052da38">South Australia</option>
            <option value="6407fb83134683002052da91">Western Australia</option>
            <option value="6407fba2134683002052da95">Northern Territory</option>
            <option value="6407fbc2134683002052da99">Australian Capital Territory</option>
            <option value="6407fbd9134683002052da9d">Tasmania</option>
          </select>

          <select className="text-black" value={router?.query?.limit} onChange={handleLimitQuery}>
            <option value="16">16</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>

        </div>


        {
          loading
            ? <p>Loading...</p>
            : error
              ? <p>Error...</p>
              : data?.getListProducts?.items?.length === 0
                ? <p>No Items!</p>
                : <ul>
                  {data?.getListProducts?.items?.map((product: any, index: number) => (
                    <li key={index} className={`border-b-2 py-3 border-white flex items-center gap-10`}>
                      <p>{index + 1}&nbsp;</p>
                      <img src={product?.feature_image} width={100} alt="" />
                      <p>{product.title} - ${product.price.value}</p>
                    </li>
                  ))}
                </ul>
        }
      </div>
    </>
  )
}

export default memo(CategoryContainer)