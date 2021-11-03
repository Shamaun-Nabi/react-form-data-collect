import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FcManager } from "react-icons/fc";
import { useState } from "react";
// import { faAd } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [info, setinfo] = useState({});
  const [record, setRrcord] = useState({});
  // const [userRecord, serUserRecord] = useState([]);

  const handelOnChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setinfo({ ...info, [fieldName]: fieldValue });
    // console.log(info);
  };

  const dataSubmit = (e) => {
    e.preventDefault();
    const userValue = { ...info };
    setRrcord(userValue);

    console.log(record.userName);
    // serUserRecord([...userRecord,recentRecord])
    // console.log(userRecord);
  };

  return (
    // Remove this area and start your code
    <div className="container d-flex align-items-center justify-center h-screen">
      <div className="border p-5 shadow-md w-4/12">
        <FcManager className="m-auto" />
        <form action="" className="" onSubmit={dataSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="form-control mt-2 "
            required
            onChange={handelOnChange}
            name="userName"
          />
          <input
            type="email"
            id="name"
            placeholder="Your Email address"
            className="form-control mt-2 "
            required
            onChange={handelOnChange}
            name="email"
          />

          <input
            type="password"
            placeholder="Address"
            className="form-control mt-2"
            required
            name="address"
            onChange={handelOnChange}
          />
          <input
            type="password"
            placeholder="password"
            className="form-control mt-2"
            required
            name="Confirmpassword"
            onChange={handelOnChange}
          />

          <button type="submit" className="btn btn-primary form-control mt-2  ">
            <FontAwesomeIcon
              className="mr-1"
              icon={faReact}
              rotation={90}
              spin
            />
            Log In
          </button>
        </form>
      </div>

      <div>
        <p>Name: {record.userName}</p>
        <p>pass: {record.email}</p>
        <p>add: {record.address}</p>
      </div>
    </div>
    // Remove this area and start your code
  );
}

export default App;
