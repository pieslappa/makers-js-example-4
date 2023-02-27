class GithubClient {
  // getRepoInfo(repoName, callback) {
  //   fetch("https://api.github.com/repos/" + repoName)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       callback(data);
  //     });
  //   }
  async getRepoInfo(repoName, callback) {
    const response = await fetch("https://api.github.com/repos/" + repoName);
    const data = await response.json();
    return callback(data);
  }
}

module.exports = GithubClient;
