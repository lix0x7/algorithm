/*
*
51. N-Queens
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example 1:

Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]

Constraints:

1 <= n <= 9
*/
package main

import (
	"fmt"
	"strings"
)

func solveNQueens(n int) [][]string {

	rtn := [][]string{}

	// init
	matrix := make([][]string, n)
	for i, _ := range matrix {
		matrix[i] = make([]string, n)
		for j, _ := range matrix[i] {
			matrix[i][j] = "."
		}
	}

	// impl
	impl := func(matrix *[][]string, y int) {}
	impl = func(matrix *[][]string, y int) {
		n := len(*matrix)
		if y >= n {
			r := []string{}
			for _, row := range *matrix {
				r = append(r, strings.Join(row, ""))
			}
			rtn = append(rtn, r)
			return
		}

		for x := 0; x < n; x++ {
			if isValid(*matrix, x, y) {
				(*matrix)[y][x] = "Q"
				impl(matrix, y+1)
				(*matrix)[y][x] = "."
			}
		}
	}
	// iter rows
	impl(&matrix, 0)

	return rtn
}

func isValid(matrix [][]string, x, y int) bool {

	// horizontal
	for cur := 0; cur < len(matrix); cur++ {
		if cur != x && matrix[y][cur] == "Q" {
			return false
		}
	}

	// vertical
	for cur := 0; cur < len(matrix); cur++ {
		if cur != y && matrix[cur][x] == "Q" {
			return false
		}
	}

	// diagonal
	for offset := 1; x+offset < len(matrix) && y+offset < len(matrix); offset++ {
		if matrix[y+offset][x+offset] == "Q" {
			return false
		}
	}
	for offset := 1; x+offset < len(matrix) && y-offset >= 0; offset++ {
		if matrix[y-offset][x+offset] == "Q" {
			return false
		}
	}
	for offset := 1; x-offset >= 0 && y+offset < len(matrix); offset++ {
		if matrix[y+offset][x-offset] == "Q" {
			return false
		}
	}
	for offset := 1; x-offset >= 0 && y-offset >= 0; offset++ {
		if matrix[y-offset][x-offset] == "Q" {
			return false
		}
	}

	return true
}

func main() {
	fmt.Printf("%v\n", solveNQueens(0))
	fmt.Printf("%v\n", solveNQueens(1))
	fmt.Printf("%v\n", solveNQueens(2))
	fmt.Printf("%v\n", solveNQueens(3))
	fmt.Printf("%v\n", solveNQueens(4))
}

/**
tag 回溯
经典n皇后问题，关键点在于按行遍历，只递归列，可以降低栈深度
*/
