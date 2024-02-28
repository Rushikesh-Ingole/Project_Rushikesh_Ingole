<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ALL 3 TASK INCLUDED</title>
  </head>
  <style>
    .video-card {
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .video-container {
      position: relative;
    }

    .video-container iframe {
      width: 100%;
      height: auto;
    }

    .content {
      padding: 10px;
      position: relative;
    }

    h2 {
      margin-top: 0;
    }

    #like-image {
      width: 30px;
      height: auto;
      cursor: pointer;
      display: block;
      margin: 0 auto;
    }

    .like-dialog {
      display: none;
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 6px 10px;
      border-radius: 4px;
      pointer-events: none;
    }
  </style>
  <body>
    <div class="video-card">
      <div class="video-container">
        <!-- Embed your video here -->
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jCD1JkDp_BQ?si=TW12TuNk8eVRK_9n"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="content">
        <h2>Bosscoder Academy</h2>
        <div class="like-dialog">I like this</div>
        <!-- thumbs-up image -->
        <img
          id="like-image"
          onclick="myFunction()"
          src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
          alt="Thumbs Up"
        />
      </div>
    </div>
    <script>
      const likeImages = document.querySelectorAll("#like-image");

      likeImages.forEach((likeImage) => {
        const likeDialog = likeImage.previousElementSibling;

        likeImage.addEventListener("mouseover", () => {
          likeDialog.style.display = "block";
        });

        likeImage.addEventListener("mouseout", () => {
          likeDialog.style.display = "none";
        });
      });

      function myFunction() {
        let likeimg = document.getElementById("like-image");
        if (
          likeimg.src.match(
            "https://cdn-icons-png.flaticon.com/512/126/126473.png"
          )
        ) {
          likeimg.src = "https://cdn-icons-png.flaticon.com/128/739/739231.png";
        } else {
          likeimg.src = "https://cdn-icons-png.flaticon.com/512/126/126473.png";
        }
      }
    </script>
  </body>
</html>
