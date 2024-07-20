const express = require("express");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://127.0.0.1:27017/frokerDB",{useNewUrlParser: true});

const likeSchema = new mongoose.Schema({
    like: { type: Number, default: 0 },
  });

const Like = mongoose.model("Like", likeSchema);

app.get('/api/likes/:contentId', async (req, res) => {
    const contentId = req.params.contentId;
    try {
      const like = await Like.findOne({ contentId });
      res.json({ likeCount: like ? like.like : 0 });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching likes');
    }
  });

  app.post('/api/likes/:contentId/increment', async (req, res) => {
    const contentId = req.params.contentId;
    try {
      let like = await Like.findOne({ contentId });
      if (!like) {
        like = new Like({ contentId });
      }
      like.likeCount++;
      await like.save();
      res.json({ likeCount: like.likeCount });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error incrementing likes');
    }
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
  });