sed -i -- 's/foo/bar/g' *

# this will replace every "foo" in all files of current directory with "bar"

grep -rl '.btn-shadow' . | xargs sed -i 's/.btn-shadow/.button-shadow/g'

# this will replace every ".btn-shadow" with ".button-shadow" recursively in current directory

