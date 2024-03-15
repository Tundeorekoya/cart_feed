import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

type storeItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function storeItem({ id, name, price, imgUrl }: storeItemProps) {
  const quantity = 0;
  return (
    <ul className="h-100">
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
          <span className="fs-6 mt-2">{formatCurrency(price)}</span>
        </li>
      </li>
      <li className="mt-auto list-unstyled ">
        {quantity === 0 ? (
          <Button className=" bg-secondary border-0 border">
            {" "}
            + Add to Cart
          </Button>
        ) : (
          <li className="list-unstyled d-flex justify-content-between">
            <li className="d-flex " style={{ gap: "2rem" }}>
              <Button className="bg-secondary border-0 btn-sm">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-width="1.5"
                    d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M6,12 L18,12"
                  />
                </svg>
              </Button>
              <span className="fs-4"> {quantity}</span>

              <Button className="bg-secondary border-0 btn-sm">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#fff"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </Button>
            </li>

            <Button className="bg-secondary border-0 ms-5 btn-sm">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </li>
        )}
      </li>
    </ul>
  );
}
