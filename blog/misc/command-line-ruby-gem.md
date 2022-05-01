---
title: Making a Command-line Ruby Gem - Write, Build, and Push
date: "2018-04-04"
authors: [steve]
youtube: KNa1TXnaZSg
---

![A shiny red gem](/img/blog/featured/shiny-gem.jpg)

Anyone who has used Ruby before knows that gems are the spice of life. They are easy to install and distribute, even easier to use, and most importantly, they provide useful functionality. It's not uncommon to see entire software projects centered around a single well-made gem. Take any Ruby on Rails project, and you'll see this in practice.

Gems are, in a nutshell, Ruby code packaged for easy distribution and use. It's easy to make your first gem, and even easier to reuse someone else's! Thousands upon thousands of gems are available on [RubyGems.org](http://www.rubygems.org), ready to solve your problems.

In this article, we're going to do two things. First, we'll get started by creating our first gem and pushing it to RubyGems. This way, everyone in the world will be able to install and use it with the `gem install` command. Not bad!

After that, we're going to modify the gem so that you can use it anywhere on your computer, just by typing its name into the console. Sweet!

<!--truncate-->

import YouTubePlayer from '@site/src/components/YouTubePlayer';

<YouTubePlayer youtubeLink={frontMatter.youtube} />

## Requirements

In order to complete this tutorial, you'll need a version of Ruby installed on your computer. If you don't already have it, consider first installing [RVM](https://rvm.io/) (Ruby Version Manager), and then selecting the version of Ruby you want via RVM. This will save you countless headaches in the future should you need to switch Ruby versions for any reason.

For the record, I used Ruby version `2.3.3p200` in the creation of this tutorial. As long what you use is at least somewhat recent, you should be fine.

Note that this tutorial was created using Ubuntu Linux ([on Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10)). I'm sure there's a way to accomplish this using only Windows, but I have to leave that for you to figure out.

## Setting Up the Gem

Let's start by creating the initial file structure of our gem. Create an empty directory and `cd` to it. For this tutorial, I'll be creating the `pagekey` gem. When you make yours, be sure to use a unique name that's not already taken on [RubyGems.org](http://www.rubygems.org).

```bash
mkdir pagekey
cd pagekey
```

The skeleton of our gem will consist of a `.gemspec` file to specify the gem configuration, a `lib` folder to hold our source, and of course our first source file. I'll create these now:

```bash
touch pagekey.gemspec
mkdir lib
touch lib/pagekey.rb
mkdir bin
```

Our file structure should look like this:

```bash
pagekey
|-- pagekey.gemspec
|-- bin
|-- lib
    |-- pagekey.rb
```

Now I'll edit `pagekey.gemspec` and include some information about our gem. Remember to update this with information specific to your own gem.

```ruby
Gem::Specification.new do |s|
  s.name      = 'pagekey'
  s.version   = '0.1.0'
  s.platform  = Gem::Platform::RUBY
  s.summary   = 'PageKey Solutions tutorial gem'
  s.description = "Created in a tutorial found on blog.pageKeySolutions.com. Doesn't do too much!"
  s.authors   = ['Steve G']
  s.email     = ['info@pagekeysolutions.com']
  s.homepage  = 'http://rubygems.org/gems/pagekey'
  s.license   = 'MIT'
  s.files     = Dir.glob("{lib,bin}/**/*") # This includes all files under the lib directory recursively, so we don't have to add each one individually.
  s.require_path = 'lib'
end
```

Perfect. Now that the gem is configured, let's add some really basic code and test it out. To accomplish this, I'll edit `lib/pagekey.rb`:

```ruby
module PageKey
  def self.hello_world
    "Good morning world and all who inhabit it!"
  end
end
```

Excellent. We're all set up as far as code goes. Now we can leverage Ruby's wonderfully streamlined gem workflow to build and test our creation. Watch how easy it is.

## Building and Testing

To package everything up, we will provide our `.gemspec` file as the only input:

```bash
gem build pagekey.gemspec
```

If all goes well, you'll see:

```bash
Successfully built RubyGem
Name: pagekey
Version: 0.0.0
File: pagekey-0.0.0.gem
```

Now we will install it so that it will be accessible from our code.

```bash
gem install ./pagekey-0.0.0.gem
```

For projects that use your gem, you may want to include it in your `Gemfile` and run `bundle install`:
```ruby
# Inside Gemfile:
gem 'pagekey', '~> 0.0.0'
```

Time for the moment of truth. We can test it on `irb`, the interactive ruby console. Type `irb` and it will start the interpreter.

```ruby
> require 'pagekey'
 => true
> PageKey::hello_world
 => "Good morning world and all who inhabit it!"
```

Wonderful. It works as expected.

## Adding the CLI

Right now, if I type `pagekey`, I'll get an angry message from my console, like: `pagekey: command not found`. This isn't good - I want to use my gem just like `ls`, `cat`, `awk`, or any other useful program!

In order to make this gem available under a specific terminal command, we'll have to create an **executable** and link to it in our `.gemspec` file.

The executable will basically be a short Ruby script that accepts command line arguments and routes them to the gem's code in `./lib`.

Create a directory to hold the file with `mkdir bin` and edit the `bin/pagekey` file:

```ruby
#!/usr/bin/env ruby
require 'pagekey'
puts PageKey::hello_world
```

Ensure that the file is executable by running `chmod +x bin/pagekey`. Our next step is to specify this executable in `pagekey.gemspec` so that it will be added to the system PATH variable when the gem is installed. Add the following line:

```ruby
  s.executables = ['pagekey']
```

Now the gem will look in the `bin` directory for the `pagekey` executable when you type `pagekey` on the command line.

## Pushing and Publishing

After these efforts, our beautiful gem is ready to go. But, until it's in the open air, I'd it's nothing but a diamond in the rough (how pun-tastic!). Let's get this thing out there in the real world.

Make sure that you build your gem as described above with `gem build pagekey.gemspec`. Then, create an account at [rubygems.org](http://www.rubygems.org). Replace `USERNAME` with your RubyGems username in the following snippet, and run it:

```bash
curl -u USERNAME https://rubygems.org/api/v1/api_key.yaml >
~/.gem/credentials; chmod 0600 ~/.gem/credentials
```

This will set up your system with the proper credentials to publish gems to your RubyGems account. The final step is very simple: Just push it!

```bash
gem push pagekey-0.0.0.gem
```

The gem will upload, and it will become available for the world to see and download!

## Bonus: Useful Rake Automation

One more tool that may be helpful as you get into the flow of gem development is `rake`, which allows you to automate processes using the Ruby programming language. In the base directory for your gem, add a `Rakefile` to hold your scripts. I've included an example that proved very helpful as I pursued my own little gem project:

```ruby
GEM_NAME = "pagekey"
GEM_VERSION = "0.0.0"

task :default => :build

task :build do
  system "gem build " + GEM_NAME + ".gemspec"
end

task :install => :build do
  system "gem install " + GEM_NAME + "-" + GEM_VERSION + ".gem"
end

task :publish => :build do
  system 'gem push ' + GEM_NAME + "-" + GEM_VERSION + ".gem"
end

task :clean do
  system "rm *.gem"
end
```

To run these commands, just type `rake`, `rake build`, `rake install`, `rake publish`, or `rake clean` and see what happens.

The outcome of each task is fairly self-explanatory. The build command just builds the gem for you. The install command builds the gem and installs it, so that you can `require` it and try it out. The publish command also builds the gem, after which it takes care of pushing the gem for you.

The arrow `=>` indicates a dependency of tasks. For example, `task :install => :build` indicates that `:install` depends on `:build`, and so every time that `rake install` runs, the commands under the `:build` task run beforehand.

This `Rakefile` relies heavily on the `system` command, which utilizes the shell interpreter of the system you're runnning on. This means that the file is OS specific. All of these tasks can likely be performed in pure Ruby, but I found it much easier, especially for simple, small projects, to write everything as a `system` command. As you grow, however, it may be best to move away from OS-specific code.

As a challenge, I'll suggest to you one way to greatly improve this `Rakefile`.

Right now, you'd have to update the `.gemspec` file *and* your `Rakefile` if you wanted to change the version from `0.0.0` to `0.0.1`. This is not ideal. Modify your gem's code such that it references the `GEM_VERSION` in only one place within the application.  Since everything is written in Ruby, you would be able to `require` a configuration file that contains the version as a variable and use that. Perhaps it would also be helpful to include a task in your `Rakefile` called `:increment`, which updates your gem version by incrementing the last number (moving `0.0.0` to `0.0.1` automatically).

## Wrapping Up

Thanks for reading. I hope this article will help you get started writing your first Ruby gem, so that you can contribute to the large and impressive open-source Ruby community. Best of luck!
