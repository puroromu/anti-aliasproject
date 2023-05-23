const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // リクエストパラメータのタイトルを取得します。
  const title = req.query.title;

  // JSON ファイルからタイトルに一致する記事を検索します。
  const articles = JSON.parse(fs.readFileSync("main.json"));
  const article = articles.find((article) => article.title === title);

  // 記事が見つかった場合は、レスポンスに返します。
  if (article) {
    res.send(article);
  } else {
    res.sendStatus(404);
  }
});

app.listen(80, () => {
  console.log("Server is listening on port 3000");
});
