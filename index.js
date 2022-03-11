function hello() {
  console.log("Hello world");
}

window.onload = main;
let turn = "X";

function main() {
  let elements = document.getElementsByClassName("square");
  console.log(elements);
  for (let element of elements) {
    element.addEventListener("click", function () {
      press(element);
    });
  }
}

function press(element) {
  if (turn == "X") {
    element.innerHTML = "X";
    turn = "O";
  } else {
    element.innerHTML = "O";
    turn = "X";
  }
}

// def check_win(self, last_row, last_column):
//     // check the current row (not be a loop)
//     if (self.board[last_row][1] == self.board[last_row][0] and self.board[last_row][0] == self.board[last_row][2]) {
//         print(self.turn, "wins horizontally!")
//         return True
//     }

//     // check the column (loop)
//     column = []
//     for (row in self.board) {
//         column.append(row[last_column])
//         if (column[0] == column[1] and column[0] == column[2]){
//             print(self.turn, "wins vertically!")
//             return True
//         }
//         if (self.board[0][0] == self.board[1][1] and self.board[2][2] == self.board[0][0] and self.board[0][0] == self.turn) {
//             print(self.turn, "wins diagonally!")
//             return True
//         }
//         if (self.board[2][0] == self.board[1][1] and self.board[0][2] == self.board[2][0] and self.board[2][0] == self.turn){
//             print(self.turn, "wins diagonally!")
//             return True
//         }
//            return False
//     }

//     // check the diagonal (top left to bottom right, loop)

//     // check the diagonal (bottom left to top right, loop)
