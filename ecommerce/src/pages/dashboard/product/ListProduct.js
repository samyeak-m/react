import { useEffect, useState } from "react";
import MenuButton from "../../../components/MenuButton";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/Loading";

export default function ListProduct() {
  // const [products, setProducts] = useState({
  //   data: [],
  //   total: 0
  // });

  const {data:products,
    loading,
    error} = 
    useFetch(
    `${process.env.REACT_APP_API_URL}/product`
    );

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/product`).then((res) => {
  //     setProducts({
  //       data: res.data.data,
  //       total: res.data.total
  //     });
  //   });
  // }, []);

  if(loading){
    return<Loading />
  }

  return (
    <div className="min-h-screen overflow-y-auto">
      <div className="my-4">
        <span className="mx-8 text-2xl font-bold text-gray-600">
          List of Products
        </span>
      </div>
      <table className="h-full min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Created At</th>
            <th className="relative px-6 py-3">
              <span className="">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products?.data?.map((person) => (
            <tr key={person._id}>
              <td>{person.name}</td>
              <td>{person.price}</td>
              <td>{person.description}</td>
              <td>{person.brand}</td>
              <td>{person.createdAt}</td>
              <td>
                <MenuButton
                  links={[
                    { onClick: () => {}, label: "Update" },
                    { onClick: () => {}, label: "Delete" }
                  ]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}