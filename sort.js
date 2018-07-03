$(function() {
  // validate form
  // window.addEventListener('load', function() {
  $('#add').on('click', (event) => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        // add a box with the user input size
        event.preventDefault();
        let size = $('#validationCustom01').val();
        $('.boxes').append(`<div class="box" data-size="${size}" style="width:${size}px; height:${size}px;"></div>`);
      }
      form.classList.add('was-validated');
    }, false);
  });

  // sort the boxes by size
  $('#sort').on('click', () => {
    let $boxArray = $('.box');
    let sizeArr = [];
    $boxArray.each(function() {
      sizeArr.push($(this).data('size'));
    });
    $('.boxes').empty();
    sortBySize(sizeArr);
    sizeArr.forEach((size) => {
      $boxArray.each(function() {
        if(size == $(this).data('size')) {
          $('.boxes').append($(this));
        }
      });
    });
  });

  // shuffle
  $('#shuffle').on('click', () => {
    let $boxArray = $('.box');
    let sizeArr = [];
    $boxArray.each(function() {
      sizeArr.push($(this).data('size'));
    });
    $('.boxes').empty();

    sizeArr = shuffle(sizeArr);

    sizeArr.forEach((size) => {
      $boxArray.each(function() {
        if(size == $(this).data('size')) {
          $('.boxes').append($(this));
        }
      });
    });
  });
});

function sortBySize(arr) {
  let temp, j;
  for (let y = 1; y < arr.length; y++) {
    temp = arr[y];
    j = y;

    while(j > 0 && arr[j - 1] > temp){
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

function shuffle(arr) {
  let jumbledArr = [];
  for (let i = 0; i < arr.length; i++) {
    let N = Math.floor(Math.random() * Math.floor(arr.length));

    jumbledArr.push(arr[N]);
    arr.splice(N, 1);
    i--;
  }
  return jumbledArr;
}