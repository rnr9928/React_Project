import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase.config"
import DeleteArticle from "./DeleteArticle";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    <div>
      {articles.length === 0 ? (
        <p>내용을 추가해주세요</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
            likes,
            comments,
          }) => (
            <div className="border mt-3 p-3 bg-light" key={id}>
              <div className="row">
                <div className="col-3">
                  <Link to={`/article/${id}`}>
                    <img
                      src={imageUrl}
                      alt="title"
                      style={{ height: 180, width: 180 }}
                    />
                  </Link>
                </div>
                <div className="col-9 ps-3">
                  <div className="row">
                    <div className="col-6">
                      {createdBy && (
                        <span className="badge bg-primary"></span>
                      )}
                    </div>
                    <div className="col-6 d-flex flex-row-reverse">
                      {user && user.uid === userId && (
                        <DeleteArticle id={id} imageUrl={imageUrl} />
                      )}
                    </div>
                  </div>
                  <h3>제목:{title}</h3>
                  <p>{createdAt.toDate().toDateString()}</p>
                  <br></br>
                  <h5>내용:{description}</h5>

                
                    {comments && comments.length > 0 && (
                      <div className="pe-2">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>{comments?.length}댓글</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
    
          )
        )
      )}
    </div>
  );
}
