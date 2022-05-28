const commentContainer = document.querySelector(".comment");
let countComments = document.querySelector(".count-comments");
const formComment = document.querySelector(".form-comment");
const commentUrl = 'https://zuhair-api.herokuapp.com/api'

function getDate(times) {
  let date = new Date(times);
  const options = {
    day: "numeric",
    year: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  };
  const createdAt = date.toLocaleTimeString("en-US", options);
  return createdAt;
}
async function getResponse(url) {
  const response = await fetch(`${commentUrl}/${url}`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

function showComments() {
  commentContainer.innerHTML = '';
  getResponse("comments")
    ?.then(({ comments }) => {
      
      countComments.textContent = ` (${comments.length})`;

      comments.forEach((comment) => {
        let commented = '';
        if(localStorage.getItem(`commented-${comment._id}`)) {
          commented =  `<i class='bx bx-trash deleteComment' data-id="${
            comment._id
          }"></i>`
        }else {
          commented = '';
        }
        const html = `
          <div class="comment-content">
            <div class="comment-img">
              <i class="bx bx-user-circle"></i>
            </div>
            <div class="comment-info">
              <div class="comment-title">
                <strong>${comment.username}</strong>
                <p>
                <time>${getDate(comment.createdAt)}</time>
                ${
                  commented
                }
                </p>
              </div>
              <p class="comment-body">
              ${comment.comment}
              </p>
            </div>
          </div>
          `;
        commentContainer?.insertAdjacentHTML("afterbegin", html);
      });

      const commentsId = document.querySelectorAll(".deleteComment");
      commentsId?.forEach((commentId) => {
        commentId.addEventListener("click", (e) => {
          let id = e.target.dataset.id;
          async function deleteComment() {
            const response = await fetch(
              `${comments_url}/deleteComment/${id}`,
              {
                method: "delete",
              }
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
          }
          deleteComment()
            .then(({comment}) => {
              localStorage.removeItem(`commented-${comment._id}`)
              showComments();
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

showComments();

formComment.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = formComment.username.value;
  const comment = formComment.comment.value;

  async function addComment() {
    const response = await fetch(`${commentUrl}/addComment`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ username, comment }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  addComment()
    .then(({comment}) => {
      formComment.username.value = '';
      formComment.comment.value = '';
      showComments();
      localStorage.setItem(`commented-${comment._id}`, comment._id);
    })
    .catch((error) => {
      console.log(error);
    });
});
