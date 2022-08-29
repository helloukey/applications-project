import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Test = () => {
    const { data } = useFetch("https://jsonkeeper.com/b/O4YQ");
    console.log(data);
    return (
    <div>
        { data &&
            data.map(item => (
                <div key={item.number} className="py-8 flex gap-10 items-center">
                    <p>{item.type}</p>
                    <p>{item.number}</p>
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                    <p>{item.status}</p>
                    <Link to={`/details/${item.action}`}>{item.action}</Link>
                </div>
            ))
        }
    </div>
  )
}
export default Test