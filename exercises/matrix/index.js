// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = []

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let counter = 1
  let startColumn = 0
  let endColumn = n - 1
  let startRow = 0
  let endRow = n - 1

  // 開始列≦終了列、かつ開始行≦終了行であれば
  while (startColumn <= endColumn && startRow <= endRow) {
    // 最初の列から最後の列まで繰り返す。
    for (let i = startColumn; i <= endColumn; i++) {
      // resultsの配列にcounterの値を入れていく。
      // ex. results[0][1,2,3] ※最初はcounterが +1された値が入っていく
      results[startRow][i] = counter
      counter++
    }
    // 開始行の値を + 1する
    startRow++
    // 最後の列を埋めていく。
    // Right Column
    for (let i = startRow; i <= endRow; i++) {
      // 2行目以降の、一番最後の列を入れていく。
      // ex. results[1][null,null,4], results[2][null,null,5]
      results[i][endColumn] = counter
      counter++
    }
    endColumn--

    // Bottom row(最終行)
    for (let i = endColumn; i >= startColumn; i--) {
      // 最終行を埋めていく
      // ex. results[2][7,6,5] , results[2][7,6,5]
      results[endRow][i] = counter
      counter++
    }
    // 最終行を-1する
    endRow--

    // start column
    for (let i = endRow; i >= startRow; i--) {
      // 最初の列を埋めていく。
      // ex. results[1][8,null,4]
      results[i][startColumn] = counter
      counter++
    }
    // 最初の列を+1する
    startColumn++
  }
  return results
}

module.exports = matrix

/**
 * メモ
 * [notion] https://www.notion.so/matrix-bbd3f52df92f4d82bee38d6746c8fff5
 * 変数名resultsの空配列を作成する
 * 変数counterを作成。初期値は1
 * 開始列≦終了列、かつ開始行≦終了行であれば
 * 開始列から終了列まで以下のループをする。**
 * resluts[開始行][i] にcounterの値を入れる
 * counterの値を + 1する
 * 開始行の値を + 1する
 * 開始行から終了行まで以下のループをする。**
 * results[i][終了行]にcounterの値をいれる
 * counterの値を+1する
 * 終了列の値を -1する
 * 一連の流れを繰り返す。
 */
