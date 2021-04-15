function policz() {
  var powierzchnia = document.getElementById("powierzchnia").value;
  var puszki = Math.ceil(powierzchnia / 4);
  var wynik = document.getElementById("wynik");

  wynik.innerHTML =
    "Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi:" +
    puszki;
}
