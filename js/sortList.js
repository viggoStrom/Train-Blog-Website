const showSort = () => {
  buttons = document.querySelectorAll(".sortOption");
  buttons.forEach(element => {
    element.style.opacity = 1;
  });
}

// integrerat javaScript från https://www.w3schools.com/howto/howto_js_sort_list.asp
function sortList(reverse) {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("blogPostListUl");
  switching = true;
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      // Check if the next item should switch place with the current item:
      if (reverse) {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          // If next item is alphabetically greater than current item,
          // mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          // If next item is alphabetically lower than current item,
          // mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      // If a switch has been marked, make the switch
      // and mark the switch as done:
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}


function sortListDate(reverse) {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("blogPostListUl");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    a = new Array(b.length);
    // Loop through all list items:
    for (i = 0; i < (b.length); i++) {
      a[i] = new Date(b[i].children[0].children[2].children[2].children[0].querySelector("span").innerHTML).getTime();
    }
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (a[i] > a[i + 1] && !reverse) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      } else if (a[i] < a[i + 1] && reverse) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
