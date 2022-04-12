import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import "./View.css";

const View = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("resources")
      // .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    // return cleanup function
    return () => subscriber();
  }, [loading]); // empty dependencies array => useEffect only called once

  if (loading) {
    return (
      <div class="app_loading">
        <div>
          <div className="aw">أكاديمية أوتاد</div>
          <div className="aw">AWTAD ACADEMY</div>
          <div>
            <div id="circles"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <p class="text-center">ملفات - الصف الأول ثانوي</p>

      {posts.length > 0 ? (
        posts.map((post) => (
          <div class="col-sm-6">
            <div key={post.key} className="card bg-dark text-white">
              <div class="card-body">
                <h5 class="card-title">{post.title}</h5>

                <p class="card-text">{post.status}</p>

                <a href={post.url} class="btn btn-primary">
                  هنا
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>لا يوجد ملفات حاليًا</h1>
      )}
    </div>
  );
};

export default View;
