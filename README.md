#GeXxJS Javascript dialect

GeXx.js The New Javascript dialect/language, the idea is to transform any javascript code into **valid** javascript code based of only 8 possible chars:

    Possible_Chars = [ "+", "!", "[", "]", "{", "}", "(", ")" ]

The main idea is that you can get 0 from +[] and 1 from +!+[]
After that you can get string integers just from []+(+!+[]) === "1"
Ok now we have powerfull stuff but we still can't do much, but because ([]+{}) equals to "[object Object]"
then ([]+{})[+!+[]+!+[]] === "b" because it is the second(index) element of that "[object Object]" string

**Awesome!**
We can now get `[ "[", "o", "b", "j", "e", "c", "t", " ", "O", "b", "j", "e", "c", "t", "]" ]`
.
.
.
( After a lot of hacking the way up to the primal Object, we can run **any string as JS code** thus we can do EVERYTHING! )


##Example

If you want to test it out you will need to have node.js on your machine. Then insert javascript code into **./IN.dat** and run **!+([{}]).js** (true.js) :

    $ node "!+([{}]).js"

after that you will get new file in **./build/program.dat** that will contain JS code written in GeXxJS dialect, you can open it and enjoy the futuristic art.

to test it out just run;

    $ node ./build/program.dat

or include it in any html

```
<script type="text/javascript" src="./build/program.dat"></script>
```

##Todo

 - Make node's require() work, so that node modules can be easily transformed.
 - Refactor the code so it is more readable.
 - ~~Solve stack problems with Chrome and Node (v8) when running big GeXxJS files.~~

##Fun facts

 - Currently without optimization, jQuery 1.12.4 is 10.5 MB (11,097,274 bytes).

##Donations

If you like the madness and this project, you can donate to the author.
BTC: 18JJYabx4nqRpTXwFujdbFZKRh4rWWYKBF

#Licence
```
/*-
 * Copyright (c) 2016 Gordan Nekić
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 */
```