diff -b original-variables.less lumen/variables.less | grep "^>" 2> lumen-diff.txt

diff two file with flag -b, which ignore white space differences
grep "^>", select line start with ">"
2>, pipe the stdout to lumen-diff.txt, at the same time print onto the terminal
