Writing Your First Kernel Module

Centos or Ubuntu... Whichever will compile.

Worked on Ubuntu!
Standard tutorial followed in Linux docs:
https://www.tldp.org/LDP/lkmpg/2.6/html/x121.html

Hello world, goodbye world in dmesg
insmod, rmmod, modinfo all work

That was too easy.
Now:
* Build hello world kernel module (already done)
  * Use _ _ init and _ _ exit macros
* Create a very simple device or device file
* That's it

Creating device


Useful Links
https://www.apriorit.com/dev-blog/195-simple-driver-for-linux-os
https://blog.sourcerer.io/writing-a-simple-linux-kernel-module-d9dc3762c234
https://www.tldp.org/LDP/lkmpg/2.6/html/x245.html
https://www.safaribooksonline.com/library/view/linux-device-drivers/0596005903/ch02.html
