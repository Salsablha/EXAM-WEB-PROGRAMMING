function createPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === '') return;

    const postsContainer = document.getElementById('posts');
    const newPost = document.createElement('div');
    newPost.classList.add('post');

    const postText = document.createElement('p');
    postText.innerText = postContent;
    newPost.appendChild(postText);

    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');

    const commentInput = document.createElement('textarea');
    commentInput.placeholder = 'Write a comment...';
    commentSection.appendChild(commentInput);

    const commentButton = document.createElement('button');
    commentButton.innerText = 'Comment';
    commentButton.onclick = () => addComment(commentSection, commentInput);
    commentSection.appendChild(commentButton);

    newPost.appendChild(commentSection);
    postsContainer.appendChild(newPost);

    document.getElementById('post-content').value = '';
}

function addComment(commentSection, commentInput) {
    const commentContent = commentInput.value;
    if (commentContent.trim() === '') return;

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerText = commentContent;

    commentSection.insertBefore(newComment, commentSection.childNodes[commentSection.childNodes.length - 2]);

    commentInput.value = '';
}
