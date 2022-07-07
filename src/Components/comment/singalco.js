import React from "react";

function Singleco({ data, replies, currstudent, deletecomment }) {
  return (
    <>
      <div className="comment">
        <div className="comment-image-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{data.username}</div>
            <div>{data.createdat}</div>
          </div>
          <div className="comment-text">{data.body}</div>
          <div className="comment-actions">
            {currstudent != null && data.parentid == 0 && (
              <div className="comment-action">Reply</div>
            )}
            {data.email == currstudent?.email && (
              <>
                <div className="comment-action">Edit</div>
                <div
                  className="comment-action"
                  onClick={() => {
                    deletecomment(data.id);
                  }}
                >
                  Delete
                </div>
              </>
            )}
          </div>
          {replies.length > 0 && (
            <div className="replies">
              {replies.map((item) => {
                return (
                  <>
                    <Singleco data={item} replies={[]} />
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Singleco;
