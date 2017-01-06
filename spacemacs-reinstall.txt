cd ~

rm -rf .emacs.d
git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d

wget https://raw.githubusercontent.com/syl20bnr/spacemacs/master/core/templates/.spacemacs.template
cp .spacemacs.templates .spacemacs

emacs25 &


Description:
1. remove old messy ".emacs.d" directory
2. clone spacemacs ".emacs.d"
3. download the default ".spacemacs" config file
4. rename it to ".spacemacs" in home directory
5. edit ".spacemacs" file, add some layer, like "org, html". Remember "python" layer is
terrible.
6. start emacs25. emacs25 is better than emacs24.5 
7. wait for the package to retrieve, about 120 packages.

note: to make emacs package download faster, have to do:
- open shadowsocks
- sudo service polipo start
- export http_proxy="http://127.0.0.1:8123"
  export https_proxy="http://127.0.0.1:8123"
- or add this two line in .zshrc or .bashrc, then source it.

Oh, don't forget to change the font and themes
Monaco, 16
jbeans, grandshell

 
