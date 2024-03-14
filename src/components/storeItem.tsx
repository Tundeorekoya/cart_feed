import { Card } from "react-bootstrap";

type storeItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function storeItem({ id, name, price, imgUrl }: storeItemProps) {
  return (
    <ul style={{}}>
      <li className="list-unstyled flex">
        <Card.Img
          src={imgUrl}
          height="300px"
          width="100px"
          style={{ objectFit: "cover", borderRadius: "1.5rem" }}
          className="border border-success p-2 mb-2 border-opacity-10 "
        />
      </li>
      <div className="border border-dark-subtle  border-opacity-10" />
      <li className="d-flex flex-column">
        <li className=" d-flex justify-content-between align-items-baseline mb-4 ">
          <span className="fs-5 mt-2">{name}</span>
          <span className="fs-6 mt-2">NGN{price}</span>
        </li>
      </li>
    </ul>
  );
}
