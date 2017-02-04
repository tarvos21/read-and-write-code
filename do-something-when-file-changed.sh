while sleep 1; do ls src/* | entr cp semantic.min.css ~/myproject/dist/semantic.min.css;done

# sudo apt-get install entr
# entr can watch file change and execute command
# while sleep 1, execute the line every second
