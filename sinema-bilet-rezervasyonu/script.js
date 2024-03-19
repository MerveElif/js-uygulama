const seats = document.querySelectorAll(".container .seat");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");

seats.forEach((seat) => {
  seat.addEventListener("click", function (e) {
    if (!seat.classList.contains("reserved")) {
      seat.classList.toggle("selected");
      calculateTotal();
    }
  });
});

select.addEventListener("change", function () {
  calculateTotal();
});

const calculateTotal = function () {
  const selectedSeats = document.querySelectorAll(".container .seat.selected");
  count.textContent = selectedSeats.length;
  let price = select.value;
  amount.textContent = selectedSeats.length * price;
};
