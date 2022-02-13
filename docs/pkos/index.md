# PageKey Operating System (PKOS)

PageKey Operating System (PKOS) is a rudimentary computer operating system developed on video. The process of researching and developing the operating system is documented as extensively as possible in videos, articles, and notes for educational purposes.

## Source Code

The latest source code can be found at https://github.com/pagekeysolutions/pkos.

## Quick Help

Try these commands to get started in a hurry.

- `docker-compose up` - Build and run the OS
  - You must have Docker/`docker-compose` installed and configured for GUI applications to run within a container.
  - Added in OS13
- `make` - Build the OS
- `make run` - Run the OS in Qemu, an x86 emulator
- `make iso` - Build an ISO image of the OS. This file can be burned to a disk or USB drive. Then you can run it on real hardware!

## About This Repository 

This repository will hold all versions of PKOS, from the simplest to the latest. To follow along with the tutorial, each increment of the OS will be accessible to you as a "release" on GitHub. You just have to clone this repository and checkout the right tag for the video you watched. Then, you should be able to build the code and run it on your own system.

## Running the Code

Use the "Release Tag" listed below for the video you would like to run the code for. Replace `TAG` with the actual Release Tag in what's below:

```bash
git clone https://github.com/stephengrice/pkos
cd pkos
git checkout TAG
make
make run
```

## Resources

Aside from a ton of StackOverflow answers, the following were super helpful in pulling together the information for these lessons:

* [os-dev PDF from University of Birmingham (Nick Blundell)](https://www.cs.bham.ac.uk/~exr/lectures/opsys/10_11/lectures/os-dev.pdf)
* [os-tutorial by cfenollosa on GitHub](https://github.com/cfenollosa/os-tutorial)
* [Ralph Brown's BIOS Interrupt List (Download)](http://www.cs.cmu.edu/~ralf/files.html)