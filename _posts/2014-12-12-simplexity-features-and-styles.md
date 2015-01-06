---
layout: post
title:  Simplexity features and styles
date:   2014-12-12 16:00:34
tags:   features
---
Simplexity has support for customizing the fonts via `basscss` variables. You can customize these in the `basscss/basscss.css`
file, along with the custom media queries used to scale the font size based on the device viewport. I've kept the custom
styles to a minimum.

----

Simplexity nicely proportioned headings with good vertical rhythm. You can use six levels of headings.

#Heading 1

##Heading 2

###Heading 3

This is some regular paragraph text, followed by a quote. Here is some *italic* text followed by something more
**important**.

> This is what quoted text looks like.

Citation's can be added with only slightly more complex markdown.

> Quoted text, this time with attribution just below.
>
> ######*John Oliver Doe*, 'How to stay anonymous in the age of Big Data'

You can use two kinds of code style with Simplexity - with and without highlighting.

        print 'code without highlighting'

Here is what some highlighted ruby code looks like:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

You can use the default Jekyll code markup, Simplexity uses the same color scheme provided out of the box by Jekyll. I've
considered using other schemes but I find the default one quite easy on the eyes.

Simplexity has un-ordered lists

- Apples
- Oranges
- Umm Grapes?

and ordered lists:

1. Apples
2. Oranges
3. Ok, Grapes

This is what images look like:

![Some image](http://www.placehold.it/350x150 "This is the image caption")

That's all I can think of for now, I'll add more here as it comes up.
