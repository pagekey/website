---
title: "WILR2: Rust Beginnings (minigrep)"
date: "2022-06-20"
authors: [steve]
youtube: Lelgwgs63Z8
path: /blog/wilr/2-rust-basics/
---

<YouTubePlayer youtubeLink={frontmatter.youtube} />

I learned some basic Rust by following the Rust Book's Chapter 12, where they show us how to build a `minigrep` command-line application.

<!-- truncate -->

What you see below are very rough notes I took as I went through this for the first time. Hopefully this, along with the video walkthrough, is helpful to you in some way.

## Timestamps
- 0:00 Intro
- 0:32 Installation
- 0:45 Discussing the Rust Book
- 2:13 The finished code
- 2:44 What it does
- 3:56 Code walkthrough

## Installing Rust
https://www.rust-lang.org/tools/install
- Just use script:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
- If having trouble on proxy, use minimal installation
	- (I was having trouble with rust-docs)

## Rust Book Ch. 12
https://doc.rust-lang.org/book/ch12-00-an-io-project.html
- Importing standard libraries: you can import `std::env::args` if you want, but it's not recommended. Better to import `std::env` to prevent name conflicts
	- Either way, `use` seems to take the last thing and make it accessable. `use std::env` makes `env` accessible, `use std::error::Error` makes `Error` accessible
- `env::args()` returns an iterator, and `collect()` turns it into a vector (basically a list) so that we can use it
- `expect()` fails out and prints a rust backtrace (ugly)
- First: Can simply return a tuple
- Then, abstract the tuple to `struct Config` - this way, you can name your fields 
- Adding `impl Config`, and `new` method: Allows you to "instantiate" the Config object using `args`
- Checking for errors: Can `panic!()`, which is like `expect!` in that it prints a backtrace (ugly)
- Alternative: Return a `Result` and let the caller handle it. `Ok()` with return value or `Err()` with message
	- What is `&'static` ?? something to do with reference/memory ownership I think
	- It says to see Chapter 10 on "Lifetimes": https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html
- `unwrap_or_else`: Alternative to `expect()`
	- `expect()` gives you the return value in `Result`, or panics
	- `unwrap_or_else` gives you the return value if ok, otherwise lets you handle it in a block of code
	- "custom, non-panic error handling"
	- Uses a Closure, or anonymous function
- `std::process` lets you exit with error code, much like python's `sys.exit`
- `Box<dyn Error>` is a **trait** object
	- Basically means what it returns must be a subclass of Error
	- Ending a line with `?` instead of `expect()`: Returns the error automatically instead of panicking
- `if let` syntax?? Similar to `unwrap_or_else`?
- We move our code to separate `lib.rs` file - it calls this a separate crate? This way, it can be tested. Added `pub` everywhere
- Tutorial uses TDD! My heart!
- Lifetime `'a` marks the argument with matching lifetime of return value. So return value will live as long as the `contents` variable
	- Again, see Chapter 10 on "Lifetimes": https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html
- Topics covered: file input and output, lifetimes, testing, and command line parsing.
- Env to add case sensitivity
- Print to stderr with `eprintln!`
