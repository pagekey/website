---
title: "≤90s: Install Selenium for Python on Ubuntu"
date: "2020-03-25"
tags: [lte-90-sec]
---

In this video, we learn how to set up Selenium in 90 seconds or less! Made using Ubuntu on Windows (WSL). You may need to start an Xming server if you use this method (I did).

<!--truncate-->

<iframe className="youtube-video-player" src="https://www.youtube.com/embed/MTarw_BUR-M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Steps

1. Install pacakges.

```bash
sudo apt update && sudo apt install python3 python3-pip firefox
```

2. Download `geckodriver`.

```bash
wget https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-linux64.tar.gz
```

3. Untar `geckodriver`.

```bash
tar xvf geckodriver-v0.26.0-linux64.tar.gz
```

4. Copy `geckodriver` into a location in your system `PATH`.

Edit: `/usr/local/lib` may be more appropriate than `/usr/lib` because `/usr/local/lib` is typically the place for user-installed software (whereas `/usr/lib` is for the package manager). Use whichever you prefer, but if you decide to use `/usr/local/lib`, make sure that it is in your `$PATH` environment variable.

```bash
sudo cp geckodriver /usr/lib
```

5. Install the `selenium` Python package.

```bash
pip3 install selenium
```

6. Edit `verify.py` and make sure Selenium is working.

```bash
vi verify.py
```

```python
#!/usr/bin/env python
from selenium import webdriver
browser = webdriver.Firefox() 
browser.get('http://www.google.com/')
```

7. Run the test script.

```bash
python verify.py
```

8. Try writing a unit test with Selenium.

```bash
vi test_selenium.py
```

```python
from selenium import webdriver

class TestGoogle(unittest.TestCase):
  def setUp(self):
    self.browser = webdriver.FireFox()
  def test_title(self): 
    self.browser.get('http://www.google.com/') 
    self.assertIn('Google', self.browser.title)
  def tearDown(self):
    self.browser.close()

if __name__ == '__main__':
  unittest.main()
```

9. Run your test.

```bash
python test_selenium.py
```

Need Python? We have a tutorial for that, too! Install Python in 90 seconds or less [on Windows](/blog/lte-90-sec/install-python-windows) or [on Ubuntu](/blog/lte-90-sec/install-python-ubuntu).