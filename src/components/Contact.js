import React, { useState } from "react";
// import "../app.css";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

// or less ideally

const Contact = () => {
  const [title, settitle] = useState("");
  const [status, setstatus] = useState("");
  const [url, seturl] = useState("");
  const [date, setdate] = useState("");
  const [value, setvalue] = useState("يتم تحديث الملف بشكل دوري");
  const [loader, setLoader] = useState(false);

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("resources")

      .add({
        title: title,
        status: value,
        url: url,
        date: date,
      })
      .then(() => {
        setLoader(false);
        alert("Your data has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    settitle("");
    setstatus("");
    seturl("");
    setdate("");
  };

  return (
    <div className="input">
      <form dir="rtl" className="form" onSubmit={handleSubmit}>
        <h1>منشئ الملفات &#128194;</h1>

        <label>العنوان</label>
        <input
          placeholder="العنوان"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <label>الحالة</label>
        <select value={value} onChange={handleChange}>
          <option value="يتم تحديث الملف بشكل دوري">
            يتم تحديث الملف بشكل دوري
          </option>

          <option value="ملف ثابت">ملف ثابت</option>
        </select>

        <label>الرابط</label>
        <input
          placeholder="Google Drive link / Youtube link / File link "
          value={url}
          onChange={(e) => seturl(e.target.value)}
        ></input>

        <input
        type="date"
          placeholder="date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
        ></input>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default Contact;
