import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Element } from "react-scroll";

const Home = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: comment,
      replies: [],
    };
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      if (response.status === 200) {
        setCommentsList([...commentsList, newComment]);
        setComment("");
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
    setCommentsList([...commentsList, newComment]);
    setComment("");
  };

  const handleReplySubmit = (e, index) => {
    e.preventDefault();
    const replyComment = e.target.reply.value;
    const newCommentList = [...commentsList];
    newCommentList[index].replies.push(replyComment);
    setCommentsList(newCommentList);
    e.target.reset();
  };

  return (
    <Element name="home">
      <div>
        <div className="main-home">
          <div className="container">
            <div className="row mt-5">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img
                  src={require("../image/fruits5.jpg")}
                  className="home-image"
                ></img>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="mt-5 d-flex justify-content-center">
                  Even the all-powerful Pointing has no control about the blind
                  texts
                </h3>
                <p className="mt-3">
                  Food is any substance consumed by an organism for nutritional
                  support. Food is usually of plant, animal, or fungal origin,
                  and contains essential nutrients, such as carbohydrates, fats,
                  proteins, vitamins, or minerals. The substance is ingested by
                  an organism and assimilated by the organism's cells to provide
                  energy, maintain life, or stimulate growth. Different species
                  of animals have different feeding behaviours that satisfy the
                  needs of their metabolisms that have evolved to fill a
                  specific ecological niche within specific geographical
                  contexts.
                </p>
                <p>
                  The food system has significant impacts on a wide range of
                  other social and political issues including: sustainability,
                  biological diversity, economics, population growth, water
                  supply, and food security. Food safety and security are
                  monitored by international agencies like the International
                  Association for Food Protection, World Resources Institute,
                  World Food Programme, Food and Agriculture Organization, and
                  International Food Information Council.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 d-flex justify-content-center">
                <form onSubmit={handleCommentSubmit}>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Comment here"
                    className="mb-4 ps-4 pt-3 home-command"
                    style={{ width: 600, height: 100 }}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button className="mb-4 main-button" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                {commentsList.map((comment, index) => (
                  <div key={index} className="mb-4">
                    <p>{comment.comment}</p>
                    <form onSubmit={(e) => handleReplySubmit(e, index)}>
                      <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Reply here"
                        className="mb-2 ps-2 pt-1 home-command"
                        style={{ width: 400, height: 50 }}
                        name="reply"
                      />
                      <button className="main-button" type="submit">
                        Reply
                      </button>
                    </form>
                    <div>
                      {comment.replies.map((reply, index) => (
                        <p key={index} className="ms-3">
                          {reply}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Home;
