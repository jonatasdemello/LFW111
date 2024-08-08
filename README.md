# LFW111

LFW111 - The Linux Foundation's - Introduction to Node.js Course

From service-mocking, rapid-prototyping and real-time applications to Command Line Interfaces, and ecosystem utilities. This course provides a gentle introduction to Node.js, which is a JavaScript runtime. It will allow you to discover ways it can help you in everyday computing scenarios.




Source:

https://trainingportal.linuxfoundation.org/learn/course/introduction-to-nodejs-lfw111x/going-real-time/introduction

https://trainingportal.linuxfoundation.org/courses/introduction-to-nodejs-lfw111x

https://www.edx.org/course/introduction-to-nodejs-2

Course Class Forum:

https://forum.linuxfoundation.org/categories/lfw111-class-forum


## Code

Check different GitHub branches for each chapter's code.

- main: code from "03. Service Mocking"


## Setting Up

Install Node following your OS (Windows, macOS, or Linux) instructions.

https://nodejs.org/en/download/package-manager/current


### Installing Node.js using FNM

Using a Node version manager called fnm (Fast Node Manager).

https://github.com/Schniz/fnm

Install fnm:

`$ curl -fsSL ht‌tps://fnm.vercel.app/install | bash`

After the installation, verify that fnm is working correctly by running the following command:

`$ fnm --version`

Add it to the path:

`$ export PATH="$HOME/.local/share/fnm:$PATH"`

With the version manager successfully installed, let's proceed to install the specific Node version we'll be using for this course:

`$ fnm install --lts`

This command will install the latest LTS (Long-Term Support) version of Node.


To install the latest available version of Node:

`$ fnm install --latest`

To verify that Node is installed and check its version:

`$ node -v`

Add .nvmrc file

To use a specific Node.js version for your project, create a .nvmrc file in the root of your project directory. This file informs Node.js and the installed package manager on your system to utilize the specified Node version mentioned in the .nvmrc file.

Create a new file and simply write `v18.16.0` in the .nvmrc file.
To install and set that specific Node version for your project:

`$ fnm use --version-file-strategy local`

check

`$ node -v`
