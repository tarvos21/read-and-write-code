#! /usr/bin/sed -f
s/font-family-base/fontName/g
s/brand-success/positiveColor/g
s/brand-info/infoColor/g
s/brand-danger/negativeColor/g
s/brand-primary/primaryColor/g
s/brand-warning/warningColor/g

s/state-warning-bg/warningBackgroundColor/g
s/state-danger-bg/negativeBackgroundColor/g
s/state-info-bg/infoBackgroundColor/g
s/state-success-bg/positiveBackgroundColor/g

s/text-color/textColor/g
s/body-bg/pageBackground/g
s/link-color/linkColor/g
s/link-hover-color/linkHoverColor/g

s/font-size-base/emSize/g
s/line-height-base/lineHeight/g


# usage:
# sed -i -f name-of-this-file *
# replace in all files in current directory
# really wonderful sed!
