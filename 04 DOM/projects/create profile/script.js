const profileContainer = document.querySelector(".profile-container");
const createProfileForm = document.querySelector("#create-profile");

const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah.smith@example.com",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Michael Chang",
    email: "michael.chang@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david.kim@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1614090965443-3df21c6906ec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function uiRerender() {
  profileContainer.innerHTML = "";
  users.forEach((element,index) => {
    profileContainer.innerHTML += `<div class="profile">
          <img src="${element.imageUrl}" alt="img" height="100" />
          <h3>Name : ${element.name}</h3>
          <p>Email : ${element.email}</p>
          <button>Edit</button>
          <button onclick="deleteProfile(${index})" >Delete</button>
        </div>`;
  });
}
uiRerender();

createProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  users.push({
    id: users.length + 1,
    name: event.target.name.value,
    email: event.target.email.value,
    imageUrl: event.target.image.value,
  });

  uiRerender();
  createProfileForm.reset();
});

function deleteProfile(index) {
  users.splice(index, 1);
  uiRerender();
}
