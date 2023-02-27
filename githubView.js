class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.repoContainer = document.querySelector("#repo-container");
    this.name = document.querySelector("#repo-name");
    this.description = document.querySelector("#repo-description");
    const submitButtonEl = document.querySelector("#submit-button");
    const repoInputEl = document.querySelector("#repo-name-input");

    submitButtonEl.addEventListener("click", () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, (repoData) => {
        this.repoData = repoData;
        console.log(repoData);
        this.display();
      });
    });
  }

  display() {
    this.name.textContent = this.repoData.name;
    this.description.textContent = this.repoData.description;

    const repoAvatar = document.createElement("img");
    repoAvatar.setAttribute("src", this.repoData.organization.avatar_url);
    this.repoContainer.append(repoAvatar);
  }
}

module.exports = GithubView;
