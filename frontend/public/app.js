const apiBaseUrl = "http://localhost:3000";

const state = {
  token: "",
  user: null
};

const elements = {
  adminPanel: document.querySelector("#adminPanel"),
  adminPosts: document.querySelector("#adminPosts"),
  loginForm: document.querySelector("#loginForm"),
  loginTab: document.querySelector("#loginTab"),
  logoutBtn: document.querySelector("#logoutBtn"),
  myPosts: document.querySelector("#myPosts"),
  postForm: document.querySelector("#postForm"),
  savePostBtn: document.querySelector("#savePostBtn"),
  publicPosts: document.querySelector("#publicPosts"),
  refreshPublicBtn: document.querySelector("#refreshPublicBtn"),
  registerForm: document.querySelector("#registerForm"),
  registerTab: document.querySelector("#registerTab"),
  resetPostFormBtn: document.querySelector("#resetPostFormBtn"),
  statusBox: document.querySelector("#statusBox"),
  userMeta: document.querySelector("#userMeta"),
  userPanel: document.querySelector("#userPanel")
};

function setStatus(message, type = "info") {
  elements.statusBox.textContent = message;
  elements.statusBox.dataset.type = type;
}

async function apiRequest(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (state.token) {
    headers.Authorization = `Bearer ${state.token}`;
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

function postCard(post, mode) {
  const article = document.createElement("article");
  article.className = "post-card";

  article.innerHTML = `
    <div class="post-title-row">
      <div>
        <h3>${post.title}</h3>
        <span class="muted">${post.category}</span>
      </div>
      <span class="badge ${post.status}">${post.status}</span>
    </div>
    <p>${post.content}</p>
    <div class="post-actions"></div>
  `;

  const actions = article.querySelector(".post-actions");

  if (mode === "mine") {
    const editButton = document.createElement("button");
    editButton.className = "secondary";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => fillPostForm(post));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deletePost(post.id));

    actions.append(editButton, deleteButton);
  }

  if (mode === "admin") {
    const publishButton = document.createElement("button");
    publishButton.textContent = "Publish";
    publishButton.addEventListener("click", () => updatePostStatus(post.id, "published"));

    const rejectButton = document.createElement("button");
    rejectButton.className = "secondary";
    rejectButton.textContent = "Reject";
    rejectButton.addEventListener("click", () => updatePostStatus(post.id, "rejected"));

    actions.append(publishButton, rejectButton);
  }

  return article;
}

function renderPosts(container, posts, mode, emptyText) {
  container.innerHTML = "";

  if (!posts.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = emptyText;
    container.append(empty);
    return;
  }

  posts.forEach((post) => container.append(postCard(post, mode)));
}

async function loadPublicPosts() {
  const data = await apiRequest("/api/posts/public", {
    method: "GET"
  });
  renderPosts(elements.publicPosts, data.posts, "public", "No published posts yet.");
}

async function loadMyPosts() {
  const data = await apiRequest("/api/posts/mine", {
    method: "GET"
  });
  renderPosts(elements.myPosts, data.posts, "mine", "No posts created yet.");
}

async function loadAdminPosts() {
  if (!state.user || state.user.role !== "admin") {
    return;
  }

  const data = await apiRequest("/api/posts/admin/all", {
    method: "GET"
  });
  renderPosts(elements.adminPosts, data.posts, "admin", "No posts submitted yet.");
}

function updateSessionUi() {
  const isLoggedIn = Boolean(state.token);
  elements.logoutBtn.classList.toggle("hidden", !isLoggedIn);
  elements.userPanel.classList.toggle("hidden", !isLoggedIn);
  elements.adminPanel.classList.toggle(
    "hidden",
    !isLoggedIn || state.user.role !== "admin"
  );

  if (isLoggedIn) {
    elements.userMeta.textContent = `${state.user.name} signed in as ${state.user.role}`;
  }
}

function fillPostForm(post) {
  document.querySelector("#postId").value = post.id;
  document.querySelector("#postTitle").value = post.title;
  document.querySelector("#postCategory").value = post.category;
  document.querySelector("#postContent").value = post.content;
  elements.savePostBtn.textContent = "Update Post";
  setStatus("Editing post. Update the fields and click Update Post.", "info");
  elements.postForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearPostForm() {
  elements.postForm.reset();
  document.querySelector("#postId").value = "";
  elements.savePostBtn.textContent = "Save Post";
}

async function deletePost(id) {
  await apiRequest(`/api/posts/${id}`, {
    method: "DELETE"
  });
  setStatus("Post deleted successfully.", "success");
  await loadMyPosts();
}

async function updatePostStatus(id, status) {
  await apiRequest(`/api/posts/admin/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status })
  });
  setStatus(`Post marked as ${status}.`, "success");
  await loadAdminPosts();
  await loadPublicPosts();
}

elements.loginTab.addEventListener("click", () => {
  elements.loginTab.classList.add("active");
  elements.registerTab.classList.remove("active");
  elements.loginForm.classList.remove("hidden");
  elements.registerForm.classList.add("hidden");
});

elements.registerTab.addEventListener("click", () => {
  elements.registerTab.classList.add("active");
  elements.loginTab.classList.remove("active");
  elements.registerForm.classList.remove("hidden");
  elements.loginForm.classList.add("hidden");
});

elements.registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    name: document.querySelector("#registerName").value,
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
    role: document.querySelector("#registerRole").value
  };

  try {
    await apiRequest("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    setStatus("Account created. You can log in now.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
});

elements.loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = {
    email: document.querySelector("#loginEmail").value,
    password: document.querySelector("#loginPassword").value
  };

  try {
    const data = await apiRequest("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    state.token = data.token;
    state.user = data.user;
    updateSessionUi();
    await loadMyPosts();
    await loadAdminPosts();
    setStatus("Login successful.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
});

elements.postForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = document.querySelector("#postId").value;
  const payload = {
    title: document.querySelector("#postTitle").value,
    category: document.querySelector("#postCategory").value,
    content: document.querySelector("#postContent").value
  };

  try {
    await apiRequest(id ? `/api/posts/${id}` : "/api/posts", {
      method: id ? "PATCH" : "POST",
      body: JSON.stringify(payload)
    });
    clearPostForm();
    await loadMyPosts();
    await loadAdminPosts();
    setStatus(id ? "Post updated successfully." : "Post created successfully.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
});

elements.logoutBtn.addEventListener("click", () => {
  state.token = "";
  state.user = null;
  elements.myPosts.innerHTML = "";
  elements.adminPosts.innerHTML = "";
  updateSessionUi();
  setStatus("Logged out.", "info");
});

elements.refreshPublicBtn.addEventListener("click", loadPublicPosts);
elements.resetPostFormBtn.addEventListener("click", clearPostForm);

loadPublicPosts().catch(() => {
  setStatus("Start the backend server before using the frontend.", "error");
});
