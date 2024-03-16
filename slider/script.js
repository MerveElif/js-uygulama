var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link: "www.google.com.tr",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "www.google.com.tr",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link: "www.google.com.tr",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
    link: "www.google.com.tr",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "www.google.com.tr",
  },
];
var index = 0;
var slaytCount = models.length;
var interval;
var setings = {
  duration: "1000",
  random: false,
};

init(setings);

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(setings);
  });
});

function init(setings) {
  var prev;

  interval = setInterval(function () {
    if (setings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      {
        prev = index;
      }
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  }, setings.duration);
}

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });
